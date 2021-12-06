import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import imgWorkCover from "../assets/image/jpg/details/kca.png";
import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Container
          fluid
          className="px-sm-5"
          css={`
            margin-top: 92px;
          `}
        >
          <img src={imgWorkCover} alt="" className="img-fluid w-100" />
        </Container>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">BRANDING</Text>
                <Title variant="secSm" className="my-4">
                Brand developement for kcalimited.{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                 This is a corporate website for an oil and professional services company located in portharcourt. It features the various projects executed by the business.

                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Client</Text>
                <Title variant="cardBig" className="mt-3">
                  kcalimited
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  August, 2021
                </Title>
              </Col>
              <Col lg="4">
              <Link to="https://kcalimited.com">
                 <Button arrowRight >Live work</Button>
            </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <Section mt="22%" bg="dark">
          <Container>
            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="/tunde">
                <Button
                  arrowRight
                  className="border-0 bg-transparent shadow-none text-capitalize py-3"
                  css={`
                    font-weight: 700;
                    color:white;
                    font-size: 1.5rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 2rem;
                    }
                `}
                >
                  Tunde Ekpekurede
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
