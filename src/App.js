import logo from './logo.svg';
import './App.css';
import HeaderSec from './Header/HeaderSec';
import About from './Content/About';

function App() {
  return (
    <div className="App">
      <HeaderSec></HeaderSec>
      <div className="content">
        <About/>
      </div>
    </div>
  );
}

export default App;
