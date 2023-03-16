import React from 'react';
import './SellerRegister.css'
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import TextField from '@mui/material/TextField';

function SellerRegister() {
    const navigate = useNavigate()

    const [loader, setLoader] = useState(false)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
    });


    const handleEmailChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
    }
    const handleFirstNameChange = (event) => {
        setFormData({ ...formData, firstName: event.target.value });
    }
    const handleLastNameChange = (event) => {
        setFormData({ ...formData, lastName: event.target.value });
    }
    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }
    const handlePhoneChange = (event) => {
        setFormData({ ...formData, phone: event.target.value });
    }



    const createSeller = (e) => {
        e.preventDefault();

        if (formData.email !== '' && formData.firstName !== '' && formData.lastName !== '' && formData.phone !== '' && formData.password !== '') {
            setLoader(true)

            e.preventDefault();

            const formdata = new FormData();
            formdata.append('email', formData.email);
            formdata.append('firstname', formData.firstName);
            formdata.append('lastname', formData.lastName);
            formdata.append('phone', formData.phone);
            formdata.append('password', formData.password);

            axios.post('http://localhost:5000/api/seller/register', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {

                    if (res.status === 200) {
                        console.log(res);

                        localStorage.clear();
                        localStorage.setItem('seller', JSON.stringify(res.data));

                        const verifyemail = JSON.parse(localStorage.getItem('seller')).email
                        console.log("This is the email", verifyemail)
                        formdata.append('verifyEmail', verifyemail);

                        axios.post('http://localhost:5000/api/seller/getseller', formdata, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then(res => {
                                console.log(res)
                                if(res.status===200){
                                    if (res.data.email) {
                                        setError(false)
                                        setSuccess(true);
                                        localStorage.clear();
                                        localStorage.setItem('seller', JSON.stringify(res.data));
                                        navigate('/validatesellerotp/' + res.data._id)
                                    } else {
                                        setError(true)
                                        alert(res.response.data)
                                        alert("Error occurs here")
                                    }
                                }else{
                                    console.log("Error occured", res);
                                }
                                
                            })
                            .catch(err => {
                                setError(true)
                                console.log(err)
                            });
                    }else{
                        console.log("Error Ocured", res)
                    }
                })
                .catch(err => {
                    setError(true)
                    console.log(err)
                });
        } else {
            setError(true)
        }
    }


    return (
        <div className='adminregister'>
            <br></br><br></br><br></br>
            <div className='adminRegisterForm'>


                <h1>Create Seller Account</h1>

                <div className='ar_form_and_button'>
                    <form>
                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.email} onChange={handleEmailChange} label="Email*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.firstName} onChange={handleFirstNameChange} label="Firstname*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.lastName} onChange={handleLastNameChange} label="Lastname*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.phone} onChange={handlePhoneChange} label="Phone*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password" variant="outlined" />
                        </div>
                    </form>

                    <Button variant="contained" onClick={createSeller}>
                        Create Account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SellerRegister
