import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const UseAuth = () => {
    const all=useContext(AuthContext)
    return all
   
};

export default UseAuth;