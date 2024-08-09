import './Servicios.css';
import birthdayImage from '../assets/images/birthday.jpg'; 
import baptismImage from '../assets/images/bautizo.jpg';
import weddingImage from '../assets/images/wedding.jpeg';
import babyShowerImage from '../assets/images/babyshower.jpg';

function Services ()  {
  
  return (
    <section className="services">
      <div className="services-header">
        <h2>Nuestros Servicios Increíbles</h2>
        <p>Ofrecemos una variedad de servicios para que tus eventos sean inolvidables. Desde cumpleaños hasta bodas, tenemos todo lo que necesitas para hacer que tu ocasión especial sea un éxito.</p>
      </div>
      <div className="services-content">
        <div className="service-card">
          <img src={birthdayImage} alt="Cumpleaños" className="service-image" />
          <h3>Cumpleaños</h3>
          <p>Organizamos cumpleaños personalizados con temáticas únicas, decoración especial y actividades para todas las edades. Hacemos que cada celebración sea memorable.</p>
        </div>
        <div className="service-card">
          <img src={baptismImage} alt="Bautizos" className="service-image" />
          <h3>Bautizos</h3>
          <p>Ofrecemos planificación integral para bautizos, incluyendo decoración, catering y actividades para toda la familia. Nos encargamos de todos los detalles para que tu evento sea perfecto.</p>
        </div>
        <div className="service-card">
          <img src={weddingImage} alt="Bodas" className="service-image" />
          <h3>Bodas</h3>
          <p>Diseñamos bodas a medida, desde la elección del lugar hasta la decoración y el catering. Creamos experiencias únicas para que tu día especial sea exactamente como lo imaginaste.</p>
        </div>
        <div className="service-card">
          <img src={babyShowerImage} alt="Baby-Shower" className="service-image" />
          <h3>Baby-Shower</h3>
          <p>Organizamos baby-showers llenos de alegría y detalles personalizados. Desde la decoración hasta los juegos, nos encargamos de todo para que sea un evento inolvidable.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
