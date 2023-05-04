import { FAVORITE_ADD, FAVORITE_REMOVE } from "./action"

const initState = {
    ids: []
}

const favoriteReducer = (state=initState, action) =>{
    
    switch(action.type){
        case FAVORITE_ADD:
            const newIds = action.payload
            const checkIds = state.ids.find(x =>x === action.payload)
           
           if(!checkIds) {
            return {
                 ...state,
                ids: [...state.ids, newIds]
            }
             } else{    
                return {
                    ...state
                }
             }
        case FAVORITE_REMOVE:
            return{
                    ...state,
                    ids: state.ids.filter(article =>article !== action.payload)
            }
        default :
            return state
    }
}
export default favoriteReducer  