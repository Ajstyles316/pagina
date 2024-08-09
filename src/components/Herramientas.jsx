import './Herramientas.css';
import firebaseImage from '../assets/images/firebase.png';
import jsImage from '../assets/images/js.png';
import reactImage from '../assets/images/react.jpg';
import aiImage from '../assets/images/ia.jpg';

function Tools() {
  const tools = [
    { name: 'Firebase', description: 'Plataforma de desarrollo de aplicaciones con servicios en la nube.', image: firebaseImage },
    { name: 'JavaScript', description: 'Lenguaje de programación utilizado para el desarrollo web.', image: jsImage },
    { name: 'React', description: 'Biblioteca de JavaScript para construir interfaces de usuario.', image: reactImage },
    { name: 'Inteligencia Artificial', description: 'Tecnología para crear sistemas que pueden aprender y tomar decisiones.', image: aiImage },
  ];

  return (
    <div className="tools-container">
      <h2>Herramientas</h2>
      <div className="tools-cards">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.image} alt={tool.name} className="tool-image" />
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
