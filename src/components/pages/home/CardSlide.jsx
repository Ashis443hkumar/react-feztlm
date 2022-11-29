import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function CardSlide() {
  return (
    <div className="slide">
        <div className="heading">
          <h2>Latest Properties</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vero
            quos maiores numquam magni fugiat itaque ipsum minima id quis vitae?
          </p>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="cardSlide">
            <img
              src="https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/property-6.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="cardsilde-info">
              <h3>206 mount Olive Road two </h3>
              <h5>Rent ! $ 12.000 </h5>
              <h6>Click Here to View</h6>
            </div>
          </div>
          <div className="cardSlide">
            <img
              src="https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/property-3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="cardsilde-info">
              <h3>171 West Centeral Parak </h3>
              <h5>Rent ! $ 12.000 </h5>
              <h6>Click Here to View</h6>
            </div>
          </div>
          <div className="cardSlide">
            <img
              src="https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/property-7.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="cardsilde-info">
              <h3>20633 azabu nishi parak let </h3>
              <h5>Rent ! $ 12.000 </h5>
              <h6>Click Here to View</h6>
            </div>
          </div>
          <div className="cardSlide">
            <img
              src="https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/property-10.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="cardsilde-info">
              <h3>206 mounat south Bela two </h3>
              <h5>Rent ! $ 12.000 </h5>
              <h6>Click Here to View</h6>
            </div>
          </div>
          <div className="cardSlide">
            <img
              src="https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/property-3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="cardsilde-info">
              <h3>171 West Centeral Parak </h3>
              <h5>Rent ! $ 12.000 </h5>
              <h6>Click Here to View</h6>
            </div>
          </div>
        </Carousel>
        ;
      </div>
  );
}
