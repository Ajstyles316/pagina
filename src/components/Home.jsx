import './Home.css';
import sharkImage from '../assets/shark.jpeg';

const Home = () => {
  return (
    <div className="home">
      <h2>Bienvenidos a Capy Sharks Devs SRL</h2>
      <img src={sharkImage} alt="Imagen de inicio" className="home-image" />
      <p>Desarrollamos soluciones de software de vanguardia para optimizar la administración empresarial.</p>
    </div>
  );
};

export default Home;
