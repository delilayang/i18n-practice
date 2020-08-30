import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box } from "../../components/Core";
import { device } from "../../utils";

const CTA = () => (
  <>
    <Section bg="#1e1e20" className="position-relative">
      <Container>
        <Row>
          <Col lg="9" md="8">
            <div className="py-4">
              <Title color="light">
                Hi! There <br className="d-none d-sm-block" />
                Welcome
              </Title>
            </div>
          </Col>
          <Col
            lg="3"
            md="4"
            className="d-flex align-items-center justify-content-lg-end mt-4 mt-md-0"
          ></Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CTA;
