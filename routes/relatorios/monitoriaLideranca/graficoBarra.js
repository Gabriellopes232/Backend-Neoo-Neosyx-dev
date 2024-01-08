const sql = require('mssql');
const express = require('express');
const router = express.Router();
const config = require('../../../config/config.json');
const { get } = require('../../../lib/poolManager');
const connection = require ('../../../config/' + config.monitoriaAgentes)

router.get('/', function (req, res){

    const{
        almope,
        id
    } = req.query

    if(!almope) {
        res.status(400).json('Almope não informado')
        return
    }

    retornaDados(almope,id, res)
});

async function retornaDados(almope, id, res){
    try {
        let pool = await get('BDRechamadasGeral', connection)
        
        let resultGrafico = await pool.request()
            .input('almope', sql.VarChar, almope)
            .input('id',     sql.Int,   id)
            .execute('s_Monitoramento_Lideranca_Retorna_Grafico')

        res.json(resultGrafico?.recordset)

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = router