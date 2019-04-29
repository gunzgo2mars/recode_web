import { 

    PLACE_NAME,
    PLACE_LAT,
    PLACE_LON,
    PLACE_DES,
    PLACE_FIRSTIMAGE,
    PLACE_SECONDIMAGE,
    PLACE_THIRDIMAGE

} from '../actions/type'

const initialState = {

    place_name : null,
    place_lat : null,
    place_lon : null,
    place_des : null,
    place_firstimage : null,
    place_secondimage : null,
    place_thirdimage : null,
    place_firstpreview : null,
    place_secondpreview : null,
    place_thirdpreview : null

}


export default (state = initialState , action) => {

    switch(action.type) {

        case PLACE_NAME : 
            return {
                ...state,
                place_name : action.name

            }

        case PLACE_LAT :
            return {
                ...state,
                place_lat : action.lat
            }

        case PLACE_LON :
            return {
                ...state,
                place_lon : action.lon
            }

        case PLACE_DES : 
            return {
                ...state,
                place_des : action.des
            }

        case PLACE_FIRSTIMAGE : 
            return {
                ...state,
                place_firstimage : action.file,
                place_firstpreview : action.preview
            }

        case PLACE_SECONDIMAGE : 
            return {
                ...state,
                place_secondimage : action.file,
                place_secondpreview : action.preview
                    
            }

        case PLACE_THIRDIMAGE :
            return {
                ...state,
                place_thirdimage : action.file,
                place_thirdpreview : action.preview
            }
        
        default : return state

    }

}