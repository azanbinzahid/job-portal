import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Header = styled.div`
  h1 {
    font-family: "Jost", "PT Serif", sans-serif;
    font-weight: 700;
    font-size: 6vmin;
  }
  h3 {
    font-family: "Jost", "PT Serif", sans-serif;
    font-weight: 300;
    font-size: 3vmin;
  }
`;

type Props = {
  title: string;
  subtitle?: string;
};

const SectionHeading: FC<Props> = ({ title, subtitle }) => {
  return (
    <Container<React.ElementType> fluid align="center" className="pb-5 pt-5">
      <Header>
        <h1> {title} </h1>
        <h3> {subtitle} </h3>
      </Header>
    </Container>
  );
};

export default SectionHeading;
