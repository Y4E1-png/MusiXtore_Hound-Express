
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/usersSlice";
import orderReducer from "./slices/orderSlice";
import songReducer from "./slices/songsSlice";
import guideReducer from "./slices/guideSlice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
    songs: songReducer,
    guide: guideReducer
  },
});



export default store;
