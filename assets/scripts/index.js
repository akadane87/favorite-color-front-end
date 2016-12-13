'use strict';

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  // $('.hidden-till-signin').hide();
  authEvents.addHandlers();
});
