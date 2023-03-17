import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import "./Home.css";
import banner from './banner.jpg'
import banner1 from '../Banner2.jpg'
import { setProducts, setStationery, setNotes, setEnotes, setPreviousPapers, setAllProductsButton, setStationeryButton, setNotesButton, setEnotesButton, setPreviousPapersButton, searchAllProducts, searchStationery, searchNotes, searchPreviousPapers, searchEnotes } from '../redux/actions/formActions';

import { setReccomended, setElectronics, setPhones, setHome, setClothing, setReccomendedButton, setElectronicsButton, setPhonesButton, setHomeButton, setClothingButton, searchReccoomended, searchElectronics, searchPhones, searchHome, searchClothing} from '../redux/actions/formActions';

import axios from 'axios'

import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function Home() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const [products, setAllProducts] = useState([]);
    const [loader, setLoader] = useState(true)

    const [search, setSearch] = useState([]);
    const [textSearch, setTextSearch] = useState('');


    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products/allproducts")
            .then((response) => {
                // dispatch(setInvalidUsers(response.data));
                dispatch(setReccomended(response.data))
                dispatch(setProducts(response.data))
                dispatch(setStationery(response.data))
                dispatch(setNotes(response.data))
                dispatch(setPreviousPapers(response.data))
                dispatch(setEnotes(response.data))

                dispatch(setElectronics(response.data))
                dispatch(setPhones(response.data))
                dispatch(setHome(response.data))
                dispatch(setClothing(response.data))

                setAllProducts(response.data)
                setLoader(false)

                if (JSON.parse(localStorage.getItem('user'))._id) {
                    const formdata = new FormData()
                    formdata.append('userid', JSON.parse(localStorage.getItem('user'))._id);

                    axios.post('https://recursion4-0-backend-server.onrender.com/api/transactions/userdetails', formdata, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => {
                            localStorage.setItem('user', JSON.stringify(res.data))
                        })
                        .catch(err =>
                            console.log("This is the error", err),
                        );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])




    const handleSearch = (e) => {
        setTextSearch(e.target.value)
        if (data.products.buttons.allProducts === true) {
            dispatch(searchAllProducts(e.target.value))
        } else if (data.products.buttons.reccomended) {
            dispatch(searchReccoomended(e.target.value))
        } else if (data.products.buttons.electronics) {
            dispatch(searchElectronics(e.target.value))
        } else if (data.products.buttons.phones) {
            dispatch(searchPhones(e.target.value))
        } else if (data.products.buttons.home) {
            dispatch(searchHome(e.target.value))
        }else if(data.products.buttons.clothing){
            dispatch(searchClothing(e.target.value))
        }
        setSearch(data.products.searchproducts)
    }

    const submitSearch = () => {
        if (textSearch !== '') {
            setAllProducts(search)
            console.log(search)
        }
    }




    const allproducts = () => {
        setAllProducts(data.products.allProducts);
        dispatch(setAllProductsButton())
    }
    const reccomended = () => {
        setAllProducts(data.products.reccomended);
        dispatch(setReccomendedButton())
    }
    const electronics = () => {
        setAllProducts(data.products.electronics);
        dispatch(setElectronicsButton())
    }
    const phones = () => {
        setAllProducts(data.products.phones);
        dispatch(setPhonesButton())
    }
    const home = () => {
        setAllProducts(data.products.home);
        dispatch(setHomeButton())
    }
    const clothing = () => {
        setAllProducts(data.products.clothing);
        dispatch(setClothingButton())
    }



    const stationery = () => {
        setAllProducts(data.products.stationery)
        dispatch(setStationeryButton());
    }
    const notes = () => {
        setAllProducts(data.products.notes)
        dispatch(setNotesButton());
    }
    const enotes = () => {
        setAllProducts(data.products.enotes)
        dispatch(setEnotesButton());
    }
    const previouspapers = () => {
        setAllProducts(data.products.previouspapers)
        dispatch(setPreviousPapersButton());
    }


    // const ColorButton = styled(Button)(({ theme }) => ({
    //     color: theme.palette.getContrastText(grey[100]),
    //     backgroundColor: grey[100],
    //     '&:hover': {
    //         backgroundColor: grey[400],
    //     },
    // }));

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[700],
        },
    }));


    const NewButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[700],
        },
    }));




    return (
        <div>
            <div className="home_container">
                <img className="home_image" src={banner1}></img>

                <div className="home_search">
                    <div className='home_search_bar'>
                        <div className='inputField'>
                            <Stack spacing={2} sx={{ height: 55, minWidth: 250, maxWidth: 350, color: "white" }}>
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    options={search.map((option) => option.name)}
                                    renderInput={(params) => <TextField InputProps={{ style: { color: 'white' }, }} {...params} onChange={handleSearch} label="Search Products" />}
                                />
                            </Stack>
                        </div>

                        <NewButton onClick={submitSearch} sx={{ maxWidth: 100, minWidth: 100, marginRight: 1, height: 40 }} variant="contained">Search</NewButton>
                    </div>
                </div>

                <div className='buttonsPanel'>
                    <ColorButton onClick={allproducts} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">All Products</ColorButton>
                    <ColorButton onClick={reccomended} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">Reccomended</ColorButton>
                    <ColorButton onClick={electronics} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">Electronics</ColorButton>
                    <ColorButton onClick={phones} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">Phones & Laptops</ColorButton>
                    <ColorButton onClick={home} sx={{ maxWidth: 300, minWidth: 300, margin: 2 }} variant="contained">Home & Kitchen</ColorButton>
                    <ColorButton onClick={clothing} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">Fashion & Clothing</ColorButton>
                </div>

                <br></br>
                <br></br>

                <div className="home_row">
                    {
                        products.length > 0 ? products.map((item, index) =>
                            <ProductCard
                                id={item._id}
                                ownerId={item.ownerId}
                                name={item.name}
                                description={item.description}
                                category={item.category}
                                price={item.price}
                                image={item.productImage}
                                link={item.link}
                                date={item.sellingDate}
                            />
                        ) : <h1>No products found</h1>
                    }

                </div>
            </div>
            {
                loader ? <LinearProgress color='success' /> : <></>
            }
            <br></br>
            <br></br>
        </div>
    )
}

export default Home
