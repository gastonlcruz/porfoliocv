import './App.css';
import NavBar from './components/NavBar/NavBar';
import Portada from './components/Portada/Portada';

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
      <section>Porfolio1</section>
      <section>Porfolio2</section>
      <section>Porfolio3</section>
      <section id='Contact'>Contact</section>

    </div>
  );
}

export default App;
