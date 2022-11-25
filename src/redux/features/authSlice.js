import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getMe = createAsyncThunk(
    "auth/getMe",
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.getme();

            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getAllUsers = createAsyncThunk(
    "auth/getAllUsers",
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.getallusers();

            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const getInActiveUsers = createAsyncThunk(
    "auth/getInActiveUsers",
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.getInactiveusers();

            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({ currentUser, navigate, toast }, { rejectWithValue }) => {
        try {
            const res = await api.signIn(currentUser);
            toast.success("Login Success");
            navigate("/");
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async ({ newUser, navigate, toast }, { rejectWithValue }) => {
        try {
            const res = await api.signUp(newUser);
            toast.success("Register Success");
            navigate("/");
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUser = createAsyncThunk(
    "auth/updateme",
    async ({ values, toast, image }, { rejectWithValue }) => {
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
            const user = { ...values, photo: imageURL };
            const res = await api.upadteme(user);
            toast.success("Profile update success");
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const passwordChange = createAsyncThunk(
    "auth/passwordChange",
    async ({ values, toast }, { rejectWithValue }) => {
        try {
            const res = await api.upadtepassword(values);
            toast.success("Password change success");
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUserByAdmin = createAsyncThunk(
    "auth/updateUserByAdmin",
    async ({ values, toast }, { rejectWithValue }) => {
        try {
            console.log(values);
            const res = await api.updateUser(values);
            toast.success("Update success");
            console.log(res);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: "",
        loading: false,
        activeUsers: [],
        inActiveUsers: [],
    },
    reducers: {
        setLogout: (state, action) => {
            localStorage.removeItem("profile");
            state.user = null;
        },
    },

    extraReducers: {
        [getMe.pending]: (state, action) => {
            state.loading = true;
        },
        [getMe.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        },
        [getMe.rejected]: (state, action) => {
            state.loading = false;
            // state.error = action.payload.message;
        },

        // Get all users

        [getAllUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.activeUsers = action.payload.users;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Get all users

        [getInActiveUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [getInActiveUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.inActiveUsers = action.payload.users;
        },
        [getInActiveUsers.rejected]: (state, action) => {
            state.loading = false;
            // state.error = action.payload.message;
        },

        // Login
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Register
        [register.pending]: (state, action) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
            state.user = action.payload.user;
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Update user
        [updateUser.pending]: (state, action) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Update user
        [updateUserByAdmin.pending]: (state, action) => {
            state.loading = true;
        },
        [updateUserByAdmin.fulfilled]: (state, action) => {
            state.loading = false;
            const indexActive = state.activeUsers.findIndex(
                (user) => user._id == action.payload.user._id
            );
            const indexInActive = state.inActiveUsers.findIndex(
                (user) => user._id == action.payload.user._id
            );
            state.activeUsers[indexActive] = action.payload.user;
            state.inActiveUsers[indexInActive] = action.payload.user;
        },
        [updateUserByAdmin.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Change password
        [passwordChange.pending]: (state, action) => {
            state.loading = true;
        },
        [passwordChange.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [passwordChange.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export const { setUser, setLogout } = authSlice.actions;
export default authSlice.reducer;
