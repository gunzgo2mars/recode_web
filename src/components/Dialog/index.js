// # React
import React from 'react'
import PropTypes from 'prop-types'
// # Redux
import { connect } from 'react-redux'
import { openDialog } from '../../redux/actions/OpenDialogAction'
import { destroyPayload } from '../../redux/actions/AuthAction'

// # Components & Layouts
import Dialog from '@material-ui/core/Dialog'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Slide from '@material-ui/core/Slide'

// # Styles
import '../../styles/main.css'

const _Transition = (props) => {

    return <Slide direction={'up'} {...props} />

}

const DialogFullScreenRedux = (props) => {

    const payload = JSON.parse(sessionStorage.getItem('payload'))

    return (
        <Dialog
          fullScreen
          open={props.openDialogState.isDialogOpen}
          onClose={() => {
            props.openDialog(!props.openDialogState.isDialogOpen)
          }}
          TransitionComponent={_Transition}
        >
          <AppBar className={'appbar'}>
            <Toolbar style={{ backgroundColor : '#2d3436' }}>
              <IconButton color="inherit" onClick={() => {
                  props.openDialog(!props.openDialogState.isDialogOpen)
                  console.table(sessionStorage.getItem('payload'))
            }} aria-label="Close">
              <Icon style={{ color : '#f5f6fa' }}>
                close
              </Icon>
              </IconButton>
              <Typography variant="h6" color="inherit" className={'flex'}>
                Controller
              </Typography>
            </Toolbar>
          </AppBar>
          <List style={{ paddingTop : 20 }}>
            {props.listItem.map((data , key) => (
                <ListItem key={key} button onClick={() => console.log('ListItemClick')}>
                    <ListItemText primary={data["primary_text"]} />
                </ListItem>
            ))}
            <ListItem button onClick={() => {
                props.destroyPayload(payload.token)
                props.openDialog(!props.openDialogState.isDialogOpen)
            }}>
                    <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
        </Dialog>
    )

}

DialogFullScreenRedux.propTypes = {

    listItem : PropTypes.array.isRequired
    

}

const mapStateToProps = state => ({

    openDialogState : state.openDialogReducer

})

const DialogFullScreen = connect( mapStateToProps , { openDialog , destroyPayload })(DialogFullScreenRedux)

export {

    DialogFullScreen

}