// #Core
import React from 'react'
// #Redux
import { connect } from 'react-redux'
// #Layouts & Components
import { Header } from '../../components/Header'
import { SimpleDrawer } from '../../components/Drawer'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

// #Styles
import '../../styles/main.css'


class Console extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return(
            <div>
                <Header />
                <SimpleDrawer list={[
                    {
                        "text" : "Create",
                        "link" : "create",
                        "icon" : 'addfolder'
                    },
                    {
                        "text" : "Read",
                        "link" : "read",
                        "icon" : 'flietext1'
                    },
                    {
                        "text" : "Update",
                        "link" : "update",
                        "icon" : ''
                    },
                    {
                        "text" : "Delete",
                        "link" : "delete",
                        "icon" : ""
                    }
                ]} />
                <div className={'content-container'} style={{ zIndex: 0 }}>
                    <div className={'artwork'} style={{ zIndex : 0 }}>
                    </div>
                </div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.isOpenDrawer}
                    autoHideDuration={6000}
                >
                    <SnackbarContent
                        message={`${this.props.isOpenDrawer}`}
                    >
                    </SnackbarContent>
                </Snackbar>
            </div>
        )

    }


}


const mapStateToProps = state => ({

    isOpenDrawer : state.openDrawerReducer.isOpenDrawer

})


export default connect(mapStateToProps , null)(Console)