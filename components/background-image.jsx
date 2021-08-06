import { useEffect, useState } from "react";
import Image from "next/image";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const BGImage = () => {
  const [width, setWidth] = useState(Number);
  const [height, setHeight] = useState(Number);

  useEffect(() => {
    const { width, height } = getWindowDimensions();
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setHeight(height);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Image
        src="/../public/background/background.png"
        alt="background-image"
        width={width}
        height={height}
      />
    );
  }
  return null;
};
export default BGImage;
