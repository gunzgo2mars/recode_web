import { OPEN_DRAWER } from './type'


export const openDrawer = (isOpen) => dispatch => {

    dispatch({
        type : OPEN_DRAWER,
        payload : isOpen
    })

}