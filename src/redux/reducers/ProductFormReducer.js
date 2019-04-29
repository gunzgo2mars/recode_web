import { 

    PRODUCT_NAME,
    PRODUCT_BARCODE,
    PRODUCT_THUMBNAIL,
    PRODUCT_DETAIL,
    PRODUCT_PRICE,
    PRODUCT_FIRSTIMAGE,
    PRODUCT_SECONDIMAGE,
    PRODUCT_THIRDIMAGE

} from '../actions/type'

const initialState = {

    product_name : null,
    product_barcode : null,
    product_thumbnail : null,
    product_detail : null,
    product_price : null,
    product_firstimage : null,
    product_secondimage : null,
    product_thirdimage : null,
    preview_productfirst : null,
    preview_productsecond : null,
    preview_productthird : null,

    

}

export default (state = initialState, action) => {

    switch(action.type) {

        case PRODUCT_NAME :

            return {

                ...state,
                product_name : action.name

            }
        
        case PRODUCT_BARCODE :
            
            return {

                ...state,
                product_barcode : action.barcode

            }

        case PRODUCT_THUMBNAIL :
            return {

                ...state,
                product_thumbnail : action.file

            }
        
        case PRODUCT_DETAIL :
            
            return {

                ...state,
                product_detail : action.detail

            }

        case PRODUCT_PRICE :
            
            return {

                ...state,
                product_price : action.price

            }

        case PRODUCT_FIRSTIMAGE :
            
            return {

                ...state,
                product_firstimage : action.file,
                preview_productfirst : action.preview

            }

        case PRODUCT_SECONDIMAGE :
            
            return {

                ...state,
                product_secondimage : action.file,
                preview_productsecond : action.preview

            }

        case PRODUCT_THIRDIMAGE : 
            
            return {

                ...state,
                product_thirdimage : action.file,
                preview_productthird : action.preview

            }

        default :
            return state

    }

}