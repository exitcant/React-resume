import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div``;

const CategoryTitle = styled.h3`
  color: #34495e;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
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

function Skills() {
  return (
    <SkillsContainer>
      <SectionTitle>Skills</SectionTitle>
      <SkillsGrid>
        <SkillCategory>
          <CategoryTitle>Technical Skills</CategoryTitle>
          <SkillList>
            <SkillItem>C#</SkillItem>
            <SkillItem>ASP.NET Web APP</SkillItem>
            <SkillItem>ASP.NET MVC</SkillItem>
            <SkillItem>Microsoft SQL Server</SkillItem>
            <SkillItem>Entity Framework</SkillItem>
            <SkillItem>Java</SkillItem>
            <SkillItem>HTML5 & CSS</SkillItem>
            <SkillItem>Git & GitHub</SkillItem>
            <SkillItem>Linux</SkillItem>
          </SkillList>
        </SkillCategory>
        
        <SkillCategory>
          <CategoryTitle>Soft Skills</CategoryTitle>
          <SkillList>
            <SkillItem>Collaborative</SkillItem>
            <SkillItem>Personable</SkillItem>
            <SkillItem>Detail-Oriented</SkillItem>
            <SkillItem>Tolerant</SkillItem>
            <SkillItem>Communicative</SkillItem>
          </SkillList>
        </SkillCategory>
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills; 