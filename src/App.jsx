import "./index.css";
import { useState, useEffect } from "react";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [currentComment, setCurrentComment] = useState(0);

  const technologies = [
    { name: "HTML", icon: "html.png" },
    { name: "CSS", icon: "css.png" },
    { name: "JavaScript", icon: "javascript.png" },
    { name: "React", icon: "React.png" },
    { name: "Node.js", icon: "Node.js.png" },
    { name: "SQL", icon: "s.png" },
  ];

  const benefits = [
    {
      title: "Aprendizaje práctico",
      description: "Construye proyectos reales desde el día uno.",
    },
    {
      title: "Mentoría personalizada",
      description: "Sesiones con desarrolladores senior.",
    },
    {
      title: "Soporte profesional",
      description: "CV, entrevistas simuladas y búsqueda laboral.",
    },
    {
      title: "Comunidad activa",
      description: "Accede a grupos de estudio y foros exclusivos.",
    },
    {
      title: "Actualización constante",
      description: "Siempre al día con las últimas tecnologías.",
    },
    {
      title: "Certificación reconocida",
      description: "Obtén un diploma avalado por la industria.",
    },
  ];

  const comments = [
    {
      name: "María González",
      avatar: "users/1.png",
      text: "Este curso me cambió la vida. ¡Ahora trabajo como desarrolladora!",
    },
    {
      name: "Juan Pérez",
      avatar: "users/a.png",
      text: "Muy buena experiencia, el aprendizaje es muy práctico y directo.",
    },
    {
      name: "Laura Ramírez",
      avatar: "users/3.png",
      text: "Los instructores son muy buenos, ¡siempre dispuestos a ayudar!",
    },
    {
      name: "Carlos Medina",
      avatar: "users/b.png",
      text: "Aprendí más en 3 meses aquí que en 2 años de universidad.",
    },
    {
      name: "Ana Torres",
      avatar: "users/4.png",
      text: "La comunidad es muy solidaria y eso me motivó mucho.",
    },
    {
      name: "David Sánchez",
      avatar: "users/c.png",
      text: "Gracias a este programa conseguí mi primer empleo en tecnología.",
    },
    {
      name: "Fernanda López",
      avatar: "users/5.png",
      text: "El contenido está muy bien estructurado y actualizado.",
    },
    {
      name: "Miguel Castro",
      avatar: "users/d.png",
      text: "La mentoría personalizada hizo toda la diferencia en mi progreso.",
    },
    {
      name: "Paola Herrera",
      avatar: "users/6.png",
      text: "Lo mejor es que trabajamos en proyectos reales desde el inicio.",
    },
    {
      name: "Sofía Vargas",
      avatar: "users/7.png",
      text: "Recomiendo este curso a cualquiera que quiera entrar en IT.",
    },
    {
      name: "Andrés Jiménez",
      avatar: "users/d.png",
      text: "El ambiente es muy motivador y los profesores son excelentes.",
    },
    {
      name: "Valentina Cruz",
      avatar: "users/8.png",
      text: "Definitivamente valió cada minuto y cada esfuerzo.",
    },
    {
      name: "Luis Fernández",
      avatar: "users/e.png",
      text: "Me ayudaron no solo a aprender, sino también a crecer como profesional.",
    },
    {
      name: "Camilo Ortiz",
      avatar: "users/g.png",
      text: "La mejor inversión que he hecho en mi educación.",
    },
    {
      name: "Javier Morales",
      avatar: "users/f.png",
      text: "Sin duda, una experiencia transformadora para mi carrera.",
    },
  ];

  const companyComments = [
    {
      company: "Google",
      logo: "g.png",
      text: "NAJE TECHNOLOGY forma a desarrolladores con un nivel impresionante, listos para proyectos globales.",
    },
    {
      company: "Microsoft",
      logo: "m.png",
      text: "El talento que sale de aquí tiene un gran impacto en la industria. ¡Altamente recomendado!",
    },
    {
      company: "Amazon",
      logo: "a.png",
      text: "Excelentes profesionales que marcan la diferencia en el mundo del desarrollo.",
    },
    {
      company: "Tesla",
      logo: "t.png",
      text: "La innovación tecnológica que fomenta esta academia está en otro nivel.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComment((prev) => (prev + 1) % comments.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [comments.length]);

  return (
    <div className="app-container">
      {/* 🎬 Video de fondo */}

      <div className="app-container">
        {/* 🎬 Video de fondo */}
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/fondo.jpg" // fallback si el video tarda en cargar
            className="video-background"
          >
            <source
              src="https://drive.google.com/uc?export=download&id=18JUjnKTCJMVcejQP4vTOm5JPytDmdHrK"
              type="video/mp4"
            />
            {/* Fallback adicional por si no soporta video */}
            <img src="/images/fondo.jpg" alt="Fondo estático" />
            Tu navegador no soporta videos en HTML5.
          </video>
        </div>
      </div>

      {/* 🔝 Navbar */}
      <nav className="navbar">
        <div className="logo">NAJE TECHNOLOGY</div>
        <ul>
          <li>
            <a href="#tecnologias">Tecnologías</a>
          </li>
          <li>
            <a href="#beneficios">Beneficios</a>
          </li>
          <li>
            <a href="#comentarios">Comentarios</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="title-section">
        <h1>Impulsa tu carrera digital</h1>
        <button className="btn-hero" onClick={() => setShowForm(true)}>
          Regístrate
        </button>
      </header>

      {/* Tecnologías */}
      <section className="tech-section" id="tecnologias">
        <h2>Tecnologías que dominarás</h2>
        <div className="tech-list">
          {technologies.map((tech) => (
            <div className="tech-item" key={tech.name}>
              <img src={tech.icon} alt={tech.name} />
              <div>{tech.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section" id="beneficios">
        <h2>¿Por qué elegirnos?</h2>
        <div className="benefit-list">
          {benefits.map((b, i) => (
            <div className="benefit-item" key={i}>
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comentarios en carrusel */}
      <section className="comments-section" id="comentarios">
        <h2>Lo que dicen nuestros estudiantes</h2>
        <div className="carousel">
          <div className="comment-box active">
            <div className="comment-user">
              <img
                src={comments[currentComment].avatar}
                alt={comments[currentComment].name}
              />
              <h4>{comments[currentComment].name}</h4>
            </div>
            <p>{comments[currentComment].text}</p>
          </div>

          <div className="carousel-controls">
            {comments.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentComment ? "active" : ""}`}
                onClick={() => setCurrentComment(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Comentarios de empresas */}
      <section className="company-comments">
        <h2>Respaldado por empresas líderes en tecnología</h2>
        <div className="company-list">
          {companyComments.map((c, i) => (
            <div className="company-item" key={i}>
              <img src={c.logo} alt={c.company} className="company-logo" />
              <h3>{c.company}</h3>
              <p>"{c.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Ventana flotante con RegistrationForm */}
      {showForm && (
        <div
          className={`form-overlay ${showForm ? "active" : ""}`}
          onClick={() => setShowForm(false)}
        >
          <div
            className="registration-form"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={() => setShowForm(false)}>
              ✖
            </span>
            <RegistrationForm />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Web Academy</p>
        <p>Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
