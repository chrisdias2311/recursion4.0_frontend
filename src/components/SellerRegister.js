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



    const createAdmin = (e) => {
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

            axios.post('https://uniexserver.onrender.com/api/user/register', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {

                    localStorage.clear();
                    localStorage.setItem('user', JSON.stringify(res.data));

                    const verifyemail = JSON.parse(localStorage.getItem('user')).email
                    formdata.append('verifyEmail', verifyemail);

                    axios.post('https://uniexserver.onrender.com/api/user/getuser', formdata, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => {
                            if (res.data.email) {
                                setError(false)
                                setSuccess(true);
                                localStorage.clear();
                                localStorage.setItem('user', JSON.stringify(res.data));
                                navigate('/validateotp/' + res.data._id)
                            } else {
                                setError(true)
                                alert(res.response.data)
                                alert("Error occurs here")

                            }
                        })
                        .catch(err => {
                            setError(true)
                            alert(err.response.data)
                        });
                })
                .catch(err => {
                    setError(true)
                    alert(err.response.data)
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

                    <Button variant="contained" onClick={createAdmin}>
                        Create Account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SellerRegister
