import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    // validateUsers: [],
    myProducts: [],
    wishlist: [],
    allProducts: [],
    stationery: [],
    notes: [],
    enotes: [],

    reccomended: [],
    electronics:[],
    phones:[],
    home:[],
    clothing:[],


    previouspapers: [],
    buttons: {
        allProducts: true,
        reccomended: false,
        electronics: false,
        phones:false,
        home:false,
        clothing:false,

        stationery: false,
        notes: false,
        previouspapers: false,
        enotes: false
    },
    searchproducts: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            console.log("Called from products reducer")
            return { ...state, allProducts: payload };
        case ActionTypes.SET_STATIONERY:
            console.log("Called from products reducer")
            return { ...state, stationery: state.allProducts.filter((item) => item.category === "Stationery and Equipments"), };
        case ActionTypes.SET_NOTES:
            console.log("Called from products reducer")
            return { ...state, notes: state.allProducts.filter((item) => item.category === "Notes & Study Material"), };
        case ActionTypes.SET_ENOTES:
            console.log("Called from products reducer")
            return { ...state, enotes: state.allProducts.filter((item) => item.category === "E-notes and Study Material"), };
        case ActionTypes.SET_PREVIOUS_PAPERS:
            console.log("Called from products reducer")
            return { ...state, previouspapers: state.allProducts.filter((item) => item.category === "Previous Papers"), };
        case ActionTypes.SET_MY_PRODUCTS:
            console.log("Called from products reducer")
            return { ...state, myProducts: payload, };
        case ActionTypes.BOOK_PRODUCT:
            console.log("Called from products  reducer id ", payload)
            return { ...state, allProducts: state.allProducts.filter((item) => item._id !== payload), }


        case ActionTypes.SET_RECCOMENDED:
            console.log("Called from products reducer")
            return {
                ...state,
                reccomended: state.allProducts.filter((item) =>
                    (item.targetgender === JSON.parse(localStorage.getItem('user')).gender &&
                    item.targetage === JSON.parse(localStorage.getItem('user')).age) ||
                    item.targetgender === 'N.A.'
                )
            };
        case ActionTypes.SET_ELECTRONICS:
            console.log("Called from products reducer")
            return { ...state, electronics: state.allProducts.filter((item) => item.category === "Electronics"), };
        case ActionTypes.SET_PHONES:
            console.log("Called from products reducer")
            return { ...state, phones: state.allProducts.filter((item) => item.category === "Mobiles & Laptops"), };
        case ActionTypes.SET_HOME:
            console.log("Called from products reducer")
            return { ...state, home: state.allProducts.filter((item) => item.category === "Home & Kitchen"), };
        case ActionTypes.SET_CLOTHING:
            console.log("Called from products reducer")
            return { ...state, clothing: state.allProducts.filter((item) => item.category === "Fashion & clothing"), };


        case ActionTypes.SET_ALL_PRODUCTS_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: { ...state.buttons, allProducts: true, reccomended: false, electronics: false, phones: false, home: false , clothing:false} };
        case ActionTypes.SET_RECCOMENDED_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: { ...state.buttons, allProducts: false, reccomended: true, electronics: false, phones: false, home: false , clothing:false} };
        case ActionTypes.SET_ELECTRONICS_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: { ...state.buttons, allProducts: false, reccomended: false, electronics: true, phones: false, home: false , clothing:false} };
        case ActionTypes.SET_PHONES_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: { ...state.buttons, allProducts: false, reccomended: false, electronics: false, phones: true, home: false , clothing:false} };
        case ActionTypes.SET_HOME_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: { ...state.buttons, allProducts: false, reccomended: false, electronics: false, phones: false, home: true , clothing:false} };
        case ActionTypes.SET_CLOTHING_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: { ...state.buttons, allProducts: false, reccomended: false, electronics: false, phones: false, home: false , clothing:true} };
            
        


        // case ActionTypes.SET_STATIONERY_BUTTON:
        //     console.log("Called from products reducer")
        //     return { ...state, buttons: { ...state.buttons, allProducts: false, stationery: true, notes: false, previouspapers: false, enotes: false } };
        // case ActionTypes.SET_NOTES_BUTTON:
        //     console.log("Called from products reducer")
        //     return { ...state, buttons: { ...state.buttons, allProducts: false, stationery: false, notes: true, previouspapers: false, enotes: false } };
        // case ActionTypes.SET_PREVIOUS_PAPERS_BUTTON:
        //     console.log("Called from products reducer")
        //     return { ...state, buttons: { ...state.buttons, allProducts: false, stationery: false, notes: false, previouspapers: true, enotes: false } };
        // case ActionTypes.SET_ENOTES_BUTTON:
        //     console.log("Called from products reducer")
        //     return { ...state, buttons: { ...state.buttons, allProducts: false, stationery: false, notes: false, previouspapers: false, enotes: true } };


        case ActionTypes.SEARCH_ALL_PRODUCTS:
            return {
                ...state,
                searchproducts: state.allProducts.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) || item.name.toLowerCase().includes(payload.toLowerCase()) || item.category.toLowerCase().includes(payload.toLowerCase()))
            };
        case ActionTypes.SEARCH_RECCOMENDED:
            return {
                ...state,
                searchproducts: state.reccomended.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) ||
                    item.name.toLowerCase().includes(payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(payload.toLowerCase()))
            };
        case ActionTypes.SEARCH_ELECTRONICS:
            return {
                ...state,
                searchproducts: state.electronics.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) ||
                    item.name.toLowerCase().includes(payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(payload.toLowerCase()))
            };
        case ActionTypes.SEARCH_PHONES:
            return {
                ...state,
                searchproducts: state.phones.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) ||
                    item.name.toLowerCase().includes(payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(payload.toLowerCase()))
            };
        case ActionTypes.SEARCH_HOME:
            return {
                ...state,
                searchproducts: state.home.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) ||
                    item.name.toLowerCase().includes(payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(payload.toLowerCase()))
            };
        case ActionTypes.SEARCH_CLOTHING:
            return {
                ...state,
                searchproducts: state.clothing.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) ||
                    item.name.toLowerCase().includes(payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(payload.toLowerCase()))
            };




        case ActionTypes.SEARCH_STATIONERY:
            return {
                ...state,
                searchproducts: state.stationery.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) ||
                    item.name.toLowerCase().includes(payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(payload.toLowerCase()))
            };
        case ActionTypes.SEARCH_NOTES:
            return {
                ...state,
                searchproducts: state.notes.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) ||
                    item.name.toLowerCase().includes(payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(payload.toLowerCase()))
            };
        case ActionTypes.SEARCH_PREVIOUS_PAPERS:
            return {
                ...state,
                searchproducts: state.previouspapers.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) ||
                    item.name.toLowerCase().includes(payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(payload.toLowerCase()))
            };
        case ActionTypes.SEARCH_ENOTES:
            return {
                ...state,
                searchproducts: state.enotes.filter((item) => item.description.toLowerCase().includes(payload.toLowerCase()) ||
                    item.name.toLowerCase().includes(payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(payload.toLowerCase()))
            };
        default:
            return state;
    }
}

// export const setUser = (state=initialState, {type, payload}) => {
//     switch(type){
//         case ActionTypes.SET_USER:
//             console.log("Called from userreducer")
//             return { ...state, user: payload };
//         default:
//             return state;
//     }
// }

// export const setUnvalidUsers = (state=initialState, {type, payload}) => {
//     switch(type){

//     }
// }



// export const userReducer = (state = {}, action) => {
//     switch(action.type){
//         case ActionTypes.ADD_USER:
//             const user = state.users.concat(action.pauload);
//             return{...state, user};
//     }
// }