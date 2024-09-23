import React from 'react';
import { Typography, Container, Toolbar } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Toolbar />
      <Typography variant="h3" align="center" gutterBottom>
        About
      </Typography>
      <Typography variant="body1">
        MoneyMap is a simulator for your retirement plans. It's not financial advice, neither is it a one-stop
        solution for all your financial needs. What it is, is a playground. It gives you a platform to plug in
        different inputs and see a rough approximation of the financial future, which in many cases is quite useful.
        You also have a curated list of resources that you can check out in the resources section. It contains the
        top books, blogs, YouTube videos, and courses that you can check out to improve your financial know-how.
      </Typography>
    </Container>
  );
};


export default About;