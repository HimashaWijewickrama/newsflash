import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import AppRoutes from "./AppRoutes/appRoutes";
import SideNewsContainer from "./Components/SideNews/sideNews.container";
import TopBusinessContainer from "./Components/TopBusiness/topBusiness.container";
import TopNewsContainer from "./Components/TopNews/topNews.container";
import TopTechNewsContainer from "./Components/TopTech/topTechNews.container";
import NavBar from "./Components/navbar.view";
import Footer from "./Components/footer";

export default function App() {
  return (
    <Container>
      <NavBar />
      <AppRoutes />

      <Row className="g-2" xs={2} md={12}>
        <Col md={8}>
          <TopNewsContainer />
          <TopBusinessContainer />
          <TopTechNewsContainer />
        </Col>
        <Col md={4}>
          <SideNewsContainer />
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
}
