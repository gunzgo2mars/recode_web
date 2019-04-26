// #Core
import React from 'react'
import PropTypes from 'prop-types'
// #Redux
import { connect } from 'react-redux'
import { openDrawer } from '../../redux/actions/OpenDrawerAction'
import { openDialog } from '../../redux/actions/OpenDialogAction'
// #Layouts & Components
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'


// #Styles


const styles = theme => ({

    grow : {
        flexGrow : 1
    },

    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },

    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit * 3,
          width: 'auto',
        },
    },

    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
    },

})

const HeaderBarStyles = (props) => {

    const { classes } = props
    
    return(
        <AppBar position={'fixed'} style={{ backgroundColor : '#353b48' , zIndex : 99 }}>
            <Toolbar>
                <IconButton color={'inherit'} onClick={() => props.openDrawer(!props.isOpenDrawer)}>
                   <i className={'material-icons light'}>menu</i>
                </IconButton>
                <pre className={'app-bar-title'}>
                    Recode Console
                </pre>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <i className={'material-icons light'}>search</i>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                        }}
                    />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                <IconButton color={'inherit'}>
                    <i className={'material-icons light'}>inbox</i>
                </IconButton>
                <IconButton onClick={() => props.openDialog(!props.openDialogState.isDialogOpen)} color={'inherit'}>
                    <i className={'material-icons light'}>account_circle</i>
                </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )

}




const mapStateToProps = state => ({
    isOpenDrawer : state.openDrawerReducer.isOpenDrawer,
    openDialogState : state.openDialogReducer
})
const HeaderBar = withStyles(styles)(HeaderBarStyles)
const Header = connect( mapStateToProps  , { openDrawer , openDialog })(HeaderBar)

export {

    Header,

}


