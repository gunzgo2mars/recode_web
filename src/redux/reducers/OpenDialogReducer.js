import { OPEN_DIALOG } from '../actions/type'

const initialState = {
    
    isDialogOpen : false

}

export default (state = initialState , action) => {

    switch(action.type) {

        case OPEN_DIALOG :

            return {
                ...state,
                isDialogOpen : action.payload
            }

        default :
            return state

    }

}