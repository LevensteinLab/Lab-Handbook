# Code and software practices
Maintaining good code is essential to the efficient functioning of the lab. Best software practices mandate that the code is well-documented, commented, and modular. As code may be shared within our lab (and outside), these guidlines ensure that the code is understandable and usable quickly. There are plenty of great resources online regarding how to follow these practices.

1. [Good Research Code Handbook](https://goodresearch.dev/index.html)

Here's how we may format our code as a lab:

### Repository Types

1. **Project** (“Lab Notebook”): A repository for managing the day-to-day progress of a research project — analyses in progress, exploratory modeling, notes, and experiment logs. The [cookie cutter repository](https://github.com/LevensteinLab/pat-cookiecutter) (as described in the good research code handbook) is a good place to start, which will get you started with a file structure and environment. Each project should have its own repository.

2. **Package**: In the course of a project, you’ll likely develop something reusable — e.g., a model, simulation tool, or analysis pipeline. A package is a cleaned-up, documented, and versioned version of that tool, designed so others (future lab members and the broader community) can easily use and extend it. This repository should be jointly owned by you and the lab organization (e.g., under the lab’s GitHub org). As your project moves from an exploration to an exploitation phase, work with Viggy to create and maintain a package repository.

3. **Publication**: A repository for reproducing all figures and analyses in a specific paper. This repository is owned by the lab organization (since publications represent lab outputs). As you prepare to submit a manuscript, work with Viggy to set up this repository. The paper repository should depend on the relevant package (don’t reimplement analysis code) and should pin specific package versions (e.g., via requirements.txt, pyproject.toml, or git submodules) to ensure reproducibility. Include figure-generation scripts, processed data, and notebooks.

### Conventions
Patrick Mineault's code handbook above is a must-read before you start coding. It reviews the best ways to set up your project, to maintain clarity and cleanliness, to test your code, and to document your code as well. The handbook is the best way to learn these conventions, especially when it comes to efficiency and testing, which rely on great examples. However a few helpful tips to get you started in the right direction

- Use `git` often, often more than you think you should. See `Resources and How-Tos/basic_github.md` for additional information.
- Setup your repository correctly, from the beginning.
    - Mineault's base directory structure works really well to keep the inputs and outputs of your code separate:
        - `data` folder: raw input data
        - `docs` folder: documentation, kept separate for later publishing
        - `results` folder: code outputs, figures, tables, CSVs
        - `scripts` folder: scripts for analysis like `.ipynb` notebooks
        - `srcs` folder: reusable code that works at the base of all the scripts
        - `tests` folder: unit tests
    - This can be downloaded with the `true-neutral-cookiecutter`.
- Maintain your environments. Packages you import may have dependences on other packages with specific versions, or perhaps even specific versions of python. Installing all packages into one environment will make it extremely difficult to move the code to another computer or user (i.e. it's less *portable*).
    - We can use `conda` as a package manager and virtual environment manager for this.
    - `conda` can be installed via [miniconda](https://www.anaconda.com/docs/getting-started/miniconda/main), which is a lighter-weight version of the original Anaconda Distribution of packages/python. This will allow you to use `conda` to make virtual environments and manage packages.
    - Use a `.yml` file. These are special files that specify instructions on which packages comprise an environment. A different researcher using your code can automatically recreate your environment exactly as you have it by using this file, ensuring proper portability.
- Maintain good style.
    - This includes commenting, which should be done at the top of functions, classes, modules, files, etc. This helps both you and others understand code.
    - Pythonic code can be confusing sometimes; you'll need to make the tradeoff between clarity and brevity.
    - Download a [linter](https://docs.astral.sh/ruff/) (e.g. Ruff) to help you format your code.

### VS Code
VS Code is a great IDE because it's open source (unlike e.g. PyCharm), highly customizable via extensions, and has great remote development support (which is important when working with the cluster). You can download it [here](https://code.visualstudio.com/Download). If you are unfamiliar with VS Code/IDEs in general, see the [VS Code tutorial](https://levensteinlab.github.io/Lab-Handbook/Resources/vs_code) for more info on how to get started.
