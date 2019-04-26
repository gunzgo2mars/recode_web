import { OPEN_DIALOG } from './type'

export const openDialog = (isOpen) => dispatch => {

    dispatch({

        type : OPEN_DIALOG,
        payload : isOpen

    })

}