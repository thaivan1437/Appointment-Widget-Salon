import styled from 'styled-components';
import { COLORS } from '../../common/colors';

export const S = {};

S.DayPickerWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  position: relative;

  *:focus {
    outline: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${COLORS.MONZA};
    font-size: 45px;
  }
  .slick-arrow:not(.slick-disabled):before {
    opacity: 1;
  }

  .slick-prev,
  .slick-next {
    width: 45px;
    height: 45px;
  }
  .slick-next {
    right: -50px;
  }

  .slick-prev {
    left: -50px;
  }
`;
S.DayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 80px;
  width: 60px;
  border-radius: 10px;

  margin: 0 3px;
  box-shadow: inset -1px -1px 3px 1px ${COLORS.SHADOW};

  background-color: ${props => (props.selected ? COLORS.MONZA : COLORS.WHITE)};
  color: ${props => (props.selected ? COLORS.WHITE : COLORS.BLACK)};

  :hover {
    background-color: ${props => (props.selected ? COLORS.MONZA : COLORS.ALTO)};
    cursor: pointer;
  }
`;

S.DayValue = styled.div`
  font-size: 24px;
`;
S.DayInfo = styled.div`
  font-size: 12px;
`;

S.BoxBackground = styled.div`
  background-color: ${COLORS.ALABASTER};
  position: absolute;

  height: 45px;
  bottom: -10px;
  left: -5px;
  right: -5px;
  border-radius: 4px;
`;
