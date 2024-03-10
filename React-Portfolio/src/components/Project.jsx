import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projects.json'; // Import project data
import DelishDiscoveriesImage from './assets/DelishDiscoveries.png';
import ConsoleFinancesImage from './assets/ConsoleFinances.png';
import WorkDaySchedulerImage from './assets/WorkDayScheduler.png';
import JavaScriptCodeQuizImage from './assets/JavaScriptCodeQuiz.png';
import PasswordGeneratorImage from './assets/PasswordGenerator.png';
import BootstrapPortfolioImage from './assets/BootstrapPortfolio.png';

// Object mapping project titles to image imports
const imageImports = {
  'Delish Discoveries': DelishDiscoveriesImage,
  'Console Finances': ConsoleFinancesImage,
  'Work Day Scheduler': WorkDaySchedulerImage,
  'JavaScript Code Quiz': JavaScriptCodeQuizImage,
  'Password Generator': PasswordGeneratorImage,
  'Bootstrap Portfolio': BootstrapPortfolioImage,
};

const Project = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, deployedLink, githubLink, description } = project;

  // Dynamically retrieve image import based on project title
  const image = imageImports[title];

  return (
    <div className="project-details">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>
        Link: <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Version</a>
      </p>
      <p>
        GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
};

export default Project;