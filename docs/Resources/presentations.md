## Presentations

Over the course of your time in the lab, you'll give a lot of presentations — lab meetings, conference talks, practice talks, 1-on-1 updates. Presenting is a skill, and like writing, it's one of the most important skills you'll develop. Your ideas are only as impactful as your ability to communicate them, and a good presentation doesn't just convey your results — it helps you *think* about your results.

A heads up: I care about this a lot, and I'll give you a lot of feedback on your presentations. That's a good thing. The goal is to help you become someone who can walk into any room and clearly explain what you're doing and why it matters.


### Lab Meeting Presentations

Your first opportunities to present any project will be in lab meeting. This is your chance to start to develop your story, bring the group up to speed on your project, get feedback, and work through challenges together. Here's what a lab meeting presentation should look like:

- **Start with the big picture question.** Give a general overview of the scientific *problem* that motivates your work - why is it interesting, what's the history and state of the field? Don't assume everyone remembers the details of your project and don't assume everyone knows the relevant literature around your project. Preparing this section will help you situate your work, don't skimp on it.
- **Narrow to your specific question.** What is the specific problem that, if your project is successful, will be solved? This is your project's contribution — the thing you're actually working on, in the context of the bigger picture you just laid out.
- **Show your methods.** How will you solve the problem, and why is it the right approach? Include figures that show your approach — the model architecture, the analysis pipeline, the experimental setup. We need to understand *how* you're doing something and *why* to evaluate *what* you found.
- **Remind us where you left off.** A brief summary of what you told us about last time you presented in lab meeting.
- **Walk us through new results.** This is the core of the presentation. Make sure you take the time to explain all plots — what are the axes? What are the data points? Part of lab meeting is the group discussing your plots and interpreting them together.
- **Include challenges you're facing.** Lab meeting isn't just a show-and-tell, it's a chance for us to help solve problems together. If something isn't working, or you're not sure what to do next, bring it up. That being said, don't just dump everything you tried on us.
- **End with what's next.** Where are you headed from here? What are your plans for the next few weeks? Let's think about next steps together.

One thing I want to emphasize: lab meeting is not a performance. It's a working meeting. You don't need to have a polished story with a clean narrative arc. You *do* need to communicate clearly enough that the rest of us can follow along and contribute.


### Slide Design

A few principles that will make your slides dramatically better:

**Slide titles should be the take-home message of the slide.** Not "Results" or "Background" — a declarative sentence that tells the audience what you want them to learn from this slide. If I were to read the sequence of your slide titles in a row, I should be able to come away knowing the message of your talk. A title like "SI vs representational distance" is the labels of the axes, not the title of the slide. Something like "Representational distance increases with sleep" is.

**One idea per slide.** Everything on the screen is something you're asking your audience to think about. If your slide has three different things on it, your audience is thinking about three things while you're talking about one of them. Be conscientious of your audience's attention span and working memory capacity. That being said, if you need three plots to communicate one idea, then they should all be on the same slide. Don't make us hold plots in working memory.


### Explaining Figures

This is the single most common thing that goes wrong in scientific presentations: someone throws up a figure and starts talking about the results without explaining what the audience is looking at. One technique for quantitative presentations is to **build up your plots on multiple overlays**:

1. Show just the x-axis — explain it
2. Add the y-axis — explain it
3. Add one data point — explain what it represents
4. Plot the rest of the data — now explain the result

This might feel slow, but your audience will thank you. They can't interpret your results if they don't understand the plot, and they almost certainly don't understand the plot as well as you do. Similarly, don't just show summary statistics, build to them. First show what a single "trial" looks like (or whatever the equivalent of a trial is in your case - a learning curve, a simulation, an example). Then show how the summary statistic is calculated from the trial. Then show the statistics over all data points.

More generally: **bring in elements as you talk about them.** Don't throw up a multi-panel figure and then narrate it — reveal each piece as you discuss it, so the audience knows exactly what to look at. If everything appears at once, they're reading ahead while you're still explaining panel A.

**Avoid jargon, describe results in plain terms first.** It's tempting to lean on jargon - e.g. calling something "consolidation" or "generalization" the moment you show it. But your audience will follow much better if you first describe what's actually happening in the data, and *then* connect it to the technical label. Treat jargon as a conclusion, not a shorthand.


