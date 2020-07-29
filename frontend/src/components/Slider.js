import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'holderjs'

export default function Slider() {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.pkmeat.com/en/images/career/careerBanner.jpg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://anisalfarnasent.com/wp-content/uploads/2016/02/banner2.jpg"
            alt="First slide"
            />
        </Carousel.Item>

        </Carousel>    
        )
}
