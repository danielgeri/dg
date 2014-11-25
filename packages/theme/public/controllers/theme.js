'use strict';

angular.module('mean.theme')
	.controller('ThemeController', ['$scope', 'Global', '$location', '$rootScope',
	  function($scope) {
      this.block = '';
      this.menuLabel = 'Hi.';
      this.hoverOver = function(setHover) {
        this.block = setHover;
        this.menuLabel = setHover.toString().charAt(0).toUpperCase() + setHover.toString().slice(1) + '.';
        this.blockHover = true;
      };

      this.hoverClass = function() {
        return this.block;
      };

      this.reset = function() {
        this.block = '';
        this.menuLabel = 'Hi.';
        this.blockHover = false;
      };

      this.isHovered = function(checkHover) {
        return this.block === checkHover;
      };

      
      this.menuOpen = false;
      $scope.outputThis = this;

      this.isMenuOpen = function() {
        return this.menuOpen;
      };

      this.toggleMenu = function() {
        this.menuOpen = !this.menuOpen;
      };
    }
  ]);
