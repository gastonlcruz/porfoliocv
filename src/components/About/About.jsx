import {useRef} from 'react';
import "./about.css";
import { motion,useInView } from 'framer-motion';

const About = () => {
  const experienciaRef= useRef();
  const isExperienceRefInView = useInView(experienciaRef, { margin: "-100px" });
  return (
    <div className='about' ref={experienciaRef}>
      
          
      <motion.h2 
      initial={{ y: "-300px" }}
      animate={isExperienceRefInView ? { y: "0" } : {}}
      transition={{ delay: 0.2 }}
      className='titulo'>
        {/* <h2 className='titulo'>Acerca de Mí</h2> */}
        Acerca de Mí
        </motion.h2>
      <motion.p
       initial={{ y: "-300px" }}
       animate={isExperienceRefInView ? { y: "0" } : {}}
       transition={{ delay: 0.2 }}
       className='parrafo'>
        ¡Hola! Soy Gastón Cruz, un desarrollador, analista Programador, diseñador y QA Tester. Con participacion en más de 20 proyectos. Desarrollo de aplicaciones Windows y Web. Implementación de los desarrollos a producción. Windows Server- IIS. Supervisión y coordinación con desarrollos externos con Universidades Publicas.
      </motion.p>
      {/* <motion.div 
      className="black"
       y="2" 
       animate={isExperienceRefInView ? { width: "38vh" } : {}}
       exit={{ width: "0vh" }}
       transition={{ duration: 1,delay:0.2, ease:"easeOut" }}
      
      /> */}
    </div>
    
  )
}

export default About