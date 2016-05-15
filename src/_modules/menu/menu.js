'use strict';

var $ = require('jquery');

// Constructor
var Menu = function() {
  this.name = 'menu';
  console.log('%s module', this.name);

  $('.menu-button').click(function() {
    $(this).toggleClass('active');
    $('.menu-overlay').toggleClass('open');
  });
};

module.exports = Menu;
