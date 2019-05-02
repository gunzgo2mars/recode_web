// Redux
import { combineReducers } from 'redux'
// Components
import OpenDrawerReducer from './OpenDrawerReducer'
import OpenComponentReducer from './OpenComponentReducer'
import OpenDialogReducer from './OpenDialogReducer'

import StepperReducer from './StepperReducer'
import ProductFormReducer from './ProductFormReducer'
import PlaceFormReducer from './PlaceFormReducer'
import CategoriesFormReducer from './CategoriesFormReducer'
import NewsFormReducer from './NewsFormReducer'
import AdminFormReducer from './AdminFormReducer'

// API
import AuthReducer from './AuthReducer'

export default combineReducers({

    openDrawerReducer : OpenDrawerReducer,
    openComponentReducer : OpenComponentReducer,
    authReducer : AuthReducer,
    openDialogReducer : OpenDialogReducer,
    stepperReducer : StepperReducer,
    productFormReducer : ProductFormReducer,
    placeFormReducer : PlaceFormReducer,
    categoriesFormReducer : CategoriesFormReducer,
    newsFormReducer : NewsFormReducer,
    adminFormReducer : AdminFormReducer

})