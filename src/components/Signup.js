import React, { useState } from 'react'
import "./Signup.css";
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/actions/formActions';
import { Connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions/formActions';

import axios from 'axios';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

import Alert from '@mui/material/Alert';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import LinearProgress from '@mui/material/LinearProgress';
import { display } from '@mui/system';

function Signup() {
    const gender = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
        {
            value: 'N.A.',
            label: 'Prefer not to say',
        }
    ];

    const handleElectronics = (event) => {

    }



    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
        age: '',
        interest: '',
        password: '',
    });
    const imageData = new FormData();
    const [imageUpload, setImageUpload] = useState(false);
    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handlePidChange = (event) => {
        setFormData({ ...formData, pid: event.target.value });
    }
    const handleEmailChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
    }
    const handleFirstNameChange = (event) => {
        setFormData({ ...formData, firstName: event.target.value });
    }
    const handleLastNameChange = (event) => {
        setFormData({ ...formData, lastName: event.target.value });
    }
    const handlePhoneChange = (event) => {
        setFormData({ ...formData, phone: event.target.value });
    }
    const handleGenderChange = (event) => {
        setFormData({ ...formData, gender: event.target.value })
    }
    const handleAgeChange = (event) => {
        setFormData({ ...formData, age: event.target.value })
    }

    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }



    const submitSignupForm = (e) => {
        if (formData.email !== '' && formData.firstName !== '' && formData.lastName !== '' && formData.phone !== '' && formData.gender !== '' && formData.age !== '' && formData.password !== '') {
            setLoader(true)
            console.log(formData)

            e.preventDefault();

            const formdata = new FormData();
            formdata.append('email', formData.email);
            formdata.append('firstname', formData.firstName);
            formdata.append('lastname', formData.lastName);
            formdata.append('phone', formData.phone);
            formdata.append('gender', formData.gender);
            formdata.append('age', formData.age);
            formdata.append('password', formData.password);

            axios.post('https://recursion4-0-backend-server.onrender.com/api/user/register', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {

                    localStorage.clear();
                    localStorage.setItem('user', JSON.stringify(res.data));

                    const verifyemail = JSON.parse(localStorage.getItem('user')).email
                    formdata.append('verifyEmail', verifyemail);

                    axios.post('https://recursion4-0-backend-server.onrender.com/api/user/getuser', formdata, {
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
        <div className='signup'>

            <div className='signup_container'>
                {
                    loader ? <LinearProgress /> : <></>
                }
                <h1>Create User account</h1>

                <div className='sp_form_and_button'>
                    <form >
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
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.phone} onChange={handlePhoneChange} label="Phone-no*" variant="outlined" />
                        </div>



                        <div className='inputField'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Gender*</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.gender}
                                    label="Select Gender"
                                    onChange={handleGenderChange}
                                >
                                    {
                                        gender.map((option) =>
                                            (<MenuItem value={option.value} key={option.value}>{option.value}</MenuItem>)
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>


                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.age} onChange={handleAgeChange} label="Age*" variant="outlined" />
                        </div>
                        <div className='inputField'>
                            <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password*" variant="outlined" />
                        </div>
                    </form>


                    {
                        success ? <Alert severity="success">Logged in Successfully!</Alert> : (
                            error ? <Alert severity="error">Make sure you've entered the correct details & ID card format is jpeg/png, or maybe account already exists</Alert> : <></>
                        )
                    }

                    <br></br>

                    <Button variant="contained" onClick={submitSignupForm}>
                        Create Account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Signup
