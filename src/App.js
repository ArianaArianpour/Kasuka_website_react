import logo from './logo.svg';
import './App.css';
import HeaderSec from './Header/HeaderSec';
import About from './Content/About';
import Services from './Content/Services';
import ServiceExp from './Content/ServiceExp';

function App() {
  return (
    <div className="App">
      <HeaderSec></HeaderSec>
      <div className="content">
        <About/>
        <Services/>
        <ServiceExp/>
      </div>
    </div>
  );
}

export default App;
