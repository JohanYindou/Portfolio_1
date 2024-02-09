import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCards(props) {
  return (
    <Card className='project-card-view'>
      <Card.Img variant='top' src={props.imgPath} alt='card-img' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/** Tags de technologie */}
        <Stack direction='horizontal' className='mt-3 mb-4' gap={2} spacing={2}>
          {props.technologies.map((technology, index) => (
            <span
              key={index}
              className='badge rounded-pill btn-primary btn-primary:hover p-2'>
              {technology}
            </span>
          ))}
        </Stack>
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>
        <Button variant='primary' href={props.ghLink} target='_blank'>
          <BsGithub /> &nbsp;
          {props.isBlog ? 'Blog' : 'GitHub'}
        </Button>
        {'\n'}
        {'\n'}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant='primary'
            href={props.demoLink}
            target='_blank'
            style={{ marginLeft: '10px' }}>
            <CgWebsite /> &nbsp;
            {'Demo'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
