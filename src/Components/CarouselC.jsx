import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComponent = () => {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img src="/assets/Gear2255.jpg" alt="" className="slider-image" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/GearSpur.jpg" alt="" className="slider-image" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/SpurGear3.jpg" alt="" className="slider-image" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
