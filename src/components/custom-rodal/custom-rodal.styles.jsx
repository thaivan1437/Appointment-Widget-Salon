import styled from 'styled-components';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { COLORS } from '../../common/colors';

export const S = {};

S.CustomRodal = styled(Rodal)`
  .rodal-dialog {
    padding: 0;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;

S.CloseIcon = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
`;

S.ModalContentWrapper = styled.div`
  display: flex;
  height: 100%;
`;

S.DialogCycle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${COLORS.MERCURY};

  left: 585px;

  top: ${props => (props.top ? '-15px' : 'auto')};
  bottom: ${props => (props.bottom ? '-15px' : 'auto')};
`;

S.ModalContentContainer = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 0 68px;
`;

S.ModalInformationContainer = styled.div`
  flex: 1;
  background-color: ${COLORS.ALABASTER};
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${COLORS.MERCURY};
`;

S.ModalFooter = styled.div`
  position: fixed;
  bottom: 0;
  border-top-width: 2px;
  border-top-style: dotted;
  border-color: ${COLORS.MERCURY};
  width: 500px;
  color: ${COLORS.MERCURY};
  font-size: 12px;

  padding: 10px 0;
  margin-bottom: 30px;
`;

S.ModalStepTitle = styled.div`
  width: 400px;
  font-size: 24px;
  margin-bottom: 20px;
`;
