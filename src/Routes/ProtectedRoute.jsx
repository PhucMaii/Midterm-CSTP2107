import { Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { isAuthenticated } from '../utils/auth';

export default function ProtectedRoutes() {
    // eslint-disable-next-line no-unused-vars
    const [isAuth, _setIsAuth] = useState(isAuthenticated());
    return isAuth ? <Outlet /> : <Navigate to="/" />;
}