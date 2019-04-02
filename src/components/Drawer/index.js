import React from 'react'
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'
import { openDrawer } from '../../redux/actions/OpenDrawerAction'
// #Layouts & Components
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon , { FontAwesome } from 'react-web-vector-icons'
// #Styles
import '../../styles/main.css'

const SimpleDrawerWithRedux = (props) => {
    
    return (
        <Drawer
            anchor={'left'}
            open={props.isOpenDrawer}
            onBackdropClick={() => props.openDrawer(!props.isOpenDrawer)}
        >
            <div
                tabIndex={0}
                role="button"
                className={'drawer'}
            >
                <div className={'full-list'}>
                    <List>
                        {props.list.map((data , key) => (
                            <ListItem button key={key}>
                                <ListItemIcon>
                                    <FontAwesome 
                                        name={data["icon"]}
                                    />
                                </ListItemIcon>
                                <ListItemText style={{ color : 'white' }} primary={data["text"]} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        </Drawer>
    )
}

SimpleDrawerWithRedux.propTypes = {

    list : PropTypes.array.isRequired

}

const mapStateToProps = state => ({

    isOpenDrawer : state.openDrawerReducer.isOpenDrawer

})

const SimpleDrawer = connect(mapStateToProps , { openDrawer })(SimpleDrawerWithRedux)

export {

    SimpleDrawer

}