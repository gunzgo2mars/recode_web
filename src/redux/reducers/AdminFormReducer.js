import { ADMIN_EMAIL , ADMIN_PASSWORD , ADMIN_FIRSTNAME , ADMIN_LASTNAME } from '../actions/type'

const initialState = {

    admin_email : null,
    admin_password : null,
    admin_firstname : null,
    admin_lastname : null

}

export default (state = initialState , action) => {

    switch(action.type) {

        case ADMIN_EMAIL : 
            return {
                ...state,
                admin_email : action.email
            }

        case ADMIN_PASSWORD :

            return {
                ...state,
                admin_password : action.password
            }

        case ADMIN_FIRSTNAME :
            
            return {
                ...state,
                admin_firstname : action.firstname

            }

        case ADMIN_LASTNAME :

            return {
                ...state,
                admin_lastname : action.lastname
            }

        default : return state

    }

}