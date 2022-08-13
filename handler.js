"use strict";

module.exports.hello = async (event) => {
  let statusCode;
  let body;

  try {
    const { word } = event;

    statusCode = 200;
    body = {
      upperCaseWord: word.toUpperCase(),
    };
  } catch (err) {
    console.log(err);
    statusCode = 400;
  }

  return {
    statusCode,
    body: JSON.stringify(body, null, 2),
  };
};
