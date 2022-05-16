import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Materia from "../Components/Materia";
import { useState } from "react";

const Material = () => {
  const [nivel1, setNivel1] = useState(true);
  const [nivel2, setNivel2] = useState(false);

  const mostrarNivel1 = () => {
    if (nivel1 === true) setNivel1(false);
    else {
      setNivel1(true);
      setNivel2(false);
    }
  };

  const mostrarNivel2 = () => {
    if (nivel2 === true) setNivel2(false);
    else {
      setNivel2(true);
      setNivel1(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="Material">
        <section className="top">
          <form className="buscar">
            <span class="material-symbols-outlined">search</span>
            <input placeholder="Buscar materia..." type="text" />
          </form>
          <Link className="link" to="/subir-material">
            <div className="buttonAgregar">¿Quieres subir material?</div>
          </Link>
        </section>
        <section className="nivel">
          <div className="show1" onClick={() => mostrarNivel1()}>
            <h2>Nivel 1</h2>
            {nivel1 ? (
              <span class="material-symbols-outlined">expand_less</span>
            ) : (
              <span class="material-symbols-outlined">expand_more</span>
            )}
          </div>
          <div className={nivel1 ? "materias" : "noMaterias"}>
            <Link className="link" to="/material/ecuaciones-diferenciales">
              <Materia nombre="Ecuaciones Diferenciales" />
            </Link>
            <Materia nombre="Álgebra Lineal" />
            <Materia nombre="Análisis Vectorial" />
            <Materia nombre="Cálculo Aplicado" />
            <Materia nombre="Cálculo" />
            <Materia nombre="Matemáticas Discretas" />
            <Materia nombre="Estructura de datos" />
            <Materia nombre="Algoritmia y Programación Estructurada" />
            <Materia nombre="Comunicación Oral y Escrita" />
            <Materia nombre="Física" />
            <Materia nombre="Análisis Fundamental de Circuitos" />
            <Materia nombre="Ingeniería Ética y Sociedad" />
          </div>
          <div className="show1" onClick={() => mostrarNivel2()}>
            <h2>Nivel 2</h2>
            {nivel2 ? (
              <span class="material-symbols-outlined">expand_less</span>
            ) : (
              <span class="material-symbols-outlined">expand_more</span>
            )}
          </div>
          <div className={nivel2 ? "materias" : "noMaterias"}>
            <Materia nombre="Matemáticas Avanzadas para la Ingeniería" />
            <Materia nombre="Redes de computadoras" />
            <Materia nombre="Fundamentos Económicos" />
            <Materia nombre="Diseño de Sistemas Digitales" />
            <Materia nombre="Fundamentos de Diseño Digital" />
            <Materia nombre="Probabilidad y Estadística" />
            <Materia nombre="Teoría Computacional" />
            <Materia nombre="Sistemas Operativos" />
            <Materia nombre="Bases de Datos" />
            <Materia nombre="Análisis y Diseño Orientado a Objetos" />
            <Materia nombre="Programación Orientada a Objetos" />
            <Materia nombre="Tecnologías para la Web" />
            <Materia nombre="Electrónica Analógica" />
            <Materia nombre="Administración Financiera" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Material;
