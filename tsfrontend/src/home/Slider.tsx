import Search from "jobs/Search";
import React, { FC } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const BannerTitle = styled.h1`
  display: block;
  margin-bottom: 12px;
  font-size: 37px;
  font-family: "Jost", "PT Serif", sans-serif;
  font-weight: 700;
  color: #fff;
  padding-bottom: 7px;
  span {
    background: #007bff;
    border-radius: 5px;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

const BannerText = styled.p`
  display: block;
  margin-bottom: 12px;
  font-family: "Jost", "PT Serif", sans-serif;
  font-weight: 700;
  color: #007bff;
  span {
    background: #fff;
    border-radius: 5px;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

const Image = styled.img`
  // filter: brightness(50%);
  filter: blur(7px);
`;

const Slider: FC = () => {
  return (
    <Carousel prevIcon={<></>} nextIcon={<></>}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://www.jobs.punjab.gov.pk/new_design/images/banner2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div>
            <img
              alt=""
              src="https://image.flaticon.com/icons/svg/3232/3232975.svg"
              width="150"
              height="150"
              className="d-inline-block align-top pb-3"
            />

            <BannerTitle>
              <span> Get The Career You Deserve </span>
            </BannerTitle>
            <Search />
            <BannerText>
              <span>Example keywords: remote, lahore, manager </span>
            </BannerText>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
