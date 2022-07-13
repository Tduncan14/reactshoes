import React from 'react';
import './Nav.css';




const Nav = () => {


    return(
        <div className="navbar">
             
             <div className="navlist">

                <div className="logo"> sneakers </div>

            <ul>
                 <li>Collections</li>
                 <li>Men</li>
                 <li>Women</li>
                 <li> About</li>
                 <li> Contact</li>
            </ul>


            </div>


          <div className="nav-r">
              <img className="first"src='./images/icon-cart.svg' />
              <img className="two" src="./images/image-avatar.png"/>
          </div>


        

        </div>
    )


}


export default Nav