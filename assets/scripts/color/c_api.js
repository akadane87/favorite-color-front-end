'use strict';

const config = require('../config');
const store = require('../store');

const postColor = (data) =>
  $.ajax({
      url: config.host + '/colors',
      method: 'POST',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
  });


module.exports = {
  postColor,
};
