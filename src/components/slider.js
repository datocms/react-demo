import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    let opts = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: "20%",
      autoplay: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: { slidesToShow: 3, centerPadding: "15%" }
        },
        { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "0" } },
        { breakpoint: 768, settings: { centerPadding: "0", slidesToShow: 1 } }
      ]
    };

    return (
      <div className="listing-slider margin-bottom-0">
        <Slider {...opts}>
          {this.props.images.map((img, i) => {
            return (
              <div key={i} className="item crop">
                <img className="slide_img" src={img.url} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
