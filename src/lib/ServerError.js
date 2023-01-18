'use strict';

module.exports = class ServerError extends Error {

  constructor(message, statusCode = 500, stack = true) {
    super(message);
    this.statusCode = statusCode;
    this.stack = stack;
  }

};
