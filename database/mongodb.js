module.exports = (credentials) => {
    const mongoose = require('mongoose');
    mongoose.set('useFindAndModify', false);

    const { user, password, database, host, port } = credentials;

    mongoose.Promise = Promise;
    const connection = mongoose.createConnection(`mongodb://${user}:${password}@${host}:${port}/${database}`, {
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 10,
        useNewUrlParser: true,
        autoIndex: true,
    })
    .on('error', (args) => console.error(`Não foi possível conectar ao MongoDB`, args))
    .on('open', () => console.log('Conectado ao MongoDB com sucesso!'));

    connection.mongoose = mongoose;

    return connection;
};
