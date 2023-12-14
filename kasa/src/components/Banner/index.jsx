function Banner(props) {
  const { title, alt, imageUrl } = props;

  return (
    <div className="banner">
      <img src={imageUrl} alt={alt} />
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;
