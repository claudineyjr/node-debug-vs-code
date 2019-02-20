const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', require('./routes/index.js'));

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});