import React ,{useState,useEffect} from 'react'
import close from '../../asset/icon-close.svg';
import './sidebar.css'


const Sidebar = ({toggleMenu,menuOpen,closeTheCart}) => {

    const [isTrue,setisTrue] = useState(false);


    useEffect(() => {

    },[menuOpen])


    const closed = () => {
      toggleMenu()

    }



  return (
    <>
    {menuOpen && <div className="sidevisible">

        <div className="sidemenu">

            <img onClick={closed} className="image" src={close}  />
          

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
  }
  </>
  )
}

export default Sidebar
