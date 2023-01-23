const Jobs = require("../models/PortJobs")
const Formacao = require("../models/PortFormacao")
const Obj = require("../models/PortObj")


////////////////////////////// JOBS ////////////////////////////////////
// Vai no banco e pega um usuario especifico
exports.getJobs = async () => {
    const jobs = await Jobs.findAll();
    return jobs;
};

// Vai no banco e cria um usuario
exports.createJob = async (data) => {
    const criar_job = await Jobs.create(data)
    console.log(criar_job);
    return criar_job
}

// Vai no banco e atualiza um usuario
exports.atualizaJob = async (id, data) => {
    const encontra_job = await Jobs.findByPk(id);

    if(data.empresa){
        encontra_job.empresa = data.empresa
    }
    if(data.cargo){
        encontra_job.cargo = data.cargo
    }
    if(data.periodo){
        encontra_job.periodo = data.periodo
    }

    const edit_job = await encontra_job.save();
    console.log(edit_job);
    return edit_job
};

// Vai no banco e deleta um usuario
exports.deleteJob = async (id) => {
    const encontra_job = await Jobs.findByPk(id);
    if(encontra_job){
        Jobs.destroy({ where: { id: id } });
    } else {
        console.log("nao existe nada a excluir");
        return encontra_job
    }
};







////////////////////////////// Formacao ////////////////////////////////////
// Vai no banco e pega um usuario especifico
exports.getForma = async () => {
    const formacoes = await Formacao.findAll();
    return formacoes;
};

// Vai no banco e cria um usuario
exports.createForma = async (data) => {
    const criar_formacao = await Formacao.create(data)
    console.log(criar_formacao);
    return criar_formacao
}

// Vai no banco e atualiza um usuario
exports.atualizaForma = async (id, data) => {
    const encontra_forma = await Formacao.findByPk(id);

    if(data.escola){
        encontra_forma.escola = data.escola
    }
    if(data.curso){
        encontra_forma.curso = data.curso
    }
    if(data.periodo){
        encontra_forma.periodo = data.periodo
    }

    const edit_forma = await encontra_forma.save();
    console.log(edit_forma);
    return edit_forma
};

// Vai no banco e deleta um usuario
exports.deletaForma = async (id) => {
    const encontra_forma = await Formacao.findByPk(id);
    if(encontra_forma){
        Formacao.destroy({ where: { id: id }})
    } else {
        console.log("nao existe nada a excluir");
        return encontra_forma
    }
    
}







////////////////////////////// Formacao ////////////////////////////////////
// Vai no banco e pega um usuario especifico
exports.getObj = async () => {
    const obj = await Obj.findAll();
    return obj;
};

// Vai no banco e cria um usuario
exports.createObj = async (data) => {
    const criar_obj = await Obj.create(data)
    console.log(criar_obj);
    return criar_obj
}

// Vai no banco e atualiza um usuario
exports.atualizaObj = async (id, data) => {
    const encontra_obj = await Obj.findByPk(id);

    if(data.objetivo){
        encontra_obj.objetivo = data.objetivo
    }
    if(data.qualificacoes){
        encontra_obj.qualificacoes = data.qualificacoes
    }
    if(data.cargo){
        encontra_obj.cargo = data.cargo
    }

    const edit_obj = await encontra_obj.save();
    console.log(edit_obj);
    return edit_obj
};