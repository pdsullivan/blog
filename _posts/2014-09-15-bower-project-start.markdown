---
layout: post
title:  "Start a New Project with Bower"
date:   2014-09-15
categories: posts
---


![Bower]({{ site.url }}{{ site.baseurl }}/assets/bowerLogo.png)


Ok, I was watching a Pluralsight on [Building AngularJS and Node.js Apps with the MEAN Stack][pluralsightcourse] the other day by Joe Eames and he started using Bower and I was like, “That looks cool I wonder what that is”. Boy was I in for a treat. Here is a quick overview on starting a new project with Bower.

First you need to have Node.js installed, once you have that installed pull up the console and run `npm install bower -g` to install Bower globally. Now you have bower installed.



![BowerInstall]({{ site.url }}{{ site.baseurl }}/assets/bowerInstall.png)

Once you have it installed create your folder where you want to install your bower packages. Then navigate in the console to that folder then do a `bower init` to create the bower.json file which is where bower will keep up with the packages installed.



![BowerInstall]({{ site.url }}{{ site.baseurl }}/assets/bowerInit.png)

Now if you do not want to use the default install location for bower packages (“bower_components”) you can create a .bowerrc file and specify the directory you want the files installed to.

{% highlight json %}
{
    "directory":"lib"
}

{% endhighlight %}



Bower Init
Now you are ready to install the packages you want in your project. I usually want AngularJS, Angular-Routing, Bootstrap, and maybe jqueryUI. So go to the terminal and run `bower install angular angular-routing bootstrap jqueryui`. Wait a little bit for it to download the files for you. And now its time to get started on the project!!!


![BowerInstall]({{ site.url }}{{ site.baseurl }}/assets/bowerpackages.png)

[pluralsightcourse]: http://pluralsight.com/training/courses/TableOfContents?courseName=building-angularjs-nodejs-apps-mean&highlight=joe-eames_building-angularjs-nodejs-apps-mean-m3*5#building-angularjs-nodejs-apps-mean-m3
