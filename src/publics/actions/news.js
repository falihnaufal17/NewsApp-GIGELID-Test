import axios from 'axios'
import url from '../API'

export const getNews = () => {
    return {
        type: 'GET_NEWS',
        payload: axios.get(`${url}`)
    }
}