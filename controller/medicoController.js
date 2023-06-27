const express = require('express');

const medicoModel = require('../model/medicoModel');

const upload = require('../helpers/upload/upload')

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE MEDICO (POST) */
router.post('/medico/inserir', upload.array('foto',1), (req,res)=>{
    
    let { nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId } = req.body;

    let foto = req.files[0].path;

    medicoModel.create(
        {
            nome_medico,
            email_medico,
            telefone_medico,
            celular_medico,
            foto,
            tblEspecialidadeId
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'MEDICO CADASTRADO COM SUCESSO!'
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

module.exports = router;