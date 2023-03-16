import React from 'react'
import './ProductDetails.css'
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useState } from 'react';

function ProductDetails() {
    const [image, setImage] = useState('');

    const handleImageChange = (event) => {
        setImage(event.target.files[0])
        console.log('Type...', image)
    }
    
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[600],
        },
    }));
    return (
        <div>
            {/* <h1>Product Details</h1> */}

            <div className="productdetails">
                <div className='productdetails_container'>
                    <br></br><br></br><br></br>
                    <div className='heading_container'>
                        <h1 className="heading">Product Details</h1>
                    </div>
                    <div className="blank_space">
                    </div>
                    <div className="container emp-profile">
                        <div className="row">
                            <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-serial-sipper-watter-bottle-28150768205907-New.jpg?v=1665504211" alt="Product Image" className="product_image"></img>
                            <br></br>
                            <div className="details">
                                <div className='text_details'>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 'SemiBold', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h5" component="div">
                                        Sipper Water bottle
                                    </Typography>
                                    <br></br>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 900, fontFamily: "Sans Semi Bold", fontSize: 32, fontStyle: 'italic' }} gutterBottom variant="h5" component="div">
                                        Rs.500
                                    </Typography>
                                    <br></br>
                                    <Typography sx={{ textAlign: 'left', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h5" component="div" className="descriptionBox">
                                        <span className='span_tag' fontFamily='Sans Semi Bold'>Product Description: </span>
                                        <br></br>
                                        Used in sem 2 good shape
                                    </Typography>
                                    <br></br>
                                    <Typography sx={{ textAlign: 'left', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h5" component="div">
                                        <span className='span_tag' fontFamily='Sans Semi Bold'>Category: </span>
                                        Commodities
                                    </Typography>
                                </div>
                                <br></br>
                                <div className="buynowBtn">
                                    <Button variant="contained" value={image} component="label" onChange={handleImageChange}>
                                        Add Image
                                        <input hidden type="file" />
                                    </Button>
                                    <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleImageChange}>
                                        <input hidden type="file" />
                                        <PhotoCamera />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
