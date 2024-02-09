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
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "218px" } : {}}
              className=""
            >
    <div className="experiencia">
        <div className="izq">
            <div className="trabajo">
                Programador
            </div>
            <div className="trabajodesc">
                trabajo hace 8 años
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
                Programador
            </div>
            <div className="trabajodesc">
                trabajo hace 8 años
            </div>
            <div className="fecha">
                2015-2023
            </div>
            <div className="empresa">
                ARMADA ARGENTINA
            </div>
        </div>
    </div>
    <div className="experiencia">
        <div className="izq">
            <div className="trabajo">
                Programador
            </div>
            <div className="trabajodesc">
                trabajo hace 8 años
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
    </motion.div>
    </div>
  )
}

export default Experiencia