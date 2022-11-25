import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { userInfo, userLoading } = useContext(AuthContext);
    const location = useLocation();

    if (userLoading) {
        return <Loader>Logging in...</Loader>
    }

    if (userInfo && userInfo?.email) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;