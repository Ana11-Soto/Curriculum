import React from 'react'
import { Container, Button } from "react-bootstrap";
import CV from "../images/cv.pdf";

export default function AboutMe() {
    return (
<Container className="about-me">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Vivamus quam nulla, imperdiet vel rutrum at, tincidunt eu est.
     Sed non mollis leo. Nunc porttitor leo id blandit blandit. 
     Pellentesque habitant morbi tristique senectus et netus et 
     malesuada fames ac turpis egestas. Pellentesque justo libero, 
     vestibulum vel massa et, dignissim finibus sapien. Fusce in venenatis massa, 
     nec pellentesque ante. Aenean in ligula sed velit molestie facilisis.
     Etiam vel sodales purus. Donec eget ligula magna. Maecenas eu laoreet ex. 
     Phasellus nisl enim, efficitur a elementum luctus, suscipit non lectus. 
     Aenean sed enim sed sem cursus sagittis in vitae risus. Etiam facilisis semper diam at iaculis.</p>
     <hr/>
     <a href={CV} target="_blank">
     <Button primary>Descargar CV</Button>
     </a>
     
</Container>

    )
}
