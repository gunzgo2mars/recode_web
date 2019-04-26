// # Type(Redux)
import { AUTH_ADMIN } from './type'
// # Services
import { DestroyPayload } from '../../services/API/Auth'
// # Components
import Swal from 'sweetalert2'

const authAdmin = (payload) => dispatch => {

    dispatch({
        type : AUTH_ADMIN,
        payload : payload
    })

}

const destroyPayload = (token) => dispatch => {

    DestroyPayload(token)
        .then(res => {

            if(res.data.length === 0) {

                Swal.fire("Error API" , "Response data is empty(null)." , 'error')

            }

            if(res.data.error) {

                Swal.fire(res.data.title , res.data.message , 'error')

            } else {
                
                sessionStorage.removeItem('payload')
                
            }

        })
        .then(() => {

            if(sessionStorage.getItem('payload') === null) {

                window.location.reload()
                
            }


        })
        .catch(err => console.log(err))

}

export {

    authAdmin,
    destroyPayload

}