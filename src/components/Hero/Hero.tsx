import { BrowserRouter } from "react-router-dom"
import { Container, BouncyDiv } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import 'animate.css';
// import './animate.css'

import {BsArrowDownCircle} from "react-icons/bs"

export function Hero(){
  return(
    <>
    <Container id="home" className="justify-between">
      <div className="hero-text ml-8  ">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello👋</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Jovanni Morales</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Engineer </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Full Stack engineer specializing in Web Development</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            {/* <BrowserRouter> */}
              <a href="https://docs.google.com/document/d/1CWwWITRzMxH7JusDJ77h1f47g4XgxDIR/edit?usp=sharing&ouid=105230518806372804013&rtpof=true&sd=true"
           target="_blank"
           rel="noreferrer" className="button justify-start ">Resume</a>
            {/* </BrowserRouter> */}
          </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={Illustration} alt="Illustration"/>
        </ScrollAnimation>
      </div>

    </Container>
    <div className="flex flex-col   w-full justify-center items-center md:pt-28 pt-60 pb-20 ">
      {/* <BouncyDiv> */}
      <BsArrowDownCircle className="animate__animated animate__bounce animate__infinite w-20 h-20 rounded-full flex justify-center items-center "/>

      {/* </BouncyDiv> */}


      </div>

      </>
  )
}
