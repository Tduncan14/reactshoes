import react ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Content from './components/content/Content';
import Overlay from './components/overlay/Overlay';
import SmallCart from './components/smallCart/SmallCart';

function App() {

    const [overlay,setoverlay] = useState(false);
    const [image,setImage] = useState();
    const [showCart,setShowCart] = useState(false)


    const setTheOverlay = (e) => {

        setoverlay(!overlay);
        setImage(e.target.src)
    }


    const showtheCart = () => {

          setShowCart(!showCart);
          console.log(showCart,'this is the showcart')
    }

  return (
    <div className="App">
      <Nav showtheCart ={showtheCart} />
      <SmallCart showCart={showCart} />
      <hr className='hr' />
      {/* beginning of Content */}
      <Content setImage={setImage} setTheOverlay={setTheOverlay} />
       { overlay && <Overlay image={image} setTheOverlay={setTheOverlay}  />}
  
    </div>
  );
}

export default App;
