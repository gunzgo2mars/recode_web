import { AUTH_ADMIN , DESTROY_PAYLOAD } from '../actions/type'

const initialState = {

    payload : []

}

export default (state = initialState , action) => {

    switch(action.type) {

        case AUTH_ADMIN :

            return {

                ...state,
                payload : action.payload

            }

        default :
            return state

    }

}