import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />

                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders </Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>

                    {user?.uid ?
                        <button className='btn-logout' onClick={logOut}>Log Out </button> :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                    }
                    {/* logOut er kono parameter lagbena tai onclick e direct logout ke call kore dibo context e pathanor por */}
                    <span>{user?.email}</span>
                </div>
            </nav>
        </div>
    );
};

export default Header;