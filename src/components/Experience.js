import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const ExperienceList = styled.div``;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h3`
  color: #34495e;
  margin: 0;
`;

const Company = styled.h4`
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

const Responsibilities = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const Responsibility = styled.li`
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

function Experience() {
  return (
    <ExperienceContainer>
      <SectionTitle>Work Experience</SectionTitle>
      <ExperienceList>
        <ExperienceItem>
          <JobHeader>
            <JobTitle>Fast Food Cashier</JobTitle>
            <DateRange> September 2022 - Present</DateRange>
          </JobHeader>
          <Company>IGA</Company>
          <Responsibilities>
            <Responsibility>Serving customers, cooking fried food, cleaning the department, and putting stocks away</Responsibility>
          </Responsibilities>
        </ExperienceItem>

        <ExperienceItem>
          <JobHeader>
            <JobTitle>Inventory Control Specialist</JobTitle>
            <DateRange>May 2022 - July 2022</DateRange>
          </JobHeader>
          <Company>SSense</Company>
          <Responsibilities>
            <Responsibility>Received, inspected, and logged inventory.</Responsibility>
            <Responsibility>Ensured merchandise quality and accurate data entry.</Responsibility>
          </Responsibilities>
        </ExperienceItem>
      </ExperienceList>
    </ExperienceContainer>
  );
}

export default Experience; 