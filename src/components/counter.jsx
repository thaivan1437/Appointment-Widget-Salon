import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../common/colors';

// TODO: move constants
const COUNT_ACTIONS = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
};

const MAX_LIMIT = 10;

// TODO: move styles
const CountBase = styled.div`
  background-color: grey;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;

  cursor: pointer;
  user-select: none;

  background-color: ${COLORS.ALABASTER};

  border: 1px solid ${COLORS.MERCURY};
`;

const CountDown = styled(CountBase)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const CountUp = styled(CountBase)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const CountText = styled.div`
  width: 50px;
  line-height: 30px;
  text-align: center;
  box-shadow: 0 0 0 1px ${COLORS.SHADOW};
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Counter = () => {
  const [count, setCount] = useState(1);

  // TODO: add callback props
  const setCountHandler = actionType => {
    if (actionType === COUNT_ACTIONS.DECREASE && count > 1) {
      setCount(count - 1);
    } else if (actionType === COUNT_ACTIONS.INCREASE && count < MAX_LIMIT) {
      setCount(count + 1);
    }
  };

  return (
    <CounterWrapper>
      <CountDown
        onClick={() => {
          setCountHandler(COUNT_ACTIONS.DECREASE);
        }}
      >
        -
      </CountDown>
      <CountText>{count}</CountText>
      <CountUp
        onClick={() => {
          setCountHandler(COUNT_ACTIONS.INCREASE);
        }}
      >
        +
      </CountUp>
    </CounterWrapper>
  );
};

export default Counter;
