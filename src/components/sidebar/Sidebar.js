import React ,{useState} from 'react'
import close from '../../asset/icon-close.svg';
import './sidebar.css'

const Sidebar = () => {

    const [isTrue,setisTrue] = useState(false);



  return (
    <div className="sidevisible">

        <div className="sidemenu">

            <img className="image" src={close}  />
          

            <ul className="sidelist">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>

        </div>


         <div className='sideMenuBlack'>

         </div>
    </div>
  )
}

export default Sidebar
