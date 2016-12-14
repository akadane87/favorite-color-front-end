'use strict';

const listColorTemplates = require('../templates/list-colors.handlebars');


const success = (data) => {
};

const postColorSuccess = (data) => {
};

const getAllColorsSuccess = (data) => {
  $('.color_list').show();
  $('.color_list').html(listColorTemplates(data));
};

const deleteColorSuccess = (id) => {
  let deletedColor = $('#color-' + id);
  deletedColor.remove();
};

const updateColorSuccess = (id, data) => {
$(`span[data-id="${id}"]`).html(data.color.favorite);
};

const failure = (error) => {
};

module.exports = {
  postColorSuccess,
  deleteColorSuccess,
  getAllColorsSuccess,
  updateColorSuccess,
  success,
  failure
};
