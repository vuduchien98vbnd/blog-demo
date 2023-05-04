import BlogAdminService from "../../../../common/api/blogAdminService"

export const FAVORITE_ADD = "favorite/add"
export const FAVORITE_REMOVE = "favorite/remove"


export const addFavoriteAction = (articleId) =>{
    return{
        type: FAVORITE_ADD,
        payload:  articleId
    }
}

export const removeFavoriteAction = (articleId) =>{
    return{
        type: FAVORITE_REMOVE,
        payload:  articleId
    }
}


