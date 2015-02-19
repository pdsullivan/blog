---
layout: post
comments: true
title:  "Ionic Framework — Log Errors using Google Analytics and ngCordova"
date:   2015-2-19
categories: posts
SocialImage: http://blog.pdsullivan.com/assets/ngCordovaLogo.png
---


I recently added [Google Analytics](http://www.google.com/analytics/) tracking to my [Ionic Framework](http://ionicframework.com/) app, [ChkBook](http://pdsullivan.github.io/ChkBook). I did this mostly out of curiosity, just wanting to know how much people were using my app. This is because other that seeing the number of downloads, there is no other real look at how or when people are using your app. While putting this in I thought that it might be a good idea to (since I was already gonna be doing the bulk of the work) add in error logging/tracking into the app.

## Error Handler

<br/>
So, first thing I did was make sure I had an error handler on my AngularJS app. To do this I scrounged some code together from some googleing around. Check out the documentation [here for some more info on the $exceptionHandler](https://docs.angularjs.org/api/ng/service/$exceptionHandler) in AngularJS. My exception handling code looks like the following and is in my main `app.js`.

<script src="https://gist.github.com/pdsullivan/41ee32d006988603655c.js"></script>

In this code I use the `$injector` to get my `loggingService` which is a service I created to handle all the logging calls I needed to make to Google Analytics. The `loggingService` is where I use the [ngCordova](http://ngCordova.com) plugin called `$cordovaGoogleAnalytics` to push the data to Google Analytics (documentation for that plugin can be found [here](http://ngcordova.com/docs/plugins/googleAnalytics/)).

<br/>

## loggingService & $cordovaGoogleAnalytics

<br/>

<div class="row  ">
    <div class="col-xs-4  col-xs-offset-4 ">
    <a href="http://ngCordova.com" target="_blank">
    <img src="http://blog.pdsullivan.com/assets/ngCordovaLogo.png" class="img-responsive center-block" alt="ng-cordova logo">
    </a>
    </div>
</div>
<br/>
<br/>

In my `loggingService` I have the function `logError(errorData, message)` where I just check if the window has cordova defined (which is used to check if I am running it in a browser or if its running on the device). If it’s running in the browser I just log it out to the console (because I am likely just developing) and if its running on a device I make the call to the `$cordovaGoogleAnalytics` plugin and pass the data that I want to capture. The way I have it now is fairly simple but it works. (code in this service is still a little bit of a work in progress so its not that great right now)

<script src="https://gist.github.com/pdsullivan/0e1a84411e35f9927c4b.js"></script>


<br/>

Hope someone finds this helpful, or at least amusing. Thanks for taking a look! :)