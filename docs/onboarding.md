*This page delineates the onboarding processes. Please try to follow it step by step. If/when you find steps that are out of date, that are poorly described, or that you think should be added to the process, please update the Lab Handbook. You should have made at least one change by the time you complete onboarding (if you don’t know how to do that, you’ll learn!), and please follow this practice whenever using the lab handbook.*

**Important Emails to Look For**

- Appointment Confirmation, from AutomationManager@brassring.com
    - Outlines position, job responsibilities, compensation, funding sources, term length.
- Welcome E-mail, from Jennifer Coughlin
    - Access to NetID, your Yale email, and Workday for trainings/benefits

**New to Yale?**

- Get Yale NetID/email (note: this will take about 24 hours)
    - Your NetID is a unique identifier for you in the system, and can also be used to log into the private *YaleSecure* WiFi network.
    - Emails typically follow `first.last@yale.edu`; you may need to wait for 20 minutes or more after your netID activation to access your email.
- Set up multifactor authentication (MFA)
    - Usually done through Duo, which you will need to accesss your email.
- Get Yale ID card
    - [Multiple offices](https://idcenter.yale.edu/id-center-hours) are available to get an ID card printed. Note the hours!
        - Yale Central ID Center, 57 Lock St (**M-F, 8am-4pm**), walk-in visits accepted but appointments are encouraged.
        - Medical School ID Center, 333 Cedar St (**M-Th, 8am-12pm**) for walk-ins
    - Get 100 College/WTI card access (note: it will take about 24 hours for your card to gain access)
        - Note that a Yale ID card does NOT automatically provide access to 100 College/WTI. You must request access seaparately; ideally email the WTI facilities manager, [Matt Milano](mailto:matthew.milano@yale.edu).
- Familiarize yourself with campus, and how to get to 100 College Institute
    - Multiple areas of campus (Old Campus, Science Hill, etc)
    - The Wu Tsai Institute is located on the 11th floor at 100 College Street. The building is owned by Alexion Pharmaceuticals (owned by AstraZeneca)
    - We are located in the Center for Neurocomputation and Machine Intelligence, to the right side if you are facing towards the "Yale Wu Tsai Institute" sign.
- Sign up for an orientation. These are available for both Postdocs and Postgrads.
- Workday stuff
    - ***Complete your I-9***. It is a federal requirement that the I-9 form is submitted by three business days of your start date.
        - Bring the [right documents](https://your.yale.edu/working-at-yale/new-employee-information/important-actions-to-take/submitting-your-i-9-form)!
        - The main office where you can get an appointment is 221 Whitney Avenue 
    - Sign up for Health insurance and please see the lab handbook section on [health, wellness, and work-life balance](https://levensteinlab.github.io/Lab-Handbook/Policies/health_wellness/)
    - Complete the required training courses with [Workday Learning](https://www.myworkday.com/yale/learning/)
        - Trainings may take multiple hours, and you may want to do this over multiple days.


**Your first day**

- [Join the lab slack](https://join.slack.com/t/levensteinlab/shared_invite/zt-3coybbilg-4v5vsK2SFpaGU~NH5QD1lA)
- Familiarize yourself with Lab policies, practices, and expectations. You don’t need to read the whole thing, but do read over the expectations for your position in the lab and [working hours, remote working, and vacation](https://levensteinlab.github.io/Lab-Handbook/Policies/hours_remote_vacation/)
- Schedule your regular [1-on-1 meeting](https://levensteinlab.github.io/Lab-Handbook/Policies/meetings/) with Dan.
- Send Dan your headshot and bio for the lab website.
- Join [Levenstein Lab github organization](https://github.com/LevensteinLab) - send Dan your github username and he'll add you
    - [Basic Github tutorial](https://levensteinlab.github.io/Lab-Handbook/Resources/basic_github/) - make your github account, learn to make a PR.
    - Follow the lab handbook repository so you get notified of future updates to the handbook, and have the opportunity to read and discuss them
    - Your first PR: [Update the lab handbook](https://github.com/LevensteinLab/Lab-Handbook) to improve something that was unclear or missing up until now. Add your contact information to [contact.md](https://levensteinlab.github.io/Lab-Handbook/contact/)
- Join [Mailing lists/groups at Yale](https://levensteinlab.github.io/Lab-Handbook/Resources/mailing_lists/)

**First readings (first week)**:

Discuss with Dan your interests and potential first projects. In addition to any reading he suggests, take a look at [Recommended Reading](https://levensteinlab.github.io/Lab-Handbook/Resources/recommended_reading/). If you’re new to working with neural networks, or to neuroAI, I highly recommend these as places to start:

- [Artificial Neural Networks for Neuroscientists: A Primer](https://www.sciencedirect.com/science/article/pii/S0896627320307054)
- [A deep learning framework for neuroscience](https://www.nature.com/articles/s41593-019-0520-2) 
- [The neuroconnectionist research programme](https://www.nature.com/articles/s41583-023-00705-w) 

**Getting started (1-2 Weeks)**:

- Read about the [Lab Code and Software Practices](https://levensteinlab.github.io/Lab-Handbook/Policies/code_software/), and the introduction of the [good research code handbook](https://goodresearch.dev/index.html). We don’t follow this religiously, but it’s a good place to start. Something to remember: the main outputs of your work in the lab will be *ideas*, *figures*, and *code*. Of those, your code is unique - it's your primary research tool and its the best way for other people (including your future self) to be able reprodue and build on your work. Thus, it behooves you to invest some energy in writing good code. 
    - If you don't have a preferred IDE, Get VS Code and do the VS code tutorial
    - Follow either the ANN path or the data analysis path below
 
    **ANNs path**
    
    - Your first project: PyTorch Tutorials (https://docs.pytorch.org/tutorials/, https://docs.pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html)
        - Set up a project repository for the tutorial
        - By the end of this, you should have trained a multi-layer perceptron (MLP) to solve fMNIST
        - Next, modify the network in some way you find interesting.
    - Get set up on the [misha compute cluster and learn how to use it](https://levensteinlab.github.io/Lab-Handbook/Resources/hpc/).
    - Your second project: [pRNN Tutorials](https://levensteinlab.github.io/Lab-Handbook/Resources/prnn_tutorial/)
        - By the end of this, you should have trained a basic predictive RNN in a gridworld environment, and analyzed its spatial tuning properties
    - Next, modify or use the pRNN network in some way you find interesting. This could involve a new environment or behavioral policy, or changes to the network architecture, loss, or learning rule. Feel free to discuss some ideas with Dan.
     
    **Data analysis path**:
    
    - Your first project: discuss with Dan the data you'd like to work with and choose your own adventure ;)... this path is still under construction. Consider working with [pynapple](https://pynapple.org/index.html), which is a good package for working with neural timeseries data and has some tutorials.

