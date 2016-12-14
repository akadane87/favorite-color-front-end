'use strict';

const store = require('../store');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

const signInSuccess = (data) => {
  store.user = data.user;
  $('.hidden-till-signin').show();
  $('.crud_box').show();
  success(data);
  $('#sign-in').trigger('reset');
};

const signOutSuccess = () => {
    success(store.user);
    $('.hidden-till-signin').hide();
    $('.crud_box').hide();
    $('.color_list').hide();
    store.user = null;
};

const failure = (error) => {
  // $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signOutSuccess,
  signInSuccess,
};
