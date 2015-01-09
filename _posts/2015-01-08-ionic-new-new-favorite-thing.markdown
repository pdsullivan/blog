---
layout: post
comments: true
title: New Favorite New Thing from Ionic
date:   2015-01-08
categories: posts
SocialImage: http://blog.pdsullivan.com/assets/ionic-logo.png
---

<div class="row ">
    <img src="http://blog.pdsullivan.com/assets/ionic-logo.png" class="img-responsive center-block" alt="ChkBook">
</div>
<br/>
<br/>

Ionic blogged a few days ago ["Automating Icons and Splash Screens”](http://ionicframework.com/blog/automating-icons-and-splash-screens/) about the newest addition to the [Ionic CLI](https://github.com/driftyco/ionic-cli#icon-and-splash-screen-image-generation) (which is installed through [NPM](https://www.npmjs.com/) using `$ npm install -g ionic`). With this feature they have eliminated in my opinion the absolute WORST part of developing an iOS app. In the past you have either had to use an app to auto generate all of the different splash screen and icon files in the various sizes required (those apps usually didn't do the best job or had weird behavior and also only did it for ios or android usually). Or you do what I have been doing in the past, which is using an image editing application whether it was Photoshop or something else to design and create the app icons and splash screen images and then export into all of the individual file sizes which could be very tedious if you had to make a little change then export all of the sizes all over again. This was always a pain and really a time sucker, especially if you were developing for ios and android because they have different image size requirements.

Now with the new feature/service offered by Ionic you can create one splash screen image and one icon image that are then sent off to Ionic’s server, called down to the right size, then returned back to you. This is achieved by taking the splash.png and the icon.png (I am just using png for this example, they offer other image types) and put them in a `resources` directory off the root of your project and then run the command `ionic resources` (with optional `—splash` or `—icon` if you only want to do one of the images).


<div class="row ">
    <img src="http://blog.pdsullivan.com/assets/ionic-resourses-cmd.png" class="img-responsive center-block" alt="ChkBook">
</div>
<div class="row ">
    <img src="http://blog.pdsullivan.com/assets/ionic-resourse-files.png" class="img-responsive center-block" alt="ChkBook">
</div>

A huge shout-out goes out to the team at Ionic for creating this really awesome new feature, thanks! You can see where I used this new service for my app [ChkBook in the GitHub repo for the project](https://github.com/pdsullivan/ChkBook).