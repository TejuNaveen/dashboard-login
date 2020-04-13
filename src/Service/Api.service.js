import axios from 'axios';

function getRequest(url, params){
    return axios.get(url);    
}
export {getRequest};