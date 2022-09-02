const { json } = require('express');

const express = require('express');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.listen('7777');

app.use(json());

const products = [];

app.post('/products', function(req, res) {

    const { ncm, name } = req.body;

    products.push({
        "id": uuidv4(),
        ncm,
        name, 
        movements: []
    });

    return res.status(201).send(products);

});
