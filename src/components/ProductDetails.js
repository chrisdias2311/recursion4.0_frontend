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

function ProductDetails() {
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
              {/* <img src="https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg" alt="Product Image"  className="product_image"></img> */}
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-serial-sipper-watter-bottle-28150768205907-New.jpg?v=1665504211" alt="Product Image" className="product_image"></img>
              <br></br>
              <div className="details">
                <div className='text_details'>
                {/* line-height: 1.25;
    font-size: 1rem;
    font-family: "HM Sans Semi Bold","HMSansHebrew-SemiBold","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
    font-weight: 600;
    text-transform: none;
    order: 1;
    margin: 8px 0 24px; */}
                  <Typography sx={{ textAlign: 'left', fontWeight: 'SemiBold', fontFamily: "Sans Semi Bold" }} gutterBottom variant="h5" component="div">
                    Sipper Water bottle
                  </Typography>
                  <br></br>
                  <Typography sx={{ textAlign: 'left', fontWeight: 900, fontFamily: "Sans Semi Bold", fontSize: 32, fontStyle: 'italic'}} gutterBottom variant="h5" component="div">
                    Rs.500
                  </Typography>
                  <br></br>
                  <Typography sx={{ textAlign: 'left' , fontFamily: "Sans Semi Bold" }} gutterBottom variant="h5" component="div" className="descriptionBox">
                    <span className='span_tag' fontFamily= 'Sans Semi Bold'>Product Description: </span>
                    <br></br>
                    Used in sem 2 good shape
                  </Typography>
                  <br></br>
                  <Typography sx={{ textAlign: 'left' , fontFamily: "Sans Semi Bold"}} gutterBottom variant="h5" component="div">
                  <span className='span_tag' fontFamily= 'Sans Semi Bold'>Category: </span>
                    Commodities
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
      </div>
    </div>
  )
}

export default ProductDetails
