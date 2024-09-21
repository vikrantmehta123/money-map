import React from 'react';
import { Typography, Container, Toolbar } from '@mui/material';


const About = () => {
  return (
    <Container maxWidth="md">
      <Toolbar/>
      <Typography variant="h3" align="center" gutterBottom>
        About
      </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
    </Container>
  );
};


export default About;