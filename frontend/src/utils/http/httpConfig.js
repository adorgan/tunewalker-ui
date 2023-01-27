import axios from 'axios'
import config from '../config';
import httpInterceptor from './httpInterceptor';

const http = axios.create({
    baseURL: config.API_BASE_URL
})

httpInterceptor(http)

export default http