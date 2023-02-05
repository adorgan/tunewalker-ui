import React from 'react';
import isLoggedIn from '../../utils/auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    if (!isLoggedIn()) {
        return <Navigate to={'/admin/login'} replace />;
    }

    return children;
};

export default ProtectedRoute;