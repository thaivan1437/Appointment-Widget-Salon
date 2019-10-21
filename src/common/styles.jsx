import styled from 'styled-components';
import { COLORS } from './colors';

export const S = {};

S.Input = styled.input`
  width: 300px;
  font-size: 18px;
  border-radius: 5px;

  padding: 8px;
  border: 1px solid
    ${props => (props.hasError ? COLORS.MONZA : COLORS.OSLO_GRAY)};

  color: ${COLORS.DOVE_GRAY};

  line-height: 1.5;
  height: 36px;

  :focus,
  :hover {
    border-color: ${COLORS.MONZA};
    outline: 0;
  }

  ::placeholder {
    color: ${COLORS.SILVER};
  }
`;

S.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid ${COLORS.MERCURY};
  background-color: ${COLORS.MONZA};

  font-size: 14px;
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
      ? 'opacity: 0.4; pointer-events: none; user-select:none; background-color: #747883'
      : null}
`;

S.AppointmentButton = styled(S.Button)`
  font-size: 20px;
  line-height: 2;
  width: 300px;
`;
