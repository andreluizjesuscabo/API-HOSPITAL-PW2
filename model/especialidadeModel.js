/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA DE CATEGORIAS 
PARAMETROS:
1 - NOME DA TABELA
2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAPOS, SEUS TIPOS E
    REGRAS DE PREENCHIMENTO
*/

const especialidade = connection.define(
    'tbl_especialidade',
    {
        nome_especialidade:{
            type:sequelize.STRING(100),
            allowNull:false
        }
    }
);

//especialidade.sync({force:false});

module.exports = especialidade;