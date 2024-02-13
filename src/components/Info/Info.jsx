import { useRef } from "react";
import "./info.css";
import {motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
      id: 1,
      title: "EDUCACIÓN",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Abogado-Universitario\n\r"+
      "Universidad de Morón\n\r"+
      "\n\rDiseñador y Programador - Terciario \n\r" +
      "Escuela Da Vinci\n\r"+
      "\n\rTécnico Electrónico - Secundario\n\r" +
      "Escuela de Educación Técnica Nº 1 Alte. Ramon G. Fernández",
    },
    {
      id: 2,
      title: "CAPACITACIÓN",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Seguridad de la información: uso seguro de las tecnologías de la información y las comunicaciones (tics) IN-TI-27363 - INAP\n\r"+
       "\n\rAccesibilidad web pautas 2.0 - IN-ME-24672 – INAP\n\r"+ 
       "\n\rProgramación .net con c# / vb.net - Educación IT\n\r"+ 
       "\n\rPatrones de diseño - Educación IT\n\r"+
       "Trayecto gestión de proyectos y metodologías ágiles – Coursera Google",
    },
    /* {
      id: 3,
      title: "SKILLS",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 4,
      title: "Music App",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    }, */
  ];

  const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-3000, 3000]);
    
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          {/* <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div> */}
          <motion.div className="textContainer" style={{y}} ref={ref}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
  };
  

const Info = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
  
    return (
        <div className="info" ref={ref}>
        <div className="progress">
          <h1>INFO</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
  )
}

export default Info