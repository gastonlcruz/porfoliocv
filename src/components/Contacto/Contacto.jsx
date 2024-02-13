import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./contacto.css";

const Contacto = () => {
  const text = "Contactame";

  return (
    <section>
    <motion.div 
    className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
    <div className="contacto">
      <div className="contenedor">
        <div className="texttype">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}className="texttype"
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
          <h2>Mail</h2>
            <span>gastonlcruz@gmail.com</span>
            <h2>Linkedin</h2>
            <span>Hello street New York</span>
            <h2>Tel</h2>
            <span>11-3030-2620</span>
         </div>
    </div>
    </motion.div>
    </section>
  )
}

export default Contacto