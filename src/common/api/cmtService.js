import axiosClient from "./axiosClient";

const API_PATH = '/api/v1/comments'

const getHeaderConfig = () => {
    return {
        headers: {
            token: localStorage.getItem('token')
        }
        
    }
}

const postComment = (articleId, content) => {
    return axiosClient.post(API_PATH + `/${articleId}`, {content}, getHeaderConfig())
}
const getComment = (page,size,articleId) =>{
    return axiosClient.get(API_PATH + `/${articleId}` + `?page=${page}&size=${size}`)
}

const cmtService = {
    postComment,
    getComment
}
export default cmtService