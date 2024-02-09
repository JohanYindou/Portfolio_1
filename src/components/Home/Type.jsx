import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Développeur Full Stack',
          'Développeur Stack MERN ',
          'Developpeur Web',
          "Concepteur Développeur d'Applications",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
