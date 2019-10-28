const express = require('express');
const helmet = require('helmet');
const cors = require("cors");

const CustomerRouter = require('../routes/customer_route');
const JobRouter = require('../routes/job_route');
const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api/customers', CustomerRouter);
server.use('/api/jobs', JobRouter);

server.get('/', (req, res) => {
    try{
        res.send(`<h1>Welcome to the Jobs Application!</h1>`);
    }
    catch({message}){
        req.status(500).json(message);
    }
});





module.exports = server;

