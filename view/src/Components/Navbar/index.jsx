import React from 'react'
import "../Navbar/style.css"
import { FaHeart, FaCartPlus, FaUser } from 'react-icons/fa'
import { CiMenuBurger } from "react-icons/ci";


function Navbar() {
    return (
        <>
            <div className="container">
                <div className="disable">

                </div>
                <div className="links">
                    <ul>
                        <a href="" className='menu-icon'>  <CiMenuBurger className='menu' /></a>
                        <li><a href="">HOME</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">SHOP</a></li>
                        <li><a href="">CATALOUGE</a></li>
                        <li><a href="">NEW ARRIWALS</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </div>
                <div className="icons">
                    <FaHeart style={{ color: 'red', margin: '5px' }} />
                    <FaCartPlus style={{ margin: '5px' }} />
                    <FaUser style={{ margin: '5px' }} />
                </div>
            </div>

        </>
    )
}

export default Navbar