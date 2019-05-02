import axios from 'axios'

let local = 'http://localhost:1234'
let host = 'http://recode-app.com'

const Authentication = async (email , password) => {

    const request_DATA = {

        email : email,
        password : password

    }

    return axios.post(local + '/admin/API/v1/readAuthAdmin' , JSON.stringify(request_DATA) , {
        headers : {
            'Content-Type' : 'application/json'
        }
    })
       

}

const DestroyPayload = async (token) => {

    const request_DATA = {

        ac_token_api : token

    }

    return axios.post(local + '/admin/API/v1/destroyAdminPayload' , JSON.stringify(request_DATA) , {
        headers : {
            'Content-Type' : 'application/json'
        }
    })

}


export {

    Authentication,
    DestroyPayload

}