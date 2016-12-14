'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const c_api = require('./c_api');
const c_ui = require('./c_ui');

const onPostColor = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log(data);
  c_api.postColor(data)
    .then(c_ui.postColorSuccess)
    .catch(c_ui.failure);
};

const onGetAllColors = function (event) {
  event.preventDefault();
  c_api.getAllColors()
    .then(c_ui.getAllColorsSuccess)
    .catch(c_ui.failure);
};


const onDeleteColor = function (e) {
  e.preventDefault();
  let colorId = $(this).attr('data-id');
  c_api.deleteColor(colorId)
    .then(() => {
      c_ui.deleteColorSuccess(colorId)
    })
    .catch(c_ui.failure);
};

const onUpdateColor = function (e) {
  e.preventDefault();
  let data = getFormFields(this);
  let colorId = $(this).attr('data-id');
  c_api.updateColor(colorId, data)
    .then(() => {
      c_ui.updateColorSuccess(colorId, data)
    })
    .catch(c_ui.failure);
};

const addHandlers = () => {
  $('#post-color').on('submit', onPostColor);
  $('#show-all-colors').on('submit', onGetAllColors);
  // $('#delete-color').on('submit', onDeleteColor);
  //note class >> .delete-color generated in handlebars
  $('body').on('click', '.delete_color', onDeleteColor);
  $('body').on('submit', '.update-color', onUpdateColor);
};


module.exports = {addHandlers};
