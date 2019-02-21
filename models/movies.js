module.exports.getMovieSchema = (connection) => {
    const { Schema } = connection.mongoose;

    const MovieSchema = new Schema({
        title: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: Date,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
    });

    return connection.model('Movie', MovieSchema);
};
