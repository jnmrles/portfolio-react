import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
// import { BsShieldFillCheck } from "react-icons/bs"
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'
import {DiReact} from "react-icons/di"

const ServiceCard= (props:{color:string, title:string, icon:any, subtitle:string}) =>(
 <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 500} >
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
 <div className="flex flex-col  w-full justify-center items-center gradient-bg-services">
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


