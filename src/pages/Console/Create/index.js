// # Cores
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// # Components & Layouts

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class Create extends React.Component {

    constructor(props) {

        super(props)

        this.state = {


        }

    }

    render() {

        return (
           
                <Card
                    style={{ backgroundColor : this.props.backgroundColor , width : 375 , height : 250 }}
                >
                    <CardActionArea
                        onClick={() => this.props.onClick()}
                    >
                        <CardMedia
                            
                            component={'img'}
                            image={this.props.image}
                            height={'150'}
                            title={this.props.actionTitle}
                        />
                        <Typography style={{ color : this.props.color , padding : 10 }} gutterBottom variant={'h6'} component={'h5'}>
                            {this.props.actionTitle}
                        </Typography>
                    </CardActionArea>
                    <CardActions>
                        <Button size={'small'} color={'secondary'} onClick={() => this.props.startOnClick()} >
                            Start
                        </Button>
                        <Button size={'small'} color={'secondary'} onClick={() => this.props.learnMoreOnClick()}>
                            Learn more
                        </Button>
                    </CardActions>
                </Card>

        )

    }


}

Create.propTypes = {

    image : PropTypes.string,
    actionTitle : PropTypes.string,
    onClick : PropTypes.func,
    startOnClick : PropTypes.func,
    learnMoreOnClick : PropTypes.func,
    backgroundColor : PropTypes.string,
    color : PropTypes.string

}

export default Create