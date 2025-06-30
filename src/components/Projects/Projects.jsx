import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects">
    <h2 className='project-heading'>Projects</h2>
    <div className="project-list">

      <div className="project-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9CC2-K7f5JHaYTzt3FaECNuUmItt2PB-Rw&s"/>
        <h3 className='project-title'>Jobby App</h3>
         <p className='project-description'>A job portal application that connects job seekers with employers, featuring job listings, applications, and user profiles.</p>
        <a href="https://kaverijobbapp.ccbp.tech" target="_blank" className="project-link">View Project</a>
        <p className='project-tech'>username:rahul password:rahul@2021</p>

       
        
      </div>
      <div className="project-card">
        <img src="https://naveenpillalamarri.netlify.app/nxtWatch.png"/>
        <h3 className='project-title'>Nxt Watch</h3>
        <p className='project-description'>A streaming platform for watching the latest movies and TV shows.</p>
        <a href="https://kavnxtwatch.ccbp.tech/" target="_blank" className="project-link">View Project</a>
         <p className='project-tech'>username:rahul password:rahul@2021</p>

      </div>
      <div className="project-card">
        <img src="https://lilacinfotech.com/lilac_assets/images/blog/live-shopping-app-ultimate-guide-to-a-new-commerce-model.png"/>
        <h3 className='project-title'>Nxt Trend </h3>
        <p className='project-description'>A shopping website that offers the latest trends in fashion and lifestyle products.</p>
        <a href="https://nxttrendskaveri.ccbp.tech/" target="_blank" className="project-link">View Project</a>
        <p className='project-tech'>username:rahul password:rahul@2021</p>
      </div>
      <div className="project-card">
        <img src="https://www.apple.com/in/app-store/images/overview/privacy_security__c7ffaiitglg2_large_2x.jpg"/>
        <h3 className='project-title'>App Store</h3>
        <p className='project-description'>A platform for discovering and downloading mobile applications.</p>
        <a href="https://github.com/kaveri-star/App-store" target="_blank" className="project-link">View Project</a>
        
      </div>
    </div>
  </section>
);

export default Projects;
