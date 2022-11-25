import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"
import tourReducer from "./features/tourSlice"
import bookingReducer from "./features/BookingSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        tour: tourReducer,
        booking: bookingReducer
    },
});

export default store;
