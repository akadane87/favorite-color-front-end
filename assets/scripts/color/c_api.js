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

  const getAllColors = (data) =>
    $.ajax({
        url: config.host + '/colors',
        method: 'GET',
        data,
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });

  // const deleteColor = (data) =>
  //   $.ajax({
  //       url: config.host + '/colors',
  //       method: 'DELETE',
  //       data,
  //       headers: {
  //         Authorization: 'Token token=' + store.user.token,
  //       },
  //   });

module.exports = {
  postColor,
  // deleteColor,
  getAllColors,
};
