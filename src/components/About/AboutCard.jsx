import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Salut à tous, je suis <span className='purple'>Johan Yindou </span>
            de <span className='purple'> Paris, France.</span>
            <br />
            Je suis actuellement étudiant en tant que Concepteur Développeur d'Applications.
            <br />
            En dehors du codage, j'aime aussi faire d'autres activités !
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Jeux Vidéos
            </li>
            <li className='about-activity'>
              <ImPointRight /> Sports
            </li>
            <li className='about-activity'>
              <ImPointRight /> Voyages
            </li>
          </ul>

          {/* <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className='blockquote-footer'>Johan</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
