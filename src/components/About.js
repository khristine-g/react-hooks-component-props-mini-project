import React from "react";

function About(props) {
  const { image, about } = props;
  const defaultImage = "https://via.placeholder.com/215Links";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
