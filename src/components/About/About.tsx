import { Container } from "./styles";

// import profileImage from "../../assets/profile-image.jpg"
// import cssIcon from "../../assets/css-icon.svg";
// import htmlIcon from "../../assets/html-icon.svg";
// import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
// import reactIcon from "../../assets/react-icon.svg";
// import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";




// export function About(){
//   return(
//     <Container id="sobre">
//       <div className="about-text">
//         <ScrollAnimation animateIn="fadeInLeft">
//           <h2>Sobre mim</h2>
//         </ScrollAnimation>
//         <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
//           <p>Me chamo João Túlio, sou técnico em informática com uma grande paixão por programação. Sou apaixonado por entregar soluções que agregam na vida das pessoas e ao mesmo tempo me desafiam. Aprimorei minhas habilidades como desenvolvedor Front-End e Back-End</p>
//         </ScrollAnimation>
//         <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

//           <p>Desenvolvo sites e aplicações utilizando HTML, CSS, e JavaScript. Tenho familiaridade em desenvolver layouts que me fornecem. Estou sempre me aprimorando a cada projeto que colocam em minhas mãos.</p>
//         </ScrollAnimation>
//         <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

//           <p>Sou uma pessoa dedicada que corre atrás para realizar seus sonhos, trabalhador e orientado a resultados, sempre busco alcançar minha melhor versão.</p>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
//           <h3>Aqui estão as minhas principais habilidades:</h3>
//         </ScrollAnimation>
//         <div className="hard-skills">

//           <div className="hability">
//             <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
//               <img src={reactIcon} alt="React" />
//             </ScrollAnimation>
//           </div>

//           <div className="hability">
//           <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
//             <img src={vueIcon} alt="Vue" />
//           </ScrollAnimation>
//           </div>

//           <div className="hability">
//           <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
//             <img src={jsIcon} alt="JavaScript" />
//           </ScrollAnimation>
//           </div>

//           <div className="hability">
//           <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
//             <img src={htmlIcon} alt="Html" />
//           </ScrollAnimation>
//           </div>

//           <div className="hability">
//           <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
//             <img src={cssIcon} alt="Css" />
//           </ScrollAnimation>
//           </div>
//           <div className="hability">
//           <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
//             <img src={nodeIcon} alt="Node" />
//           </ScrollAnimation>
//           </div>

//           <div className="hability">
//           <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
//             <img src={typescriptIcon} alt="Typescript" />
//           </ScrollAnimation>
//           </div>


//         </div>
//       </div>
//       <div className="about-image">
//         <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
//           <img src="https://cdn.dribbble.com/users/2069402/screenshots/5574718/gif-4mb.gif" alt="Imagem de perfil" />
//         </ScrollAnimation>
//       </div>
//     </Container>
//   )
// }



import { BsShieldFillCheck } from "react-icons/bs"
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'
import {DiReact} from "react-icons/di"

const ServiceCard= (props:{color:string, title:string, icon:any, subtitle:string}) =>(
 <ScrollAnimation animateIn="fadeInLeft" >
  <div className="card flex flex-row justify-start items-center blue-glassmorphism p-3 m-4 cursor-pointer hover:shadow-xl ">
    <div className={`w-12 h-12 rounded-full flex justify-center items-center ${props.color}`}>
      {props.icon}
    </div>
    <div className="ml-10 flex flex-col flex-1">
      <h1 className="mt-2 text-white text-lg">{props.title}</h1>
      <p className="mt-2 text-white text-sm md:w-9/12">{props.subtitle}</p>
    </div>


  </div>
  </ScrollAnimation>




)
export function Services  () {
  return (
    <Container id="sobre">
 <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
  <div className="flex mf:fex-row flex-col items-center justify-center md:p-20 py-12 px-6 ">
    <div className="flex-1 flex flex-col justify-center items-center ">
      <h2 id="services" className=" text-3xl sm:text-5xl py-2"> Services

         </h2>
    </div>

  </div>
  <div className="flex-1 flex flex-col justify-center ">


    <ServiceCard
    color="bg-[#2952E3]"
    title="Front-End Development"
    icon={< DiReact
    font-size={25}
    className="text-white"
   />}
   subtitle="Intuitive and Responsve Front-End Designs using Next.js and React.js. Experienced with CSS framworks such as BootStrap, TailwindCss, Material UI " />

       <ServiceCard
    color="bg-[#8945F8]"
    title="Back-End Development"
    icon={< BiSearchAlt
    font-size={21}
    className="text-white"
   />}
   subtitle="Experience building RESTFUL APIS using Node, Express, PostgreSQL and JAMStack Experience using GraphQL " />

       <ServiceCard
    color="bg-[#F84550]"
    title="Web3 Development"
    icon={< RiHeart2Fill
    font-size={21}
    className="text-white"
   />}
   subtitle="dApp and Smart Contract Development using Solidity and Web3.js. Experienced in building and deploying on the Ethereum and Solana Block Chains" />

  </div>

 </div>

 </Container>
  )
}


