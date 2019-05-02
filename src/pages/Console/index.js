// # Core
import React from 'react'
// # Router Dom
import { Redirect } from 'react-router-dom'
// # Redux
import { connect } from 'react-redux'
import { openForm } from '../../redux/actions/OpenComponentAction'
// # Layouts & Components
import { Header } from '../../components/Header'
import { SimpleDrawer } from '../../components/Drawer'
import { DialogFullScreen } from '../../components/Dialog'

import { CreateAdmin , CreateProducts , CreateCategories , CreateNotifications , CreatePlaces , CreateNews } from './Create/CreateForm'

import Create from './Create'
import Read from './Read'
import Update from './Update'
import Delete from './Delete'

import Grid from '@material-ui/core/Grid'

// #Styles
import '../../styles/main.css'


class Console extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }

        console.log(this.props.authPayload.payload)
        console.log(this.props.isBackToDefault)
    }


    componentDidMount() {
        
        console.log('Redux : ' + this.props.authPayload.payload)

    }

    render() {

        if(sessionStorage.getItem('payload') !== null) {

            return(
                <div>
                    <DialogFullScreen 
                        listItem={[
                            {
                                "primary_text" : "Logout"
                            }
                        ]}
                    />
                    <Header />
                    <SimpleDrawer list={[
                        {
                            "text" : "Create",
                            "link" : "create",
                            "icon" : "add_circle"
                        },
                        {
                            "text" : "List",
                            "link" : "read",
                            "icon" : 'list_alt'
                        },
                        {
                            "text" : "Report",
                            "link" : "update",
                            "icon" : 'insert_chart'
                        },
                    ]} />
                    <div className={'content-container'} style={{ zIndex: 0 }}>
                        
                        {this.props.isBackToDefault ? (
                            <div className={'artwork'} style={{ zIndex : 0 }}></div>
                        ) : null}

                        {this.props.isBackToDefault ? (
                            <div className={'component'} style={{ padding : 20 }}>
                                {this.props.actionComponent === 'Create' ? (
        
                                    <div>
                                        <Grid style={{ marginTop : 5 }} container spacing={24}>
                                            <Grid item xs>
                                                <Create 
                                                    image={'https://cdn.vox-cdn.com/thumbor/ggSkZPfsAM8ITnEbvendtwajXDo=/0x0:2040x1360/1200x800/filters:focal(901x509:1227x835)/cdn.vox-cdn.com/uploads/chorus_image/image/61868725/nstatt_181019_3042_8781.0.jpg'}
                                                    actionTitle={'Create places'}
                                                    onClick={() => this.props.openForm('CreatePlaces' , false)}
                                                    startOnClick={() => console.log('start button clicked!')}
                                                    learnMoreOnClick={() => console.log('learn more button clicked!')}
                                                    color={'#ecf0f1'}
                                                    backgroundColor={'#2c3e50'}
                                                />
                                                
                                            </Grid>
                                            <Grid item xs>
                                                <Create 
                                                    image={'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/p/en/pencil/pdp/pencil-pdp-201810_FMT_WHH?wid=1472&hei=510&fmt=png-alpha&qlt=80&.v=1539622098805'}
                                                    actionTitle={'Create products'}
                                                    onClick={() => this.props.openForm('CreateProduct' , false)}
                                                    startOnClick={() => console.log('start button clicked!')}
                                                    learnMoreOnClick={() => console.log('learn more button clicked!')}
                                                    color={'#ecf0f1'}
                                                    backgroundColor={'#2ecc71'}
                                                />
                                            </Grid>
                                            <Grid item xs>
                                                <Create 
                                                    image={'https://images.summitmedia-digital.com/entrepph/images/2016/08/09/shelf-life-2.png'}
                                                    actionTitle={'Create categories'}
                                                    onClick={() => this.props.openForm('CreateCategories' , false)}
                                                    startOnClick={() => console.log('start button clicked!')}
                                                    learnMoreOnClick={() => console.log('learn more button clicked!')}
                                                    color={'#ecf0f1'}
                                                    backgroundColor={'#9b59b6'}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid style={{ marginTop : 20 }} container spacing={24}>
                                            <Grid item xs>
                                                <Create 
                                                    image={'https://cdn.pixabay.com/photo/2015/01/08/18/26/write-593333_960_720.jpg'}
                                                    actionTitle={'Create admin'}
                                                    onClick={() => this.props.openForm('CreateAdmin' , false)}
                                                    startOnClick={() => console.log('start button clicked!')}
                                                    learnMoreOnClick={() => console.log('learn more button clicked!')}
                                                    color={'#ecf0f1'}
                                                    backgroundColor={'#2980b9'}
                                                />
                                            </Grid>
                                            <Grid item xs>
                                                <Create 
                                                    image={'https://cdn.pixabay.com/photo/2015/05/31/11/34/girl-791231_960_720.jpg'}
                                                    actionTitle={'Create news'}
                                                    onClick={() => this.props.openForm('CreateNews' , false)}
                                                    startOnClick={() => console.log('start button clicked!')}
                                                    learnMoreOnClick={() => console.log('learn more button clicked!')}
                                                    color={'#ecf0f1'}
                                                    backgroundColor={'#e67e22'}
                                                />
                                            </Grid>
                                            <Grid item xs>
                                                <Create 
                                                    image={'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/p/en/pencil/pdp/pencil-pdp-201810_FMT_WHH?wid=1472&hei=510&fmt=png-alpha&qlt=80&.v=1539622098805'}
                                                    actionTitle={'Create products'}
                                                    onClick={() => this.props.openForm('CreateNotifications' , false)}
                                                    startOnClick={() => console.log('start button clicked!')}
                                                    learnMoreOnClick={() => console.log('learn more button clicked!')}
                                                    color={'#ecf0f1'}
                                                    backgroundColor={'#2ecc71'}
                                                />
                                            </Grid>
                                        </Grid>
                                        
                                    </div>
                                        
                                ) : null}
        
                                {this.props.actionComponent === 'Read' ? (
                                    <h1>Read</h1>
                                ) : null}
        
                                {this.props.actionComponent === 'Update' ? (
                                    <h1>Update</h1>
                                ) : null}
        
                                {this.props.actionComponent === 'Delete' ? (
                                    <h1>Delete</h1>
                                ) : null}
                            </div>
                        ) : null}

                        {!this.props.isBackToDefault ? 

                            (this.props.actionForm === 'CreateProduct' ? (
                                <CreateProducts />
                            ) : null)

                        : null}

                        {!this.props.isBackToDefault ? (
                            (this.props.actionForm === 'CreatePlaces' ? (
                                <CreatePlaces />
                            ) : null)
                        ) : null}

                        {!this.props.isBackToDefault ? (
                            (this.props.actionForm === 'CreateCategories' ? (
                                <CreateCategories />
                            ) : null)
                        ) : null}

                        {!this.props.isBackToDefault ? (
                            (this.props.actionForm === 'CreateAdmin' ? (
                                <CreateAdmin />
                            ) : null)
                        ) : null}

                        {!this.props.isBackToDefault ? (

                            (this.props.actionForm === 'CreateNotifications' ? (
                                <CreateNotifications />
                            ) : null)

                        ) : null}


                        {!this.props.isBackToDefault ? (
                            
                            (this.props.actionForm === 'CreateNews' ? (
                                <CreateNews />
                            ) : null)

                        ) : null}

                    </div>
    
                    
    
                </div>
            )

        } else {

            return <Redirect to={'/console_login'} />

        }
        

    }


}


const mapStateToProps = state => ({

    isOpenDrawer : state.openDrawerReducer.isOpenDrawer,
    actionComponent : state.openComponentReducer.actionComponent,
    isBackToDefault : state.openComponentReducer.backToDefault,
    actionForm : state.openComponentReducer.actionForm,
    authPayload : state.authReducer,
    


})


export default connect(mapStateToProps , { openForm })(Console)