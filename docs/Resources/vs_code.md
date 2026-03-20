To get started with VS Code try a tutorial, such as [this one](https://code.visualstudio.com/docs/getstarted/getting-started). The program itself will also give you some tips.

Some basic tips to get started:
1. Link VS Code with your GitHub account
2. Open a repository, such as `Lab-Handbook`
3. Try out the terminal (e.g. try `echo $SHELL` to see which shell your computer runs by default)
4. Install the Python extension
5. Create an environment
6. Use the debugger. You can copy `Resources/debug_me.py` to try it out! If you want, you can create a new project repo that you will also use for the pytorch tutorial as part of your first project.

To use VS Code with the cluster off campus, you will need to use a VPN (see the [HPC guide](https://levensteinlab.github.io/Lab-Handbook/Resources/hpc/) for more information on using the cluster and [VPN setup](https://levensteinlab.github.io/Lab-Handbook/Resources/vpn/) to configure the VPN). To connect VS Code to the Misha cluster:
1. Go to the [Misha OnDemand website](https://ood-misha.ycrc.yale.edu/).
2. Start a VS Code Proxy from the Interactive Apps section.
    - Configure the proxy according to your needs (e.g. time, memory, number of cores, and type of partition)
    - Launch the session. It may take a few minutes depending on how busy the cluster is
    - If it's your first time using the VS Code proxy, follow the instructions listed to configure your `~/.ssh/config` file
3. Once the proxy is running, open the Command Palette in VS Code (Mac: Cmd + Shift + P; Windows: Ctrl + Shift + P) and type `Remote-SSH: Connect to Host...`, then choose `vscode-server`.
4. Complete the 2-factor authentication using Duo or a phone call (do this quickly or it will time out). If successful you should see `SSH: vscode-server` on the bottom left corner.

Some more useful information:
* If you're troubleshooting training networks or doing something similarly intensive, it can be useful to start a VSCode Proxy session on the  `gpu_devel` partition. This allows you to use a GPU with some limits on processing power: e.g. you can use up to 16 GiB of memory per CPU core/node and 1 GPU per node for up to 6 hours. This type of partition is great for troubleshooting because you won't get dinged for using the partition inefficiently (which does happen e.g. with the `gpu` partition).