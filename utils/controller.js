'use strict'
const httpStatus = require('http-status-codes');

const responseJson = (res, data, statusCode = httpStatus.OK) => {
    res.status(statusCode);
    return res.json(data);
};

const responseErrorJson = (res, methodName, error, statusCode = httpStatus.INTERNAL_SERVER_ERROR) => {
    res.status(error.httpCode || statusCode);
    console.error(methodName, error);
    return res.json({
        error: error.message || error.toString()
    });
};

module.exports = {
    responseErrorJson,
    responseJson,
};
