import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProductDetails2.css'
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function ProductDetails({ id, ownerId, name, description, category, price, image, date }) {

  const navigate = useNavigate();

  const params = useParams();
  const [product, setProduct] = useState([]);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[600],
    },
  }));


  const buyProduct = () => {
    if(!localStorage.getItem('user')){
      alert("You need to Sign In to Buy a product")
      navigate('/userlogin')
    }else if(JSON.parse(localStorage.getItem('user')).verified !== "yes"){
      alert("You need to Sign In to Buy a product")
      navigate('/userlogin')
    }else{
      navigate('/buyproduct/'+params.id)
    }
  }

  useEffect(() => {
    console.log('Id: ', params.id)

    const formdata = new FormData();
    formdata.append('id', params.id);

    axios.post('http://localhost:5000/api/products/productdetails', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log(res)
        setProduct(res.data)
      })
      .catch(err =>
        console.log("This is the error", err),
      );
  }, [])


  console.log("Thr pro.....", product)



  return (
    <div>
      {/* <div className="productdetails">
        <div className='productdetails_container'>
          <br></br><br></br><br></br>
          <div className='heading_container'>
            <h1 className="heading">Product Details</h1>
          </div>
          <div className="blank_space">
          </div>
          <div className="container emp-profile">
            <div className="row">
              <div className='prodimage'>
                <img src={product.productImage} alt="Product Image" className="product_image"></img>
              </div>
              <br></br>
              <div className="details">
                <div className='text_details'>
                  <Typography sx={{ textAlign: 'left', fontWeight: 'SemiBold', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <br></br>
                  <Typography sx={{ textAlign: 'left', fontWeight: 900, fontFamily: "Sans Semi Bold", fontSize: 32, fontStyle: 'italic' }} gutterBottom variant="h5" component="div">
                    $ {price}
                  </Typography>
                  <br></br>
                  <Typography sx={{ textAlign: 'left', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h5" component="div" className="descriptionBox">
                    <span className='span_tag' fontFamily='Sans Semi Bold'>Product Description: </span>
                    <br></br>
                    {description}
                  </Typography>
                  <br></br>
                  <Typography sx={{ textAlign: 'left', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h5" component="div">
                    <span className='span_tag' fontFamily='Sans Semi Bold'>Category: </span>
                    {category}
                  </Typography>
                </div>
                <br></br>
                <div className="buynowBtn">
                  <ColorButton onClick="" sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained" className="buynowBtn">Buy Now</ColorButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}






      <div>
        <br></br><br></br><br></br>
        <div className='product_details'>
          <h1 className="heading">Product Details</h1>

          <div className='productDetails'>
            <div className='media'>
              <img src={product.productImage} alt="Product Image" className="product_image"></img>
            </div>
            <div className='details'>
              <div className='actualdetails'>
                <Typography sx={{ textAlign: 'left', fontWeight: 'SemiBold', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h4" component="div">
                  {product.name}
                </Typography>
                <br></br>
                <Typography sx={{ textAlign: 'left', fontWeight: 900, fontFamily: "Sans Semi Bold", fontSize: 32, fontStyle: 'italic' }} gutterBottom variant="h5" component="div">
                  $ {product.price}
                </Typography>
                <br></br>
                <Typography sx={{ textAlign: 'left', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h5" component="div">
                  <span className='span_tag' fontFamily='Sans Semi Bold'>Category: </span>
                  {product.category}
                </Typography>
                <br></br>
                <Typography sx={{ textAlign: 'left', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h6" component="div" className="descriptionBox">
                  <span className='span_tag' fontFamily='Sans Semi Bold'>Product Description: </span>
                  <br></br>
                  {product.description}
                </Typography>
                <br></br>
              </div>
              <div className='button'>
                <ColorButton onClick={buyProduct} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained" className="buynowBtn">Buy Now</ColorButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
