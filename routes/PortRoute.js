const express = require('express');
const router = express.Router();
const { 
    getJobs, createJob, atualizaJob, deletaJob, 
    getFormacao, createFormacao, atualizaFormacao, deletaFormacao, 
    getObjetivo, createObjetivo, atualizaObjetivo } = require("../controllers/PortController")


router.get('/job', getJobs)
router.post('/job', createJob)
router.put('/job/:id', atualizaJob)
router.delete('/job/:id', deletaJob)

router.get('/formacao', getFormacao)
router.post('/formacao', createFormacao)
router.put('/formacao/:id', atualizaFormacao)
router.delete('/formacao/:id', deletaFormacao)

router.get('/obj', getObjetivo)
router.post('/obj', createObjetivo)
router.put('/obj/:id', atualizaObjetivo)

//router.get('/habilidade', getHabilidade)
//router.post('/habilidade', createHabilidade)
//router.put('/habilidade/:id', atualizaHabilidade)

module.exports = router