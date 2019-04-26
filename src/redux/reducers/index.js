// Redux
import { combineReducers } from 'redux'
// Components
import OpenDrawerReducer from './OpenDrawerReducer'
import OpenComponentReducer from './OpenComponentReducer'
import OpenDialogReducer from './OpenDialogReducer'
// API
import AuthReducer from './AuthReducer'

export default combineReducers({

    openDrawerReducer : OpenDrawerReducer,
    openComponentReducer : OpenComponentReducer,
    authReducer : AuthReducer,
    openDialogReducer : OpenDialogReducer

})