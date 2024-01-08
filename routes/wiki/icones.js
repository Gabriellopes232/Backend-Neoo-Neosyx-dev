//carregando modulos
const sql           = require('mssql');
const express       = require('express');
const router        = express.Router();
const config        = require('../../config/config.json');
const utils         = require('../../lib/utils');
const connection    = require('../../config/' + config.banco);

//fazendo a conexão global
sql.connect(connection)
.then(conn => global.conn = conn)
.catch(err => console.log(err))

//Rota que retorna icones
router.get('/', function(req, res) {
    //const loginUsuario = req.query.loginUsuario
    const {loginUsuario, pesquisa} = req.query 
    console.log(loginUsuario, pesquisa)

    if (!loginUsuario) {
        res.status(400).json('loginUsuario não informado.')
    }

    retornaIcones(loginUsuario,pesquisa,res)
});

async function retornaIcones(loginUsuario,pesquisa,res){
    try {
        // Requisição do banco
        let result = await global.conn.request()
            //define os parametros
            .input('loginUsuario'        , sql.VarChar(100) , loginUsuario ? loginUsuario : '')
            .input('pesquisa'       , sql.VarChar , pesquisa ? pesquisa : '')
            //executa a procedure  
            .execute('s_Wiki_Retorna_Icone')
        
        if (!result.recordset) {
            res.json(result)
        }

        //Puxando array com as informações dos icones   
        let icones = result.recordset
    
        res.json(icones)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = router;