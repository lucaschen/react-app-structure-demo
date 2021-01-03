import React, { useState } from "react";
import styled from "styled-components";

import TransparentButton from "#root/components/shared/TransparentButton";

const CounterValue = styled.strong`
  color: white;
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 8rem;
  justify-content: center;
`;

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <CounterWrapper>
      <TransparentButton onClick={() => setCount(count - 1)}>–</TransparentButton>
      <CounterValue>{count}</CounterValue>
      <TransparentButton onClick={() => setCount(count + 1)}>+</TransparentButton>
    </CounterWrapper>
  );
};

export default Counter;
