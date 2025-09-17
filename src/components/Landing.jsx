import { useState } from "react";
import "./Landing.css";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);
  const [msgExito, setMsgExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const telefono = form.telefono.value.trim();

    if (!nombre || !email || !telefono) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      alert("Por favor ingresa un correo válido.");
      return;
    }

    if (!/^\d{9,}$/.test(telefono)) {
      alert("Por favor ingresa un teléfono válido (mínimo 9 dígitos).");
      return;
    }

    setMsgExito(true);
    form.reset();

    setTimeout(() => {
      setShowModal(false);
      setMsgExito(false);
    }, 2000);
  };

  return (
    <div className="bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-24 text-center radial-bg">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dot-pattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#30363d" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Domina el{" "}
            <span className="text-green-500">Desarrollo Web Full Stack</span>
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            De la base de datos a la interfaz del usuario. Aprende a construir
            aplicaciones robustas y escalables con las tecnologías más
            demandadas del mercado.
          </p>
          <a href="#cursos" className="hero-cta cta-button">
            Ver nuestros cursos
          </a>
        </div>
      </header>

      {/* Tech Stack */}
      <section id="tecnologias" className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">
            Las tecnologías que dominarás
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-10">
            {["HTML", "CSS", "JS", "React", "Node", "SQL"].map((tech) => (
              <div className="text-center" key={tech}>
                <img
                  src={`https://placehold.co/100x100/161b22/c9d1d9?text=${tech}`}
                  alt={tech}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-xl"
                />
                <p className="text-sm font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="por-que-nosotros" className="py-16 bg-[#0d1117] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            No solo aprenderás a programar, sino a pensar y actuar como un
            verdadero desarrollador profesional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-2xl flex flex-col items-center text-center">
              <i className="fas fa-project-diagram text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Proyectos Reales
              </h3>
              <p className="text-sm">
                Nuestro enfoque es 100% práctico. Construirás un portafolio
                sólido con proyectos que te abrirán puertas.
              </p>
            </div>
            <div className="card p-6 rounded-2xl flex flex-col items-center text-center">
              <i className="fas fa-graduation-cap text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Mentores Expertos
              </h3>
              <p className="text-sm">
                Aprende de desarrolladores senior con años de experiencia en la
                industria tecnológica.
              </p>
            </div>
            <div className="card p-6 rounded-2xl flex flex-col items-center text-center">
              <i className="fas fa-handshake text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Soporte Laboral
              </h3>
              <p className="text-sm">
                Te ayudamos a preparar tu CV, tu portafolio y a practicar para
                las entrevistas técnicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-600 to-green-800 text-white rounded-t-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para comenzar tu carrera?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            No esperes más. El futuro de la tecnología te espera.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="cta-button bg-white text-green-800 hover:text-green-700"
          >
            ¡Inscríbete ahora!
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#161b22] text-white rounded-2xl shadow-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">
              Formulario de Inscripción
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="w-full px-4 py-2 rounded-lg text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  pattern="[0-9]{9,}"
                  required
                  className="w-full px-4 py-2 rounded-lg text-black"
                />
              </div>
              <button type="submit" className="cta-button w-full">
                Enviar inscripción
              </button>
            </form>
            {msgExito && (
              <p className="text-green-400 font-semibold mt-4 text-center">
                ✅ ¡Inscripción enviada con éxito!
              </p>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[#768390] bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Cursos Full Stack. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white">
              Política de Privacidad
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-white">
              Términos y Condiciones
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
