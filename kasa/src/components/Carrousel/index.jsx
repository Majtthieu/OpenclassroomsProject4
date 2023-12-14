import { useState, useRef, useEffect, useCallback } from "react";
import arrow from "../../assets/arrow-carr.svg";

const Carrousel = ({ slides, parentWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const timerRef = useRef(null);

  const areSeveral = () => slides.length > 1;

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div className="sliderStyles">
      <div className="sliderStyles__prevArrow" onClick={goToPrev}>
        {areSeveral() ? <img src={arrow} alt="arrow" /> : ""}
      </div>
      <div className="sliderStyles__nextArrow" onClick={goToNext}>
        {areSeveral() ? <img src={arrow} alt="arrow" /> : ""}
      </div>
      <div className="sliderStyles__counter">
        {areSeveral() ? `${currentIndex + 1}/${slides.length}` : ""}
      </div>
      <div
        className="sliderStyles__container"
        style={{
          width: `${100 * slides.length}%`,
          transform: `translateX(-${(currentIndex * 100) / slides.length}%)`,
        }}
      >
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="sliderStyles__container--sized"
            title="photos du logement"
            style={{
              backgroundImage: `url(${slides[slideIndex].url})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
