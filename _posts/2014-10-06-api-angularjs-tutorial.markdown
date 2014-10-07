---
layout: post
comments: true
title:  "Simple AngularJS tutorial using the Github API"
date:   2014-10-06
categories: posts
SocialImage: http://blog.pdsullivan.com/assets/AngularJS-large.png
---

##[View Demo](http://pdsullivan.github.io)

##[Code on Github](https://github.com/pdsullivan/pdsullivan.github.io)


![]({{ site.url }}{{ site.baseurl }}/assets/angularjslogo.png)

I recently was sitting in jury duty with nothing to do so I made a little AngularJS app that calls to the github api. I chose the github api because it is a nice api that has open data that you can call cross domain and you can get allot of useful data without logging in with a user.

First I used Bower to install my packages I will most likely use Bootstrap, AngularJS, fontawesome, and octicons.

Next, I created my `index.html` file so that I can get started with my html. I know I will want a title at the top of the page to display my name and github username, and a panel with a heading as the body of the page with a list of my github repos in it. I will just leave this for now and come back to add content.

Now I want to start my AngularJS app, I add a directory to my project called `/app` and add a `app.js` file to put my angular module into.  Also I will add a controller called `gitHubDataController` and inject the scope and the http module because I will be making http calls to the github api.


Now I want to make a call to the github api to get my github user info. I will add a variable to the scope `$scope.username` that is my github username (pdsullivan).  Then I will make a http call to the github api for my user data. And then on success I will store the returned data into `$scope.userData` to access in my html view. You can see the data [here at the api call](https://api.github.com/users/pdsullivan).


{% gist 46839f9f5b11085966c3 %}


Over in my html I want to display my username (pdsullivan) and actual name (Patrick Sullivan) on the screen. I will do this by adding an `h1` tag at the top of the page with `{{userData.name}}` which will access the userData object in the scope and display the name property on that object in the html. Then I will add a link and set its href to `{{userData.html_url}}` so there will be a link to my github profile on the page. Next I will add as the text of the link `{{userData.login}}` to display my username as the link text.

{% gist e981757ab55ac5af4065 %}

Now I want to show my github repos (repositories) in a list. So over in my `app.js` I add another http call to get my users repos. This is similar to the last http call we made but this time I am using the url returned in my `userData.repos_url` to get the url I need to call for the repos. Here is the link to the data https://api.github.com/users/pdsullivan/repos

{% gist eace17fdcccdeefaf7d1 %}


Now I will add the html to show the list of repos returned by the api call. I will have a bootstrap panel with the panel body having the list in it. I do a `list-group` and for the elements inside of the list group i use the Angular directive `ng-repeat="repo in repoData"` to show every repo in the repo list I got back from the api call. Inside of the ng-repeat I add an link to show the repo title as a link to the repo on github and also show the description next to that.

{% gist f1e764eb6685369faebf %}

Then to show a link to the homepage (web page) for the repo I add:

{% gist b40c75ce768243dad676 %}


On the other side of the row in the `list-box` I add code to show the last updated date and the create data of the repo.

{% gist 1e585a405fb90151155a %}

I also want to show if the repo was created by me or forked by me. For this I will use the `ng-if` directive with two different icons to show based on if the repo object's fork property is true or false:

{% gist 3210030aa4b9ebb53897 %}


And to finish that up, the panel body looks as follows:

{% gist 896ca2509013538e00de %}



The last thing I noticed I want to add is a loading indicator when the page is getting the data from the github api (this is because I was sitting in a room with really slow wifi and it was taking 5ish seconds for this data to load and the screen looked really goofy with all that empty stuff). So I will use the `ng-hide` directive and set it to `repoData` so it will show the loading text until the `$scope.repoData` is populated, which works since that is the largest data call I am making to the API.

{% gist b836f837f2985e4cf66e %}

And there we have it my little AngularJS for fun app. See it live [here at pdsullivan.github.io](http://pdsullivan.github.io/) and the full code is all [here at the github repo](https://github.com/pdsullivan/pdsullivan.github.io). Thanks for reading!

##Still to come is the repo search box and the sorting of the repos.

