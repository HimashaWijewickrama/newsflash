import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div className="home">
      <Row>
        <Col xs={12} md={12}>
          <img
            src="https://images.unsplash.com/photo-1591621840289-b58dbede62e3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid"
            alt="cover-poster"
            style={{
              maxHeight: "700px",
              height: "650px",
              width: "100%",
              objectFit: "cover",
              margin: "0px",
              padding: "0px",
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
