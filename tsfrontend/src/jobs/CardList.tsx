import React, { FC } from "react";
import styled from "styled-components";
import { Card, ListGroup } from "react-bootstrap";

const Title = styled.div`
  color: white;
`;

type Props = {
  title: string;
  list: string[];
};

const CardList: FC<Props> = ({ title, list }) => {
  console.log(list);
  return (
    <Card bg="primary">
      <Card.Header>
        <Title>{title}(s) </Title>
      </Card.Header>
      <ListGroup variant="flush">
        {list
          ? list.map((ele, index) => (
              <ListGroup.Item key={index}>{ele}</ListGroup.Item>
            ))
          : null}
      </ListGroup>
    </Card>
  );
};

export default CardList;
