import React from 'react'
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'
import { openDrawer } from '../../redux/actions/OpenDrawerAction'
import { openComponent } from '../../redux/actions/OpenComponentAction'
// #Layouts & Components
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
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
                            <ListItem button key={key}
                                onClick={() => {
                                    props.openComponent(data["text"] , true)
                                    props.openDrawer(!props.isOpenDrawer)
                                }}
                            >
                                <ListItemIcon>
                                    <Icon style={{ color : '#f5f6fa' }}>
                                        {data["icon"]}
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText>
                                    <font style={{ color : '#f5f6fa' }}>
                                        {data["text"]}
                                    </font>
                                </ListItemText>
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

    isOpenDrawer : state.openDrawerReducer.isOpenDrawer,
    actionComponent : state.openComponentReducer.actionComponent

})

const SimpleDrawer = connect(mapStateToProps , { openDrawer , openComponent })(SimpleDrawerWithRedux)

export {

    SimpleDrawer

}