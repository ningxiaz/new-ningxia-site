'use strict';

var $ = require('jquery');

// Constructor
var Menu = function() {
  this.name = 'menu';

  $('.menu-button').click(function() {
    $(this).toggleClass('active');
    $('.menu-overlay').toggleClass('open');

    // prevent background from scrolling when menu is open
    if($(this).hasClass('active')) {
      $('body').addClass('has-menu-open');
    }
    else {
      $('body').removeClass('has-menu-open');
    }
  });
};

module.exports = Menu;
