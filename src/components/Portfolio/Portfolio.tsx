import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";
import projects from "../../assets/projects";

const ProjectCard = (props:{title: string,link:any,techList:any,gitHub: string, deployed:string, description:string})=>{

  return (

  <ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
    <div className="project-links">
      {
        (props.link) && (
          <a href={props.link} target="_blank" rel="noreferrer">
          <img src={externalLinkIcon} alt="Visitar site" />
        </a>
  )
  }
      {
        props.gitHub?  <a href={props.gitHub} target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="Visit Site" />
      </a>: <> </>
      }
    </div>

    </header>

    <div className="body">
      <h3>{props.title}</h3>
      <p>{props.description}
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        {props.techList.map((tech:string)=>(<li>{tech}</li>))}
      </ul>
    </footer>
  </div>
</ScrollAnimation>
  )


}


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">
        {projects.map(({id,title,link,gitHub,techList,description})=>(<ProjectCard deployed="" title={title} link={link} gitHub={gitHub} techList={techList} description={description} key={id}/>))}
      </div>
    </Container>
  );
}
