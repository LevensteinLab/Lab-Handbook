# Getting access to the Misha HPC

As part of computational research, we will need to dispatch jobs to high-performance computing (HPC) clusters. Access to these clusters gives us stronger power for computationally-intensive tasks like training models. Running the same process on your local machine may take *much* more time.

To get started visit this page for [some info](https://docs.ycrc.yale.edu/clusters/misha/#access-the-cluster) about the HPC prepared by the Yale Center for Research Computing (YCRC) specifically for the Wu Tsai Institute.

### Instructions
1. Fill out the [form](https://docs.google.com/forms/d/e/1FAIpQLSfLghL1gSHRkIQj73zPzvLCJ0sojm9aUHZLQGBD_auD054gqA/viewform?usp=send_form) to access the cluster, noting Dan as the PI from which to get access. You should get access in ~48 hours. 
2. Receive email from `hpc@yale.edu` with your username and instructions on how to login.
3. Choose login method. 
    1. Access to Misha needs to be done through Secure Shell (SSH).
    2. Other clusters have a web interface for logging on (Bouchet, Grace, McCleary, and Milgram). Find the links for the platform, called Open OnDemand (OOD), [here](https://docs.ycrc.yale.edu/clusters-at-yale/access/ood/).
4. (*First time login only*) Generate your public and private ssh keys. These keys are used to authenticate you during the remote login (i.e. they tell the cluster that you're you.). Keep the private key a secret!
    1. Instructions on how to do this can be found [here](https://docs.ycrc.yale.edu/clusters-at-yale/access/ssh/).
    2. Note: the example in the documentation uses the *RSA* encryption scheme, but using the `ssh-keygen` command on Macs without any additional argument will use the *Ed25519* encryption scheme. The key still works and will be stored in something like `id_ed25519.pub`.
        1. *Sidebar from Viggy: If you're interested in math, I'd highly recommend reading up on RSA. The RSA public/private key method works beause it's easy to multiply two large prime numbers together, but extremely hard to factor that product back into those primes!*
5. (*First time login only*) Upload your *public* key to the [SSH Key Uploader](https://sshkeys.ycrc.yale.edu/cgi-bin/sshkeys.py). This allows the cluster to associate it with your netID, which you use to sign in.
6. Login to the cluster.
    1. Use the Terminal:
        1. Type `ssh YOUR_NET_ID@misha.ycrc.yale.edu`. It will prompt you for your passcode. 
        2. After you provide it, it will ask you choose a second authentication option. 
        3. Type `1` to authenticate via a DUO push notification.
    2. Use your IDE:
        1. Open VSCode, and click the blue button in the bottom left corner of the screen. It looks like two chevron arrows pointing to each other.
        2. Click SSH, and Add New SSH Host
        3. Type `ssh YOUR_NET_ID@misha.ycrc.yale.edu`
        4. If it asks you for a config file, select the one with the `.ssh/` path (often the first option). This tells VSCode where to look for your private key (which is still protected by your passcode).
        5. Enter your passcode when prompted.
        6. Type `1` to send a DUO push notification, and accept it.
7. Submit jobs!
8. Type `exit` to close the connection.


### About the HPC
1. Consists of multiple groups of computers called **nodes**.
    1. Login node is shared between all users; handles all user logins and is usually excluded from running actual code jobs
    2. Compute nodes which are the majority of all the computers in the HPC; where the tasks are performed
        1. Can run both *interactive* and *batch* jobs on compute notes. Interactive jobs are processes in which you can interactively run programs on the computer, useful for debugging and/or coding. Batch jobs are non-interactive jobs that are run by the node and returned back to you. These can be parallelized, and will also run regardless of whether you are logged in or not.
        2. You can have at most 4 interactive sessions at once.
    3. Transfer nodes; used for transferring files, accessed via `ssh transfer`
2. HPC has multiple "partitions", which are used for different purposes. There are also special use nodes.
    1. `devel` : default for interactive jobs
    2. `day` : default for batch jobs
    3. `week`: default for long jobs (>24 hours)
    4. `gpu`: nodes with GPU access
    4. `bigmem`: nodes for jobs with large RAM/memory requirements
    5. `mpi`: for highly-parallelized code
    6. `pi_NAME`: PI and lab specific nodes available for purchace from YCPC

### Cheat Sheet

* Interactive jobs:
    * `salloc` to submit interactive job. Flags:
        * `-p` or `--partition=` (default `devel`/interactive)
        * `-t` or `--time=` (DD-HH:MM:SS or DD-HH time limit)
        * `--mem-per-cpu=` (default 5gb per cpu)
    * `module load` to load common software
        * also `module list` to list available software
        * `module purge` to remove all currently loaded software

Example code:

```sh
salloc -t 1:00:00
module load miniconda
conda create -n env_name python=3.9 jupyter pandas
conda activate env_name
conda install pkg1 pkg2

module load miniconda 
conda activate env_name
```

* Batch jobs:
    * `sbatch` to submit batch job. Flags:
        * `-j` or `--job-name=` (job name)
        * `-o` or `--output=` (output file name)
        * `--mail-user` (email address to receive alerts about job completions, default: Yale address)
        * `--mail-type=ALL` (receive email notifs at beginning and end of job)
    * `squeue --me` (get status of all your submitted jobs)
    * `seff JOBID` (get job stats when done e.g. CPU usage, time run)
    * `scancel JOBID` (cancel job)
    * `htop -u NETID` (view all current processes under your name)

* Misc commands:
    * ` getquota` (see remaining storage)
    * `dsq` for large numbers of identical jobs

Example code:

```bash 
#!/bin/bash

#SBATCH -J example_job
#SBATCH -p dat
#SBATCH -t 12:00:00
#SBATCH --mail-type=ALL

module purge
module load miniconda
conda activate my_env

python my_python.py
```

### Example Use Case: Cloning Remote Repository
At first, attempting to clone a repository in the standard way (e.g. `git clone https://github.com/LevensteinLab/Lab-Handbook.git`) may not work. This is because GitHub doesn't know how to handle a request from a remote computer. You must first authenticate yourself. We can repeat the same process we used to authenticate ourselves for the cluster, but for GitHub, which offers the ability to add SSH keys.
1. While logged into the cluster, again run `ssh-keygen`. Click enter to accept the default directory for where the keys will be stored.
2. Choose a passphrase. You will need to remember this, as it provides access to your private key.
3. Navigate to that directory and open the public key. This may look something like:
    1. `cd /gpfs/radev/home/vv266/.ssh/` followed by 
    2. `cat id_ed25519.pub`
4. Copy that text and open your GitHub profile.
5. Navigate to **Settings** > **SSH and GPG keys** >  **New SSH key**. Then paste your public key into the box.
6. Return to the HPC and type `ssh -T git@github.com`. 
    1. After you type in your passphrase, you should see a message like `Hi vviggyy! You've successfully authenticated, but GitHub does not provide shell access.`
7. You should now be able to clone repositories into the HPC environment.
    1. When you want to do so, visit the repository website, click the green `<> Code` button, and tap "SSH" (NOT the HTTPS button!)
    2. Use this URL when cloning e.g. `git clone git@github.com:LevensteinLab/Lab-Handbook.git`
8. Set up a conda environment like above to run it!


### Reference:
* [Introduction to HPC Clusters (YouTube Video)](https://www.youtube.com/watch?v=SaiXaC0jRjE&t=2s) (1:16 hr workshop video going over SLURM and how to log-in)
* [Getting Started page](https://docs.ycrc.yale.edu/clusters-at-yale/)
* [Documentation Page](https://docs.ycrc.yale.edu). Submit help requests or attend drop-in office hours (via Zoom) on **Wednesdays at 11am-12pm**
* Check out info on all clusters offered by the [YCRC](https://docs.ycrc.yale.edu/clusters/). They're named after famous academics.
* Any potential system outages can be checked [here](https://research.computing.yale.edu/system-status).
* [Common SLURM commands](https://docs.ycrc.yale.edu/clusters-at-yale/job-scheduling/) for interacting with jobs and the scheduler
* [YCRC HPC Policies](https://research.computing.yale.edu/computing-resources/hpc-policies) (*make sure to read this before requesting an account*)
