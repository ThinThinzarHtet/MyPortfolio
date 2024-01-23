import React from "react";

const ThemeItem = ({ color, img, changeColor, shadow }) => {
  return (
    <img
      src={img}
      alt="theme img"
      className="theme__img"
      onClick={() => changeColor({ color, shadow })}
    />
  );
};

export default ThemeItem;
