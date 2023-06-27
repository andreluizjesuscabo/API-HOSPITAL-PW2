/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/* IMPORTAÇÃO DA MODEL DE ESPECIALIDADE */
const especialidade = require('./especialidadeModel');

/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA DE CATEGORIAS 
PARAMETROS:
1 - NOME DA TABELA
2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAPOS, SEUS TIPOS E
    REGRAS DE PREENCHIMENTO
*/

const medico = connection.define(
    'tbl_medico',
    {
        nome_medico:{
            type:sequelize.STRING(500),
            allowNull:false
        },
        email_medico:{
            type:sequelize.STRING(100),
            allowNull:false
        },
        telefone_medico:{
            type:sequelize.STRING(10),
            allowNull:false
        },
        celular_medico:{
            type:sequelize.STRING(11),
            allowNull:false
        },
        foto:{
            type:sequelize.STRING(255),
            allowNull:false
        }
    }
);





/* CHAVE PRIMARIA DE ESPECIALIDADE (1) VIRA CHAVE ESTRANGEIRA (N) EM MEDICO */
especialidade.hasMany(medico);

/* CHAVE ESTRANGEIRA DE MEDICO (N) É A CHAVE PRIMARIA DE ESPECIALIDADE (1) */
medico.belongsTo(especialidade);

//medico.sync({force:false});

module.exports = medico;