### Mindset and Delivery

When presenting, your job is not to get through your slides. It's to make sure everyone follows the story, that they learn about the things you want to tell them about. To do this: slow down, take a breath, read each slide, tell the audience what's on the slide and how it fits in your story, then move to the next one. The audience doesn't have your bird's-eye view of the whole talk, they only have the slide they're looking at.

**Pause.** This is the simplest and most underrated presentation skill. Pause after making a key point. Pause before transitioning to a new section. Pause to let a figure sink in. The silence feels longer to you than it does to the audience.

**Watch good talks and PAY ATTENTION.** You'll learn more about presenting from actively watching great speakers than from any list of tips (including this one). Pay attention to how they structure their story, how they use their slides, how they handle transitions, how they explain figures.

**Present to the least knowledgable person in the room.** A common mistaken assumption most students have is that everyone else knows everything they know, and more. However, most of your audience (including professors!) will not know everything you know about your project or its background. If the students in the audience come away understanding your project, its motivation, and results, that's a win. Present as if you're presenting for THEM, not as if you're presenting to the one expert.


### Structuring a Talk (Beyond Lab Meeting)

For conference talks, job talks, or any presentation to an external audience, the structure matters more because the audience doesn't have context on your work. A few principles:

**Give the TL;DR in the beginning.** Methods, results, conclusion — walk through each briefly in your introduction. It should be enough for someone to take home the message of your talk. If the audience knows where you're going, they'll pay attention to the journey. A good phrase to have in mind is: "tell them what you're going to tell them, tell them, tell them what you told them."

**Start with a hook.** A story, a picture, a question, a provocative claim — something that grabs attention and motivates the problem you're going to address. Then transition: "Why do I tell this story?" and preview what you're going to talk about.

**Your intro should pose a question that is answered by the talk.** It's not enough to just motivate why you started working on something — the introduction should set up a specific question that the audience is waiting to see resolved. Everything that follows should feel like it's building toward that answer.

**Have your self-introduction ready.** It sounds trivial, but the first 10 seconds set the tone. Know what you're going to say about yourself and your lab so you start with confidence, not fumbling.

**Make your story linear.** Don't assume people remember what you said 30 minutes ago. Each section should flow naturally from the one before it, and if you need to refer back to something, remind the audience. And don't say "I'll come back to this later" — either tell us now or don't mention it at all.


### Preparing a Presentation

Everyone has their own process for building a talk. Here's a workflow that has worked well for me:

1. **Collect ideas as they come.** Any time you have an idea for a talk (a cool figure, a way to frame a result, a transition that works) write it down somewhere. Don't try to build a talk all at once from scratch.
2. **Start at least 2 weeks before.** Sketch out an idealized narrative — make empty slides with just titles (remember: declarative sentences). Write the conclusions slide. This forces you to figure out what your story actually is. The point isn't to make your slides weeks in advance, it's to get started so your brain has time to think about them when you're not in front of the computer. Again, make empty slides with just titles (remember: declarative sentences).
3. **Pull in existing slides.** If you've been making slides for lab meetings and 1-on-1 meetings (which I encourage — see the [meetings page](../Policies/meetings.md)), you'll have a library of semi-presentable figures to draw from.
4. **Write the narrative in your presenter notes.** For each slide, write out roughly what you want to say. This isn't a script — it's a way to check that your story makes sense.
5. **Print and review on paper.** Print your slides (I like notes view and a 2×6 grid per page), go through with a pen writing narrative ideas and noting figures to change/add. Make those changes on the computer, repeat. A related tip for your research process more broadly: **draw your plots before you touch a computer.** Sketch what you expect the results to look like. This helps you think about what you're actually testing, and it makes for much better presentations down the road because you've already thought about what the figure is *for*. Pen(cil) and paper is your friend.
6. **Check that your ducks are in a row.** Before you present, check: Is each figure needed? Is each figure explained? Are figure legends, axis labels, and citations all in order?
6. **Give a practice talk to the lab, ideally one week in advance.** At the very least, this forces you to have a working draft. Most likely, it will make clear to you where that draft needs work. We'll have lots of feedback for improvement. 
7. **Before you present, re-read your tips.** Seriously — re-read the mindset section above. It's easy to forget in the moment.
