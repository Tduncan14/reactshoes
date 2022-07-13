import react ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Content from './components/content/Content';
import Overlay from './components/overlay/Overlay';

function App() {

    const [overlay,setoverlay] = useState(false);
    const [image,setImage] = useState();


    const setTheOverlay = (e) => {

        setoverlay(!overlay);
        setImage(e.target.src)
    }

  return (
    <div className="App">
      <Nav />
      <hr className='hr' />
      {/* beginning of Content */}
      <Content setImage={setImage} setTheOverlay={setTheOverlay} />
       { overlay && <Overlay image={image} setTheOverlay={setTheOverlay}  />}
  
    </div>
  );
}

export default App;
