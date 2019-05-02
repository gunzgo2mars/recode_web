import { STEPPER_PRODUCT , STEPPER_PLACES , STEPPER_ADMIN , STEPPER_NEWS } from '../actions/type'

const initialState = {

    productStepperActive : 0,
    placesStepperActive : 0,
    adminStepperActive : 0,
    newsStepperActive : 0

}


export default (state = initialState , action) => {

    switch(action.type) {

        case STEPPER_PRODUCT :

            return {
                ...state,
                productStepperActive : action.step

            }

        case STEPPER_PLACES :
            return {
                ...state,
                placesStepperActive : action.step
            }

        case STEPPER_ADMIN :
            return {
                ...state,
                adminStepperActive : action.step
            }

        case STEPPER_NEWS : 
            return {
                ...state,
                newsStepperActive : action.step
            }

        default : 
            return state

    }

}