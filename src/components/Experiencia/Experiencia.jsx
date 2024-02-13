import "./experiencia.css";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const Experiencia = () => {
    const experienciaRef= useRef();
    const isExperienceRefInView = useInView(experienciaRef, { margin: "-100px" });
    


  return (
    <div className="move" ref={experienciaRef}>
        <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "350px" } : {}}
              transition={{ delay: 0.2 }}
              className="exp"
            >
              EXPERIENCIA
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "218px" } : {}}
              className=""
            >
    <div className="experiencia">
        <div className="izq">
            <div className="trabajo">
                Analista Programador
            </div>
            <div className="trabajodesc">
            Analista Programador, diseñador y QA Tester en más de 20 proyectos. 
            Desarrollo de aplicaciones Windows y web. 
            Implementación de los desarrollos a producción. Windows Server- IIS. 
            Supervisión y coordinación con desarrollos externos con Universidades Publicas.
            </div>
            <div className="fecha">
                2015-2023
            </div>
            <div className="empresa">
                ARMADA ARGENTINA
            </div>
        </div>
        <div className="centro">
            <div className="linea">
                <div className="circulo"></div>
            </div>
        </div>
        <div style={{"width":"33.333333%"}}></div>
       
    </div>
    <div className="experiencia">
        <div style={{"width":"33.333333%"}}></div>
            <div className="centro">
                <div className="linea">
                    <div className="circulo"></div>
                </div>
            </div>
        <div className="izq">
            <div className="trabajo">
                Operador Informático
            </div>
            <div className="trabajodesc">
            Subsecretaria de Seguridad de la Provincia de Buenos Aires
            Centro Operativo de Monitoreo (Municipalidad de San Martín)
            </div>
            <div className="fecha">
                2014
            </div>
            <div className="empresa">
                COM - San Martín
            </div>
        </div>
    </div>
    <div className="experiencia">
        <div className="izq">
            <div className="trabajo">
            Producción de Diseño Gráfico
            </div>
            <div className="trabajodesc">
            Desarrollo de videojuegos web para marcas en el exterior.
            </div>
            <div className="fecha">
                2013
            </div>
            <div className="empresa">
                ARES RICHMEDIA 
            </div>
        </div>
        <div className="centro">
            <div className="linea">
                <div className="circulo"></div>
            </div>
        </div>
        <div style={{"width":"33.333333%"}}></div>
       
    </div>
    </motion.div>
    </div>
  )
}

export default Experiencia