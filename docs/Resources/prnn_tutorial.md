# Predictive RNNs

There are some extra steps in managing the requirements needed for the [Predictive RNN](https://github.com/LevensteinLab/pRNN) project. This guide should help you get everything set up on Misha.

1. Ensure you have an account on Misha, and log on. Make sure to allocate an interactive session (e.g. `salloc -t 2:00:00`)! 
    1. Make sure you've also set up SSH cloning from the cluster, because you'll need to clone repositories into your storage. We're using SSH clone links from here out.
    2. See the page on HPCs for more information on this.
2. Clone the `pRNN` package into your `project` folder. This is accessible by typing `cd ~/../../project/levenstein/YOUR_NETID/`. This brings you to the `/gpfs/radev/project/levenstein/YOUR_NETID`.
    1. `git clone git@github.com:LevensteinLab/pRNN.git`
    2. 👁️ Watch the repository so you can be notified of any updates!
4. Also clone these external repositories into that project directory:
    1. Dan's fork of gym-minigrid (`git clone git@github.com:dlevenstein/gym-minigrid.git gym-minigrid-dan-fork`).
    2. Farama Foundation version of minigrid. This is the most up-to-date version. (`git clone git@github.com:Farama-Foundation/Minigrid.git`)
5. In the same folder, create your own separate repo for your project work. We recommend using a template such as Patrick Mineault's `true-neutral-cookiecutter` to model the repository after.
    1. `pip install cookiecutter`
    2. `cookiecutter gh:patrickmineault/true-neutral-cookiecutter`
    3. It will prompt you for input regarding the name of the repository.
6. Create a conda environment with Python 3.9.
    1. Misha doesn't come with Python 3.9 out of the box, and we need this version for later dependencies.
    2. Type `module load miniconda` to ensure conda is loaded for use.
    3. Run `conda create -n prnn_tutorial python=3.9` to make an environment called `prnn_tutorial` with python 3.9 installed.
    4. Activate it (`conda activate prnn_tutorial`).
7. Now, we need to populate our environment with the correct packages. Some of them depend on an older version of pip, so it's important to do the steps in order. Run the following commands:
    1. `pip install "pip<24.1" setuptools==59.5.0 wheel==0.37.0`
    2. `pip install gym==0.21.0 --no-binary gym` 
    3. `pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118 --no-cache-dir`
8. We'll also need to install the external repositories from step 3 into environment.
    1. `pip3 install -e ~/project/gym-minigrid-dan-fork`
    2. `pip3 install -e ~/project/Minigrid`
9. Install the `pRNN` package itself into the environment.
    1. Navigate to the repository, then `pip install -e .`
8. Make sure that the jupyter notebook kernel can recognize this environment.
    1. `pip install ipykernel` 
    2. Run `ipython kernel install --user --name=prnn_tutorial`. To allow jupyter notebooks to pick it up.
    3. If you run `jupyter kernelspec list`, you should see `prnn_tutorial` as an option.
    4. You may need to restart your VSCode or kernel here. 
        1. If you're on VSCode, you can do this fast with `Cmd + Shift + P` to open the Command Palette and then `Developer: Reload Window`.
9. Your environment should be all set to run example code provided with the package, or to start going through the tutorials. The quickstart tutorial can be found [here](https://github.com/LevensteinLab/pRNN/blob/main/docs/quickstart.rst). This contains an example training run.
