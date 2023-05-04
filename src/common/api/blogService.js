import axiosClient from "./axiosClient";

const API_PATH = '/api/v1/articles';

const getArticle = (page,size) => {
    return axiosClient.get(API_PATH + `?page=${page}&size=${size}`);
}

const getArticleId = (articleId) =>{
    return axiosClient.get(API_PATH + `/${articleId}`)
}


const blogService = {
    getArticle, 
    getArticleId
}

export default blogService