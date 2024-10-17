import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Hero from './components/Hero';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';
function App() {
  return (
    <div>
   <Navigation/>
   <Maincontent/>
   <Footer/>
   </div>
  );
}

export default App;
