import { configureStore, createSlice } from "@reduxjs/toolkit"
import items from "./items";

const itemSlice = createSlice({
    name: "items",
    initialState: items,

    reducers: {
        addInitialItems: (state) => {
            return state;
        }
    }
})

const bagSlice = createSlice({
    name: "bag",
    initialState: [],

    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload);
        },
        removeFromBag: (state, action) => {
            return state.filter(bagId => bagId !== action.payload);
        }
    }
})

const modalSlice = createSlice({
    name: "modal",
    initialState: false,
    reducers: {
        openModal: state => state = true,
        closeModal: state => state = false,
    }
})

const wishListSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist : (state,action)=>{
            state.push(action.payload);
        },
        removeFromWishlist : (state,action)=>{
            return state.filter(wishlistId=> wishlistId !== action.payload);
        }
    }
})

const itemStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        bag: bagSlice.reducer,
        modal: modalSlice.reducer,
        wishlist: wishListSlice.reducer,
    }
});

export const itemAction = itemSlice.actions;
export const bagAction = bagSlice.actions;
export const modalAction = modalSlice.actions;
export const wishlistAction = wishListSlice.actions;

export default itemStore;