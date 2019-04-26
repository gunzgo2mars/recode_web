import { OPEN_COMPONENT , OPEN_FORM } from '../actions/type'

const initialStatae = {

    actionComponent : 'Create',
    backToDefault : true,
    actionForm : ''
    
}


export default (state = initialStatae , action) => {

    switch(action.type) {

        case OPEN_COMPONENT :
            return {

                ...state,
                actionComponent : action.payload,
                backToDefault : action.isBack
                
            }
        case OPEN_FORM : 
            return {

                ...state,
                actionForm : action.form,
                backToDefault : action.isBack

            }
        default:
            return state;

    }

}