const PortServices = require("../services/PortServices")

/////////////////////////// JOBS ////////////////////////////////////////////////
// Busca um job
exports.getJobs = async (req, res) => {
    try {
        const jobs = await PortServices.getJobs();
        res.status(200).json({ data: jobs });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Cria um Job
exports.createJob = async (req, res) => {
    try {
        const {empresa, cargo, periodo} = req.body
        const job = await PortServices.createJob({
            empresa, 
            cargo, 
            periodo
        });
        res.status(200).json({ data: job });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Edita um job
exports.atualizaJob = async (req, res) => {
    try {
        var id = req.params.id
        const update = {
            empresa: req.body?.empresa,
            cargo: req.body?.cargo,
            periodo: req.body?.periodo
        }
        const job_edit = await PortServices.atualizaJob(id, update);
        res.status(200).json({ data: job_edit });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Excluir um job
exports.deletaJob = async (req, res) => {
    try {
        var id = req.params.id
        const job_delete = await PortServices.deleteJob(id);
        res.status(200).json({ data: job_delete });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};







/////////////////////////// Formacoes ////////////////////////////////////////////////
// Busca uma Formacao
exports.getFormacao = async (req, res) => {
    try {
        const formacao = await PortServices.getForma();
        res.status(200).json({ data: formacao });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Cria uma Formacao
exports.createFormacao = async (req, res) => {
    try {
        const {escola, curso, periodo} = req.body
        const formacao = await PortServices.createForma({
            escola, 
            curso, 
            periodo
        });
        res.status(200).json({ data: formacao });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Edita uma Formacao
exports.atualizaFormacao = async (req, res) => {
    try {
        var id = req.params.id
        const update = {
            escola: req.body?.escola,
            curso: req.body?.curso,
            periodo: req.body?.periodo
        }
        const formacao_edit = await PortServices.atualizaForma(id, update);
        res.status(200).json({ data: formacao_edit });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Excluir uma Formacao
exports.deletaFormacao = async (req, res) => {
    try {
        var id = req.params.id  
        const formacao_delete = await PortServices.deletaForma(id);
        res.status(200).json({ data: formacao_delete });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};







/////////////////////// OBJETIVO //////////////////////

exports.getObjetivo = async (req, res) => {
    try {
        const obj = await PortServices.getObj();
        res.status(200).json({ data: obj });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Cria uma habilidade
exports.createObjetivo = async (req, res) => {
    try {
        const {objetivo, qualificacoes, cargo} = req.body
        const obj = await PortServices.createObj({
            objetivo, 
            qualificacoes, 
            cargo
        });
        res.status(200).json({ data: obj });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Edita uma habilidade
exports.atualizaObjetivo = async (req, res) => {
    try {
        var id = req.params.id
        const update = {
            objetivo: req.body?.objetivo,
            qualificacoes: req.body?.qualificacoes,
            cargo: req.body?.cargo
        }
        const obj_edit = await PortServices.atualizaObj(id, update);
        res.status(200).json({ data: obj_edit });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};








/////////////////////// HABILIDADES //////////////////////

exports.getHabilidade = async (req, res) => {
    try {
        const habilidade = await PortServices.getObj();
        res.status(200).json({ data: habilidade });w
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Cria uma habilidade
exports.createHabilidade = async (req, res) => {
    try {
        const {objetivo, qualificacoes, cargo} = req.body
        const obj = await PortServices.createObj({
            objetivo, 
            qualificacoes, 
            cargo
        });
        res.status(200).json({ data: obj });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Edita uma habilidade
exports.atualizaHabilidade = async (req, res) => {
    try {
        var id = req.params.id
        const update = {
            objetivo: req.body?.objetivo,
            qualificacoes: req.body?.qualificacoes,
            cargo: req.body?.cargo
        }
        const obj_edit = await PortServices.atualizaObj(id, update);
        res.status(200).json({ data: obj_edit });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};