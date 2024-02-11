import "./portada.css";
import { motion } from "framer-motion";
import { ReactTyped } from 'react-typed';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const movingText = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};



const Portada = () => {
  
  return (
    <div className="portada">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants}
          initial="initial"
          animate="animate">
          {/* <motion.h2 variants={textVariants}>Web developer and UI designer</motion.h2> */}
          <motion.h1 variants={textVariants}>GASTON CRUZ PORFOLIO</motion.h1>
          <motion.h2 variants={textVariants}>
             <ReactTyped strings={[
              "Programador",
              "Diseñador",
              "UX"
            ]} 
              typeSpeed={40}
              backSpeed={50}
              loop 
               /></motion.h2>
        </motion.div>
        
      </div>
      <motion.div className="movingText" variants={movingText}
        initial="initial"
        animate="animate">
        Writer Content Creator Influencer
      </motion.div>
    
      
    </div>
  )
}

export default Portada