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
  width: 72px;
  height: 72px;
  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;

S.CloseIconText = styled.div`
  position: absolute;
  top: 13px;

  padding: 5px;
  z-index: 1;
  color: white;
  transform: rotate(-45deg);

  user-select: none;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px;
    top: 9px;
  }
`;

S.ModalContentWrapper = styled.div`
  display: flex;
  height: 100%;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  @media (min-width: 768px) and (max-width: 1024px) {
    top: 345px;
    left: ${props => (props.top ? '-15px' : '585px')};
  }
  @media (max-width: 768px) {
    top: 345px;
    left: ${props => (props.top ? '-15px' : '345px')};
  }
`;

S.HalfModalDialogCycle = styled(S.DialogCycle)`
  left: 435px;
`;

S.ModalContentContainer = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 0 68px;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 0 40px;
    flex: 1 1;
    min-height: 300px;
  }
  @media (max-width: 768px) {
    padding: 40px 0 20px;
    flex: 1 1;
    min-height: 300px;
  }
`;
S.ModalDetailContentContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
    max-height: 220px;
    padding-right: 10px;
    overflow: scroll;
  }
  @media (max-width: 768px) {
    overflow: scroll;
    max-height: 180px;
    padding-right: 10px;
  }
`;
S.HalfModalContent = styled(S.ModalContentContainer)`
  flex: 1;
`;

S.ModalInformationContainer = styled.div`
  flex: 1;
  background-color: ${COLORS.ALABASTER};
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${COLORS.MERCURY};
  padding: 20px 0 40px;
`;

S.ModalFooter = styled.div`
  position: fixed;
  bottom: 0;
  border-top-width: 2px;
  border-top-style: dotted;
  border-color: ${COLORS.MERCURY};
  width: 500px;
  color: ${COLORS.STORM_GRAY};
  font-size: 12px;

  padding: 10px 0;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

S.HalfModelFooter = styled(S.ModalFooter)`
  width: 350px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

S.ModalStepTitle = styled.div`
  width: 400px;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    width: 300px;
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

S.FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.STORM_GRAY};

  padding: 0 3px;

  :hover {
    font-weight: 500;
  }
`;
