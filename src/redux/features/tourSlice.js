import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const createTour = createAsyncThunk(
    "tour/createTour",
    async ({ values, image, toast }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "redux-tour");
            formData.append("cloud_name", "dmkyaq9vt");

            const imageRes = await fetch(
                "https://api.cloudinary.com/v1_1/dmkyaq9vt/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const res2 = await imageRes.json();
            const imageURL = res2.url;
            const tour = { ...values, imageCover: imageURL };
            const res = await api.createtour(tour);
            toast.success("Tour update success");
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getTopTour = createAsyncThunk(
    "tour/toptour",
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.toptour();
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getAllTour = createAsyncThunk(
    "tour/alltours",
    async (sort, { rejectWithValue }) => {
        try {
            const res = await api.alltours(sort);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getSingleTour = createAsyncThunk(
    "tour/getSingleTour",
    async (id, { rejectWithValue }) => {
        try {
            const res = await api.getTourByid(id);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const postReview = createAsyncThunk(
    "tour/postreview",
    async ({ reviews, toast, id }, { rejectWithValue }) => {
        console.log(reviews);
        try {
            const res = await api.postReview(id, reviews);
            toast.success("Review submit success")
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const getReviews = createAsyncThunk(
    "tour/getReviews",
    async (id, { rejectWithValue }) => {
        try {
            const res = await api.getReviewsAPI(id);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const getStats = createAsyncThunk(
    "tour/getStats",
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.getstatsAPI();
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const tourSlice = createSlice({
    name: "tour",
    initialState: {
        tour: {},
        error: "",
        loading: false,
        tours: [],
        topTours: [],
        reviews: [],
        stats: []
    },

    extraReducers: {
        [createTour.pending]: (state, action) => {
            state.loading = true;
        },
        [createTour.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [createTour.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Get top tours
        [getTopTour.pending]: (state, action) => {
            state.loading = true;
        },
        [getTopTour.fulfilled]: (state, action) => {
            state.loading = false;
            state.topTours = action.payload.tours;
        },
        [getTopTour.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Get all tours
        [getAllTour.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllTour.fulfilled]: (state, action) => {
            state.loading = false;
            state.tours = action.payload.tours;
        },
        [getAllTour.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Get single tour
        [getSingleTour.pending]: (state, action) => {
            state.loading = true;
        },
        [getSingleTour.fulfilled]: (state, action) => {
            state.loading = false;
            state.tour = action.payload.tour;
        },
        [getSingleTour.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        // Post review
        [postReview.pending]: (state, action) => {
            state.loading = true;
        },
        [postReview.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [postReview.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Get reviews review
        [getReviews.pending]: (state, action) => {
            state.loading = true;
        },
        [getReviews.fulfilled]: (state, action) => {
            state.loading = false;
            state.reviews = action.payload.reviews
        },
        [getReviews.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Get Stats 
        [getStats.pending]: (state, action) => {
            state.loading = true;
        },
        [getStats.fulfilled]: (state, action) => {
            state.loading = false;
            state.stats = action.payload.stats
        },
        [getStats.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default tourSlice.reducer;
