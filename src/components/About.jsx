
import './About.css';
import organigrama from '../assets/organigrama.jpg'; 

function About() {
  return (
    <section className="about">
      <h1>Sobre Nosotros</h1>
      <p>En Capy Sharks Devs SRL, nuestro equipo está compuesto por profesionales apasionados y dedicados a ofrecer soluciones de software innovadoras. Nuestro organigrama refleja la estructura y colaboración que nos permite alcanzar nuestros objetivos y brindar el mejor servicio a nuestros clientes.</p>
      <div className="organizational-chart-container">
        <img src={organigrama} alt="Organigrama" className="organizational-chart" />
      </div>
      <p>Estamos comprometidos con la excelencia y la innovación en cada proyecto. Conoce a nuestro equipo y descubre cómo trabajamos juntos para lograr resultados excepcionales.</p>
    </section>
  );
}

export default About;

