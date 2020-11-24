import React from "react"
import BasicLayout from "../layouts/BasicLayout";
import Profile from "../componets/Profile";
import AboutMe from "../componets/AboutMe";

export default function Home() {
  return <BasicLayout>
    <Profile/>
    <AboutMe/>
    
    </BasicLayout>
  
}
