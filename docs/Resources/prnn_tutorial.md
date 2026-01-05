# Predictive RNNs

There are some extra steps in managing the requirements needed for the [Predictive RNN](https://github.com/LevensteinLab/pRNN) project. This guide should help you get everything set up on Misha.

1. Ensure you have an account on Misha, and log on. Make sure to allocate an interactive session (e.g. `salloc -t 2:00:00`)! 
    1. Make sure you've also set up SSH cloning from the cluster, because you'll need to clone repositories into your storage. We're using SSH clone links from here out.
    2. See the page on HPCs for more information on this.
2. Clone the `pRNN` repository into your `project` folder (`git clone git@github.com:LevensteinLab/pRNN.git`).
3. In your `HOME` directory (accessible by typing `cd ~`):
    1. Clone Dan's fork of gym-minigrid (`git clone git@github.com:dlevenstein/gym-minigrid.git gym-minigrid-dan-fork`).
    2. Also, clone the Farama Foundation version of minigrid. This is the most up-to-date version. (`git@github.com:Farama-Foundation/Minigrid.git`) 
4. Create a conda environment (in `HOME`) with Python 3.9.
    1. Misha doesn't come with Python 3.9 out of the box, and we need this version for later dependencies.
    2. Type `module load miniconda` to ensure conda is loaded for use.
    3. Run `conda create -n base39 python=3.9` to make an environment called `base39` with python 3.9 installed.
    4. Activate it (`conda activate base39`).
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



    
