import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (evt) => {
      setMouseCoords({ x: evt.pageX, y: evt.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mouseCoords;
};

export default useMousePosition;
