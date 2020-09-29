import React, { FC, useState } from 'react';
import styled from 'styled-components';
// @ts-ignore
import { COUNT_ACTIONS, COUNTER_MAX_LIMIT } from '@common/constants';
// @ts-ignore
import { INPUT_COLORS } from '@common/colors';
import { S } from './counter.styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
const InlineInformation = styled.span`
  padding: 0 10px;
  color: ${INPUT_COLORS.TEXT_COLOR};
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Counter: FC<CounterProps> = ({ countChange, initialValue }) => {
  const [count, setCount] = useState(initialValue || 1);

  // TODO: add callback props
  const setCountHandler = (actionType: String) => {
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

export type CounterProps = {
  countChange: (newCount: number) => void;
  initialValue?: number;
};

export default Counter;
