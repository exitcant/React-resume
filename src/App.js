import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      
      <ContactInfo>
        <ContactItem>
          <FaEnvelope />
          <span>muhammedjabdulrahmani@gmail.com</span>
        </ContactItem>
        <ContactItem>
          <FaPhone />
          <span>(514) 775-8573</span>
        </ContactItem>
        <ContactItem>
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/muhammed-abdul-rahmani/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </ContactItem>
        <ContactItem>
          <FaGithub />
          <a href="https://github.com/exitcant" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </ContactItem>
      </ContactInfo>

      <Section>
        <Skills />
      </Section>

      <Section>
        <Experience />
      </Section>

      <Section>
        <Education />
      </Section>

      <Section>
        <Projects />
      </Section>
    </AppContainer>
  );
}

export default App; 