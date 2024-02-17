import './App.css';
import NavBar from './components/NavBar/NavBar';
import Portada from './components/Portada/Portada';
import Info from './components/Info/Info';
import Contacto from './components/Contacto/Contacto';
import Experiencia from './components/Experiencia/Experiencia';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import { px } from 'framer-motion';

function App() {
  
  return (
    <div>
      <section id='Inicio'>
        <NavBar/>
        <Portada/>
      </section>
      <section id='Acerca'>
        <About/>
      </section>
      <section id='Experiencia'>
        <Experiencia/>
        </section>
      <section id='Skills'>
        <Skills/>
      </section>
      <section id='Educación' className='cero'>
      
      </section>
      <Info/>
      <section id='Contacto'>
      <Contacto/>
      </section>

    </div>
  );
}

export default App;
