const { json, request } = require('express');

const express = require('express');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.listen('7777');

app.use(json());

const products = [];

//Product register
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
//Middleware: verify if product exists based on his NCM number
function verifyProduct(req, res, next) {

    const { ncm } = req.headers;

    const product = products.find(product => product.ncm === ncm);

    if(!product) {
        res.status(400).json({error: "Product not found."});
    }

    req.product = product;

    return next()

}
//Get product movements
app.get('/movements/', verifyProduct, function(req, res) {

    const {product} = req;
    
    return res.json(product.movements);

})
//Get product informations
app.get('/products', verifyProduct, function(req, res) {

    const { product } = req;

    return res.json(product);

})
//Add product balance
app.post('/balance', verifyProduct, function(req, res) {
    
    const { amount } = req.body;

    const { product } = req;

    const balanceOperation = {
        type: "entry",
        amount,
        created_at: new Date()
    }

    product.movements.push(balanceOperation);

    return res.status(201).send();

})
//Take out product balance
app.post('/out', verifyProduct, function(req, res) {

    const { amount } = req.body;

    const { product } = req;

    const balanceOperation = {
        type: "out",
        amount,
        created_at: new Date()
    }

    product.movements.push(balanceOperation);

    return res.status(201).send();

})
//Alter product registration
app.put('/products', verifyProduct, function(req, res) {

    const { name } = req.body;

    const { product } = req;

    product.name = name;

    return res.status(201).send();

})
//Remove product
app.delete('/products', verifyProduct, function(req, res) {

    const { product } = req;

    products.splice(product, 1);

    return res.status(200).send({"message": "Product deleted" });

})