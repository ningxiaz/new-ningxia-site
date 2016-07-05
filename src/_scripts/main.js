// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
require('fluidbox');

var Menu = require('../_modules/menu/menu');

$(function() {
  new Menu(); // Activate Menu modules logic

  // activate Fluidbox
  $('.fluidbox').fluidbox();

  // Landing page interactions
  $('.landing-link--design').hover(function() {
    $('.landing-image--design').addClass('is-shown');
  }, function() {
    $('.landing-image--design').removeClass('is-shown');
  });

  $('.landing-link--art').hover(function() {
    $('.landing-image--art').addClass('is-shown');
  }, function() {
    $('.landing-image--art').removeClass('is-shown');
  });

  $('.landing-link--music').hover(function() {
    $('.landing-image--music').addClass('is-shown');
  }, function() {
    $('.landing-image--music').removeClass('is-shown');
  });
});
