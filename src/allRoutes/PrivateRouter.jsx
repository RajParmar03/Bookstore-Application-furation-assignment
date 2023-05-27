import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRouter = (props) => {

    const token = useSelector(store => store.userManager.token);
    
    if (token) {
        return props.children;
    }
    
    return <Navigate to="/login" />
}

export default PrivateRouter;