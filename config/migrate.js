const db = require('../models/index');
const tokendb = require('../models/UserToken');
const userdb = require('../models/UserModel');
const formacaodb = require('../models/PortFormacao');
const jobsdb = require('../models/PortJobs');
const objdb = require('../models/PortObj');

async function createdatabase(){
    await db.sync()
}

createdatabase()