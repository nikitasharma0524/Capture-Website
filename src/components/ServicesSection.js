import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import home2 from "../assets/home2.png";
import clock from "../assets/clock.svg";
import diaphragm from "../assets/diaphragm.svg";
import money from "../assets/money.svg";
import teamworkIcon from "../assets/teamwork.svg";
import { useScroll } from "./UseScroll";

const ServiceSection = () => {
  const [ref, controls] = useScroll();
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  };
  return (
    <Services
      variants={sectionVariants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <Description>
        <h1>
          High <span>quality</span> services
        </h1>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamworkIcon} alt="" />
              <h3>Teamwork</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  width: 100%;
  gap: 4rem;
`;

const Card = styled.div`
  icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServiceSection;
