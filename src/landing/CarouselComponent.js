import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as routes from '../_constants/routes'

export class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
      href="#"
      className="carousel__arrow carousel__arrow--left"
      onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

export class CarouselRightArrow extends Component {
  render() {
    return (
      <a
      href="#"
      className="carousel__arrow carousel__arrow--right"
      onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

const CarouselSlideWrapper = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`

export class CarouselSlide extends Component {
  render() {
    return (
      <CarouselSlideWrapper active={this.props.index === this.props.activeIndex}>
        <Link to={routes.SALES}>
          <Image src={`/images/carousel/${this.props.slide.src}`} alt="banner" />
        </Link>
      </CarouselSlideWrapper>
    )
  }
}

const CarouselWrapper = styled.div`
  margin: 4px 0;
`

class CarouselComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      carouselSlides: [
        { src: "carousel1.jpg" },
        { src: "carousel2.jpg" },
        { src: "carousel3.jpg" }
      ]
    };
  }

  goToSlide = (index) => {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide = (e) => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slides = this.state.carouselSlides;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide = (e) => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slides = this.state.carouselSlides;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <CarouselWrapper>
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
        <div>
          {this.state.carouselSlides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />)}
        </div>
        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
      </CarouselWrapper>
    )
  }
}

export default CarouselComponent

