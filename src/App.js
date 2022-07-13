import react ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Content from './components/content/Content';
import Overlay from './components/overlay/Overlay';

function App() {

    const [overlay,setoverlay] = useState(false);


    const setTheOverlay = () => {

        setoverlay(!overlay);
    }

  return (
    <div className="App">
      <Nav />
      <hr className='hr' />
      {/* beginning of Content */}
      <Content setTheOverlay={setTheOverlay} />
       { overlay && <Overlay setTheOverlay={setTheOverlay}  />}
  
    </div>
  );
}

export default App;
