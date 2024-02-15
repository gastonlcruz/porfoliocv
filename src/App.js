import './App.css';
import NavBar from './components/NavBar/NavBar';
import Portada from './components/Portada/Portada';
import Info from './components/Info/Info';
import Contacto from './components/Contacto/Contacto';
import Experiencia from './components/Experiencia/Experiencia';
import Skills from './components/Skills/Skills';
import About from './components/About/About';

function App() {
  
  return (
    <div>
      <section id='Homepage'>
        <NavBar/>
        <Portada/>
      </section>
      <section id='Services'>
        Parallax
        <About></About>
      </section>
      <section>
        <Experiencia/>
        </section>
      <section id='Porfolio'>
        Parallax
        <Skills/>
        </section>
      <Info/>
      <section id='Contact'>
      <Contacto/>
      </section>

    </div>
  );
}

export default App;
