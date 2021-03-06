import react ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Content from './components/content/Content';
import Overlay from './components/overlay/Overlay';
import SmallCart from './components/smallCart/SmallCart';
import Sidebar from './components/sidebar/Sidebar';

function App() {

    const [overlay,setoverlay] = useState(false);
    const [image,setImage] = useState();
    const [showCart,setShowCart] = useState(false)
    const [totalnumber,setTotalnumber] = useState();
    const [menuOpen,setmenuOpen] = useState(false)


    const setTheOverlay = (e) => {

        setoverlay(!overlay);
        setImage(e.target.src)
        closetheCart()
    }


    const toggleMenu = () => {
          setmenuOpen(!menuOpen)
    }

   

    const showtheCart = () => {

          setShowCart(!showCart);
          console.log(showCart,'this is the showcart')
    }


    const closetheCart = () => {

      setShowCart(false);
    }

  return (
    <div className="App">
      <Nav showtheCart ={showtheCart} toggleMenu ={toggleMenu}  closetheCart={closetheCart}/>
      <SmallCart totalnumber={totalnumber} showCart={showCart} showtheCart={showtheCart} setTotalnumber={setTotalnumber}/>
      <hr className='hr' />
      <Sidebar closetheCart={closetheCart}  toggleMenu={toggleMenu} menuOpen={menuOpen}/>
      {/* beginning of Content */}
      <Content setImage={setImage} setTheOverlay={setTheOverlay} setTotalnumber={setTotalnumber} closetheCart={closetheCart} />
       { overlay && <Overlay closetheCart={closetheCart} image={image} setTheOverlay={setTheOverlay}  />}
  
    </div>
  );
}

export default App;
