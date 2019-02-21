const packageJSon = require('../package.json');
const { reponseErrorJson, responseJson } = require('../utils/controller');

const get = (req, res) => responseJson(res, `Bem vindo ao cadastro de filmes v${packageJSon.version}`);

module.exports = {
    get,
};
