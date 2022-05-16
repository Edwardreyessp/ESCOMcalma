import Navbar from "./Navbar";
import {
  TemarioS,
  header,
  buscar,
  bold,
  main,
  quejas,
  titulo,
  desc,
  text,
} from "../scss/Temario.module.scss";
import Temas from "./Temas";

const Temario = () => {
  return (
    <>
      <Navbar />
      <div className={TemarioS}>
        <section className={header}>
          <form className={buscar}>
            <span class="material-symbols-outlined">search</span>
            <input placeholder="Buscar tema..." type="text" />
          </form>
          <h1>Ecuaciones Diferenciales</h1>
        </section>

        <section className={main}>
          <div>
            <h2>Temario</h2>
            <p className={bold}>
              Unidad 1. Introducción a las ecuaciones diferenciales
            </p>
            <Temas nombre="1.1. Definición de ecuación diferencial." />
            <Temas nombre="1.2. Clasificación de ecuaciones diferenciales, ordinarias y parciales." />
            <Temas nombre="1.2.1. Orden de una ecuación diferencial." />
            <Temas nombre="1.2.2. Linealidad de una ecuación diferencial." />
            <Temas nombre="1.2.3. Grado de una ecuación diferencial." />
            <Temas nombre="1.4. Solución de una ecuación diferencial." />
            <Temas nombre="1.4.1. Soluciones explícitas." />
            <Temas nombre="1.4.2 Soluciones implícitas." />
            <Temas nombre="1.5. Problema de valor inicial y de frontera." />
            <Temas nombre="1.5.1. Soluciones generales y particulares." />
            <Temas nombre="1.6. Teorema de existencia y unicidad." />
          </div>
          <div className={quejas}>
            <h2 className={text}>Publica tus dudas</h2>
            <div className={titulo}>
              <p>Titulo:</p>
              <input type="text" />
            </div>
            <div className={desc}>
              <p>Descripción:</p>
              <textarea type="text" />
            </div>
            <button className="btnEnviar">Enviar</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Temario;
