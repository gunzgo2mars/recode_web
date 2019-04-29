import {

    NEWS_TITLE,
    NEWS_DES,
    NEWS_THUMBNAIL,
    NEWS_TYPE,
    NEWS_REF,
    NEWS_FIRSTIMAGE,
    NEWS_SECONDIMAGE,
    NEWS_THIRDIMAGE

} from '../actions/type'


const initialState = {

    news_title : null,
    news_des : null,
    news_thumbnail : null,
    news_type : null,
    news_ref : null,
    news_firstimage : null,
    news_secondimage : null,
    news_thirdimage : null


}

export default (state = initialState , action) => {

    switch(action.type) {

        case NEWS_TITLE : 
            return {
                ...state,
                news_title : action.title
            }

        case NEWS_DES : 
            return {
                ...state,
                news_des : action.des
            }

        case NEWS_THUMBNAIL :
            return {
                ...state,
                news_thumbnail : action.file
            }

        case NEWS_TYPE : 
            return {
                ...state,
                news_type : action.category
            }

        case NEWS_REF :
            return {
                ...state,
                news_ref : action.ref
            }
        
        case NEWS_FIRSTIMAGE :
            return {
                ...state,
                news_firstimage : action.file
            }
        
        case NEWS_SECONDIMAGE :
            return {
                ...state,
                news_secondimage : action.file
            }

        case NEWS_THIRDIMAGE : 
            return {
                ...state,
                news_thirdimage : action.file

            }
        
        default : return state

    }

}