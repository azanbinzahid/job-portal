import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'holderjs'

export default function Slider() {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/images/1.jpg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/images/2.jpg"
            alt="First slide"
            />
        </Carousel.Item>

        </Carousel>    
        )
}
