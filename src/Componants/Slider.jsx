import React from "react";
import { Carousel } from "react-bootstrap";
export function Slider() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel style={{ width: "1400px", margin: "auto" }}>
              <Carousel.Item>
                <img
                  style={{ height: "800px", borderRadius: "10px" }}
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/2914550/pexels-photo-2914550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "800px", borderRadius: "10px" }}
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "800px", borderRadius: "10px" }}
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
