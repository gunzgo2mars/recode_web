import { STEPPER_PLACES , STEPPER_PRODUCT } from './type'


const productActiveStepper = (step) => dispatch => {

    dispatch({

        type : STEPPER_PRODUCT,
        step : step

    })

}

const placeActiveStepper = (step) => dispatch => {

    dispatch({

        type : STEPPER_PLACES,
        step : step

    })

}

export {

    productActiveStepper,
    placeActiveStepper

}