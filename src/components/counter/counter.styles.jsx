import styled from 'styled-components';
import { COLORS, INPUT_COLORS } from 'common/colors';

export const S = {};

const CountBase = styled.div`
  width: 54px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: ${COLORS.ALABASTER};
  border: 1px solid ${COLORS.MERCURY};
`;

S.CountDown = styled(CountBase)`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

S.CountUp = styled(CountBase)`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

S.CountText = styled.div`
  width: 54px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  box-shadow: 0 0 0 1px ${COLORS.SHADOW};
`;

S.CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: ${INPUT_COLORS.TEXT_COLOR};
`;
