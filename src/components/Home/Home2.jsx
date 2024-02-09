import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              Permettez-moi de me <span className='purple'>présenter</span>
            </h1>
            <p className='home-about-body'>
              Je suis tombé amoureux de la programmation et j'ai au moins appris
              quelque chose, je pense… 🤷‍♂️
              <br />
              <br />
              Je suis à l'aise avec des langages classiques comme
              <i>
                <b className='purple'> Javascript et Php. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt incluent la création de nouvelles
              technologies et de produits Web.
              <br />
              <br />
              Chaque fois que l'occasion se présente, j'applique également ma
              passion pour le développement de produits avec{' '}
              <b className='purple'>React.js</b> et{''}
              <b className='purple'>Symfony</b>
              &nbsp; et découvre de nouvelles technologies comme
              <i>
                <b className='purple'>Next.js ou Laravel</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>Oû me trouver ?</h1>
            <p>
              N'hésitez pas à <span className='purple'>me contacter</span>.
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/JohanYindou'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'>
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/Johandlag'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'>
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/JohanYindou/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'>
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/JohandlaG'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'>
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
