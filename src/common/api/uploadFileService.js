import axiosClient from "./axiosClient";

const API_PATH = '/api/v1/files';

const uploadFile = (file) =>{
    return axiosClient.post(API_PATH, file )
}

const uploadFileService={
    uploadFile
}
export default uploadFileService