import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import PropTypes from "prop-types";
import { withTranslation } from "../i18n";

const SectionStyled = styled(Section)``;

const Hero = ({ t }) => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled bg="light">
        <div className="pt-5"></div>
        <Container
          className="position-relative"
          css={`
            z-index: 10;
          `}
        >
          <Row>
            <Col lg="4" xl="5" className="order-lg-2">
              <div className="position-relative w-100 h-100"></div>
            </Col>
            <Col
              lg="8"
              xl="7"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                <Title variant="hero" color="dark">
                  {t("title")}
                  <br className="d-none d-sm-block" /> Coding is fun
                </Title>
                <Text mb={4} color="darkShade">
                  Lorem ipsum dolor sit amet, iuvaret necessitatibus ad mel. Vis
                  rebum populo ad. Te quas albucius explicari duo, vix dolorum
                  voluptaria et. Docendi imperdiet necessitatibus no qui, ut
                  aliquid nostrum accommodare sed.
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

Hero.getInitialProps = async () => ({
  namespacesRequired: ["hero"],
});

Hero.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("hero")(Hero);
