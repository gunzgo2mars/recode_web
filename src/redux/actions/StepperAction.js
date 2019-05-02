import { STEPPER_PLACES , STEPPER_PRODUCT , STEPPER_NEWS , STEPPER_ADMIN } from './type'


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

const adminActiveStepper = (step) => dispatch => {

    dispatch({

        type : STEPPER_ADMIN,
        step : step

    })

}

const newsActiveStepper = (step) => dispatch => {

    dispatch({

        type : STEPPER_NEWS,
        step : step

    })

}

export {

    productActiveStepper,
    placeActiveStepper,
    adminActiveStepper,
    newsActiveStepper

}