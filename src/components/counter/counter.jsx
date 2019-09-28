import React, { useState } from 'react';
import { COUNT_ACTIONS, COUNTER_MAX_LIMIT } from '../../common/constants';
import { S } from './counter.styles';

const Counter = ({ countChange }) => {
  const [count, setCount] = useState(1);

  // TODO: add callback props
  const setCountHandler = actionType => {
    if (actionType === COUNT_ACTIONS.DECREASE && count > 1) {
      const newCount = count - 1;
      setCount(newCount);

      if (countChange) {
        countChange(newCount);
      }
    } else if (
      actionType === COUNT_ACTIONS.INCREASE &&
      count < COUNTER_MAX_LIMIT
    ) {
      const newCount = count + 1;
      setCount(newCount);

      if (countChange) {
        countChange(newCount);
      }
    }
  };

  return (
    <S.CounterWrapper>
      <S.CountDown
        onClick={() => {
          setCountHandler(COUNT_ACTIONS.DECREASE);
        }}
      >
        -
      </S.CountDown>
      <S.CountText>{count}</S.CountText>
      <S.CountUp
        onClick={() => {
          setCountHandler(COUNT_ACTIONS.INCREASE);
        }}
      >
        +
      </S.CountUp>
    </S.CounterWrapper>
  );
};

export default Counter;
