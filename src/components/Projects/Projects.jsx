import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectsCards';
import Particle from '../Particle';
import Countrix from './media/Countrix_1.png';
import Cinemax from './media/Cinemax_1.png';
import Supakar from './media/Supakar_1.png';
import BnB from './media/BnB.png';
import Artflow from './media/Artflow.png';
import TinyCRM from './media/TinyCRM.png';



function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          Mes <strong className='purple'>Projets </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Voici quelques projets sur lesquels j'ai travaillé.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={BnB}
              isBlog={false}
              title='BnB'
              description="Ce projet est une plateforme de réservation de chambres dans un BnB. Ce projet est construit dans le cadre d'un cours de développement web."
              ghLink='https://github.com/JohanYindou/BnB'
              // demoLink=''
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Artflow}
              isBlog={false}
              title='Artflow'
              description="Artflow est un projet réalisé en groupe lors la formation CDA chez PrepAvenir. Cette application est une galerie d'images qui permet de voir, partager, télécharger et commenter des images."
              ghLink='https://github.com/JohanYindou/ArtFlow'
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
              imgPath={TinyCRM}
              isBlog={false}
              title='TinyCRM'
              description="Projet de fin d'études en CDA intitulé 'TinyCRM'. Ce projet a pour objectif de concevoir et développer une application de type CRM destinée aux agences SMMA."
              ghLink='https://github.com/JohanYindou/tinycrm'
              // demoLink=''
            />
          </Col>
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