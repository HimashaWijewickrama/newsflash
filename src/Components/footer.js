//import react packages and dependencies
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
//footer section implementation -start

function Footer() {
  return (
    <Container style={{backgroundColor: "#000000"}}>
      <hr style={{ color: "#ffffff" }} />

      <Row>
        <span
          style={{ margin: "0px", color: "#ffffff", justifyContent: "center" }}
        >
          <h5
            className="mb-3 fw-bolder text-center fs-2"
            id="footer-text"
            // style={{ marginRight: "20px",}}
          >
            Follow Us On
          </h5>

          <FaLinkedin
            size={25}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="LinkedIn"
            style={{ marginRight: "20px", marginLeft: "550px" }}
          />
          <FaFacebook
            size={25}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Facebook"
            style={{ margin: "20px" }}
          />
          <FaTwitter
            size={25}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Twitter"
            style={{ margin: "20px" }}
          />
        </span>
      </Row>
      <Row>
        <h5 className="mb-3 fw-bolder fs-2" id="footer-text">
          Newsletter |
        </h5>
        <p className="small" style={{color: "#ffffff"}}>
          Want to know what we're up to? Sign up for the newsletter and join our
          tribe.
        </p>
        <form action="#">
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Email Address"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <Button variant="light" id="button-addon2">
              <IoIosSend
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Send"
              />
            </Button>
          </div>
        </form>
      </Row>
      <Row>
        <p className="text-center small mb-0" style={{color: "#ffffff"}}>
          &copy; 2024 NewsFlash - All rights reserved
        </p>
      </Row>

      {/* copyright statement section*/}
      <hr style={{ color: "muted" }} />
    </Container>
  );
}

export default Footer;
