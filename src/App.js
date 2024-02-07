import './App.css';
import NavBar from './components/NavBar/NavBar';
import Portada from './components/Portada/Portada';
import Info from './components/Info/Info';

function App() {
  return (
    <div>
      <section id='Homepage'>
        <NavBar/>
        <Portada/>
      </section>
      <section id='Services'>
        Parallax
      </section>
      <section>Services</section>
      <section id='Porfolio'>Parallax</section>
      <Info />
        
      <section id='Contact'>Contact</section>

    </div>
  );
}

export default App;
