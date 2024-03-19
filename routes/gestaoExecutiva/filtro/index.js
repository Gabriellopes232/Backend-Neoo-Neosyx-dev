//carregando modulos
const sql = require('mssql');
const express = require('express');
const router = express.Router();
const config = require('../../../config/config.json');
const { get } = require('../../../lib/poolManager')
const connection = require('../../../config/' + config.executiva);

router.get('/cliente', function (req, res){

    const {
        dataInicial, 
        dataFinal, 
        idCliente = '-1', 
        idOperacao= '-1', 
        idDiretor= '-1', 
        idGerente= '-1', 
        idCoordenador= '-1', 
        idSupervisor= '-1',
        idOperador= '-1',
    } = req.query

    retornaCliente(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res);

})
async function retornaCliente(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res){
    try {

        let pool = await get('BDRechamadasGeral', connection)
        let resultCliente = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Cliente')

        let resultOperacao = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Campanha')


        let resultGerente= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Gerente')

        let resultCoordenador= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Coordenador')

        let resultSupervisor= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Supervisor')

            
        let retorno = {
                cliente: resultCliente?.recordset,
                operacao: resultOperacao?.recordset,
                gerente: resultGerente?.recordset,
                coordenador: resultCoordenador?.recordset,
                supervisor: resultSupervisor?.recordset,
        }

        res.json(retorno)

    } catch (error) {
        res.status(500).json(error)
    }
}
//Rota para exibição das operações no filtro
router.get('/operacao', function (req, res){

    const {
        dataInicial, 
        dataFinal, 
        idCliente = '-1', 
        idOperacao= '-1', 
        idDiretor= '-1', 
        idGerente= '-1', 
        idCoordenador= '-1', 
        idSupervisor= '-1',
        idOperador= '-1',
    } = req.query

    retornaOperacao(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res);

})
async function retornaOperacao(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res){
    try {

        let pool = await get('BDRechamadasGeral', connection)
        let resultCliente = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Cliente')

        let resultOperacao = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Campanha')

        let resultGerente= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Gerente')

        let resultCoordenador= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Coordenador')

        let resultSupervisor= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Supervisor')
        
            
        let retorno = {
                cliente: resultCliente?.recordset,
                operacao: resultOperacao?.recordset,
                gerente: resultGerente?.recordset,
                coordenador: resultCoordenador?.recordset,
                supervisor: resultSupervisor?.recordset
        }

        res.json(retorno)

    } catch (error) {
        res.status(500).json(error)
    }
}
//Rota para exibição dos gerentes no filtro
router.get('/gerente', function (req, res){

    const {
        dataInicial, 
        dataFinal, 
        idCliente = '-1', 
        idOperacao= '-1', 
        idDiretor= '-1', 
        idGerente= '-1', 
        idCoordenador= '-1', 
        idSupervisor= '-1',
        idOperador= '-1',
    } = req.query

    retornaGerente(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res);

})
async function retornaGerente(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res){
    try {

        let pool = await get('BDRechamadasGeral', connection)
        let resultCliente = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Cliente')

        let resultOperacao = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Campanha')

        let resultGerente= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Gerente')

        let resultCoordenador= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Coordenador')

        let resultSupervisor= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Supervisor')
        
            
        let retorno = {
                cliente: resultCliente?.recordset,
                operacao: resultOperacao?.recordset,
                gerente: resultGerente?.recordset,
                coordenador: resultCoordenador?.recordset,
                supervisor: resultSupervisor?.recordset
        }

        res.json(retorno)

    } catch (error) {
        res.status(500).json(error)
    }
}
//Rota para exibição dos coordenadores no filtro
router.get('/coordenador', function (req, res){

    const {
        dataInicial, 
        dataFinal, 
        idCliente = '-1', 
        idOperacao= '-1', 
        idDiretor= '-1', 
        idGerente= '-1', 
        idCoordenador= '-1', 
        idSupervisor= '-1',
        idOperador= '-1',
    } = req.query

    retornaCoordenador(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res);

})
async function retornaCoordenador(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res){
    try {

        let pool = await get('BDRechamadasGeral', connection)
        let resultCliente = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Cliente')

        let resultOperacao = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Campanha')

        let resultGerente= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Gerente')

        let resultCoordenador= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Coordenador')

        let resultSupervisor= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Supervisor')
            
            
        let retorno = {
                cliente: resultCliente?.recordset,
                operacao: resultOperacao?.recordset,
                gerente: resultGerente?.recordset,
                coordenador: resultCoordenador?.recordset,
                supervisor: resultSupervisor?.recordset
        }

        res.json(retorno)

    } catch (error) {
        res.status(500).json(error)
    }
}
//Rota para exibição dos supervisores no filtro
router.get('/supervisor', function (req, res){

    const {
        dataInicial, 
        dataFinal, 
        idCliente = '-1', 
        idOperacao= '-1', 
        idDiretor= '-1', 
        idGerente= '-1', 
        idCoordenador= '-1', 
        idSupervisor= '-1',
        idOperador= '-1',
    } = req.query

    retornaSupervisor(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res);

})
async function retornaSupervisor(dataInicial, dataFinal, idCliente, idOperacao, idDiretor, idGerente, idCoordenador, idSupervisor, idOperador, res){
    try {

        let pool = await get('BDRechamadasGeral', connection)
        let resultCliente = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Cliente')

        let resultOperacao = await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Campanha')

        let resultGerente= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Gerente')

        let resultCoordenador= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Coordenador')

        let resultSupervisor= await pool.request()
            .input('dataInicial', sql.DateTime, dataInicial)
            .input('dataFinal', sql.DateTime, dataFinal)
            .input('idCliente', sql.Int, idCliente)
            .input('idOperacao', sql.Int, idOperacao)
            .input('idDiretor', sql.Int, idDiretor)
            .input('idGerente', sql.Int, idGerente)
            .input('idCoordenador', sql.Int, idCoordenador)
            .input('idSupervisor', sql.Int, idSupervisor)
            .input('idOperador', sql.Int, idOperador)
            .execute('s_Gestao_Executiva_Retorna_Dados_Supervisor')
    
            
        let retorno = {
                cliente: resultCliente?.recordset,
                operacao: resultOperacao?.recordset,
                gerente: resultGerente?.recordset,
                coordenador: resultCoordenador?.recordset,
                supervisor: resultSupervisor?.recordset
        }

        res.json(retorno)

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = router