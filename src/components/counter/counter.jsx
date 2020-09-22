import React, { useState } from 'react';
import styled from 'styled-components';
import { S } from './counter.styles';
import { COUNT_ACTIONS, COUNTER_MAX_LIMIT } from '../../common/constants';
import { INPUT_COLORS } from '../../common/colors';

// eslint-disable-next-line no-unused-vars
const InlineInformation = styled.span`
  padding: 0 10px;
  color: ${INPUT_COLORS.TEXT_COLOR};
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Counter = ({ countChange, initialValue }) => {
  const [count, setCount] = useState(initialValue || 1);

  // TODO: add callback props
  const setCountHandler = (actionType) => {
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
        —
      </S.CountDown>
      <S.CountText>
        {count}
        &nbsp;
        {count === 1 ? 'person' : 'people'}
      </S.CountText>
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
