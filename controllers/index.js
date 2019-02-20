const packageJSon = require('../package.json');

const get = (req, res) => res.send(`Bem vindo ao cadastro de filmes v${packageJSon.version}`);

module.exports = {
    get,
};
