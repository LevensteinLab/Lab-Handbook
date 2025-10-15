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

### Reference:
* [Introduction to HPC Clusters (YouTube Video)](https://www.youtube.com/watch?v=SaiXaC0jRjE&t=2s) (1:16 hr workshop video going over SLURM and how to log-in)
* [Getting Started page](https://docs.ycrc.yale.edu/clusters-at-yale/)
* [Documentation Page](https://docs.ycrc.yale.edu). Submit help requests or attend drop-in office hours (via Zoom) on **Wednesdays at 11am-12pm**
* Check out info on all clusters offered by the [YCRC](https://docs.ycrc.yale.edu/clusters/). They're named after famous academics.
* Any potential system outages can be checked [here](https://research.computing.yale.edu/system-status).
* [Common SLURM commands](https://docs.ycrc.yale.edu/clusters-at-yale/job-scheduling/) for interacting with jobs and the scheduler
* [YCRC HPC Policies](https://research.computing.yale.edu/computing-resources/hpc-policies) (*make sure to read this before requesting an account*)
