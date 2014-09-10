'use strict';

/* App Module */

var blogApp = angular.module('blogApp', [
  'ngRoute',
  'blogControllers'
]);

blogApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/posts', {
        templateUrl: 'partials/page-list.html',
        controller: 'PostListCtrl'
      }).
      when('/posts/mac-mail-client', {
        templateUrl: 'partials/mac-mail-client.html',
        controller: 'PostDetailCtrl'
      }).
      when('/posts/favorite-xamarin-studio-features', {
        templateUrl: 'partials/favorite-xamarin-studio-feature.html',
        controller: 'PostDetailCtrl'
      }).
      when('/posts/tech-podcasts', {
        templateUrl: 'partials/tech-podcasts.html',
        controller: 'PostDetailCtrl'
      }).
      when('/posts/aspnet-running-for-free', {
        templateUrl: 'partials/aspnet-running-for-free.html',
        controller: 'PostDetailCtrl'
      }).
      otherwise({
        redirectTo: '/posts'
      });
  }]);
