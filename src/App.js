import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Nav />
      <hr className='hr' />
      {/* beginning of Content */}
      <Content />
 
    </div>
  );
}

export default App;
