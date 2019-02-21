module.exports = (database, credentials) => {
    return require(`./${database}`)(credentials);
};
