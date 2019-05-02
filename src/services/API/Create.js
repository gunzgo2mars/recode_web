import axios from 'axios'

let local = 'http://localhost:1234'
let host = 'http://recode-app.com'

const APICreateAdmin = (email , password , firstname , lastname) => {

    const Request_DATA = {

        admin_email : email,
        admin_password : password,
        admin_firstname : firstname,
        admin_lastname : lastname

    }

    console.table(Request_DATA)

    return axios.post(local + '/admin/API/v1/createAdminByAdmin' , Request_DATA, {
        headers : {
            'Content-Type' : 'application/json'
        }
    })

}

const APICreatePlace = (name , lat , lon , des , firstimage , secondimage , thirdimage) => {

    const Request_DATA = {

        name : name,
        lat : parseFloat(lat),
        lon : parseFloat(lon),
        des : des,
        gallery : [
            {
                first_image : firstimage,
                second_image : secondimage,
                third_image : thirdimage
            }
        ],
        ac_token_api : sessionStorage.getItem('token').slice(1 , sessionStorage.getItem('token').length - 1)

    }


    return axios.post(local + '/admin/API/v1/createPlaceByAdmin' , Request_DATA , {

        headers : {
            'Content-Type' : 'application/json'
        }

    })

}

const APICreatePlaceGallery = (first_file , second_file , third_file) => {

    let formData = new FormData()

    formData.append("first_image" , first_file)
    formData.append("second_image" , second_file)
    formData.append("third_image" , third_file)


    return axios.post(local + '/admin/API/v1/createExtensionPlaceGallery' , formData , {
        headers : {
            'content-type' : 'multipart/form-data'
        }
    })

}

const APICreateProduct = (barcode , name , detail , price , thumbnail , firstimage ,secondimage , thirdimage , catid , brandid) => {

    const Request_DATA = {

        barcode : barcode,
        name : name,
        detail : detail,
        price : price,
        thumbnail : thumbnail,
        gallery : [
            {
                first_image : firstimage,
                second_image : secondimage,
                third_image : thirdimage
            }
        ],
        category : catid,
        brand : brandid

    }

    console.table(Request_DATA)

    return axios.post(local + '/admin/API/v1/createProductByAdmin' , Request_DATA , {
        headers : {
            'Content-Type' : 'application/json'
        }
    })

}

const APICreateProductGallery = (first_file , second_file , third_file) => {

    let formData = new FormData()

    formData.append("first_image" , first_file)
    formData.append("second_image" , second_file)
    formData.append("third_image" , third_file)

    console.table(formData)

    return axios.post(local + '/admin/API/v1/createExtensionProductGallery' , formData , {
        headers : {
            'content-type' : 'multipart/form-data'
        }
    })

}

const APICreateProductThumbnail = (file) => {

    let formData = new FormData()

    formData.append("thumbnail_file" , file)

    console.table(formData)

    return axios.post(local + '/admin/API/v1/createExtensionProductThumbnail' , formData , {
        headers : {
            'content-type' : 'multipart/form-data'
        }
    })

}

const APICreateNews = (title , des , thumbnail , type , ref , firstimage , secondimage , thirdimage) => {

    const Request_DATA = {

        news_title : title,
        news_des : des,
        news_thumbnail : thumbnail,
        news_type : type,
        news_ref : ref,
        news_gallery : [
            {
                news_firstimage : firstimage,
                news_secondimage : secondimage,
                news_thirdimage : thirdimage
            }
        ],
        ac_token_api : sessionStorage.getItem('token').slice(1 , sessionStorage.getItem('token').length - 1)

    }


    return axios.post(local + '/admin/API/v1/createNewsByAdmin' , Request_DATA, {

        headers : {
            'Content-Type' : 'application/json'
        }

    })

}

const APICreateNewsThumbnail = (file) => {

    let formData = new FormData()

    formData.append('news_thumbnailfile' , file)

    return axios.post(local + '/admin/API/v1/createExtensionNewsThumbnail' , formData , {
        headers : {
            'content-type' : 'multipart/form-data'
        }
    })

}

const APICreateNewsGallery = (first_file , second_file , third_file) => {

    let formData = new FormData()

    formData.append('news_firstfile' , first_file)
    formData.append('news_secondfile' , second_file)
    formData.append('news_thirdfile' , third_file)

    return axios.post(local + '/admin/API/v1/createExtensionNewsGallery' , formData, {
        headers : {
            'content-type' : 'multipart/form-data'
        }
    })

}

const APICreateCategories = (category) => {

    const Request_DATA = {

        categoryname : category

    }

    return axios.post(local + '/admin/API/v1/createCategoryByAdmin' , Request_DATA , {

        headers : {

            'Content-Type' : 'application/json'

        }

    })

}

export {

    // Data
    APICreateProduct,
    APICreatePlace,
    APICreateAdmin,
    APICreateNews,
    APICreateCategories,

    // Upload File
    APICreateNewsGallery,
    APICreatePlaceGallery,
    APICreateNewsThumbnail,
    APICreateProductGallery,
    APICreateProductThumbnail


}