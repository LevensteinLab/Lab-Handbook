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

- Use `git` often, often more than you think you should. See the [basic GitHub tutorial](https://levensteinlab.github.io/Lab-Handbook/Resources/basic_github/) for additional information.
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

### Claude Code
The lab has a [Claude Teams](https://levensteinlab.github.io/Lab-Handbook/Resources/claude_teams/) account. We're all still figuring out together how to use this quickly-changing tool to do quality research, but one thing it can be good at is helping maintain code organization and quality. This section will need to be updated over the next few months as the lab develops our workflows and practices around Claude. Please explore how you can best use these tools, and discuss with other members of the lab.

You can improve your experience of using Claude Code (CC) by implementing skills and subagents, both of which are tools to align your agent with your exact needs. Skills are protocols that get loaded into your agent context window. For example, making a skill called "/summarize" to brief you on the status of your currently running Misha jobs. Subagents are *separate* agents with their own context window, and may be more helpful if you would like to complete a side task without clogging the main context window. An example is designing a "referree" agent to monitor your dialogue with the main agent and ensure you're not relinquishing too much intellectual control. 

Skills and subagents must be formatted correctly in your project repo, particularly to work on Misha. Skills must have YAML frontmatter and be organized like the following: `.claude/skills/SKILL_NAME_HERE/SKILL.md`, while subagents are organized like this: `.claude/agents/AGENT_NAME_HERE.md`. 

Here are some additional resources:

- [Anthropic's guide to claude skills](https://code.claude.com/docs/en/skills)
- [Anthropic's guide to claude subagents](https://code.claude.com/docs/en/sub-agents)
- [Viggy's Repository of Skills/Agents](https://github.com/vviggyy/chars)

