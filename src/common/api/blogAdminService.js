import axiosClient from "./axiosClient";


const API_PATH = '/api/v1/admin';

const getHeaderConfig = () => {
    return {
        headers: {
            token: localStorage.getItem('token')
        }
        
    }
}
const getStatistic = () =>{
    return axiosClient.get(API_PATH + '/statistic/by-week', getHeaderConfig())
}
const deleteArticle = (articleId) =>{
    return axiosClient.delete(API_PATH +'/articles'+`/${articleId}`, getHeaderConfig() )
}
const createArticle = (article) =>{
    return axiosClient.post(API_PATH + '/articles', article, getHeaderConfig())
}
const updateArticle = (article, articleId) =>{
    return axiosClient.put(API_PATH + '/articles' +`/${articleId}` , article, getHeaderConfig())
}
const getArticleId = (articleId) =>{
    return axiosClient.get(API_PATH + '/articles' + `/${articleId}`)
}
const getArticle = (page,size,body) =>{
    return axiosClient.post(API_PATH + '/articles' + '/filter' + `?page=${page}&size=${size}`,body, getHeaderConfig())
}


const BlogAdminService = {
    getStatistic,
    deleteArticle,
    createArticle,
    updateArticle,
    getArticle,
    getArticleId
}

export default BlogAdminService