'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
