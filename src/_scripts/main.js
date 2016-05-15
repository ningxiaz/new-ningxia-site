// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');
var Menu = require('../_modules/menu/menu');

$(function() {
  new Link(); // Activate Link modules logic
  new Menu(); // Activate Menu modules logic
  console.log('Welcome to Yeogurt!');
});
