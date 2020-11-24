import React from 'react';
import BasicLayout from "../layouts/BasicLayout";
import { Container } from "react-bootstrap";
import ListSkills from "../componets/ListSkills";
import {frontendSkills, frontendSkillsColor,
    backendSkills, backendSkillsColor,
    soSkills, soSkillsColor} from "../utils/skills";

 

export default function projects() {
    return (
       <BasicLayout menuColor="#212529">
<Container className="skills">
<div className="skills_block">
    <h2>Frontend</h2>
    <ListSkills skills={frontendSkills} colors={frontendSkillsColor}/>  
</div>
<div className="skills_block">
    <h2>Backend</h2>
    <ListSkills skills={backendSkills} colors={backendSkillsColor}/>  
</div>
<div className="skills_block">
    <h2>Sistemas Operativos</h2>
    <ListSkills skills={soSkills} colors={soSkillsColor}/>  
</div>
</Container>
       </BasicLayout>
    )
}