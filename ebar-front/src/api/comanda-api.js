import axios from 'axios'
import '@/api/axios.config.js'

function GetAll(){
    return axios.get("comanda/GetAll")
}

export default { GetAll }