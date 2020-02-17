import httpClient from './httpClient';
import Nprogress from 'nprogress';

const getVenuesCategories = () => httpClient.get('/venues/categories?limit=5');

const getVenuesSearch = (params) => httpClient.get('/venues/search',{params});

const getVenuesDetail = (id) => httpClient.get('/venues/'+id);

httpClient.interceptors.request.use(config => {
    Nprogress.start()
    return config;
});

httpClient.interceptors.response.use(response => {
    Nprogress.done()
    return response
});

export { getVenuesCategories, getVenuesSearch, getVenuesDetail }