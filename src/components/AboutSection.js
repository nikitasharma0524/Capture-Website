import React from "react";
import home1 from "../assets/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { fade, photoAnim, titleAnim } from "../animation";
import Wave from "./Wave";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button onClick={() => navigate("./ourwork")} variants={fade}>
          Our Work
        </motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          initial="hidden"
          animate="show"
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
