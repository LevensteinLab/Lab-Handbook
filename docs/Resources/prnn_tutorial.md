# Predictive RNNs

There are some extra steps in managing the requirements needed for the [Predictive RNN](https://github.com/LevensteinLab/pRNN) project. This guide should help you get everything set up on Misha.

1. Ensure you have an account on Misha, and log on. Make sure to allocate an interactive session (e.g. `salloc -t 2:00:00`)! 
    1. Make sure you've also set up SSH cloning from the cluster, because you'll need to clone repositories into your storage. We're using SSH clone links from here out.
    2. See the page on HPCs for more information on this.
2. Clone the `pRNN` repository into your `project` folder (`git clone git@github.com:LevensteinLab/pRNN.git`), and 👁️watch the repository so you can be notified of any updates.
3. In your `HOME` directory (accessible by typing `cd ~`):
    1. Make a folder for the virtual enviroment `mkdir venvs`.
    2. Clone Dan's fork of gym-minigrid (`git clone git@github.com:dlevenstein/gym-minigrid.git gym-minigrid-dan-fork`).
4. Create a conda environment with Python 3.9.
    1. Misha doesn't come with Python 3.9 out of the box, and we need this version for later dependencies.
    2. Type `module load miniconda` to ensure conda is loaded for use.
    3. Run `conda create -n base39 python=3.9` to make an environment called `base39` with python 3.9 installed.
    4. Activate it (`conda activate base39`).
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



    
