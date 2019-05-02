// # Cores
import React from 'react'
// # Redux
import { connect } from 'react-redux'
import { openForm } from '../../../redux/actions/OpenComponentAction'
import { productActiveStepper , placeActiveStepper , adminActiveStepper , newsActiveStepper } from '../../../redux/actions/StepperAction'
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
    ProductCategory ,
    ProductBrand ,
    /// Place Form Actions
    PlaceName , 
    PlaceLat ,
    PlaceLon ,
    PlaceDes ,
    PlaceFirstImage ,
    PlaceSecondImage ,
    PlaceThirdImage,

    /// Categories Form Actions
    CategoriesName,

    // Admin Form Actions
    AdminEmail,
    AdminFirstName,
    AdminLastName,
    AdminPassword,

    // News Form Actions
    NewsTitle,
    NewsDes,
    NewsThumbnail,
    NewsType,
    NewsRef,
    NewsFirstImage,
    NewsSecondImage,
    NewsThirdImage
    
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
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Swal from 'sweetalert2'
// # Services -> API
import {
    /// Product API
    APICreateProduct, APICreateProductGallery , APICreateProductThumbnail,
    /// Admin API
    APICreateAdmin,
    /// Categories API
    APICreateCategories,
    /// Places API
    APICreatePlace, APICreatePlaceGallery,
    /// News API
    APICreateNews , APICreateNewsThumbnail , APICreateNewsGallery

} from '../../../services/API/Create'

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
                        id={'category_product'}
                        name={'category_product'}
                        label="Category"
                        style={{ flex : 1 }}
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => props.ProductCategory(e.target.value)}
                    />
                        

                    <TextField
                        id="brand_product"
                        name={'brand_product'}
                        label="Brand"
                        style={{ flex : 1 , marginTop : 10 }}

                        margin="normal"
                        variant="outlined"
                        onChange={(e) => props.ProductBrand(e.target.value)}
                    />
            

    
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
                <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column'  }}>
                    <TextField 
                        id={'adminemail'}
                        name={'adminemail'}
                        label={'Email'}
                        style={{ flex : 1 }}
                        margin={'normal'}
                        variant={'outlined'}
                        type={'text'}
                        onChange={(e) => {
                            props.AdminEmail(e.target.value)
                        }}
                    />

                    <TextField 
                        id={'adminpassword'}
                        name={'adminpassword'}
                        label={'Password'}
                        style={{ flex : 1 }}
                        margin={'normal'}
                        variant={'outlined'}
                        type={'password'}
                        onChange={(e) => {
                            props.AdminPassword(e.target.value)
                        }}
                    />
                </Grid>
            )

        case 1 : 
            return (
                <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column'  }}>
                    <TextField 
                        id={'adminfirstname'}
                        name={'adminfirstname'}
                        label={'Firstname'}
                        style={{ flex : 1 }}
                        margin={'normal'}
                        variant={'outlined'}
                        type={'text'}
                        onChange={(e) => {
                            props.AdminFirstName(e.target.value)
                        }}
                    />

                    <TextField 
                        id={'adminlastname'}
                        name={'adminlastname'}
                        label={'Lastname'}
                        style={{ flex : 1 }}
                        margin={'normal'}
                        variant={'outlined'}
                        type={'text'}
                        onChange={(e) => {
                            props.AdminLastName(e.target.value)
                        }}
                    />
                </Grid>
            )

        default : return null

    }

}

