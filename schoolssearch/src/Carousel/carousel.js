import React, { Component } from "react";
import {Carouselwrap,Div, Carouselcontent,Img,Noprofile,Previous,Next,Proceed} from './carouselcss';
import { Carousel} from "antd";
import Profilepicture from '../images/img-profile.png';
import Nopicture from '../images/img-profile.svg';


export default class CarouselComponent extends Component {
  constructor(props) {
    super(props); 
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots:false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 2
    };
    return (
    <Div>
           <h5>54 teachers from this school use SparkEd</h5>
      <Carouselwrap>
        <Previous type="left-circle" onClick={this.previous} />
        <Carousel className="carousel"  ref={node => (this.carousel = node)} {...props}>
     
         < Carouselcontent>
          <Img src={Profilepicture}></Img>
            <h3>Susy Clever</h3>
          </Carouselcontent>
           <Carouselcontent>
          <Noprofile img={Nopicture}>sc</Noprofile >
           <h3>Susy Clever</h3>
          </Carouselcontent>
          < Carouselcontent>
          <Img src={Profilepicture}></Img>
            <h3>Susy Clever</h3>
          </Carouselcontent>
          < Carouselcontent>
          <Noprofile img={Nopicture}>sc</Noprofile >
           <h3>Susy Clever</h3>
          </Carouselcontent>
          < Carouselcontent>
          <Img src={Profilepicture}></Img>
            <h3>Susy Clever</h3>
          </Carouselcontent>
          < Carouselcontent>
          <Noprofile img={Nopicture}>sc</Noprofile >
           <h3>Susy Clever</h3>
          </Carouselcontent>
        </Carousel>
        <Next type="right-circle" onClick={this.next} />
        </Carouselwrap>
        <Proceed>PROCEED</Proceed>
        </Div>
    );
  }
}