'use strict';

const authEvents = require('./auth/events.js');
const cEvents = require('./color/c_events');

// On document ready
$(() => {
  $('.hidden-till-signin').hide();
  $('.crud_box').hide();

  // $('.SignIn_email').val('a@a.com');
  // $('.SignIn_password').val('a');
  // $('.SignIn-button').click();
  authEvents.addHandlers();
  cEvents.addHandlers();
});
