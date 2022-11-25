import axios from "axios";
const API = axios.create({
    baseURL: "https://natours-server.onrender.com/api/v1",
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token
            }`;
    }
    return req;
});


export const getme = () => API.get("/auth/user");
export const signIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);
export const upadteme = (formData) => API.patch("/auth/updateme", formData);
export const upadtepassword = (formData) =>
    API.patch("/auth/update-password", formData);

// Tours
export const createtour = (formData) => API.post("/tours", formData);
export const toptour = () => API.get("/tours/top-5-cheap");
export const alltours = (sort) => API.get(`/tours?sort=${sort}`);
export const getTourByid = (id) => API.get(`/tours/${id}`);
export const postReview = (id, review) =>
    API.post(`/tours/${id}/reviews`, review);
export const getReviewsAPI = (id) => API.get(`/tours/${id}/reviews`);
export const getstatsAPI = () => API.get("tours/tour-stats");


// Users
export const getallusers = () => API.get("/auth/users");
export const getInactiveusers = () => API.get("/auth/users-inactive");
export const updateUser = (data) => API.patch("/auth/update-user", data);

// Booking
export const createbooking = (data) => API.post("/booking", data);
export const getBookings = () => API.get("/booking");
export const getusersBooking = (id) => API.get(`/booking/${id}`);
export const deletebooking = (id) => API.delete(`/booking/${id}`);
