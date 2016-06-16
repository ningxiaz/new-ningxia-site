// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Menu = require('../_modules/menu/menu');

$(function() {
  new Menu(); // Activate Menu modules logic
});
