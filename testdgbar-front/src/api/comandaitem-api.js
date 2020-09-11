import axios from 'axios'
import '@/api/axios.config.js'

function inserirItemComanda(comandaId, itemId){
    return axios.post("comandaItem/inserirItemComanda",{"comandaId": comandaId, "itemId":itemId})
}

function gerarNotaFiscalComanda(comandaId){
    return axios.post("comandaItem/gerarNotaFiscalComanda?comandaId="+comandaId)
}

function resetarComanda(comandaId){
    return axios.post("comandaItem/resetarComanda?comandaId="+comandaId)
}

export default { inserirItemComanda, gerarNotaFiscalComanda, resetarComanda }