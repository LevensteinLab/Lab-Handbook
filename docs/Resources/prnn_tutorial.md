# Predictive RNNs

There are some extra steps in managing the requirements needed for the [Predictive RNN](https://github.com/LevensteinLab/pRNN) project. This guide should help you get everything set up on Misha.

1. Ensure you have an account on Misha, and log on. Make sure to allocate an interactive session (e.g. `salloc -t 2:00:00`)! 
    1. Make sure you've also set up SSH cloning from the cluster, because you'll need to clone repositories into your storage. We're using SSH clone links from here out.
    2. See the page on HPCs for more information on this.
2. Clone the `pRNN` repository into your `project` folder (`git clone git@github.com:LevensteinLab/pRNN.git`), and 👁️watch the repository so you can be notified of any updates.
3. In your `HOME` directory (accessible by typing `cd ~`):
    1. Clone Dan's fork of gym-minigrid (`git clone git@github.com:dlevenstein/gym-minigrid.git gym-minigrid-dan-fork`).
    2. Also, clone the Farama Foundation version of minigrid. This is the most up-to-date version. (`git@github.com:Farama-Foundation/Minigrid.git`) 
4. Create a conda environment (in `HOME`) with Python 3.9.
    1. Misha doesn't come with Python 3.9 out of the box, and we need this version for later dependencies.
    2. Type `module load miniconda` to ensure conda is loaded for use.
    3. Run `conda create -n base39 python=3.9` to make an environment called `base39` with python 3.9 installed.
    4. Activate it (`conda activate base39`).
<<<<<<< HEAD
5. Now, we need to populate our environment with the correct packages. Some of them depend on an older version of pip, so it's important to do the steps in order. Run the following commands:
    1. `pip install "pip<24.1" setuptools==59.5.0 wheel=0.37.0`
    2. `pip install gym==0.21.0 --no-binary gym` 
    3. `pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118 --no-cache-dir`
6. We'll also need to install the external repositories from step 3 into environment.
    1. `pip3 install -e ~/gym-minigrid-dan-fork`
    2. `pip3 install -e ~/Minigrid`
7. Lastly, install the rest of the packages, which can be done in one step with the provided `requirements.txt`.
    1. `pip install -r requirements.txt`
8. Make sure that the jupyter notebook kernel can recognize this environment.
    1. Run `ipython kernel install --user --name=prnn-kernel`. To allow jupyter notebooks to pick it up.
    2. If you run `jupyter kernelspec list`, you should see `prnn-kernel` as an option.
    3. You may need to restart your VSCode or kernel here. 
        1. If you're on VSCode, you can do this fast with `Cmd + Shift + P` to open the Command Palette and then `Developer: Reload Window`.
9. You should be able to run `tutorial.ipynb` now. This contains an example training run.
=======
5. Make the `PredictiveReplay` environment. This is done by running `make_venv.sh`, which is in the pRNN repo.
    1. First comment out/change the following lines. This will ensure that the correct environments remain active.
        1. `module --force purge`
        2. `module load python/3.9`
        3. `virtualenv $VENV_DIR` changed to `virtualenv -p ~/.conda/envs/base39/bin/python $VENV_DIR` (this ensures we're making the virtualenv with python 3.9)
        4. Add `pip install virtualenv` before the line in step 3 (line 18).
        5. In line 49, change `#pip3 install gym-minigrid` to `pip3 install -e ../../gym-minigrid-dan-fork` (this ensure we're using Dan's forked version)
    2. Run `bash make_venv.sh` to create the environment.
6. Load the environment. This is done by loading `load_venv.sh`
    1. Comment out the following lines again. This will prevent the underlying conda environment from being purged.
        1. `module --force purge`
        2. `module load python/3.9`
    2. Run `bash load_venv.sh`
7. Activate the `venv` environment. Run `source ~/venvs/PredictiveReplay_39/bin/activate`. by now you should have two parenthesized environment names by each terminal prompt, like this `(PredictiveReplay_39) (base39) [yourNetID@blahblah.misha]$ `. 
8. Double check that `gym-minigrid` is installed correctly.
    1. Run `pip list | grep minigrid`.
    2. If nothing shows up, it didn't install correctly. Run `cd ~/gym-minigrid-dan-fork`, then `pip3 install -e .` to install it into the environment.
9. In your terminal (with both environments activated), run:
    1. `pip install "pip<24.1"`
    2. `pip install setuptools==59.5.0 wheel==0.37.0`
    3. `pip3 install gym==0.21.0 --no-binary :all:`
10. Rerun `bash make_venv.sh` then `bash load_venv.sh`.
    1. *Sidebar from Viggy: To be completely honest, I have no idea why steps 9 & 10 work. I spent many hours trying to fix a random numpy error that pops up in the `tutorial.ipynb`, but doing steps 9 and 10 fixes it, despite not reinstalling a different version of numpy. My hypothesis is that the downgraded version of `pip`, `setuptools`, and `wheel` help us install this version of `gym`, and when we rerun `make_venv.sh`, we can reinstall the correct version of numpy (`1.22.4` instead of `1.26.x` that it likes to do). It could be an issue with the order in which we install the packages at first. If you continue to have issues, try steps 9 and 10 again, and "turning \[your kernel\] on and off again". Or ask me, and we can figure it out. One day, I will figure out how to do this with fewer steps.*
11. Finally, make sure that the jupyter notebook kernel can recognize this environment.
    1. Run `pip install ipykernel` (this will install it inside *both* environments).
    2. Run `ipython kernel install --user --name=prnn-kernel`. To allow jupyter notebooks to pick it up.
    3. If you run `jupyter kernelspec list`, you should see `prnn-kernel` as an option.
    4. You may need to restart your VSCode or kernel here.
12. You should be able to run `tutorial.ipynb` now. This contains a single run setting up some environments.
    1. You may get a `SyntaxError`. This is because there's a small typo to fix. If you go to line 62 in `prnn > utils > Shell.py`, you may see an extra `):`. Delete that.
>>>>>>> 75cf8f2 (Added missing equal sign in pip install command for wheel)



    
