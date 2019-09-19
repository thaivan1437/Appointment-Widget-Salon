import styled from 'styled-components';
import { COLORS } from './colors';

export const AppointmentInput = styled.input`
  width: 300px;
  font-size: 16px;
  border-radius: 5px;

  padding: 8px;
  border: 1px solid ${COLORS.MERCURY};

  color: ${COLORS.DOVE_GRAY};

  line-height: 1.5;

  :focus,
  :hover {
    border-color: ${COLORS.MONZA};
    outline: 0;
  }
`;

export const ShortCenteredInput = styled(AppointmentInput)`
  width: 40px;
  text-align: center;
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
