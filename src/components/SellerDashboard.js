import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';



function SellerDashboard() {
    // const checkAdmin = localStorage.getItem('admin');
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('seller')) {
            navigate('/404page');
        }else if (JSON.parse(localStorage.getItem('seller')).email) {
            const formdata = new FormData()
            formdata.append('verifyEmail', JSON.parse(localStorage.getItem('seller')).email);

            axios.post('http://localhost:5000/api/seller/getseller', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    console.log(res)
                    localStorage.setItem('seller', JSON.stringify(res.data))
                })
                .catch(err =>
                    console.log("This is the error", err),
                );
        }
    }, [])



    return (
        <div>
            <br></br> <br></br> <br></br>
            <h1>Seller Dashboard</h1>
        </div>
    )
}

export default SellerDashboard