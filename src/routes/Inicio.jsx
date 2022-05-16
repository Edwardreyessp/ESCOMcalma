import { Link } from "react-router-dom";
import fondo from "../images/fondo1.jpg";

const Inicio = () => {
  return (
    <main className="Inicio">
      <img src={fondo} alt="" />
      <section className="descripcion">
        <h1>¿Qué somos?</h1>
        <p>
          ESCOMcalma es un sitio que apoya a los estudiantes con material
          visual, teórico y práctico con el fin de reforzar y poner en práctica
          los conocimientos que se han obtenido a lo largo de la universidad!
        </p>
        <a>¡Con ESCOMcalma todos podemos ayudarnos!</a>
        <Link className="link" to="/iniciar-sesion">
          <div className="button">Comienza ahora...</div>
        </Link>
      </section>
    </main>
  );
};

export default Inicio;
