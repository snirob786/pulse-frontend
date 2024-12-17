import React from "react";
import Slider from "react-slick";

const LoginSlider = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="flex items-center">
        <ul>{dots}</ul>
      </div>
    ),
  };

  const slides = [
    {
      img: "/assets/images/slides/promo-a.png",
      img2x: "/assets/images/slides/promo-a2x.png",
      title: "Dashlite",
      description:
        "You can start to create your products easily with its user-friendly design & most completed responsive layout.",
    },
    {
      img: "/assets/images/slides/promo-b.png",
      img2x: "/assets/images/slides/promo-b2x.png",
      title: "Dashlite",
      description:
        "You can start to create your products easily with its user-friendly design & most completed responsive layout.",
    },
    {
      img: "/assets/images/slides/promo-c.png",
      img2x: "/assets/images/slides/promo-c2x.png",
      title: "Dashlite",
      description:
        "You can start to create your products easily with its user-friendly design & most completed responsive layout.",
    },
  ];
  return (
    <div
      className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right"
      data-toggle-body="true"
      data-content="athPromo"
      data-toggle-screen="lg"
      data-toggle-overlay="true"
    >
      <div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-item">
              <div className="nk-feature nk-feature-center">
                <div className="nk-feature-img">
                  <img
                    className="round"
                    src={slide.img}
                    srcSet={`${slide.img2x} 2x`}
                    alt=""
                  />
                </div>
                <div className="nk-feature-content py-4 p-sm-5">
                  <h4>{slide.title}</h4>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LoginSlider;
