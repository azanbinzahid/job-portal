import React, { FC } from "react";
import { Jumbotron } from "react-bootstrap";

type Props = {
  title: string;
  subtitle?: string;
};

const PageHeader: FC<Props> = ({ title, subtitle }) => {
  return (
    <Jumbotron<React.ElementType> align="center">
      <h1> {title} </h1>
      <h3> {subtitle} </h3>
    </Jumbotron>
  );
};

export default PageHeader;
