import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Cabecera';
import Footer from './components/Encabezado';
import Home from './components/Home';
import Services from './components/Servicios';
import Tools from './components/Herramientas';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function MainPage() {
  return (
    <>
      <section id="inicio">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
}

function LoginPage() {
  return (
    <div className="auth-page">
      <Login />
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="auth-page">
      <Register />
    </div>
  );
}

export default App;
