import { STEPPER_PRODUCT , STEPPER_PLACES } from '../actions/type'

const initialState = {

    productStepperActive : 0,
    placesStepperActive : 0

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

        default : 
            return state

    }

}