const _NewsForm = (props , step) => {

    switch(step) {

        case 0 : return (

            <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column'  }}>
                <TextField 
                    id={'news_title'}
                    label={'Title'}
                    style={{ flex : 1 }}
                    margin={'normal'}
                    variant={'outlined'}
                    onChange={(e) => {
                        props.NewsTitle(e.target.value)
                    }}
                />

                <TextField
                    id={'news_des'}
                    style={{ marginTop : 10 , flex : 1 }}
                    label={'Description'}
                    margin={'normal'}
                    variant={'outlined'}
                    onChange={(e) => {
                        props.NewsDes(e.target.value)
                    }}
                />
                <input
                    accept="image/*"
                    style={{ display : 'none' }}
                    id="news_thumbnail"
                    multiple
                    type="file"
                    onChange={(e) => props.NewsThumbnail(e.target.files[0])}
                />
                <label htmlFor="news_thumbnail">
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

        case 1 : return (

            <Grid item xs={24} style={{ display : 'flex' , flex : 1 , flexDirection : 'column' }}>
                <TextField 
                    id={'news_ref'}
                    name={'news_ref'}
                    label={'Reference'}
                    style={{ flex : 1 }}
                    margin={'normal'}
                    variant={'outlined'}
                    onChange={(e) => {
                        props.NewsRef(e.target.value)
                    }}
                />


                <TextField
                    id={'news_type'}
                    name={'news_type'}
                    style={{ marginTop : 10 , flex : 1 }}
                    label={'Type'}
                    margin={'normal'}
                    variant={'outlined'}
                    onChange={(e) => {
                        props.NewsType(e.target.value)
                    }}
                />
    
            </Grid>

        )

        case 2 : return (

            <Grid item xs={24} style={{ display : 'flex' }}>
                <Grid item xs={24}>
                    <Grid item xs={24}>
                        <img src={props.newsForm.news_previewfirst} 
                            style={{ width : 150 , height : 150 }}
                        />
                    </Grid>

                    <Grid item xs={24}>
                        <input
                            accept="image/*"
                            style={{ display : 'none' }}
                            id="news_gallery_1"
                            multiple
                            type="file"
                            onChange={(e) => {
                                props.NewsFirstImage(e.target.files[0])
                            }}
                        />
                        <label htmlFor="news_gallery_1">
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
                        <img src={props.newsForm.news_previewsecond} 
                            style={{ width : 150 , height : 150 }}
                        />
                    </Grid>

                    <Grid item xs={24}>
                        <input
                            accept="image/*"
                            style={{ display : 'none' }}
                            id="news_gallery_2"
                            multiple
                            type="file"
                            onChange={(e) => {
                                props.NewsSecondImage(e.target.files[0])
                            }}
                        />
                        <label htmlFor="news_gallery_2">
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
                        <img src={props.newsForm.news_previewthird} 
                            style={{ width : 150 , height : 150 }}
                        />
                    </Grid>

                    <Grid item xs={24}>
                        <input
                            accept="image/*"
                            style={{ display : 'none' }}
                            id="news_gallery_3"
                            multiple
                            type="file"
                            onChange={(e) => {
                                props.NewsThirdImage(e.target.files[0])
                            }}
                        />
                        <label htmlFor="news_gallery_3">
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

                                        APICreateProductGallery(
                                            props.productForm.product_firstimage,
                                            props.productForm.product_secondimage,
                                            props.productForm.product_thirdimage
                                        ).then(res => {

                                            if(res.data.length === 0) {

                                                Swal.fire("Error length" , "Data length is null[0]" , 'error')

                                            }

                                            if(res.data.error) {

                                                Swal.fire(res.data.title, res.data.message , 'error')

                                            } else {

                                                APICreateProductThumbnail(props.productForm.product_thumbnail)
                                                    .then(res => {

                                                        if(res.data.length === 0) {

                                                            Swal.fire("Error length" , "Data length is null[0]" , 'error')
            
                                                        }

                                                        if(res.data.error) {

                                                            Swal.fire(res.data.title , res.data.message , 'error')

                                                        } else {

                                                            APICreateProduct(
                                                                props.productForm.product_barcode,
                                                                props.productForm.product_name,
                                                                props.productForm.product_detail,
                                                                props.productForm.product_price,
                                                                props.productForm.product_thumbnail.name,
                                                                props.productForm.product_firstimage.name,
                                                                props.productForm.product_secondimage.name,
                                                                props.productForm.product_thirdimage.name,
                                                                props.productForm.product_category,
                                                                props.productForm.product_brand
                                                                
                                                            ).then(res => {

                                                                if(res.data.length === 0) {

                                                                    Swal.fire("Error length" , "Data length is null[0]" , 'error')

                                                                }

                                                                if(res.data.error) {

                                                                    Swal.fire(res.data.title , res.data.message , 'error')

                                                                } else {

                                                                    Swal.fire(res.data.title , res.data.message , 'success')

                                                                }

                                                            }).catch(err => console.error(err))

                                                        }

                                                    }).catch(err => console.error(err))

                                            }

                                        }).catch(err => console.error(err))
                                        
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

                                        APICreatePlaceGallery(
                                            props.placeForm.place_firstimage,
                                            props.placeForm.place_secondimage,
                                            props.placeForm.place_thirdimage
                                        ).then(res => {

                                            if(res.data.length === 0) {

                                                Swal.fire("Error length" , "data length is null[0]" , 'error')

                                            }

                                            if(res.data.error) {

                                                Swal.fire(res.data.title , res.data.message , 'error')

                                            } else {

                                                APICreatePlace(
                                                    props.placeForm.place_name,
                                                    props.placeForm.place_lat,
                                                    props.placeForm.place_lon,
                                                    props.placeForm.place_des,
                                                    props.placeForm.place_firstimage.name,
                                                    props.placeForm.place_secondimage.name,
                                                    props.placeForm.place_thirdimage.name
                                                ).then(res => {

                                                    if(res.data.length === 0) {

                                                        Swal.fire("Error length" , "Data length is null[0]" , 'error')

                                                    }

                                                    if(res.data.error) {

                                                        Swal.fire(res.data.title , res.data.message , 'error')

                                                    } else {

                                                        Swal.fire(res.data.title , res.data.message , 'success')

                                                    }

                                                })

                                            }

                                        })
                                        
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

                                    APICreateCategories(props.categoriesForm.categories_name)
                                        .then(res => {

                                            if(res.data.length === 0) {

                                                Swal.fire("Error" , "Data length is null[0]" , 'error')

                                            }


                                            if(res.data.error) {

                                                Swal.fire(res.data.title , res.data.message , 'error')

                                            } else {

                                                Swal.fire(res.data.title , res.data.message , 'success')

                                            }

                                        })
                                        .catch(err => console.error(err))

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

    const labelPayload = ['Email & Password' , 'Admin fullname']

    return (
        <div style={{ width : '100vw' , height : '100vh' , display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : '#dfe6e9'}}>
            <Card className={'card-form'}>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <IconButton 
                                style={{ position : 'relative' , top : 5 , left : 5 , zIndex : 99 , justifyContent : 'center' , alignItems : 'center' }}
                                onClick={() => props.openForm('CreateAdmin' , true)}
                            >
                                <Icon>arrow_back_ios</Icon>
                            </IconButton>
                            <div style={{ display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , fontSize : 26 }}>
                                Create Admin
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Stepper activeStep={props.adminStepper} alternativeLabel>
                                {labelPayload.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Grid>
                        {_AdminForm(props , props.adminStepper)}
                        <Grid item xs={12}>

                            {props.adminStepper === 0 ? null : (
                                <Button 
                                    variant={'outlined'} 
                                    color={'secondary'} 
                                    onClick={() => props.adminActiveStepper(props.adminStepper - 1)}
                                >BACK</Button>
                            )}
                            {props.adminStepper === 1 ? (
                                <Button 
                                    variant={'contained'} 
                                    color={'primary'} 
                                    onClick={() => {
                                        
                                        APICreateAdmin(

                                            props.adminForm.admin_email,
                                            props.adminForm.admin_password,
                                            props.adminForm.admin_firstname,
                                            props.adminForm.admin_lastname

                                        ).then(res => {

                                            if(res.data.length === 0) {

                                                Swal.fire("Error Length" , "Data length is null[0]" , 'error')

                                            }

                                            if(res.data.error) {

                                                Swal.fire(res.data.title , res.data.message , 'error')

                                            } else {

                                                Swal.fire(res.data.title , res.data.message , 'success')

                                            }

                                        })
                                        
                                    }}
                                    style={{ marginLeft : 15 }}
                                >Create</Button>
                            ) : (
                                <Button 
                                    variant={'outlined'} 
                                    color={'primary'} 
                                    onClick={() => {

                                        props.adminActiveStepper(props.adminStepper + 1)

                                    }}
                                    style={{ marginLeft : (props.adminStepper === 0 ? 0 : 15) }}
                                >NEXT</Button>
                            )}
                            
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
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

const CreateNewsRedux = (props) => {

    const labelPayload = ['News' , 'News type and Ref' , 'Upload gallery']

    return (

        <div style={{ width : '100vw' , height : '100vh' , display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : '#dfe6e9'}}>
            <Card className={'card-form'}>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <IconButton 
                                style={{ position : 'relative' , top : 5 , left : 5 , zIndex : 99 , justifyContent : 'center' , alignItems : 'center' }}
                                onClick={() => props.openForm('CreateNews' , true)}
                            >
                                <Icon>arrow_back_ios</Icon>
                            </IconButton>
                            <div style={{ display : 'flex' , flex : 1 , justifyContent : 'center' , alignItems : 'center' , fontSize : 26 }}>
                                Create Places
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Stepper activeStep={props.newsStepper} alternativeLabel>
                                {labelPayload.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Grid>
                        {_NewsForm(props , props.newsStepper)}
                        <Grid item xs={12}>
                                
                            {props.newsStepper === 0 ? null : (
                                <Button 
                                    variant={'outlined'} 
                                    color={'secondary'} 
                                    onClick={() => props.newsActiveStepper(props.newsStepper - 1)}
                                >BACK</Button>
                            )}
                            {props.newsStepper === 2 ? (
                                <Button 
                                    variant={'contained'} 
                                    color={'primary'} 
                                    onClick={() => {

                                        APICreateNewsGallery(
                                            props.newsForm.news_firstimage,
                                            props.newsForm.news_secondimage,
                                            props.newsForm.news_thirdimage 
                                        ).then(res => {

                                            if(res.data.length === 0) {

                                                Swal.fire("Error length" , "Data length is null[0]" , 'error')

                                            }

                                            if(res.data.error) {

                                                Swal.fire(res.data.title , res.data.message + ' : Gallery' , 'error')

                                            } else {

                                                APICreateNewsThumbnail(props.newsForm.news_thumbnail)
                                                    .then(res => {

                                                        if(res.data.length === 0) {

                                                            Swal.fire("Error length" , "Data length is null[0]" , 'error')
            
                                                        }

                                                        if(res.data.error) {

                                                            Swal.fire(res.data.title , res.data.message + ' : Thumbnail' , 'error')

                                                        } else {

                                                            

                                                            APICreateNews(
                                                                props.newsForm.news_title,
                                                                props.newsForm.news_des,
                                                                props.newsForm.news_thumbnail.name,
                                                                props.newsForm.news_type,
                                                                props.newsForm.news_ref,
                                                                props.newsForm.news_firstimage.name,
                                                                props.newsForm.news_secondimage.name,
                                                                props.newsForm.news_thirdimage.name
                                                            ).then(res => {
                                                                
                                                                if(res.data.length === 0) {

                                                                    Swal.fire("Error length" , "Data length is null[0]" , 'error')

                                                                }

                                                                if(res.data.error) {

                                                                    Swal.fire(res.data.title , res.data.message , 'error')
                                                                    
                                                                } else {

                                                                    Swal.fire(res.data.title , res.data.message , 'success')

                                                                }

                                                            })

                                                        }

                                                    })

                                            }

                                        })

                                    }}
                                    style={{ marginLeft : 15 }}
                                >Create</Button>
                            ) : (
                                <Button 
                                    variant={'outlined'} 
                                    color={'primary'} 
                                    onClick={() => {

                                        props.newsActiveStepper(props.newsStepper + 1)

                                    }}
                                    style={{ marginLeft : (props.newsStepper === 0 ? 0 : 15) }}
                                >NEXT</Button>
                            )}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>

    )

}

const mapStateToProps = state => ({

    productStepper : state.stepperReducer.productStepperActive,
    placeStepper : state.stepperReducer.placesStepperActive,
    adminStepper : state.stepperReducer.adminStepperActive,
    newsStepper : state.stepperReducer.newsStepperActive,
    categoriesForm : state.categoriesFormReducer,
    productForm : state.productFormReducer,
    placeForm : state.placeFormReducer,
    newsForm : state.newsFormReducer,
    adminForm : state.adminFormReducer

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
    ProductCategory,
    ProductBrand,
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

    openForm,
    adminActiveStepper,
    AdminEmail,
    AdminPassword,
    AdminFirstName,
    AdminLastName


})(CreateAdminRedux)

const CreateNews = connect(mapStateToProps , {

    openForm,
    newsActiveStepper,
    NewsTitle,
    NewsDes,
    NewsThumbnail,
    NewsType,
    NewsRef,
    NewsFirstImage,
    NewsSecondImage,
    NewsThirdImage

})(CreateNewsRedux)

export {

    CreateProducts,
    CreatePlaces,
    CreateCategories,
    CreateAdmin,
    CreateNotifications,
    CreateNews

}