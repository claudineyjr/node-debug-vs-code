const databaseIndex = require('../database/index');
const MovieSchema = require('./movies');
const credentials = {
    user: process.env.MONGODB_USER || '',
    password: process.env.MONGODB_PASSWORD || '',
    host: process.env.MONGODB_HOST || '127.0.0.1',
    port: process.env.MONGODB_PORT || '27017',
    database: process.env.MONGODB_DATABASE || 'local',
};

const mongoConnection = databaseIndex('mongodb', credentials);
const Movie = MovieSchema.getMovieSchema(mongoConnection);

module.exports = exports = {
    Movie,
};
