import axios from 'axios';
import config from '../config';

const httpInterceptor = (http) => {
    let count = 1;

    http.interceptors.request.use(
        config => {

            if (config.url.includes("admin")) {
                const token = sessionStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
            }
            return config;
        },
        error => {
            return Promise.reject(error)
        }
    )

    http.interceptors.response.use((response) => {
        return response
    }, async function (error) {

        const originalRequest = error.config;
        const retryToken = axios.create();
        console.log(error);
        if (error.response.status === 403) {
            await retryToken.post(`${config.API_BASE_URL}/auth/refreshToken`, {
                token: sessionStorage.getItem("refreshToken"),
                username: sessionStorage.getItem("username")
            })
                .then((res) => {
                    sessionStorage.setItem('token', res.data.token);
                });

            originalRequest.headers['Authorizatoin'] = `Bearer ${sessionStorage.getItem('token')}`;
            return (http(originalRequest))
        }

        return Promise.reject(error);
    });
}

export default httpInterceptor;