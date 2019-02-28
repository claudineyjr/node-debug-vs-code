const service = require('../services/movie');
const { responseErrorJson, responseJson } = require('../utils/controller');

const get = async (req, res) => {
    try {
        const result = await service.get(req);
        return responseJson(res, result); 
    } catch (error) {
        return responseErrorJson(res, 'movie::get', error);
    }
};

const post = async (req, res) => {
    try {
        const result = await service.create(req);
        return responseJson(res, result); 
    } catch (error) {
        return responseErrorJson(res, 'movie::get', error);
    }
};

module.exports = {
    get,
    post,
};
