---
layout: post
comments: true
title: Speed up Build Times with Codeship's ParallelCLI
date:   2015-02-11
categories: posts
SocialImage: http://blog.pdsullivan.com/assets/codeship.png
---



<div class="row ">
    <img src="../../../../assets/codeship.png" class="img-responsive center-block" alt="Codeship">
</div>
<br/>
<br/>

I was recently given access to a new feature from [Codeship](http://www.codeship.com), **ParallelCLI**.


> **ParallelCLI** allows you to split your test commands across multiple build VMs to speed up your build time.

Below is the UI where I set up my different test pipelines. From trying it out I really love the way that the setup is done. It makes the process very intuitive to get started.

<div class="row ">
    <img src="../../../../assets/codeship-parallel-cli-tests-setup.png" class="img-responsive center-block" alt="Codeship">
</div>
<br/>
<br/>

> ###Test Pipelines
> Each project has multiple test pipelines. Each of those pipelines is a build VM running independently of each other. Codeship will first run your setup commands and then any arbitrary test commands you defined for this specific pipeline via the interface. To ease distinguishing different pipelines you can provide a name for each one.

For each project in Codeship I can have multiple pipelines. For every pipeline I have, on the backend there is a VM running the tests in that pipeline. I can name each pipeline to describe it and distinguish it from the other test pipelines.

For example, say I am running tests on an angular application that has a few different modules with functionality in them. I could cut down the testing and build time by setting up a pipeline for each of those modules. This would also encapsulate my tests so they are running in an more localized environment to cut down on them being impacted by something that could have happened or errored out during another test. Basically I see this as a great way to get more consistent results from the unit tests that I am running.


<div class="row ">
    <img src="../../../../assets/codeship-parallel-cli-running.png" class="img-responsive center-block" alt="Codeship">
</div>
<br/>

After the testing pipelines finish successfully the Deployment Pipeline will be created and run to do the deployment of the application.