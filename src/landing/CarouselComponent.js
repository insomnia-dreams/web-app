import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as routes from '../_constants/routes'
import { COLORS } from '../_constants/styles'

const Arrow = styled.a`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${COLORS.LINK_2};
  opacity: .75;
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);
  &:hover {
    opacity: .5;
  }
`
const ArrowLeft = styled(Arrow)`
  left: 32px;
`

const ArrowRight = styled(Arrow)`
  right: 32px;
`

export class CarouselLeftArrow extends Component {
  render() {
    return (
      <ArrowLeft
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </ArrowLeft>
    );
  }
}

export class CarouselRightArrow extends Component {
  render() {
    return (
      <ArrowRight
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </ArrowRight>
    );
  }
}

const CarouselIndicators = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  list-style-type: none;
  li {
    &:nth-of-type(n+2) {
      margin-left: 9px;
    }
  }
`

const CarouselIndicatorLink = styled.a`
  display: block;
  width: 24px;
  height: 3px;
  background-color: ${COLORS.LINK_2};
  cursor: pointer;
  opacity: ${props => props.active ? '.75' : '.15'};
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);
  &:hover {
    opacity: .5;
  }
`

export class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <CarouselIndicatorLink active={this.props.index == this.props.activeIndex}
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
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
  /* margin: 4px 0; */
  position: relative;

`

const CarouselSlidesWrapper = styled.div``

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
        <CarouselSlidesWrapper>
          {this.state.carouselSlides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />)}
        </CarouselSlidesWrapper>
        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
        <CarouselIndicators className="carousel__indicators">
          {this.state.carouselSlides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex === index}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </CarouselIndicators>
      </CarouselWrapper>
    )
  }
}

export default CarouselComponent

