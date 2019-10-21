import styled from 'styled-components';
import { COLORS } from 'common/colors';

export const S = {};

const CountBase = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: ${COLORS.ALABASTER};
  border: 1px solid ${COLORS.MERCURY};
`;

S.CountDown = styled(CountBase)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

S.CountUp = styled(CountBase)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

S.CountText = styled.div`
  color: ${COLORS.DOVE_GRAY};
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  box-shadow: 0 0 0 1px ${COLORS.SHADOW};
`;

S.CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;
