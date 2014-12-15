---
layout: post
comments: true
title: Unit Testing an AngularJS Ionic App with Codeship Continuous Integration, Jasmine, and Karma
date:   2014-12-05
categories: posts
SocialImage: http://blog.pdsullivan.com/assets/unitTests.png
---


NOTE: For reference the project that I am working with is on GitHub [here](https://github.com/pdsullivan/ChkBook) if you would like to see the source code in its full form.

I am working on an app, [ChkBook](http://pdsullivan.github.io/ChkBook/), I have blogged [about the app in the past](http://blog.pdsullivan.com/posts/2014/11/07/new-app-ionic-framework.html). I am building it with Ionic Framework and the early versions of the app are currently in the [iOS app store](https://itunes.apple.com/us/app/chkbook/id927749479?ls=1&mt=8). And I am sorry to say that because I got excited and in a hurry to ship the first version I missed writing unit tests 😬 . So I am now repenting, I am writing tests for my app. Here I will talk about how I set up the tests and run them on [Codeship](http://codeship.com).

![Unit Test](http://blog.pdsullivan.com/assets/unitTests.png)



I saw this picture [on Codeship's blog](http://blog.codeship.com/node-js-security-tips/) and liked it.

# Jasmine

So first I added [Jasmine](http://jasmine.github.io) into my project structure. I added a `jasmine` directory in the root of my project and in there I unzipped [jasmine-standalone-2.0.0.zip](https://github.com/jasmine/jasmine/blob/master/dist/jasmine-standalone-2.0.0.zip). With that you get a `SpecRunner.html` which is the GUI to run the tests you set up and some example javascript files to help get started. In the spec directory I will add my own `accountControllerSpec.js` which will have the tests for my `accountController` from my angular app which is over in the `www` directory.

![File Structure of Jasmine Directory](http://blog.pdsullivan.com/assets/ionicjasminefilestructure.png)

In my `accountControllerSpec.js` I will write a few simple tests using Jasmine to get going. First one is to check if the scope is defined and the the next two are to check if a few variables got populated when the controller was created. I also have the `beforeEach` calls to create the controller that I need to test using `angular-mocks`.




{% highlight javascript %}

describe("accountsController", function() {

    var scope, controller;
    beforeEach(module('app'));

    beforeEach(inject(function (
        $rootScope,
        $controller,
        $ionicModal,
        $ionicPopup,
        $stateParams,
        $timeout,
        $state) {

        scope = $rootScope.$new();

            controller = $controller('accountsController', {
                $scope: scope,
                $ionicModal: $ionicModal,
                $ionicPopup: $ionicPopup,
                $state: $state

        });
    }));

    it("should have a scope variable defined", function() {
        expect(scope).toBeDefined();
    });

    it("should have a accounts array", function(){
        expect(scope.accounts.length).toBe(0);
    });

    it("should have types setup", function(){
        expect(scope.accountTypes.length).toBe(3);

    });

});

{% endhighlight %}

# Karma

Now for the [Karma](http://karma-runner.github.io/0.12/index.html) setup. I am using WebStorm so there is functionality built in to run karma tests in the IDE as you develop, but since I am going to be running my tests automatically using Codeship I will want them to run from the command line. To get Karma set up to run from the command line for my project I will run some commands in the terminal to install some packages (these will also be used later to set up the environment in Codeship).

 {% highlight Bash shell scripts %}

npm install -g karma
npm install -g karma-cli
npm install karma-jasmine
npm install karma-chrome-launcher

{% endhighlight %}


So I navigated in the terminal to my root project directory and ran `karma init` and answer the prompts to create the `karma.conf.js` config file for karma (I just accepted the defaults for the answers). Inside of the config file in the “files” section I add all the files that will need to be referenced to run the test (same files from the specrunner.html file if you have used that to run tests already):

{% highlight javascript  %}


    files: [
      "www/lib/ionic/js/ionic.bundle.js",
      "www/lib/angular-mocks/angular-mocks.js",
      "www/lib/ngCordova/dist/ng-cordova.js",
      "www/app/app.js",
      "www/app/accounts/accountsController.js",
      "www/app/dataServices/accountDataService.js",
      "www/app/logging/logingService.js",
      "jasmine/spec/accountControllerSpec.js"

    ]

{% endhighlight %}


And then to run the test in the command line, I am using this command below (when in the root of the project directory):

{% highlight Bash shell scripts %}

karma start karma.conf.js --browsers Chrome --single-run

{% endhighlight %}




# Codeship Build Setup

And now we will go to the internet to get this all running on [Codeship](http://codeship.com). In CodeShip I have added [my repo](https://github.com/pdsullivan/ChkBook) to a project and now its time to write the test commands.

When setting up the project properties in Codeship you get to set up some commands that will run first, the "Setup Commands", which will basically be where I will set up my environment in which to execute the test commands. In this section I have the following:

{% highlight Bash shell scripts %}

npm install karma
npm install karma-cli
npm install karma-jasmine
npm install karma-chrome-launcher

{% endhighlight %}

I use `npm` to install `karma` and the `karma-cli` for running the karma commands. Then I also install `karma-jasmine` to run the jasmine tests that I have written in the spec and then `karma-chrome-launcher` which will give me the ability to run the tests in a browser even from the command line in the Codeship environment.

After the setup commands it is time to set up the actual test commands. The command I will run will neet to start karma (the `karma.conf.js` file) and tell it to use chrome to run the tests once. Here is my command that will execute the tests:

{% highlight Bash shell scripts %}

if [ "$CI_BRANCH" == "master" ]; then karma start karma.conf.js --browsers Chrome --single-run; fi

{% endhighlight %}

I use the if statement in the command to only run the tests on my master branch which for now is fine because I am doing my development on the ionic app in the master branch. This also prevents me from running tests when I check in changes to my gh-pages branch which is the Github Pages branch for the [project's web page](http://pdsullivan.github.io/ChkBook).

The result looks like this when Codeship runs the tests (and they all pass which does not always happen 😉...).

![Codeship UI](http://blog.pdsullivan.com/assets/chkbookcodeship.png)

Thanks for reading and please comment or contact me if there are any questions or if anything is not working as I described.
