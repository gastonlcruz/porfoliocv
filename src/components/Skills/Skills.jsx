import {useRef} from 'react';
import "./skills.css";
import { motion,useInView } from 'framer-motion';

const Skills = () => {
  const skillRef= useRef();
  const isSkillRefInView  = useInView(skillRef, { margin: "-100px" });

  return (
    <div className='skills'ref={skillRef}>
        <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="">
        Skills
        </motion.h1>
        <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="skills">  
        
        <div className="box">
                JavaScript
              </div>
              <div className="box">
                TypeScript
              </div>
              <div className="box">
                React.js
              </div>
              <div className="box">
                Next.js
              </div>
              <div className="box">
                SCSS
              </div>
              <div className="box">
                Tailwind CSS
              </div>
              <div className="box">
                MongoDB
              </div>
              <div className="box">
                PostgreSQL
              </div>
              <div className="box">
                Node.js
              </div>
              <div className="box">
                Nest.js
              </div>
              <div className="box">
                Express.js
              </div>
              <div className="box">
                Spring Boot
              </div>
              <div className="box">
                GraphQL
              </div>
              <div className="box">
                Apollo
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
                Vite
              </div>
              <div className="box">
                Docker
              </div>
              <div className="box">
                AWS
              </div>
              <div className="box">
                Firebase
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