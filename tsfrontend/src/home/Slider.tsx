import Search from "jobs/Search";
import React, { FC } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const BannerTitle = styled.h1`
  display: block;
  margin-bottom: 12px;
  font-size: 47px;
  font-family: "Jost", "PT Serif", sans-serif;
  font-weight: 700;
  color: #fff;
`;

const BannerText = styled.p`
  display: block;
  margin-bottom: 12px;
  font-family: "Jost", "PT Serif", sans-serif;
  font-weight: 700;
  color: #fff;
`;

const Image = styled.img`
  filter: brightness(50%);
`;

const Slider: FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          // className="d-block w-100"
          src="https://www.jobs.punjab.gov.pk/new_design/images/banner2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <BannerTitle>Get The Career You Deserve</BannerTitle>
          <Search />
          <BannerText> For example: remote, lahore, manager </BannerText>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
