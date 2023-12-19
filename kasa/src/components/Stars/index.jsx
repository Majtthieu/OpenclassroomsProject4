import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";

const Stars = ({ rating }) => {
  const starsArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starsArray.push(<img key={i} src={starActive} alt="étoile active" />);
    } else {
      starsArray.push(<img key={i} src={starInactive} alt="étoile inactive" />);
    }
  }

  return <figure className="stars">{starsArray}</figure>;
};

export default Stars;
