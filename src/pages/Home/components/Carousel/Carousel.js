import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousels extends Component {
  render() {
    const { data } = this.props;
    var settings = {
      dots: false,
      ifinite: true,
      slnidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      centerMode: true,
      centerPadding: '60px'
    };

    return (
      <Slider {...settings}>
        {data.map(item=>(
          <div key={item.id}>
            <img src={item.value} alt={item.value} className="f-banner rounded" />
          </div>
        ))}
      </Slider>
    );
  }
}
