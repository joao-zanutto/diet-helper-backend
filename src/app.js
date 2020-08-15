// Import das dependencias e arquivo de configuração
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
const cors = require('cors')


// Carrega o express e conecta com o banco do Mongoose
const app = express();
app.use(cors());
const router = express.Router();
mongoose.connect(config.connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

// Carrega os modelos da base de dados
const Food = require('./models/food');
const Meal = require('./models/meal');


// Carrega as rotas de conexão
const index = require('./routes/index');
const foods = require('./routes/foods');
const meals = require('./routes/meals');


// Aplica o bodyParser no app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Redireciona as rotas para os arquivos de rotas
app.use('/', index);
app.use('/foods', foods);
app.use('/meals', meals);


module.exports = app;
