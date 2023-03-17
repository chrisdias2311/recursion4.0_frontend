import { ActionTypes } from "../constants/actionTypes"
import * as api from '../../api/api'


// export const signUpUser = (user) => {
//     console.log("Called from actions")
//     return{
//         type:ActionTypes.SIGNUP_USER,
//         payload: user,
//     }
// }
export const setUser = (user) => {
  console.log("Set user called")
    return{
        type:ActionTypes.SET_USER,
        payload:user
    }
}

export const setInvalidUsers = (users) => {
  console.log("Set invalid users called from formActons: ");
  return{
    type: ActionTypes.SET_INVALID_USERS,
    payload:users
  }
}

export const registerUser = (uid) => {
  console.log("Register users called from formActons: ");
  return{
    type: ActionTypes.REGISTER_USER,
    payload:uid
  }
}

export const declineUser = (uid) => {
  console.log("Decline users called from formActons: ");
  return{
    type: ActionTypes.DECLINE_USER,
    payload:uid
  }
}

export const setProducts = (products) => {
  return{
    type: ActionTypes.SET_PRODUCTS,
    payload:products
  }
}

export const setMyProducts = (products) => {
  return{
    type: ActionTypes.SET_MY_PRODUCTS,
    payload:products
  }
}

export const setStationery = (products) => {
  return{
    type: ActionTypes.SET_STATIONERY,
    payload:products
  }
}

export const setNotes = (products) => {
  return{
    type: ActionTypes.SET_NOTES,
    payload:products
  }
}

export const setPreviousPapers = (products) => {
  return{
    type: ActionTypes.SET_PREVIOUS_PAPERS,
    payload:products
  }
}

export const setEnotes = (products) => {
  return{
    type: ActionTypes.SET_ENOTES,
    payload:products
  }
}





export const setReccomended = (products) => {
  return{
    type: ActionTypes.SET_RECCOMENDED,
    payload:products
  }
}
export const setElectronics = (products) => {
  return{
    type: ActionTypes.SET_ELECTRONICS,
    payload:products
  }
}
export const setPhones = (products) => {
  return{
    type: ActionTypes.SET_PHONES,
    payload:products
  }
}
export const setHome = (products) => {
  return{
    type: ActionTypes.SET_HOME,
    payload:products
  }
}
export const setClothing = (products) => {
  return{
    type: ActionTypes.SET_CLOTHING,
    payload:products
  }
}






export const setAllProductsButton = () => {
  return{
    type: ActionTypes.SET_ALL_PRODUCTS_BUTTON
  }
}
export const setStationeryButton = () => {
  return{
    type: ActionTypes.SET_STATIONERY_BUTTON
  }
}
export const setNotesButton = () => {
  return{
    type: ActionTypes.SET_NOTES_BUTTON
  }
}
export const setEnotesButton = () => {
  return{
    type: ActionTypes.SET_ENOTES_BUTTON
  }
}
export const setPreviousPapersButton = () => {
  return{
    type: ActionTypes.SET_PREVIOUS_PAPERS_BUTTON
  }
}




export const setReccomendedButton = () => {
  return{
    type: ActionTypes.SET_RECCOMENDED_BUTTON
  }
}
export const setElectronicsButton = () => {
  return{
    type: ActionTypes.SET_ELECTRONICS_BUTTON
  }
}
export const setPhonesButton = () => {
  return{
    type: ActionTypes.SET_PHONES_BUTTON
  }
}
export const setHomeButton = () => {
  return{
    type: ActionTypes.SET_HOME_BUTTON
  }
}
export const setClothingButton = () => {
  return{
    type: ActionTypes.SET_CLOTHING_BUTTON
  }
}





export const searchAllProducts = (search) => {
  return{
    type: ActionTypes.SEARCH_ALL_PRODUCTS,
    payload:search
  }
}
export const searchReccoomended = (search) => {
  return{
    type: ActionTypes.SEARCH_RECCOMENDED,
    payload:search
  }
}
export const searchElectronics = (search) => {
  return{
    type: ActionTypes.SEARCH_ELECTRONICS,
    payload:search
  }
}
export const searchPhones = (search) => {
  return{
    type: ActionTypes.SEARCH_PHONES,
    payload:search
  }
}
export const searchHome = (search) => {
  return{
    type: ActionTypes.SEARCH_HOME,
    payload:search
  }
}
export const searchClothing = (search) => {
  return{
    type: ActionTypes.SEARCH_CLOTHING,
    payload:search
  }
}





export const searchStationery = (search) => {
  return{
    type: ActionTypes.SEARCH_STATIONERY,
    payload:search
  }
}
export const searchNotes = (search) => {
  return{
    type: ActionTypes.SEARCH_NOTES,
    payload:search
  }
}
export const searchPreviousPapers = (search) => {
  return{
    type: ActionTypes.SEARCH_PREVIOUS_PAPERS,
    payload:search
  }
}
export const searchEnotes = (search) => {
  return{
    type: ActionTypes.SEARCH_ENOTES,
    payload:search
  }
}

export const bookProd = (product_id) => {
  return{
    type: ActionTypes.BOOK_PRODUCT,
    payload: product_id
  }
}



export const setAvailableProducts = (products) => {
  return{
    type: ActionTypes.SET_AVAILABLE_PRODUCTS,
    payload: products
  }
}
export const setBookedProducts = (products) => {
  return{
    type: ActionTypes.SET_BOOKED_PRODUCTS,
    payload: products
  }
}
export const setTransactions = (transactions) => {
  return{
    type: ActionTypes.SET_TRANSACTION_HISTORY,
    payload: transactions
  }
}


export const deleteProduct = (product_id) => {
  console.log("Decline users called from formActons: ");
  return{
    type: ActionTypes.DELETE_PRODUCT,
    payload:product_id
  }
}




// export const setInvalidUsers = async() => {
//   console.log("Set invalid users called from formActons: ");
//   // const res = await api.getInvalidUser();
//   const res = 'Empty'
//   console.log("The result:")
//   return{
//     type: ActionTypes.SET_INVALID_USERS,
//     payload:res
//   }
// }





