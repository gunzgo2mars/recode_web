// Core
import React from 'react'
// Redux
import { connect } from 'react-redux'
// Layout & Components
// #Card
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
// #TextField
import TextField from '@material-ui/core/TextField'
// #Buttons
import Button from '@material-ui/core/Button'
// #Icons
import Icon from '@material-ui/core/IconButton'

// Styles
import '../../styles/main.css'
import '../../styles/login.css'

class Login extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            isError : false

        }

    }
    
    render() {

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
                            />
                            <TextField
                                className={'text-input mt-top'}
                                label={'Password'}
                                variant={'outlined'}
                                type={'password'}
                                error={this.state.isError}
                            />
                        </div>
                        <div className={'flex'}>
                            <Button variant={'outlined'} color="primary" className={'button'} onClick={() => this.setState({ isError : !this.state.isError })}>
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

    }

}

const mapStateToProps = state => ({

    isOpenDrawer : state.openDrawerReducer.isOpenDrawer

})

export default connect()(Login)