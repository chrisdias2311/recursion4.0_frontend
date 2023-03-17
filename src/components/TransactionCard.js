import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './BookedProductsCard.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function TransactionCard({ transactionId, productId, delivery, sellerName, productName, transactionType, date, status }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    useEffect(() => {
        const formdata = new FormData();
        formdata.append('id', productId);

        axios.post('http://localhost:5000/api/products/productdetails', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res);
                setName(res.data)
            })
            .catch(err =>
                console.log("This is the error", err),
            );

    }, [])


    const view = (id) => {
        navigate('/dashboard/transactiondetails/' + id)
    }


    return (
        <div className='booked_prod_card'>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" color="text.secondary">
                    <strong>{name.name}</strong>
                </Typography>
                <Typography component="div" variant="subtitle1" color="text.secondary">
                    Tracker ID:  <strong>{transactionId}</strong>
                </Typography>
                <Typography component="div" variant="subtitle1" color="text.secondary">
                    Ordered on:  <strong>{date}</strong>
                </Typography>

                {
                    (status === 'Ordered' || status === 'Dispatched') ?
                        <Typography component="div" variant="subtitle1" color="text.secondary">
                            Arriving:  <strong>{delivery}</strong>
                        </Typography>
                        :
                        <Typography component="div" variant="subtitle1" color="text.secondary">
                            Delivered:  <strong>{delivery}</strong>
                        </Typography>
                }
                <br></br>

                {
                    (status === 'Ordered' ?
                        <div className='order_status_1'>
                            <img src="https://cdn2.iconfinder.com/data/icons/shopping-e-commerce-2-1/32/Success-Place-Order-Complete-Shopping-Tick-512.png"></img>
                            <Typography component="div" variant="h6" color="text.secondary">
                                Order Placed
                            </Typography>
                        </div>
                        :
                        (
                            status === 'Dispatched' ?
                                <div className='order_status_2'>
                                    <img src="https://thumbs.dreamstime.com/z/food-delivery-truck-icon-outline-style-vector-web-design-isolated-white-background-156336738.jpg"></img>
                                    <Typography component="div" variant="h6" color="text.secondary">
                                        Out for delivery
                                    </Typography>
                                </div>
                                :
                                <div className='order_status_2'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/762/762152.png?w=740&t=st=1679011033~exp=1679011633~hmac=b34856de2fdf3ea08dd0550afebf2b7c8bd9e62d417899abdb07a61af93cd3fa"></img>
                                    <Typography component="div" variant="h6" color="text.secondary">
                                        Delivered
                                    </Typography>
                                </div>

                        )
                    )
                }







            </CardContent>
        </div>
    )
}

export default TransactionCard
