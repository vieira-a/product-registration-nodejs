const { json, request } = require('express');

const express = require('express');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.listen('7777');

app.use(json());

const products = [];

app.post('/products', function(req, res) {

    const { ncm, name } = req.body;

    const productExists = products.some(
        (product) => product.ncm === ncm);

    if(productExists) {
        return res.status(400).json({error: "Product NCM already exists."})
    }

    products.push({
        "id": uuidv4(),
        ncm,
        name, 
        movements: []
    });

    return res.status(201).send(products);

});

app.get('/movements/:ncm', function(req, res) {
    
    const { ncm } = req.params;

    const product = products.find(product => product.ncm === ncm);
    
    return res.json(product.movements)

})