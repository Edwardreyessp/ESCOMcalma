import {
  seccion,
  materialTema,
  mostrar,
  noMostrar,
} from "../scss/Temario.module.scss";
import { useState } from "react";
import Video from "../assets/Video.jpg";
import TP from "../assets/Teoría_Práctica.jpg";

const Temas = ({ nombre }) => {
  const [tema, setTema] = useState(false);

  const mostrarTema = () => {
    if (tema === true) setTema(false);
    else {
      setTema(true);
    }
  };

  return (
    <>
      <div className={seccion} onClick={() => mostrarTema()}>
        <p>{nombre}</p>
        {tema ? (
          <span class="material-symbols-outlined">expand_less</span>
        ) : (
          <span class="material-symbols-outlined">expand_more</span>
        )}
      </div>
      <div className={tema ? mostrar : noMostrar}>
        <section className={materialTema}>
          <a href="https://www.youtube.com/watch?v=rd2jKGQJucE" target="_blank">
            <img src={Video} alt="" />
            <p>Video</p>
          </a>
          <a
            href="https://www.fcnym.unlp.edu.ar/catedras/elementos/teoricos/ut6.pdf"
            target="_blank"
          >
            <img src={TP} alt="" />
            <p>Teoría</p>
          </a>
          <a
            href="http://www.ptolomeo.unam.mx:8080/xmlui/bitstream/handle/132.248.52.100/9319/CUADERNO%20DE%20EJERCICIOS%20DE%20ECUACIONES%20DIFERENCIALES.pdf?sequence=1"
            target="_blank"
          >
            <img src={TP} alt="" />
            <p>Práctica</p>
          </a>
        </section>
      </div>
    </>
  );
};

export default Temas;
