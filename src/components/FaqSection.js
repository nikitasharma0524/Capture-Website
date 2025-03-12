import React, { useState } from "react";
import { About } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "./UseScroll";
import { fade } from "../animation";

const FAQSection = () => {
  const [faqToggle, setFaqToggle] = useState(false);
  const [ref, controls] = useScroll();
  return (
    <Faq variants={fade} ref={ref} animate={controls} initial="hidden">
      <h2>
        Any Questions<span> FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How do i start">
          <div className="answer">
            <p>Lorem ipsum, dolor sit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quae accusantium repudiandae libero blanditiis
              explicabo, sit quibusdam similique sapiente est.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum, dolor sit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quae accusantium repudiandae libero blanditiis
              explicabo, sit quibusdam similique sapiente est.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methodss">
          <div className="answer">
            <p>Lorem ipsum, dolor sit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quae accusantium repudiandae libero blanditiis
              explicabo, sit quibusdam similique sapiente est.
            </p>
          </div>
        </Toggle>
        <Toggle title="What product do you offer">
          <div className="answer">
            <p>Lorem ipsum, dolor sit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quae accusantium repudiandae libero blanditiis
              explicabo, sit quibusdam similique sapiente est.
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    font-size: xx-large;
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
export default FAQSection;
