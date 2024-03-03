// import React from 'react';
// import { useParams } from 'react-router-dom';

// const Project = ({ projects }) => {
//   const { projectId } = useParams();
//   const project = projects.find((p) => p.id === parseInt(projectId, 10));

//   if (!project) {
//     return <div>Project not found</div>; // Handle case where project is not found
//   }

//   const { title, deployedLink, githubLink, image } = project;
//   return (
//     <div className="project">
//       <h2>{title}</h2>
//       <img src={image} alt="" />
//       <p>
//         Link: <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Version</a>
//       </p>
//       <p>
//         GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
//       </p>
//     </div>
//   );
// };

// export default Project;