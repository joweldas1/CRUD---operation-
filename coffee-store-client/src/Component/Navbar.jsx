import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const nav=<>
    <NavLink className={({isActive})=>isActive?"active":''} to='/'>App-Home</NavLink>
    <NavLink className={({isActive})=>isActive?"active":''} to='/addCoffee'>Add Coffee</NavLink>
    <NavLink className={({isActive})=>isActive?"active":''} to='/updateCoffee'>Update Coffee</NavLink>
    <NavLink className={({isActive})=>isActive?"active":''} to='/login'>Login</NavLink>
    <NavLink className={({isActive})=>isActive?"active":''} to='/user'>User</NavLink>
   
    </>
    return (
        <div className='space-x-9 text-center'>
             {nav}  
        </div>
    );
};

export default Navbar;
