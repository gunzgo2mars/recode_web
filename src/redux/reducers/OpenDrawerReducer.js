import { OPEN_DRAWER } from '../actions/type'

const initialStatae = {

    isOpenDrawer : false

}


export default (state = initialStatae , action) => {

    switch(action.type) {

        case OPEN_DRAWER :
            return {
                ...state,
                isOpenDrawer : action.payload
            }
        default:
            return state
    }

}