import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const token = JSON.parse(localStorage.getItem("profile")).token
    if (!token) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute
