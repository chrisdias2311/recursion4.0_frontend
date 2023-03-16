import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'

import axios from 'axios';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LinearProgress from '@mui/material/LinearProgress';

import Alert from '@mui/material/Alert';


import { useEffect } from 'react';

function AddProduct() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        if (JSON.parse(localStorage.getItem('seller')).verified !== "yes") {
            navigate("/404page");
        }
    }, []);



    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        targetgender:'',
        targetage:'',
        price: '',
        quantity:0,
        image: '',
    });
    const imageData = new FormData();
    const [imageUpload, setImageUpload] = useState(false);

    // const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setFormData({ ...formData, name: event.target.value });
    }
    const handleDescriptionChange = (event) => {
        setFormData({ ...formData, description: event.target.value });
    }
    const handleCategoryChange = (event) => {
        setFormData({ ...formData, category: event.target.value });
    }
    const handleGenderChange = (event) => {
        setFormData({ ...formData, targetgender: event.target.value });
    }
    const handleAgeChange = (event) => {
        setFormData({ ...formData, targetage: event.target.value });
    }
    const handlePriceChange = (event) => {
        setFormData({ ...formData, price: event.target.value });
    }
    const handleQuantityChange = (event) => {
        setFormData({ ...formData, quantity: event.target.value });
    }
    const handleLinkChange = (event) => {
        setFormData({ ...formData, link: event.target.value })
    }

    const handleImageChange = (event) => {
        setFormData({ ...formData, image: event.target.files[0] });
        console.log('Type...', formData.image)
        imageData.append('file', formData.image);
        setImageUpload(true);
    }

    const addProduct = (e) => {

        if (formData.name !== '' && formData.description !== '' && formData.category !== '' && formData.price !== '' && formData.image !== '' && (formData.image.type === 'image/jpeg' || formData.image.type === 'image/png')) {
            console.log('Type...', formData.image.type)

            setLoader(true)

            e.preventDefault();

            const formdata = new FormData();
            formdata.append('ownerId', JSON.parse(localStorage.getItem('seller'))._id);
            formdata.append('name', formData.name);
            formdata.append('description', formData.description);
            formdata.append('category', formData.category);
            formdata.append('targetage', formData.targetage);
            formdata.append('targetgender', formData.targetgender);
            formdata.append('price', formData.price);
            formdata.append('file', formData.image);

            axios.post('http://localhost:5000/api/products/addproduct', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(res => {
                    setLoader(false)
                    setFormData({ ...formData, name: '' });
                    setFormData({ ...formData, description: '' });
                    setFormData({ ...formData, category: '' });
                    setFormData({ ...formData, price: '' });
                    setFormData({ ...formData, link: '' });
                    setFormData({ ...formData, image: '' });
                    if(res.status===200){
                        alert("Product Added succeddfully!")
                        console.log(res)
                    }

                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)

                    }, 2000);
                })
                .catch(err => {
                    setError(true)
                });
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }



    return (
        <div className='addproduct'>
            <div className='addproduct_container'>
                {
                    loader ? <LinearProgress /> : <></>
                }
                <h1>Add a Product</h1>

                <div className='ap_form_and_button'>

                    <form className='inputForm'>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.name} onChange={handleNameChange} label="Product Name" variant="outlined" />
                        </div>

                        <br></br>

                        <div className='inputField'>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Product Description"
                                value={formData.description}
                                onChange={handleDescriptionChange}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </div>

                        <br></br>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" type="number" value={formData.quantity} onChange={handleQuantityChange} label="Product Quantity" variant="outlined" />
                        </div>

                        <br></br>

                        <div className='inputfield'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.category}
                                    label="Select Category"
                                    onChange={handleCategoryChange}
                                >
                                    <MenuItem value={'Electronics'}>Electronics</MenuItem>
                                    <MenuItem value={'Mobiles & Laptops'}>Mobiles & Laptops</MenuItem>
                                    <MenuItem value={'Home & Kitchen'}>Home & Kitchen</MenuItem>
                                    <MenuItem value={'Fashion & clothing'}>Fashion & clothing</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <br></br>

                        <div className='inputfield'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Target Audience Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.targetgender}
                                    label="Select Target Audience Gender"
                                    onChange={handleGenderChange}
                                >
                                    <MenuItem value={'Male'}>Male</MenuItem>
                                    <MenuItem value={'Female'}>Female</MenuItem>
                                    <MenuItem value={'N.A.'}>N.A.</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <br></br>
                        
                        <div className='inputfield'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Target Audience Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.targetage}
                                    label="Select Target Audience Age"
                                    onChange={handleAgeChange}
                                >
                                    <MenuItem value={'Less than 18'}>Less than 18</MenuItem>
                                    <MenuItem value={'18-30'}>18-30</MenuItem>
                                    <MenuItem value={'Above 30'}>Above 30</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <br></br>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.price} onChange={handlePriceChange} label="Quote Price" variant="outlined" />
                        </div>

                        <br></br>


                        <h5>Upload Product Image (Only jpeg & png)</h5>

                        {
                            (formData.image) ? <><Alert severity="success">{formData.image.name}</Alert> <br></br></> : <></>
                        }



                        <Button variant="contained" value={formData.image} component="label" onChange={handleImageChange}>
                            Upload
                            <input hidden type="file" />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleImageChange}>
                            <input hidden type="file" />
                            <PhotoCamera />
                        </IconButton>



                        <br></br>

                    </form>
                    <br></br>

                    {
                        success ? <Alert severity="success">Product added Successfully!</Alert> : (
                            error ? <Alert severity="error">Make sure you've entered all the details correctly and product imagetype is jpeg/png</Alert> : <></>
                        )
                    }

                    <br></br>

                    <Button variant="contained" onClick={addProduct}>
                        Add Product
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
