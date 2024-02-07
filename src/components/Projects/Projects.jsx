import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectsCards';
import Particle from '../Particle';
import Countrix from './media/Countrix_1.png';
import Cinemax from './media/Cinemax_1.png';
import Supakar from './media/Supakar_1.png';


function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My <strong className='purple'>Projects </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Countrix}
              isBlog={false}
              title='Countrix'
              description="Countrix est une application Web qui sert d'interface pour l'api RestCountries. Projet réalisé dans un but d'apprentissage."
              ghLink='https://github.com/JohanYindou/Countrix'
              // demoLink=''
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Cinemax}
              isBlog={false}
              title='Cinemax'
              description="Cinemax est une app de recherche de film et permet d'ajouter une sélection en favoris réalisé dans un but d'aprentissage."
              ghLink='https://github.com/JohanYindou/Cinemax'
              // demoLink=''
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Supakar}
              isBlog={false}
              title='Supakar'
              description="Cette application de personnalisation de voitures, intégrée avec React à partir d'un modèle préexistant, vise à offrir une expérience interactive tout en servant de projet d'apprentissage pour la maîtrise de React"
              ghLink='https://github.com/JohanYindou/Supakar'
              // demoLink=''
            />
          </Col>

          {/*
            Rajouter outant de Col que de projets 
        */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;