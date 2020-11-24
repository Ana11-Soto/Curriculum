import React from 'react';
import BasicLayout from "../layouts/BasicLayout";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import projects from "../utils/projects";

export default function Projects() {
    return (
       <BasicLayout menuColor="#000">
           <Container className="projects">
               <h1>Proyectos</h1>
               <Row>
                   {projects.map ((projects, index) => (
                    <Col key={index} xs={12} sm={4} className="project">
                       <Card>
                       <div className="image"
                       style={{ backgroundImage: `url("${projects.image}")`}}/>
                       <Card.Body>
                       <Card.Title>{projects.title}</Card.Title>
                       <Card.Text>{projects.description}</Card.Text>
                       <a href={projects.url} target="_blank">
                           <Button variant="primary">Ver en github</Button>
                       </a>
                       </Card.Body>
                       </Card>
                   </Col>
                   ))}
                   
               </Row>
           </Container>
       </BasicLayout>
    )
}
