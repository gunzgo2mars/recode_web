import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { request } from 'https';

class Test extends React.Component {


    constructor(props) {

        super(props)

        this.state = {

            
            
            // Product Payload Test
            file : null,
            barcode : null,
            category : null,
            brand : null,
            thumbnail : null,
            price : null,
            name : null,
            detail : null


        }

    }

    testCreateProduct = () => {

        let formData = new FormData()
        formData.append('file' , this.state.file)

        const product_payload = {

            barcode : this.state.barcode,
            category : this.state.category,
            brand : this.state.brand,
            thumbnail : this.state.thumbnail,
            price : [
                {
                    th : this.state.price,
                    en : this.state.price,
                    cn : this.state.price
                }
            ],

            name : [

                {
                    th : this.state.name,
                    en : this.state.name,
                    cn : this.state.name
                }

            ],
            detail : [
                {
                    th : this.state.detail,
                    en : this.state.detail,
                    cn : this.state.detail
                }
            ]

        }

        axios.post('http://localhost:1234/admin/API/v1/createProductByAdmin' , product_payload)
            .then(res => {

                if(res.data.error) {

                    Swal.fire(res.data.title , res.data.message , 'error')

                } else {

                    axios.post('http://localhost:1234/admin/API/v1/createExtensionThumbnail' , formData , {
                        headers : { 'content-type' : 'multipart/form-data' }
                    })
                        .then(res => {

                            if(res.data.error) {

                                Swal.fire(res.data.title , res.data.message , 'error')

                            } else {

                                Swal.fire(res.data.title , res.data.message , 'success')

                            }

                        })
                        .catch(err => console.log(err))

                }

            })
            .catch(err => console.log(err))

    }


    render() {

        return (
            <div>
                <br />
                <input type={'file'} onChange={(e) => this.setState({ thumbnail : e.target.files[0].name , file : e.target.files[0] })} />
                <br /><br />
                <input type={'text'} onChange={(e) => this.setState({ barcode : e.target.value })} />
                <br /><br />
                <input type={'text'} onChange={(e) => this.setState({ category : e.target.value })} />
                <br /><br />
                <input type={'text'} onChange={(e) => this.setState({ brand : e.target.value })} />
                <br /><br />
                <input type={'text'} onChange={(e) => this.setState({ price : e.target.value })} />
                <br /><br />
                <input type={'text'} onChange={(e) => this.setState({ name : e.target.value })} />
                <br /><br />
                <input type={'text'} onChange={(e) => this.setState({ detail : e.target.value })} />
                <br /><br />
                <button onClick={() => this.testCreateProduct()}>Static Fire!</button>
                <br /><br />
            </div>
        )

    }

}


export default Test