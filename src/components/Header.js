import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #7f8c8d;
  font-weight: normal;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 1rem auto;
  line-height: 1.6;
  color: #666;
`;

function Header() {
  return (
    <HeaderContainer>
      <Name>Muhammed Abdul-Rahmani</Name>
      <Title>Software Developer</Title>
      <Description>
        A detail-oriented software developer with experience in web development and database management. 
        Skilled in multiple programming languages and frameworks, with a strong focus on creating efficient 
        and user-friendly applications.
      </Description>
    </HeaderContainer>
  );
}

export default Header; 