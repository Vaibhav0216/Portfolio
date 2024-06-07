

  // src/components/ProjectSection.js
  import React from 'react';
  import ProjectCard from './ProjectCard';
  
  import './Projects.css';

  const ProjectSection = () => {

    // Define your project data here
    const projects = [
      {
        title: 'myChat',
        description: 'Connect seamlessly with friends and family through our intuitive chat app, featuring real-time messaging, multimedia sharing, and enhanced privacy settings.',
        img: require('../assets/mychat.png'),
        code: 'https://github.com/EntcElite/myChatapp',
        demo: 'https://mychat-a187d.web.app'
      },
      {
        title: 'testMaster',
        description: 'Generate customized question papers effortlessly with our intelligent question paper generator app, designed to cater to varying difficulty levels and total marks.',
        img: require('../assets/testMaster.png'),
        code: 'https://github.com/Vaibhav0216/Question-Paper-Generator-Reelo',
        demo: 'https://question-paper-generator-reelo-frontend.vercel.app/'
      },
      {
        title: 'climaSence',
        description: 'Stay ahead of the weather with our comprehensive app, offering accurate forecasts, real-time updates, and personalized weather alerts for your location.',
        img: require('../assets/climSence.png'),
        code: 'https://github.com/Vaibhav0216/Weatherio',
        demo: 'https://vaibhavs-weatherio.netlify.app/'
      },
      {
        title: 'lineFollowing',
        description: 'Meet your efficient line-following robot, expertly navigating paths with precision for industrial automation, educational purposes, and innovative projects',
        img: require('../assets/Line-flow.jpg'),
        link: 'https://github.com/Vaibhav0216/React_pre',
        demo: 'https://vaibhav0216.github.io/React_pre/'
      },
      // Add more project objects as needed
    ];

    return (
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.img}
              title={project.title}
              description={project.description}
              link={project.code}
              demo={project.demo}
            />
          ))}
        </div>
      </section>
    );
  }

  export default ProjectSection;
