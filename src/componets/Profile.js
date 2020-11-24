import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import profileImage from "../../src/images/avatar.png";
import Social from "./Social";

const data = [
    {
        title: "Edad:",
        info: "24 Años",
    },
    {
        title: "Dirección:",
        info: "Dom.Con. Rincón de Huaraqueo, Maravatío, Mich.",
    },
    {
        title: "E-mail:",
        info: "analaura.18soto@gmail.com",
    },
    {
        title: "Teléfono:",
        info: "786-117-92-94",
    },
]
export default function () {
    return (
        <div className="profile">
            <div className="wallpaper"/>
            <div className="dark"/>
            <Container className="box">
                <Row className="info">
                    <Col xs={12} md={4}>
                    <Image src={profileImage} fluid/>
                    </Col>
                    <Col xs={12} md={8} className="info_data">
                        <span>HOLA</span>
                        <p>Ana Laura Soto</p>
                        <p>Ingeniería en Sistemas Computacionales</p>
                        <hr/>
                        <div className="more-info">
                        {data.map((item, index) => (
                            <div key={index} className="item">
                            <p>{item.title}</p>
                        <p>{item.info}</p>
                            </div>
                            ))}

                        </div>
                    </Col>
                </Row>
                <Social/>
            </Container>
        </div>
    )
}
