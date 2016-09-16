'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router',
    'ngPageTitle',
    'mgo-angular-wizard'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
        data: {
                 pageTitle: "Home"
             },
        url: '/',
        templateUrl: 'home/home.html',
          controller: 'formController'
      })
      .state('beatles', {
        abstract: true,
        url: '/paslaugos',
         templateUrl: '<div ui-view></div>',
         controller: 'formController'
      })
      .state('beatles.list', {
        data: {
                 pageTitle: "Paslaugos"
             },
        url: '/visos',
        templateUrl: 'list/list.html',
        controller: 'formController'
      })
      .state('beatles.detail', {
       url: '/:id',
        templateUrl: 'detail/detail.html',
        controller: 'formController'
      })
      .state('step1', {
       url: '/step1',
        templateUrl: 'form/step1.html',
          controller: 'formController'
            })
      .state('step2', {
       url: '/step2',
        templateUrl: 'form/step2.html',
        controller: 'formController'

      })
      .state('step3', {
       url: '/step4',
        templateUrl: 'form/step4.html',
        controller: 'formController'

      })
      .state('sucess', {
       url: '/sucess',
        templateUrl: 'form/sucess.html',
        controller: 'formController'
      })
      .state('about', {
       url: '/apie',
        templateUrl: 'static/about.html',
        controller: 'formController'
      })
      .state('partner', {
       url: '/partneriai',
        templateUrl: 'static/partner.html',
        controller: 'formController'
      })


     $urlRouterProvider.otherwise("/");
  })


  .constant('FirebaseUrl', 'https://robanhl.firebaseio.com/');
