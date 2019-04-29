// # Cores
import React from 'react'
// # Redux
import { connect } from 'react-redux'
import { openForm } from '../../../redux/actions/OpenComponentAction'
import { productActiveStepper , placeActiveStepper } from '../../../redux/actions/StepperAction'
import {
    /// Product Form Actions
    ProductName , 
    ProductBarcode , 
    ProductThumbnail , 
    ProductDetail , 
    ProductPrice , 
    ProductFirstImage , 
    ProductSecondImage , 
    ProductThirdImage ,
    /// Place Form Actions
    PlaceName , 
    PlaceLat ,
    PlaceLon ,
    PlaceDes ,
    PlaceFirstImage ,
    PlaceSecondImage ,
    PlaceThirdImage,

    /// Categories Form Actions
    CategoriesName
    
} from '../../../redux/actions/FormAction'
// # Components & Layouts
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Swal from 'sweetalert2'
// # Styles
import '../../../styles/main.css'


const _ProductForm = (props , step) => {

    switch(step) {

        case 0 : 
            return (
                <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column'  }}>
                    <TextField 
                        id={'name'}
                        label={'Name'}
                        style={{ flex : 1 }}
                        margin={'normal'}
                        variant={'outlined'}
                        onChange={(e) => {
                            props.ProductName(e.target.value)
                        }}
                    />

                    <TextField
                        id={'barcode'}
                        style={{ marginTop : 10 , flex : 1 }}
                        label={'Barcode'}
                        margin={'normal'}
                        variant={'outlined'}
                        onChange={(e) => {
                            props.ProductBarcode(e.target.value)
                        }}
                    />
                    <input
                        accept="image/*"
                        style={{ display : 'none' }}
                        id="thumbnail"
                        multiple
                        type="file"
                        onChange={(e) => props.ProductThumbnail(e.target.files[0])}
                    />
                    <label htmlFor="thumbnail">
                        <Button 
                            variant={'outlined'} 
                            component="span"
                            style={{ marginTop : 10 , flex : 1 }}
                        >
                            Upload Thumbnail
                        </Button>
                    </label>
                </Grid>
            )

        case 1 :
            return (
                <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column' }}>
                    <TextField 
                        id={'detail'}
                        label={'Detail'}
                        style={{ flex : 1 }}
                        margin={'normal'}
                        variant={'outlined'}
                        onChange={(e) => {
                            props.ProductDetail(e.target.value)
                        }}
                    />


                    <TextField
                        id={'price'}
                        style={{ marginTop : 10 , flex : 1 }}
                        label={'Price'}
                        margin={'normal'}
                        variant={'outlined'}
                        onChange={(e) => {
                            props.ProductPrice(e.target.value)
                        }}
                    />
    
                </Grid>
            )
        
        case 2 : 
            return (
                <Grid item xs={24} style={{ display : 'flex' }}>
                    <Grid item xs={24}>
                        <Grid item xs={24}>
                            <img src={props.productForm.preview_productfirst} 
                                style={{ width : 150 , height : 150 }}
                            />
                        </Grid>

                        <Grid item xs={24}>
                            <input
                                accept="image/*"
                                style={{ display : 'none' }}
                                id="gallery-1"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    props.ProductFirstImage(e.target.files[0])
                                }}
                            />
                            <label htmlFor="gallery-1">
                                <Button 
                                    variant={'outlined'} 
                                    component="span"
                                    style={{ marginTop : 10 , flex : 1 }}
                                >
                                    Upload Thumbnail
                                </Button>
                            </label>
                        </Grid>
                    </Grid>

                    <Grid item xs={24}>
                        <Grid item xs={24}>
                            <img src={props.productForm.preview_productsecond} 
                                style={{ width : 150 , height : 150 }}
                            />
                        </Grid>

                        <Grid item xs={24}>
                            <input
                                accept="image/*"
                                style={{ display : 'none' }}
                                id="gallery-2"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    props.ProductSecondImage(e.target.files[0])
                                }}
                            />
                            <label htmlFor="gallery-2">
                                <Button 
                                    variant={'outlined'} 
                                    component="span"
                                    style={{ marginTop : 10 , flex : 1 }}
                                >
                                    Upload Thumbnail
                                </Button>
                            </label>
                        </Grid>
                    </Grid>


                    <Grid item xs={24}>
                        <Grid item xs={24}>
                            <img src={props.productForm.preview_productthird} 
                                style={{ width : 150 , height : 150 }}
                            />
                        </Grid>

                        <Grid item xs={24}>
                            <input
                                accept="image/*"
                                style={{ display : 'none' }}
                                id="gallery-3"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    props.ProductThirdImage(e.target.files[0])
                                }}
                            />
                            <label htmlFor="gallery-3">
                                <Button 
                                    variant={'outlined'} 
                                    component="span"
                                    style={{ marginTop : 10 , flex : 1 }}
                                >
                                    Upload Thumbnail
                                </Button>
                            </label>
                        </Grid>
                    </Grid>
                </Grid>
            )

        case 3 : 
            return (

                <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column' }}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Category"
                        style={{ flex : 1 }}
                        helperText="Please select your currency"
                        margin="normal"
                        variant="outlined"
                    >
                    
                    </TextField>


                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Brand"
                        style={{ flex : 1 , marginTop : 10 }}
                        helperText="Please select your currency"
                        margin="normal"
                        variant="outlined"
                    >
                    
                    </TextField>

    
                </Grid>

            )

        default : return null

    }

}

