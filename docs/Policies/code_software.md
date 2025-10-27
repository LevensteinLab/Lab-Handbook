# Code and software practices
Maintaining good code is essential to the efficient functioning of the lab. Best software practices mandate that the code is well-documented, commented, and modular. As code may be shared within our lab (and outside), these guidlines ensure that the code is understandable and usable quickly. There are plenty of great resources online regarding how to follow these practices.

1. [Good Research Code Handbook](https://goodresearch.dev/index.html)

Here's how we may format our code as a lab:

### Repository Types

1. **Project** (“Lab Notebook”): A repository for managing the day-to-day progress of a research project — analyses in progress, exploratory modeling, notes, and experiment logs. A sample "cookie cutter" project repository can be found at (**TODO: fill out**)
* *Ownership*: You (the project lead).
* *Visibility*: Private within the lab.
* *Goal*: Document work and enable collaboration and reproducibility within the team.


2. **Package**: In the course of a project, you’ll likely develop something reusable — e.g., a model, simulation tool, or analysis pipeline. A package is a cleaned-up, documented, and versioned version of that tool, designed so others (future lab members and the broader community) can easily use and extend it.
* *Ownership*: Jointly owned by you and the lab organization (e.g., under the lab’s GitHub org).
* *When to create*: As a project moves from exploration → exploitation, work with Viggy to create and maintain a package repository.
* *Best practices*: Use semantic versioning and proper documentation (README, examples, tests, CI).


3. **Publication**: A repository for reproducing all figures and analyses in a specific paper.
* *Ownership*: The lab organization (since publications represent lab outputs).
* *When to create*: As you prepare to submit a manuscript, work with Viggy to set up this repository.
* *Structure*: Should depend on the relevant package (don’t reimplement analysis code). Pin specific package versions (e.g., via requirements.txt, pyproject.toml, or git submodules) to ensure reproducibility. Include figure-generation scripts, processed data, and notebooks.

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
VS Code is a great IDE because it's open source (unlike e.g. PyCharm), highly customizable via extensions, and has great remote development support (which is important when working with the cluster). You can download it [here](https://code.visualstudio.com/Download). If you are unfamiliar with VS Code/IDEs in general, try a tutorial, such as [this one](https://code.visualstudio.com/docs/getstarted/getting-started). In particular, you should:
1. Link VS Code with your GitHub account
2. Open a repository, such as `Lab-Handbook`
3. Try out the terminal (e.g. try `echo $SHELL` to see which shell your computer runs by default)
4. Install the Python extension
5. Create an environment
6. Use the debugger. You can paste the script below into a `.py` file to try it out!

```
# debug_me.py
# A tiny script with an intentional bug to practice debugging in VS Code.

# First, run the script normally to see the error. Then, set a breakpoint on the line 
# with the division operation and run the debugger to inspect variables.

def divide_numbers(a, b):
    result = a / b
    return result

def main():
    numbers = [(10, 2), (5, 0), (8, 4)]
    total = 0
    for x, y in numbers:
        print(f"Dividing {x} by {y}")
        total += divide_numbers(x, y)
            
    print("Average:", total / len(numbers))
        
if __name__ == "__main__":
    main()
```