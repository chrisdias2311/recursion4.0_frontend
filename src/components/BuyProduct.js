import React from 'react'
import './BuyProduct.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import axios from 'axios';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';

function BuyProduct() {
    const navigate = useNavigate();
    const params = useParams();
    const [location, setLocation] = useState('');

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[600],
        },
    }));


    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const placeOrder = () => {

        const formdata = new FormData();
        formdata.append('id', params.id);
        formdata.append('location', location);
        formdata.append('buyeremail', JSON.parse(localStorage.getItem('user')).email);


        axios.post('http://localhost:5000/api/products/selectproduct', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Order Placed successfully");
                    navigate('/dashboard')
                }
                console.log(res)
            })
            .catch(err =>
                console.log("This is the error", err),
            );
    }


    return (
        <div className='addproduct'>
            <div className='addproduct_container'>
                <h1>Buy Product</h1>

                <div className='ap_form_and_button'>
                    <TextField className='inputField' fullWidth id="outlined-basic" value={location} onChange={handleLocationChange} label="Enter Location Link" variant="outlined" />
                </div>
                <Payment />
                <div className='button'>
                    <ColorButton onClick={placeOrder} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained" className="buynowBtn">Cash on Delivery</ColorButton>
                </div>


            </div>\
        </div>
    )
}

export default BuyProduct
