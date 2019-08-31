import styled from 'styled-components';
import { COLORS } from './colors';

export const AppointmentInput = styled.input`
  width: 248px;
  font-size: 13px;
  border-radius: 5px;

  padding: 5px;
  border: 1px solid ${COLORS.SILVER_CHALICE};

  box-shadow: inset 0 1px 3px ${COLORS.SHADOW};
  color: ${COLORS.DOVE_GRAY};

  :focus,
  :hover {
    border-color: ${COLORS.MANDY};
    outline: 0;
  }
`;

export const AppointmentTimeInput = styled(AppointmentInput)`
  width: 92px;
`;

export const SendButton = styled.button`
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${COLORS.SILVER_CHALICE};
  background: ${COLORS.MANDY};

  margin: 10px 0;

  height: 35px;
  color: white;

  :focus {
    border-color: ${COLORS.MANDY};

    outline: 0;
  }

  :hover {
    background-color: ${COLORS.CABARET};
    font-weight: bold;
    cursor: pointer;
  }
`;
