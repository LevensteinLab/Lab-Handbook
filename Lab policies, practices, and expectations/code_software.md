# Code and software practices
Maintaining good code is essential to the efficient functioning of the lab. Best software practices mandate that the code is well-documented, commented, and modular. As code may be shared within our lab (and outside), these guidlines ensure that the code is understandable and usable quickly. There are plenty of great resources online regarding how to follow these practices.

1. [Good Research Code Handbook](https://goodresearch.dev/index.html)

Here's how we may format our code as a lab:

Repository Types

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