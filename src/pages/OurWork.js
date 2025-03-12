import React from "react";
import athelete from "../assets/athlete-small.png";
import theracer from "../assets/theracer-small.png";
import goodtimes from "../assets/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/UseScroll";

const OurWork = () => {
  const [ref1, controls1] = useScroll();
  const [ref2, controls2] = useScroll();
  const [ref3, controls3] = useScroll();

  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      {/* The Athlete */}
      <Movie ref={ref1} variants={fade} initial="hidden" animate={controls1}>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/ourwork/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athelete} alt="The Athlete" />
          </Hide>
        </Link>
      </Movie>

      {/* The Racer */}
      <Movie ref={ref2} variants={fade} initial="hidden" animate={controls2}>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/ourwork/the-racer">
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="The Racer" />
          </Hide>
        </Link>
      </Movie>

      {/* Good Times */}
      <Movie ref={ref3} variants={fade} initial="hidden" animate={controls3}>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/ourwork/good-times">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="Good Times" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

// Styled Components
const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  background: white;
  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// Sliding Frames
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export default OurWork;
