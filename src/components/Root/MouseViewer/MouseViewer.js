import React, { useState } from "react";
import styled from "styled-components";

import TransparentButton from "#root/components/shared/TransparentButton";
import useMousePosition from "#root/helpers/hooks/useMousePosition";

const Coordinates = styled.div`
  color: white;
  font-size: 4rem;
  margin-top: 3rem;
  text-align: center;
`;

const MouseViewer = () => {
  const [isShowing, setIsShowing] = useState(true);

  const mouseCoords = useMousePosition();

  return (
    <Coordinates>
      {isShowing ? (
        <>
          X: {mouseCoords.x}, Y: {mouseCoords.y},
        </>
      ) : null}
      <TransparentButton onClick={() => setIsShowing(!isShowing)}>({isShowing ? "hide" : "show"})</TransparentButton>
    </Coordinates>
  );
};

export default MouseViewer;
