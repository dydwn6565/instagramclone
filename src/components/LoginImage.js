import React, { useEffect, useState } from "react";
import "./css/LoginImage.css"
function LoginImage() {
  const imageURLList = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png",
  ];

  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const imageSlide = () => {
      setTimeout(() => {
        currentPosition === 3
          ? setCurrentPosition(0)
          : setCurrentPosition((prev) => prev + 1);
      }, 5000);
    };
    // return clearTimeout(imageSlide);

    imageSlide();
  }, [currentPosition]);
  return (
    <div>
      {console.log(currentPosition)}
      <img
        className="login-cellphone-slider-pitcure-background"
        src="https://www.iphonelife.com/sites/iphonelife.com/files/styles/screenshot_iphonexs_660_2x/public/img_3854.jpg?itok=Rfc29Kik"
        alt=""
      />
      <img
        className="login-cellphone-slider-pitcure"
        src={imageURLList[currentPosition]}
        alt=""
      />
    </div>
  );
}

export default LoginImage;
