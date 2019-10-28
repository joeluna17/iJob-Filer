const express = require('express');
const db = require('../common/helpers');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const customers = await db.getAllCustomers();
        res.status(200).json(customers);
    }
    catch({message}){
        res.status(500).json({success: false, message});
    }
});

//Post a new customer

//update a customer

//delete a customer

module.exports = router;
