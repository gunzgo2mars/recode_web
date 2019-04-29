import { CATEGORIES_NAME } from '../actions/type'

const initialState = {

    categories_name : null

}

export default (state = initialState , action) => {

    switch(action.type) {

        case CATEGORIES_NAME : 
            return {
                ...state,
                categories_name : action.name
            }

        default : return state

    }

}