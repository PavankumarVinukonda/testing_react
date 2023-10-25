// import { createSlice } from "@reduxjs/toolkit";


// const cartSlice = createSlice({
//     name:'cart',
//     initialState:{
//         items:[

//             {
//                 "id": 2,
//                 "title": "iPhone X",
//                 "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//                 "price": 899,
//                 "discountPercentage": 17.94,
//                 "rating": 4.44,
//                 "stock": 34,
//                 "brand": "Apple",
//                 "category": "smartphones",
//                 "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//                 "images": [
//                   "https://i.dummyjson.com/data/products/2/1.jpg",
//                   "https://i.dummyjson.com/data/products/2/2.jpg",
//                   "https://i.dummyjson.com/data/products/2/3.jpg",
//                   "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
//                 ]
//               },
//               {
//                 "id": 3,
//                 "title": "Samsung Universe 9",
//                 "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
//                 "price": 1249,
//                 "discountPercentage": 15.46,
//                 "rating": 4.09,
//                 "stock": 36,
//                 "brand": "Samsung",
//                 "category": "smartphones",
//                 "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
//                 "images": [
//                   "https://i.dummyjson.com/data/products/3/1.jpg"
//                 ]
//               }
//         ]
//     },
//     reducers : {
//         addItem:(state,action) => {
//             state.items.push(action); // mutating the state here
//         },
//         removeItem:(state,action) => {
//             state.items.pop();
//         },
//         clearCart: (state,action) => {
//             state.items.length = 0;
//         }
//     }
// })


// // exporting actions  

// export const {addItems, removeItems,clearCart} = cartSlice?.actions;

// // exporyting the reducers

// export default  cartSlice?.reducer

// // cart slice will like an big object it has actions and reducers



import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return {items:[]}
      // return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
