import '../styles/main.css';
import { useEffect,useRef } from 'react';
import { initializeVanta } from '../VantaEffect';

const projects = [
  {
    title: "Expanse Tracker",
    description: "This is a Expanse Tracker site where Anyone can register and login to track weekly monthly and yearly expanses on their daily routine like where are which money is expand and many more.",
    techStack: ["Python", "Django","HTML", "CSS"],
    frontendUrl: "https://github.com/Naurangi123/expense-tracker",
    backendUrl: "https://github.com/Naurangi123/expense-tracker",
    liveUrl: "https://github.com/Naurangi123/expense-tracker",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjuMrChM-MXX4qhxllxquerNVUSzEWqmsn2Q&s"
  },
  
  {
    title: "Study Center/Room",
    description: "This is a study Togather site where Learners and teachers can register and login to teach and learn anything whatever they want to teach and learn.",
    techStack: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    frontendUrl: "https://www.shutterstock.com/image-photo/group-students-leaned-desk-full-260nw-2449569173.jpg",
    liveUrl: "https://naurangi.pythonanywhere.com/",
    backendUrl: "https://github.com/gituser123290/study-project-1",
    imgSrc: "https://www.shutterstock.com/image-photo/group-students-leaned-desk-full-260nw-2449569173.jpg",
  },
  {
    title: "Social Media Application",
    description: "This is a social media application where User can register and login to create post, like the post,followers,comment on post and chat with anyone.",
    techStack: ["JavaScrip", "NodeJS","ReactJS", "React-Bootstrap","ExpressJS"],
    frontendUrl: "https://github.com/Naurangi123/SocialMediaWithNode",
    backendUrl: "https://github.com/Naurangi123/SocialMediaWithNode",
    liveUrl: "https://github.com/Naurangi123/SocialMediaWithNode",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBqH1kUYajEybjYe3p5pSOsIcMhgFmu5F1g&s"
  },
];

const Projects = () => {

  const backgroundRef = useRef(null);
  
    useEffect(() => {
      const cleanup = initializeVanta(backgroundRef.current,'halo');
      return () => {
        cleanup();
      };
    }, [])

  return (
    <>
      <h1 className="project-header">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-img-wrapper">
            <img src={project.imgSrc} alt={project.title} />
          </div>
          <div className="project-text-wrapper">
            <h3>{project.title}</h3>
            <div className="tech-stacks-used">
              {project.techStack.map((tech, i) => <h5 key={i}>{tech}</h5>)}
            </div>
            <div className='project_code'>
              <a href={project.backendUrl} target="_blank" className="view-code">Backend Code</a>
              <a href={project.frontendUrl} target="_blank" className="view-code">Frontend Code</a>
            </div>
            <p className='desc'>{project.description}</p>
            <a className="see-website-button" href={project.liveUrl} target="_blank">View Project</a>
          </div>
        </div>
      ))}
     </> 
  );
};

export default Projects;
