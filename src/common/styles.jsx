import styled from 'styled-components';
import { COLORS } from './colors';

export const S = {};

S.Input = styled.input`
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

S.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid ${COLORS.MERCURY};
  background-color: ${COLORS.STORM_GRAY};

  font-size: 14px;
  font-family: inherit;

  color: white;

  :focus {
    outline: 0;
  }

  :hover {
    cursor: pointer;
    background-color: rgba(116, 120, 131, 0.7);
  }
`;
