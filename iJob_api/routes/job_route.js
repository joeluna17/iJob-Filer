const express = require('express');
const db = require('../common/helpers');

const router = express.Router();



//get all jobs
router.get('/', async (req, res) => {

    try{
        const jobs = await db.getAllJobs(); 
        res.status(200).json(jobs);
    }
    catch({message}) {
        res.status(500).json({success:false, message});
    }
});


//post a new job
router.post('/postJob', async (req, res) => {
        const jobData = req.body;

        try{
            const job = await db.addNewJob(jobData);
            res.status(200).json(job);
        }
        catch({message}){
            res.status(500).json({success:false, message});
        }
});


//update a job


//delete a job
router.delete('/removeJob/:id', async (req, res) => {
        const {id} = req.params;
        
        try{
            const removedJob = await db.removeJob(id);
            res.status(200).json(removedJob);
        }
        catch({message}){
            res.status(500).json({success:false, message});
        }
});

module.exports = router;