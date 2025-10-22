Working on code collaboratively can be a challenge. Managing multiple versions with different functionality can be especially difficult. Version control software allows us to manage collaborative software development by keeping track of different versions and who contributed to what. We will use Git, the most popular framework for version control, and GitHub, a site used to host and manage remote copies of your software. 

It's important that you become familiar with how to use Git, as it will allow you to collaborate with your colleagues and contribute to meaningful analysis. You should be familiar with:

- Repositories
- the `add`, `commit`, `push` commands 
- the `status` command 
- the difference between `branches` and `forks`
- `pull requests` and `issues`
- how Github integrates with repositories and the command line

Here are some basic tutorials you may want to follow:

- [GitHub Hello World tutorial](https://docs.github.com/en/get-started/start-your-journey/hello-world) *(highly recommended; concise but also text-heavy)*
- [GitHub Desktop Tutorial](https://docs.github.com/en/desktop) *helpful to get started with a graphical user interface (GUI) rather than command line, if you're more comfortable with that. There is also a graphical interface on VSCode.*
- [Learn Git Branching (JS Applet)](https://learngitbranching.js.org/) *(optional; interactive and visual but perhaps too deep)*

This `Lab-Handbook` allows you to make your own changes and push them to be integrated into the content. To do this, clone the repository to your local machine, make your changes, then add, commit and push:

1. `git clone https://github.com/LevensteinLab/Lab-Handbook.git` 
2. `git checkout -b BRANCH_NAME` (this creates a new branch called `BRANCH_NAME` and switches to it)
3. Make changes
4. `git add .` (the dot is code for "everything in this folder")
5. `git commit -m MESSAGE` (replace the message with a one-sentence description of what you changed)
6. `git push origin BRANCH_NAME`
7. Navigate to the `Lab-Handbook` GitHub repository
8. You may see a yellow notification bar that indicates your branch is "ahead" of the main repository.
9. Submit a pull request to integrate the changes into the final repository
10. Dan will approve it
