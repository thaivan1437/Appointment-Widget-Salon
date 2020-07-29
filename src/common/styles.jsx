import styled from 'styled-components';
import { COLORS, INPUT_COLORS } from './colors';

export const S = {};

S.Input = styled.input`
  width: 400px;
  font-size: 22px;
  border-radius: 10px;

  padding: 12px;
  border: none;

  color: ${props => (props.hasError ? COLORS.MONZA : INPUT_COLORS.TEXT_COLOR)};

  line-height: 2;

  text-transform: ${props => (props.hasValue ? 'capitalize' : 'none')};

  :focus,
  :hover {
    outline: 0;
  }

  ::placeholder {
    color: ${props => (props.hasError ? COLORS.MONZA : INPUT_COLORS.HIT_TEXT)};
  }
  @media (max-width: 768px) {
    width: 300px;
    font-size: 16px;
  }
`;

S.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 13px 20px;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.color};

  font-size: 16px;
  font-family: inherit;

  color: white;

  :focus {
    outline: 0;
  }

  :hover {
    cursor: pointer;
  }

  ${props =>
    props.disabled
      ? 'opacity: 0.4; pointer-events: none; user-select:none; background-color: #747883;'
      : null}
`;

S.AppointmentButton = styled(S.Button)`
  font-size: 20px;
  width: 310px;
  height: 56px;
  position: relative;

  ${props =>
    props.disabled
      ? `opacity:1;filter:brightness(0.85);background-color:${props.color};`
      : null}
`;
