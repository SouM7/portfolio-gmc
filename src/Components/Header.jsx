import React from 'react'
import './Header.css'





function Header(props) {
    return (
        <div className='headerContainer'>
            <div className='headerLeft'>
                <h2>{props.name}</h2>
                <p>{props.job}</p> </div>
            <div className='headerRight'>
                <ul>
                     <li><a className='home' href="">Home</a></li>
                     <li><a href="">Resume</a></li>
                     <li><a href="">Product</a></li>
                     <li><a href="">Contact</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header
