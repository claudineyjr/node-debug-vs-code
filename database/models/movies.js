module.exports.getMovieSchema = (connection) => {
    const Schema = conn.mongoose.Schema;

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

    return conn.model('Movie', MovieSchema);
};
