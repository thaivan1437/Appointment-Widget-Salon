import styled from 'styled-components';
import { COLORS } from 'common/colors';

export const S = {};

S.SelectionContainer = styled.div`
  width: 120px;
  height: 70px;
  border-radius: 5px;

  border: 1px solid ${COLORS.MERCURY};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  position: relative;
  background-color: ${props =>
    props.selected || props.hasValue ? COLORS.WHITE : COLORS.ALABASTER};

  cursor: pointer;

  &:after,
  &:before {
    display: ${props => (props.selected ? 'block' : 'none')};
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #fff;
    border-width: 10px;
    margin-left: -10px;
  }
  &:before {
    border-color: rgba(245, 0, 0, 0);
    border-top-color: ${COLORS.MERCURY};
    border-width: 11px;
    margin-left: -11px;
  }
`;

S.SelectionText = styled.div`
  font-size: 12px;
`;

S.SelectionValue = styled.div`
  font-size: 30px;
`;

S.TimePickerWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  * {
    box-sizing: border-box; // todo remove
  }
  color: ${COLORS.DOVE_GRAY};
`;

S.TimeSeparator = styled.div`
  font-weight: 500;
  margin: 0 8px;
  font-size: 20px;
`;

S.TimeText = styled.div`
  font-weight: 500;
  margin-left: 8px;
  font-size: 20px;
  align-self: flex-end;
  min-width: 31px;
`;

S.SelectionOptionContainer = styled.div`
  position: absolute;
  top: 85px;
  left: -5px;

  z-index: 1;
  background-color: ${COLORS.WHITE};

  display: flex;

  width: 400px;

  min-height: 145px;

  padding-bottom: 20px;

  flex-wrap: wrap;

  align-items: flex-start;
`;

S.OptionItem = styled.div`
  width: 80px;
  margin-right: 8px;
  margin-bottom: 8px;

  font-size: 14px;
  padding: 8px;
  text-align: center;

  border-radius: 5px;

  border: 1px solid ${COLORS.MERCURY};

  background-color: ${props =>
    props.selected ? COLORS.MONZA : COLORS.ALABASTER};

  color: ${props => (props.selected ? COLORS.WHITE : 'inherit')};

  cursor: pointer;

  :hover {
    background-color: ${COLORS.MERCURY};
  }
`;

S.TimePickerOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
