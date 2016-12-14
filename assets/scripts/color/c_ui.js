'use strict';

const listColorTemplates = require('../templates/list-colors.handlebars');


const success = (data) => {
  console.log(data);
};

const postColorSuccess = (data) => {
  console.log(data);
};

const getAllColorsSuccess = (data) => {
  console.log("get all colors success", data);
  $('.color_list').show();
  $('.color_list').html(listColorTemplates(data));
};

const deleteColorSuccess = (id) => {
  let deletedColor = $('#color-' + id);
  deletedColor.remove();
  console.log("delete color success");
};

const updateColorSuccess = (id, data) => {
  console.log(data)
$(`span[data-id="${id}"]`).html(data.color.favorite);
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  postColorSuccess,
  deleteColorSuccess,
  getAllColorsSuccess,
  updateColorSuccess,
  success,
  failure
};
