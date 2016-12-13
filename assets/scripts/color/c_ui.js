'use strict';

// const store = require('../store');


const success = (data) => {
  console.log(data);
};

const postColorSuccess = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  postColorSuccess,
  success,
  failure
};
