import axios from 'axios';
import {
  API_BASE_URL,
} from '../constants/common';

console.log("BASE URL", API_BASE_URL)
const service = axios.create({
  baseURL: 'https://birmsstagging.drc.gov.bt',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'false',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Origin, OPTIONS, X-Requested-With, Content-Type, Accept'
},
});

export default service;