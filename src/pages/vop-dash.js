import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import imgWorkCover from "../assets/image/jpg/details/vop-dashboard.gif";
import imgS1 from "../assets/image/jpg/details/vop-dash-1.png";
import imgS2 from "../assets/image/jpg/details/vop-dash-2.png";
import imgS3 from "../assets/image/jpg/details/vop-dash-3.png";
import imgS4 from "../assets/image/jpg/details/vop-dash-4.png";
import imgS5 from "../assets/image/jpg/details/vop-dashboard.gif";
import imgS6 from "../assets/image/jpg/details/vop-dash-6.png";
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
                Brand developement for Getvop{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  This is a customer dashboard for a javascript wigdet.  The widget is embedded on popular e-commerce website such as Princess Polly in Australia and United States (https://www.princesspolly.com.au/pages/shop-tiktok). The widget enables merchants to import tiktok videos, instagram videos and products associated with these videos on their website thereby making videos shoppable. Customers can customise the widget from this dashboard.

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
                  Vop Shops
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  May, 2020
                </Title>
              </Col>
              <Link to="https://vop.shop/eze">
                 <Button arrowRight >Live work</Button>
            </Link>
            </Row>
          </Container>
        </div>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS2} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS3} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS4} alt="" className="img-fluid w-100" />
              </Col>
            </Row>
          </Container>
        </Section>
        {/* <Section className="pt-4 pb-0">
          <Container>
            <Title variant="secSm" className="mb-5 pb-lg-4">
              Key Findings
            </Title>
            <Row>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  01. Basics
                </Title>
                <Text variant="p">
                  To satisfy our goal of creating a brand that could adapt
                  across many use cases, we took the base form of their new logo
                  and used it as an artboard. As long as the structural outline
                  of the mark stayed consistent their brand was allowed to flex
                  and adapt to specific uses.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  02. Goals
                </Title>
                <Text variant="p">
                  To satisfy our goal of creating a brand that could adapt
                  across many use cases, we took the base form of their new logo
                  and used it as an artboard.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  03. Problems
                </Title>
                <Text variant="p">
                  To satisfy our goal of creating a brand that could adapt
                  across many use cases, we took the base form of their new logo
                  and used it as an artboard. As long as the structural outline
                  of the mark stayed consistent their brand was allowed to flex
                  and adapt to specific uses.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  04. Solutions
                </Title>
                <Text variant="p">
                  To satisfy our goal of creating a brand that could adapt
                  across many use cases, we took the base form of their new logo
                  and used it as an artboard. As long as the structural outline
                  of the mark stayed consistent their brand was allowed to flex
                  and adapt to specific uses.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section> */}
        <Section mt="22%" bg="dark">
          <Container>
            <Row
              css={`
                margin-top: -40%;
              `}
            >
              <Col xs="12" className="mb-5">
                <img src={imgS5} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS6} alt="" className="img-fluid w-100" />
              </Col>
            </Row>

            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="/vop-shop">
                <Button
                  arrowRight
                  className="border-0 bg-transparent shadow-none text-capitalize py-3"
                  css={`
                    font-weight: 700
                    font-size: 1.5rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 2rem;
                    }
                `}
                >
                  Vop shops
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
