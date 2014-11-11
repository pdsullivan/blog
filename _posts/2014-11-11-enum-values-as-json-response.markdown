---
layout: post
comments: true
title:  "C# Enum Values as Json ASP.NET Web API Response"
date:   2014-11-11
categories: posts
SocialImage: http://blog.pdsullivan.com/assets/ionic-logo.png
---

I did not have the easiest time Googling around for this so I thought I would post it. As simple as it may be may be it might help someone solve there issue more quickly.

I am working on a web app that is using AngularJS on the client side and in one of the forms I needed the user to be able to select time zones but I didn't want to hard code it into the javascript, as well as it is getting stored on the back-end as my C# enum type `USTimeZones`:

<script src="https://gist.github.com/pdsullivan/fdea11f369ac4ecc48a6.js"></script>

So I created this api method to return me the values in an array of objects with and id (which is the value of the item in the enum) and a name (which is the display name of the item in the enum). Here is my method from a Web API controller:

<script src="https://gist.github.com/pdsullivan/07b8fbee1e7667a7ae2e.js"></script>

I use `Enum.GetValues(typeof(USTimeZones))` to get an array of the values in the enum and then I add an object to my array that is the item from the array casted into an int and then the item casted into a string to get the name.

The returning values look like this, and I am able to just call from javascript via ajax to the values:

<script src="https://gist.github.com/pdsullivan/546d46d30567ccaa7f6e.js"></script>

