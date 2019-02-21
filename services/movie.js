const { Movie } = require('../models/index');

const get = (req) => {
    const { _id } = req.params;
    const options = _id ? _id : req.query;
    
    const method = _id ? 'findById' : 'find';
    return Movie[method](options).then(result => result)
};

module.exports = {
    get,
};
