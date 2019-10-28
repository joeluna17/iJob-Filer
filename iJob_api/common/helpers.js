const db = require('../data/dbConfig');

const getAllCustomers = () => {
    return db('customer');
};














const getAllJobs = () => {
    return db('job');
};

const addNewJob = (job) => {
    return db('job').insert(job);
};

const removeJob = (id) => {
    return db('job')
            .where({id})
            .delete();
};




module.exports = {
    getAllCustomers,
    getAllJobs,
    addNewJob,
    removeJob
};