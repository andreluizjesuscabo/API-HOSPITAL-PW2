const express = require('express');

const especialidadeModel = require('../model/especialidadeModel');

/* GERENCIDOR DE ROTAS */
const router = express.Router();

router.post('/especialidade/inserir', (req, res) => {

    let nome_especialidade = req.body.nome_especialidade;

    especialidadeModel.create(
        { nome_especialidade }
    ).then(
        () => {
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Especialidade inserida com sucesso'
            });
        }
    ).catch(
        (error) => {
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;