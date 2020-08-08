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
const Customer = require('./models/customer');
const Product = require('./models/product');
const Order = require('./models/order');
const Service = require('./models/service');
const Food = require('./models/food');


// Carrega as rotas de conexão
const index = require('./routes/index');
const product = require('./routes/products');
const customer = require('./routes/customers');
const order = require('./routes/orders')
const service = require('./routes/services')
const foods = require('./routes/foods');


// Aplica o bodyParser no app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Redireciona as rotas para os arquivos de rotas
app.use('/', index);
app.use('/products', product);
app.use('/customers', customer);
app.use('/orders', order);
app.use('/services', service);
app.use('/foods', foods);

module.exports = app;
