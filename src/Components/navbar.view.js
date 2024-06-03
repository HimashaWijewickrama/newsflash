import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function NavBar() {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#2B4748", color: "#ffffff" }}>
        <Col className="align-items-start" xs={6}>
          <Stack direction="horizontal" gap={3}>
            <div className="p-4 fs-6 fw-bold"><a href="/newsflash/home" className="text-decoration-none">HOME</a></div>
            <div className="p-4 fs-6 fw-bold"><a href="/blog" className="text-decoration-none">BLOG</a></div>
            <div className="p-4 fs-6 fw-bold"><a href="/about"className="text-decoration-none">ABOUT</a></div>
          </Stack>
        </Col>
        <Col className="align-items-end" xs={4}></Col>
        <Col className="align-items-end" xs={2}>
          <Stack direction="horizontal" gap={3}>
            <div className="p-4">
              <BsLinkedin />
            </div>
            <div className="p-4">
              <BsFacebook />
            </div>
            <div className="p-4">
              <BsTwitter />
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
