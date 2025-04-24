import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: #34495e;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: #e0f2fe;
  color: #3498db;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

function Projects() {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>Book Information</ProjectTitle>
          <ProjectDescription>
            A database system for a bookstore to manage sales records and inventory.
          </ProjectDescription>
          <TechStack>
            <TechTag>Java</TechTag>
          </TechStack>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>MyFrontEndPage</ProjectTitle>
          <ProjectDescription>
            A web page implementation based on design examples, focusing on front-end development.
          </ProjectDescription>
          <TechStack>
            <TechTag>HTML5</TechTag>
            <TechTag>CSS</TechTag>
          </TechStack>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Portfolio Website</ProjectTitle>
          <ProjectDescription>
            A professional portfolio website showcasing personal style and work, with a focus on user experience.
          </ProjectDescription>
          <TechStack>
            <TechTag>HTML5</TechTag>
            <TechTag>CSS</TechTag>
            <TechTag>JavaScript</TechTag>
          </TechStack>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Garage Website</ProjectTitle>
          <ProjectDescription>
            A business website developed to help clients expand their reach and manage their services.
          </ProjectDescription>
          <TechStack>
            <TechTag>SQL</TechTag>
            <TechTag>PHP</TechTag>
            <TechTag>HTML5</TechTag>
            <TechTag>CSS</TechTag>
          </TechStack>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>FitFusion Application</ProjectTitle>
          <ProjectDescription>
            A health and fitness platform with a comprehensive database system for tracking goals and progress.
          </ProjectDescription>
          <TechStack>
            <TechTag>Database Design</TechTag>
            <TechTag>Team Project</TechTag>
          </TechStack>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default Projects; 