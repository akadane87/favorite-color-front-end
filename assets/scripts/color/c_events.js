'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const c_api = require('./c_api');
const c_ui = require('./c_ui');

const onPostColor = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  c_api.postColor(data)
    .then(c_ui.postColorSuccess)
    .catch(c_ui.failure);
};

const addHandlers = () => {
  $('#post-color').on('submit', onPostColor);
};


module.exports = {addHandlers};
