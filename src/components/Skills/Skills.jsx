import {useRef} from 'react';
import "./skills.css";
import { motion,useInView } from 'framer-motion';

const Skills = () => {
  const skillRef= useRef();
  const isSkillRefInView  = useInView(skillRef, { margin: "-100px" });

  return (
    <div className='skills'ref={skillRef}>
        <motion.h1
              initial={{ y: "-300px" }}
              animate={isSkillRefInView ? { y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="titulo">
        SKILLS
        </motion.h1>
        <motion.div
              initial={{ y: "-600px" }}
              animate={isSkillRefInView ? { y: 0 } : {}}
              className="contenedor">  
        
        <div className="box">
                JavaScript
              </div>
              <div className="box">
                React.js
              </div>
              <div className="box">
                C#
              </div>
              <div className="box">
                .Net
              </div>
              <div className="box">
                Asp.net
              </div>
              <div className="box">
                Unity
              </div>
              <div className="box">
                Photoshop
              </div>
              <div className="box">
                Illustrator
              </div>
              <div className="box">
                Premier
              </div>
              <div className="box">
                Vegas pro
              </div>
              <div className="box">
                SCSS
              </div>
              <div className="box">
                Sound Forge
              </div>
              <div className="box">
                GraphQL
              </div>
              <div className="box">
                Bootstrap
              </div>
              <div className="box">
                Redux
              </div>
              <div className="box">
                Framer Motion
              </div>
              <div className="box">
                Three.js
              </div>
              <div className="box">
                WebGL
              </div>
              <div className="box">
                Webpack
              </div>
              <div className="box">
                SharePoint 
              </div>
              <div className="box">
                SQL
              </div>
              <div className="box">
                Windows S
              </div>
              <div className="box">
                IIS
              </div>
              <div className="box">
                Git
              </div>
              <div className="box">
                Figma
              </div>
              </motion.div>
    </div>
  )
}

export default Skills