import {  
    
    // Product Types

    PRODUCT_NAME,
    PRODUCT_BARCODE,
    PRODUCT_THUMBNAIL,
    PRODUCT_DETAIL,
    PRODUCT_PRICE,
    PRODUCT_FIRSTIMAGE,
    PRODUCT_SECONDIMAGE,
    PRODUCT_THIRDIMAGE,

    // Place Types

    PLACE_NAME,
    PLACE_LAT,
    PLACE_LON,
    PLACE_DES,
    PLACE_FIRSTIMAGE,
    PLACE_SECONDIMAGE,
    PLACE_THIRDIMAGE,

    // Categories Types

    CATEGORIES_NAME,

    // Admin Types

    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    ADMIN_FIRSTNAME,
    ADMIN_LASTNAME,

    // News Types

    NEWS_DES,
    NEWS_TITLE,
    NEWS_FIRSTIMAGE,
    NEWS_SECONDIMAGE,
    NEWS_THIRDIMAGE,
    NEWS_THUMBNAIL,
    NEWS_TYPE,
    NEWS_REF

} from './type'


// Product Form Actions
const ProductName = (name) => dispatch => { dispatch({ type : PRODUCT_NAME , name : name }) }
const ProductBarcode = (barcode) => dispatch => { dispatch({ type : PRODUCT_BARCODE , barcode : barcode }) }
const ProductThumbnail = (file) => dispatch => { dispatch({ type : PRODUCT_THUMBNAIL , file : file }) }

const ProductDetail = (detail) => dispatch => { dispatch({ type : PRODUCT_DETAIL , detail : detail }) }
const ProductPrice = (price) => dispatch => { dispatch({ type : PRODUCT_PRICE , price : price }) }

const ProductFirstImage = (file) => dispatch => { 

    let reader = new FileReader()
    
    reader.onloadend = () => {
        dispatch({ type : PRODUCT_FIRSTIMAGE , file : file , preview : reader.result })
    }
    
    reader.readAsDataURL(file)


}

const ProductSecondImage = (file) => dispatch => {

    let reader = new FileReader()

    reader.onloadend = () => {

        dispatch({ type : PRODUCT_SECONDIMAGE , file : file , preview : reader.result })

    }

    reader.readAsDataURL(file)

}

const ProductThirdImage = (file) => dispatch => {

    let reader = new FileReader()

    reader.onloadend = () => {

        dispatch({ type : PRODUCT_THIRDIMAGE , file : file , preview : reader.result })

    }

    reader.readAsDataURL(file)

}

// Place Form Action

const PlaceName = (name) => dispatch => { dispatch({ type : PLACE_NAME , name : name }) }
const PlaceLat = (lat) => dispatch => { dispatch({ type : PLACE_LAT , lat : lat }) }
const PlaceLon = (lon) => dispatch => { dispatch({ type : PLACE_LON , lon : lon }) }
const PlaceDes = (des) => dispatch => { dispatch({ type : PLACE_DES , des : des }) }

const PlaceFirstImage = (file) => dispatch => {

    let reader = new FileReader()

    reader.onloadend = () => {

        dispatch({ type : PLACE_FIRSTIMAGE , file : file , preview : reader.result })

    }

    reader.readAsDataURL(file)


}
const PlaceSecondImage = (file) => dispatch => {

    let reader = new FileReader()

    reader.onloadend = () => {

        dispatch({ type : PLACE_SECONDIMAGE , file : file , preview : reader.result })

    }

    reader.readAsDataURL(file)

}
const PlaceThirdImage = (file) => dispatch => {

    let reader = new FileReader()

    reader.onloadend = () => {

        dispatch({ type : PLACE_THIRDIMAGE , file : file , preview : reader.result })

    }

    reader.readAsDataURL(file)

}

const CategoriesName = (name) => dispatch => { dispatch({ type : CATEGORIES_NAME , name : name }) }

const AdminEmail = (email) => dispatch => { dispatch({ type : ADMIN_EMAIL , email : email }) }
const AdminPassword = (password) => dispatch => { dispatch({ type : ADMIN_PASSWORD , password : password }) }
const AdminFirstName = (firstname) => dispatch => { dispatch({ type : ADMIN_FIRSTNAME , firstname : firstname }) }
const AdminLastName = (lastname) => dispatch => { dispatch({ type : ADMIN_LASTNAME , lastname : lastname }) }

const NewsTitle = (title) => dispatch => { dispatch({ type : NEWS_TITLE , title : title }) }
const NewsDes = (des) => dispatch => { dispatch({ type : NEWS_DES , des : des }) }
const NewsThumbnail = (file) => dispatch => { dispatch({ type : NEWS_THUMBNAIL , file : file }) }
const NewsType = (news_type) => dispatch => { dispatch({ type : NEWS_TYPE , category : news_type }) }
const NewsRef = (ref) => dispatch => { dispatch({ type : NEWS_REF , ref : ref }) }
const NewsFirstImage = (file) => dispatch => {

    let reader = new FileReader()

    reader.onloadend = () => {

        dispatch({ type : NEWS_FIRSTIMAGE , file : file , preview : reader.result })

    }

    reader.readAsDataURL(file)


}
const NewsSecondImage = (file) => dispatch => { 

    let reader = new FileReader()

    reader.onloadend = () => {

        dispatch({ type : NEWS_SECONDIMAGE , file : file , preview : reader.result })

    }

    reader.readAsDataURL(file)

}
const NewsThirdImage = (file) => dispatch => {

    let reader = new FileReader()

    reader.onloadend = () => {

        dispatch({ type : NEWS_THIRDIMAGE , file : file , preview : reader.result })

    }

    reader.readAsDataURL(file)

}


export {

    /// Product Form Actions
    ProductName,
    ProductBarcode,
    ProductThumbnail,
    ProductDetail,
    ProductPrice,
    ProductFirstImage,
    ProductSecondImage,
    ProductThirdImage,

    // Place Form Actions

    PlaceName,
    PlaceLat,
    PlaceLon,
    PlaceDes,
    PlaceFirstImage,
    PlaceSecondImage,
    PlaceThirdImage,

    // Categories Form Action

    CategoriesName,

    // Admin Form Action

    AdminEmail,
    AdminPassword,
    AdminFirstName,
    AdminLastName,
    
    // News Form Action

    NewsTitle,
    NewsDes,
    NewsThumbnail,
    NewsType,
    NewsRef,
    NewsFirstImage,
    NewsSecondImage,
    NewsThirdImage


}

