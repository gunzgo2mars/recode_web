// #Cores
import React from 'react'
// # Router Dom
import { Redirect } from 'react-router-dom'
// #Redux
import { connect } from 'react-redux'
import { authAdmin } from '../../redux/actions/AuthAction'
// # Service/API
import { Authentication } from '../../services/API/Auth'
// #Layout & Components
import CircularProgress from '@material-ui/core/CircularProgress'
/// -> Card
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
/// -> TextField
import TextField from '@material-ui/core/TextField'
/// -> Buttons
import Button from '@material-ui/core/Button'
/// -> Icons
import Icon from '@material-ui/core/IconButton'
/// #Styles
import '../../styles/main.css'
import '../../styles/login.css'
import Swal from 'sweetalert2';

class Login extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            isError : false,
            email : null,
            password : null,
            payload : [],
            onLoad : false

        }

    }

    componentDidMount() {

        this.setState({

            onLoad : false

        })

    }

    _AuthAdmin =  async () => {

        await Authentication(this.state.email , this.state.password)
            .then(res => {

                if(res.data.length === 0) {

                    Swal.fire("Error" , "Error data length is null." , 'error')

                }

                if(res.data.error) {

                    Swal.fire(res.data.title , res.data.message , 'error')

                } else {

                    this.setState({ payload : res.data.payload })

                }

            })
            .then(() => {

                this.props.authAdmin(this.state.payload)

            })
            .then(() => {

                if(this.props.authPayload.payload !== null) {

                    sessionStorage.setItem('payload' , JSON.stringify(this.props.authPayload.payload))
                    sessionStorage.setItem('token' ,JSON.stringify(this.props.authPayload.payload.token))
                    this.props.history.push(`/console`)

                }

            })
            .catch(err => {
                Swal.fire("Error Axios" , err , 'error')
                    .then(() => window.location.reload())
            })
        
        

    }
    
    render() {

        if(sessionStorage.getItem('payload') === null) {

            return (
                <div className={'main-container bg'}>
                    <div className={'title-header'}>RECODE</div>
                    <Card className={'login-card'}>
                        <CardContent className={'full-content'}>
                            <div className={'flex AIStart'}>
                                <pre className={'title'}>Dashboard login</pre>
                                <pre className={'sub-title'}>Product management system for API.</pre>
                                <pre className={'sub-title'}>(v : 0.1)</pre>
                            </div>
                            <div className={'flex'}>
                                <TextField 
                                    className={'text-input'}
                                    label={'Email'}
                                    variant={'outlined'}
                                    type={'text'}
                                    error={this.state.isError}
                                    onChange={(e) => this.setState({ email : e.target.value })}
                                />
                                <TextField
                                    className={'text-input mt-top'}
                                    label={'Password'}
                                    variant={'outlined'}
                                    type={'password'}
                                    error={this.state.isError}
                                    onChange={(e) => this.setState({ password : e.target.value })}
                                />
                            </div>
                            <div className={'flex'}>
                                <Button variant={'outlined'} color="primary" className={'button'} onClick={() => {
                                    if(this.state.email === null && this.state.password === null) {
    
                                        this.setState({ isError : true })
                            
                                    } else {
                            
                                        this.setState({ isError : false })
                            
                                    }
                                    this.setState({ onLoad : true })
                                    this._AuthAdmin()
                            
                                }}>
                                    {this.state.onLoad ? (
                                        <CircularProgress style={{ width : 18 , height : 18 , marginRight : 10 }} />
                                    ) : null}
                                    LOGIN
                                </Button>
                                <Button variant={'text'} color="secondary" className={'button mt-top'}>
                                    Request User
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )

        } else {

            return <Redirect to={'/console'} />

        }

    }

}

const mapStateToProps = state => ({

    authPayload : state.authReducer

})

export default connect( mapStateToProps , { authAdmin })(Login)