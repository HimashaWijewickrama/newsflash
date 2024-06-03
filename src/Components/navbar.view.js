import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#000000", color: "#ffffff" }}>
        <Col className="align-items-start" xs={6}>
          <Stack direction="horizontal" gap={3}>
            <p className="p-4 fs-6 fw-bold">
              <a
                href="/newsflash/home"
                className="text-decoration-none"
                style={{ color: "#ffffff" }}
              >
                Home
              </a>
            </p>
            <p className="p-4 fs-6 fw-bold">
              <a
                href="/blog"
                className="text-decoration-none"
                style={{ color: "#ffffff" }}
              >
                Blog
              </a>
            </p>
            <p className="p-4 fs-6 fw-bold">
              <a
                href="/about"
                className="text-decoration-none"
                style={{ color: "#ffffff" }}
              >
                About
              </a>
            </p>
          </Stack>
        </Col>
        <Col className="d-flex justify-content-end" xs={6}>
          <Stack direction="horizontal" gap={3} className="ms-auto">
            <div className="p-4">
              <FaLinkedin size={20} />
            </div>
            <div className="p-4">
              <FaFacebook size={20} />
            </div>
            <div className="p-4">
              <FaTwitter size={20} />
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
