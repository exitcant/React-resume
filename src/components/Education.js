import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const EducationList = styled.div``;

const EducationItem = styled.div`
  margin-bottom: 2rem;
`;

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Degree = styled.h3`
  color: #34495e;
  margin: 0;
`;

const Institution = styled.h4`
  color: #3498db;
  margin: 0.5rem 0;
`;

const DateRange = styled.span`
  color: #7f8c8d;
  font-style: italic;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const Achievement = styled.li`
  margin-bottom: 0.5rem;
  color: #666;
  display: flex;
  align-items: center;
  
  &:before {
    content: "•";
    color: #3498db;
    margin-right: 0.5rem;
  }
`;

function Education() {
  return (
    <EducationContainer>
      <SectionTitle>Education</SectionTitle>
      <EducationList>
        <EducationItem>
          <EducationHeader>
            <Degree>Software Development – Secure Desktop, Mobile, and Web Applications</Degree>
          </EducationHeader>
          <Institution>Vanier College</Institution>
        </EducationItem>

        <EducationItem>
          <EducationHeader>
            <Degree>High School Diploma</Degree>
          </EducationHeader>
          <Institution>Place Cartier Adult Education</Institution>
        </EducationItem>
      </EducationList>
    </EducationContainer>
  );
}

export default Education; 