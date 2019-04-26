import axios from 'axios'
import Swal from 'sweetalert2'

const ReadBarcode = async (barcode) => {

    const request_DATA = {

        barcode : barcode

    }

    axios.post('http://localhost:1234/admin/API/v1/readBarcode' , request_DATA)
        .then(res => {

            if(res.data.length === 0) {

                Swal.fire("" , "" , 'error')

            }

            if(res.data.error) {

                Swal.fire(res.data.title , res.data.message , 'error')

            } else {

                return res.data

            }

        })
        

}

export {

    ReadBarcode

}