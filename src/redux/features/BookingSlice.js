import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async ({ data, toast, navigate }, { rejectWithValue }) => {
    try {
      const res = await api.createbooking(data);
      toast.success("Booking success");
      navigate("/dashboard/bookings");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUsersBooking = createAsyncThunk(
  "booking/getUsersBooking",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.getusersBooking(id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getAllBookings = createAsyncThunk(
  "booking/getAllBookings",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.getBookings();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteBooking = createAsyncThunk(
  "booking/deleteBooking",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const res = await api.deletebooking(id);
      toast.success("Delete success");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    booking: {},
    error: "",
    loading: false,
    bookings: [],
    allBookings: [],
  },

  extraReducers: {
    // Create bookings
    [createBooking.pending]: (state, action) => {
      state.loading = true;
    },
    [createBooking.fulfilled]: (state, action) => {
      state.loading = false;
      state.booking = action.payload;
    },
    [createBooking.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Get logged in users all bookings
    [getUsersBooking.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsersBooking.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookings = action.payload.bookings;
    },
    [getUsersBooking.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    // Admin=> Get all the bookings
    [getAllBookings.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllBookings.fulfilled]: (state, action) => {
      state.loading = false;
      state.allBookings = action.payload.bookings;
    },
    [getAllBookings.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    // Delete booking
    [deleteBooking.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteBooking.fulfilled]: (state, action) => {
      state.loading = false;
      state.allBookings = state.allBookings.filter(
        (el) => el._id !== action.payload.booking._id
      );
      state.bookings = state.bookings.filter(
        (el) => el._id !== action.payload.booking._id
      );
    },
    [deleteBooking.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default bookingSlice.reducer;
