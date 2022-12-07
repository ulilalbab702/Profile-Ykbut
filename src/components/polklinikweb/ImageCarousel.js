import "./ImageCarousel.css";
import "react-responsive-carousel";
import { Carousel } from "react-responsive-carousel";
import { gsi, teamIT } from "../../assets";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel>
        <div className="image">
          <img src={teamIT} alt="Gedung" />
        </div>
        <div className="image">
          <img src={teamIT} alt="Gedung" /> 
        </div>
        <div className="image">
          <img src={gsi} alt="Gedung" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
