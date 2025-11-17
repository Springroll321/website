import { Card } from './SimpleCard';
import { Badge } from '../Badge';
import site from '../../../assets/site.png';
import magicBudget from '../../../assets/magic.png';
import tidyTrader from '../../../assets/tidytrader.png';
import collision from '../../../assets/collision.png';
import simpliCook from '../../../assets/simply.png';
import retro from '../../../assets/retro.png';
import impossiball from '../../../assets/imposiball.png';
const Projects = [
  {
    image: site,
    title: "Portfolio Website",
    description: "Personal portfolio website to showcase my projects, skills and background.",
    technologies: ["TypeScript","Docker","React", "Google Cloud", "TailwindCSS", "Vite"],
  },
  {
    image: magicBudget,
    title: "Magic Budget",
    description: "The project aims to create a comprehensive and user-friendly family budgeting and expense management application.",
    technologies: ["TypeScript","Docker","React","Node.js","TailwindCSS"],
  },
  {
    image: tidyTrader,
    title: "Tidy Trader",
    description: "Web application prototype for scheduling chores for households. Users can earn coins by completing chores and assigning them to other household members.",
    technologies: ["CSS", "HTML", "JavaScript", "Figma", "TailwindCSS"],
  },
  {
    image: collision,
    title: "Collision Database",
    description: "This project involved taking a group of datasets of collisions in Montgomery County and creating a relational database...",
    technologies: ["Java", "Microsoft SQL", "Figma"],
  },
  {
    image: simpliCook,
    title: "Simpli Cook",
    description: "This project involved building a recipe application in Android Studio using Java and HSQLDB.",
    technologies: ["Java", "Android Studio", "HSQLDB"],
  },
  {
    image: retro,
    title: "Retro Music Library",
    description: "A prototype of a digital music library designed to apply Human–Computer Interaction (HCI) principles and evaluate usability through user testing.",
    technologies: ["JavaScript", "TailwindCSS", "CSS", "HTML"],
  },
  {
    image: impossiball,
    title: "Impossiball",
    description: "A two-player soccer game with various power-ups to make the game more chaotic.",
    technologies: ["Greenfoot", "Java"],
  },
];

function ProjectCard() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
      {Projects.map((project, index) => (
        <Card
          key={index}
          backgroundClassName="bg-black/75 hover:bg-stone-950 transition-colors duration-300"
        >
          <Card.Header className="text-2xl font-bold text-white p-4 flex justify-center">
            {project.title}
          </Card.Header>
          <Card.Body className="text-white p-6 space-y-4">
            <img
              loading="lazy"
              src={project.image}
              alt={project.title}
              className="w-full h-48 mb-4 rounded-lg"
            />
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge
                  key={i}
                  title={tech}
                  colorClass="bg-violet-400 text-violet-900"
                />
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;
