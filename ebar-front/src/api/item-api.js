import axios from 'axios'
import '@/api/axios.config.js'

function GetAll(){
    return axios.get("item/GetAll")
}

export default { GetAll }