const _PlaceForm = (props, step) => {

    switch(step) {

        case 0 : 
            return (
                <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column'  }}>
                    <TextField 
                        id={'name'}
                        label={'Name'}
                        style={{ flex : 1 }}
                        margin={'normal'}
                        variant={'outlined'}
                        onChange={(e) => {
                            props.PlaceName(e.target.value)
                        }}
                    />

                    <TextField
                        id={'latitude'}
                        style={{ marginTop : 10 , flex : 1 }}
                        label={'Latitude'}
                        margin={'normal'}
                        variant={'outlined'}
                        onChange={(e) => {
                            props.PlaceLat(e.target.value)
                        }}
                    />

                    <TextField
                        id={'longitude'}
                        style={{ marginTop : 10 , flex : 1 }}
                        label={'Longitude'}
                        margin={'normal'}
                        variant={'outlined'}
                        onChange={(e) => {
                            props.PlaceLon(e.target.value)
                        }}
                    />
                </Grid>
            )

        case 1 :
            return (
                <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column'  }}>
                    <TextField 
                        id={'des'}
                        label={'Description'}
                        style={{ flex : 1 }}
                        margin={'normal'}
                        variant={'outlined'}
                        onChange={(e) => {
                            props.PlaceDes(e.target.value)
                        }}
                    />
                </Grid>
            )

        case 2 : 
            return (

                <Grid item xs={24} style={{ display : 'flex' }}>
                    <Grid item xs={24}>
                        <Grid item xs={24}>
                            <img src={props.placeForm.place_firstpreview} 
                                style={{ width : 150 , height : 150 }}
                            />
                        </Grid>

                        <Grid item xs={24}>
                            <input
                                accept="image/*"
                                style={{ display : 'none' }}
                                id="gallery-1"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    props.PlaceFirstImage(e.target.files[0])
                                }}
                            />
                            <label htmlFor="gallery-1">
                                <Button 
                                    variant={'outlined'} 
                                    component="span"
                                    style={{ marginTop : 10 , flex : 1 }}
                                >
                                    Upload Thumbnail
                                </Button>
                            </label>
                        </Grid>
                    </Grid>

                    <Grid item xs={24}>
                        <Grid item xs={24}>
                            <img src={props.placeForm.place_secondpreview} 
                                style={{ width : 150 , height : 150 }}
                            />
                        </Grid>

                        <Grid item xs={24}>
                            <input
                                accept="image/*"
                                style={{ display : 'none' }}
                                id="gallery-2"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    props.PlaceSecondImage(e.target.files[0])
                                }}
                            />
                            <label htmlFor="gallery-2">
                                <Button 
                                    variant={'outlined'} 
                                    component="span"
                                    style={{ marginTop : 10 , flex : 1 }}
                                >
                                    Upload Thumbnail
                                </Button>
                            </label>
                        </Grid>
                    </Grid>


                    <Grid item xs={24}>
                        <Grid item xs={24}>
                            <img src={props.placeForm.place_thirdpreview} 
                                style={{ width : 150 , height : 150 }}
                            />
                        </Grid>

                        <Grid item xs={24}>
                            <input
                                accept="image/*"
                                style={{ display : 'none' }}
                                id="gallery-3"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    props.PlaceThirdImage(e.target.files[0])
                                }}
                            />
                            <label htmlFor="gallery-3">
                                <Button 
                                    variant={'outlined'} 
                                    component="span"
                                    style={{ marginTop : 10 , flex : 1 }}
                                >
                                    Upload Thumbnail
                                </Button>
                            </label>
                        </Grid>
                    </Grid>
                </Grid>
                
            )

        default : return null

    }

}

