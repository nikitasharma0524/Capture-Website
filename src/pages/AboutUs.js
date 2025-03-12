import React from "react";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import FAQSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServiceSection />
      <FAQSection />
    </motion.div>
  );
};

export default AboutUs;
