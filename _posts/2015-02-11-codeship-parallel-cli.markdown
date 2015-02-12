---
layout: post
comments: true
title: Speed up Build Times with Codeship's ParallelCLI
date:   2015-02-11
categories: posts
SocialImage: http://blog.pdsullivan.com/assets/codeship-parallel-cli-tests-setup.png
---



<div class="row ">
    <a href="https://codeship.com/"><img src="http://blog.pdsullivan.com/assets/codeship.png" class="img-responsive center-block" alt="Codeship"></a>
</div>
<br/>
<br/>


##ParallelCLI

I was recently given access to a new feature from [Codeship](http://www.codeship.com), called [**ParallelCLI**](https://codeship.com/features/parallelci). ParallelCLI lets you run tests in parallel to reduce the overall time that is spent during a build running tests.


<div class="row ">
    <a href="https://codeship.com/features/parallelci"><img src="https://d1089v03p3mzyq.cloudfront.net/assets/website/pages/parallelci/codeship-parallelci-340f2d5d44a8c17c672bb1a32db36b53.svg" alt="Codeship"></a>
</div>
<br/>
<br/>

> **ParallelCLI** allows you to split your test commands across multiple build VMs to speed up your build time.
>
-- Codeship

Below is the UI where I set up my different test pipelines. From giving it a try I liked the way that the setup is done. It makes the process intuitive and pretty quick to get up and running with a new pipeline.

<div class="row ">
    <img src="http://blog.pdsullivan.com/assets/codeship-parallel-cli-tests-setup.png" class="img-responsive center-block" alt="Codeship">
</div>
<br/>
<br/>


##Test Pipelines

> Each project has multiple test pipelines. Each of those pipelines is a build VM running independently of each other. Codeship will first run your setup commands and then any arbitrary test commands you defined for this specific pipeline via the interface. To ease distinguishing different pipelines you can provide a name for each one.
>
-- Codeship

For each project in Codeship I can have multiple pipelines. For every pipeline I have, on the backend there is a VM running the tests in that pipeline. I can name each pipeline to describe it and distinguish it from the other test pipelines.

For example, say I am running my unit tests on an AngularJS application that has a few different modules with functionality in them. I could cut down the testing and build time by setting up a pipeline for each of those modules. This would also encapsulate my tests so they are running in an more localized environment to cut down on them being impacted by something that could have happened or errored out during another test. Basically I see this as a great way to get more consistent results from the unit tests that I am running.


<div class="row ">
    <img src="http://blog.pdsullivan.com/assets/assets/codeship-parallel-cli-running.png" class="img-responsive center-block" alt="Codeship">
</div>
<br/>

After all of the testing pipelines finish successfully the Deployment Pipeline will be created and run to do the deployment of the application.

I am working on setting up an example AngularJS project that takes advantage of this new functionality and I will post it out on my github and update this post or write a new one with the specific examples when it is ready.

Thanks for reading!



###Links:
- ####[ParallelCLI](https://codeship.com/features/parallelci)

- ####[ParallelCLI Docs](https://codeship.com/documentation/continuous-integration/parallelci/)