const _CategoriesForm = (props , step) => {

    switch(step) {

        case 0 : 
            return (
                <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column'  }}>
                    <TextField 
                        id={'categoriesname'}
                        label={'Name'}
                        style={{ flex : 1 }}
                        margin={'normal'}
                        variant={'outlined'}
                        onChange={(e) => {
                            props.CategoriesName(e.target.value)
                        }}
                    />
                </Grid>
            )

        default : return null

    }

}

const _AdminForm = (props , step) => {

    switch(step) {

        case 0 : 
            return (
                <div>First Form</div>
            )

        case 1 : 
            return (
                <div>Second Form</div>
            )

        case 2 : 
            return (
                <div>Third Form</div>
            )

        default : return null

    }

}

const CreateProductsRedux = (props) => {

    const labelPayload = ['Create product' , 'Add detail' , 'Upload gallery' , 'Relationship']

    return (
        <div style={{ width : '100vw' , height : '100vh' , display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : '#dfe6e9'}}>
            <Card className={'card-form'}>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <IconButton 
                                style={{ position : 'relative' , top : 5 , left : 5 , zIndex : 99 , justifyContent : 'center' , alignItems : 'center' }}
                                onClick={() => props.openForm('CreateProduct' , true)}
                            >
                                <Icon>arrow_back_ios</Icon>
                            </IconButton>
                            <div style={{ display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , fontSize : 26 }}>
                                Create Product
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Stepper activeStep={props.productStepper} alternativeLabel>
                                {labelPayload.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Grid>
                        {_ProductForm(props , props.productStepper)}
                        <Grid item xs={12}>
                                
                            {props.productStepper === 0 ? null : (
                                <Button 
                                    variant={'outlined'} 
                                    color={'secondary'} 
                                    onClick={() => props.productActiveStepper(props.productStepper - 1)}
                                >BACK</Button>
                            )}
                            {props.productStepper === 3 ? (
                                <Button 
                                    variant={'contained'} 
                                    color={'primary'} 
                                    onClick={() => {

                                        console.log(props.productForm.product_name)
                                        console.log(props.productForm.product_barcode)
                                        console.log(props.productForm.product_thumbnail)

                                        console.log(props.productForm.product_detail)
                                        console.log(props.productForm.product_price)

                                        console.log(props.productForm.product_firstimage)
                                        console.log(props.productForm.product_secondimage)
                                        console.log(props.productForm.product_thirdimage)
                                    }}
                                    style={{ marginLeft : 15 }}
                                >Create</Button>
                            ) : (
                                <Button 
                                    variant={'outlined'} 
                                    color={'primary'} 
                                    onClick={() => props.productActiveStepper(props.productStepper + 1)}
                                    style={{ marginLeft : (props.productStepper === 0 ? 0 : 15) }}
                                >NEXT</Button>
                            )}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )

}

const CreatePlacesRedux = (props) => {

    const labelPayload = ['Place name' , 'Description' , 'Upload gallery']

    return (

        <div style={{ width : '100vw' , height : '100vh' , display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : '#dfe6e9'}}>
            <Card className={'card-form'}>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <IconButton 
                                style={{ position : 'relative' , top : 5 , left : 5 , zIndex : 99 , justifyContent : 'center' , alignItems : 'center' }}
                                onClick={() => props.openForm('CreatePlaces' , true)}
                            >
                                <Icon>arrow_back_ios</Icon>
                            </IconButton>
                            <div style={{ display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , fontSize : 26 }}>
                                Create Places
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Stepper activeStep={props.placeStepper} alternativeLabel>
                                {labelPayload.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Grid>
                        {_PlaceForm(props , props.placeStepper)}
                        <Grid item xs={12}>
                                
                            {props.placeStepper === 0 ? null : (
                                <Button 
                                    variant={'outlined'} 
                                    color={'secondary'} 
                                    onClick={() => props.placeActiveStepper(props.placeStepper - 1)}
                                >BACK</Button>
                            )}
                            {props.placeStepper === 2 ? (
                                <Button 
                                    variant={'contained'} 
                                    color={'primary'} 
                                    onClick={() => {

                                        console.log("FIRE DATA TO API")
                                    }}
                                    style={{ marginLeft : 15 }}
                                >Create</Button>
                            ) : (
                                <Button 
                                    variant={'outlined'} 
                                    color={'primary'} 
                                    onClick={() => {

                                        props.placeActiveStepper(props.placeStepper + 1)

                                    }}
                                    style={{ marginLeft : (props.placeStepper === 0 ? 0 : 15) }}
                                >NEXT</Button>
                            )}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>

    )

}

const CreateCategoriesRedux = (props) => {

    const labelPayload = ['Categories name']

    return (
        <div style={{ width : '100vw' , height : '100vh' , display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : '#dfe6e9'}}>
            <Card className={'card-form'}>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <IconButton 
                                style={{ position : 'relative' , top : 5 , left : 5 , zIndex : 99 , justifyContent : 'center' , alignItems : 'center' }}
                                onClick={() => props.openForm('CreateCategories' , true)}
                            >
                                <Icon>arrow_back_ios</Icon>
                            </IconButton>
                            <div style={{ display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , fontSize : 26 }}>
                                Create Categories
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Stepper activeStep={0} alternativeLabel>
                                {labelPayload.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Grid>
                        {_CategoriesForm(props , 0)}
                        <Grid item xs={12}>

                             <Button 
                                variant={'contained'} 
                                color={'primary'} 
                                onClick={() => {

                                        console.log("FIRE DATA TO API")
                                }}
                                style={{ marginLeft : 15 }}
                            >Create</Button>
                            
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )

}

const CreateAdminRedux = (props) => {

    return (

        <div>

            CreateAdmin

        </div>

    )

}

const CreateNotifications = (props) => {

    return (

        <div>

            CreateNotifications

        </div>
        
    )

}

const CreateNews = (props) => {

    return (

        <div>

            CreateNews
            
        </div>

    )

}

const mapStateToProps = state => ({

    productStepper : state.stepperReducer.productStepperActive,
    placeStepper : state.stepperReducer.placesStepperActive,
    productForm : state.productFormReducer,
    placeForm : state.placeFormReducer

})

const CreateProducts = connect( mapStateToProps , { 

    productActiveStepper,
    ProductName,
    ProductBarcode,
    ProductThumbnail,
    ProductDetail,
    ProductPrice,
    ProductFirstImage,
    ProductSecondImage,
    ProductThirdImage,
    openForm

})(CreateProductsRedux)

const CreatePlaces = connect(mapStateToProps , {

    placeActiveStepper,
    openForm,
    PlaceName,
    PlaceLat,
    PlaceLon,
    PlaceDes,
    PlaceFirstImage,
    PlaceSecondImage,
    PlaceThirdImage

})(CreatePlacesRedux)

const CreateCategories = connect(mapStateToProps , {

    openForm,
    CategoriesName

})(CreateCategoriesRedux)

const CreateAdmin = connect(mapStateToProps , {

    openForm


})(CreateAdminRedux)

export {

    CreateProducts,
    CreatePlaces,
    CreateCategories,
    CreateAdmin,
    CreateNotifications,
    CreateNews

}