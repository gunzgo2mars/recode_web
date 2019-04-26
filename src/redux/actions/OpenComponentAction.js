import { OPEN_COMPONENT , OPEN_FORM } from './type'


const openComponent = (component , isBack) => dispatch => {

    dispatch({
        type : OPEN_COMPONENT,
        payload : component,
        isBack : isBack
    })

}

const openForm = (form , isBack) => dispatch => {

    dispatch({

        type : OPEN_FORM,
        form : form,
        isBack : isBack

    })

}

export {

    openComponent,
    openForm

}