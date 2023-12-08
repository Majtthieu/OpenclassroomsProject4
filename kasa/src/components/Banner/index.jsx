import PropTypes from "prop-types";

function Banner(props) {
  const { title, alt, imageUrl } = props;

  return (
    <div className="banner">
      <img src={imageUrl} alt={alt} />
      <h1>{title}</h1>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Banner;
