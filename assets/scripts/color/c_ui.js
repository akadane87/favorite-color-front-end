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
  $('.color_list').html(listColorTemplates(data));
};

const deleteColorSuccess = (id) => {
  let deletedColor = $('#color-' + id);
  deletedColor.remove();
  console.log("delete color success");
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  postColorSuccess,
  deleteColorSuccess,
  getAllColorsSuccess,
  success,
  failure
};
