import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/profile.jpg";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Ezechukwu  Emmanuel
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                 I am a software engineer specialising mostly in web technologies. I have relevant expertise in frontend development including JavaScript, React, NodeJS, NextJS,Gatsby, Webpack, Docker, Bootstrap, Tailwind. I have experience in these technologies spanning over 4years in the industry. I am very committed, hardworking and always looking to learn new things
                </Text>
                <Text color="light" className="mt-4">
                  I strive for a minimal and beautiful design.
                </Text>
                <div className="mt-4">
                  <Text color="light">Email me at</Text>

                  <Text variant="p">
                    <a
                      href="mailto:emereuwaonueze@gmail.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">emereuwaonueze@gmail.com</Span>
                    </a>
                  </Text>
                </div>

                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://dribbble.com/ezemery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Dribble
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.twitter.com/eze_emery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.github.com/ezemery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Github
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.Linkedin.com/in/ezechukwu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    Linkedin
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
