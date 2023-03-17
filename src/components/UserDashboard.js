import React from 'react'
import './UserDashboard.css'
import AvailableProductCard from './AvailableProductCard'
import { setAvailableProducts, setBookedProducts, setTransactions } from '../redux/actions/formActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import BookedProductsCard from './BookedProductsCard'
import TransactionCard from './TransactionCard'
import Popper from '@mui/material/Popper';

function UserDashboard() {
  const data = useSelector((state) => state);
  const [uid, setUid] = useState('');
  const [products, setProducts] = useState([]);

  const [availableProds, setAvailableProds] = useState([])
  const [bookedProds, setBookedProds] = useState([])
  const [trans, setTrans] = useState([])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [availableProductsButton, setAvalaibleProductsButton] = useState(true)
  const [bookedProductsButton, setBookedProductsButton] = useState(false)
  const [transactionsButton, setTransactionsButton] = useState(false)

  useEffect(() => {
    const formdata = new FormData();
    formdata.append('email', JSON.parse(localStorage.getItem('user')).email);

    axios.post('http://localhost:5000/api/user/gettransactions', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log(res)
        setTrans(res.data)
        dispatch(setTransactions(res.data))
      })
      .catch(err =>
        console.log("This is the error", err),
      );
  }, [])


  // const getOrders = () => {

  //   const formdata = new FormData();
  //   formdata.append('email', JSON.parse(localStorage.getItem('user')).email);

  //   axios.post('http://localhost:5000/api/user/gettransactions', formdata, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => {
  //       console.log(res)
  //       setTrans(res.data)
  //       dispatch(setTransactions(res.data))
  //     })
  //     .catch(err =>
  //       console.log("This is the error", err),
  //     );

  // }




  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[600],
    },
  }));


  return (
    <div>
      <h1>My Products</h1>
      <div className='buttonsPanel'>
        <ColorButton sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">Your Orders</ColorButton>       {/*   which of my products wese sold? I have bought  */}
      </div>

      <br></br>

      <div>

        {
          trans.length > 0 ? trans.map((item, index) =>
            <TransactionCard
              transactionId={item._id}
              transactionType={item.transactionType}
              productName={item.productName}
              date={item.ordered}
              delivery={item.arrival}
              productId={item.productId}
              status={item.status}
            />
          ) : <h4>No transactions found</h4>
        }


      </div>


      <br></br> <br></br> <br></br><br></br><br></br>
    </div>
  )
}

export default UserDashboard
