import { useState } from "react";
import arrow from "../../assets/arrow.svg";

const Carrousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "1.5rem",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const prevArrowStyles = {
    position: "absolute",
    top: "50%",
    left: "2rem",
    transform: "translateY(-50%) rotate(-90deg)",
    cursor: "pointer",
    zIndex: 1,
  };

  const nextArrowStyles = {
    position: "absolute",
    top: "50%",
    right: "2rem",
    transform: "translateY(-50%) rotate(90deg)",
    cursor: "pointer",
    zIndex: 1,
  };

  const counterStyles = {
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(0, -50%)",
    zIndex: 1,
    color: "white",
  };

  const areSeveral = () => slides.length > 1;

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={prevArrowStyles} onClick={goToPrev}>
        {areSeveral() ? <img src={arrow} alt="arrow" /> : ""}
      </div>
      <div style={nextArrowStyles} onClick={goToNext}>
        {areSeveral() ? <img src={arrow} alt="arrow" /> : ""}
      </div>
      <div style={counterStyles}>
        {areSeveral() ? `${currentIndex + 1}/${slides.length}` : ""}
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default Carrousel;
