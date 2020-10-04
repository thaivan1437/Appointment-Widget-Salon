import styled from 'styled-components';
import { COLORS } from '@common/colors';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';

export const MainContent = styled.div`
  display: table;
  padding: 0 120px;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const MainRow = styled.div`
  display: table-row;
`;
export const TitleCell = styled.div`
  display: table-cell;
  text-align: center;
  border-color: white;
  border-width: 1px;
  border-left-style: solid;
  height: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #999999;
  padding-top: 5px;
`;
export const ItemCell = styled.div`
  display: table-cell;
  text-align: left;
  border-color: white;
  border-width: 1px;
  border-left-style: solid;
  border-top-style: solid;
  height: 20px;
  width: 150px;
  background-color: #e8e8e8;
  padding: 5px;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  @media (max-width: 768px) {
    width: 120px;
    padding: 1px;
  }
`;

export const ItemCellWhite = styled.div`
  display: table-cell;
  text-align: left;
  border-color: white;
  border-left-style: solid;
  border-top-style: solid;
  height: 20px;
  padding-top: 5px;
`;

export const HolidayItem = styled.div`
  display: flex;
  font-size: 16px;
  padding-top: 15px;
  padding-left: 20px;
  @media (max-width: 768px) {
    padding-top: 5px;
  }
`;

export type HolidayTitleStyleProp = { header: boolean };

export const HolidayTitle = styled.div<HolidayTitleStyleProp>`
  color: ${(props) =>
    props.header ? COLORS.DOVE_GRAY : COLORS.SILVER_CHALICE};
  padding: 0 20px 8px;
  font-size: 20px;
  text-align: ${(props) => (props.header ? 'center' : 'left')};
`;

export const HolidayModalInformationContainer = styled(
  ModalStyles.ModalInformationContainer
)`
  display: flex;
`;

export const HolidayListWrapper = styled.div`
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.STORM_GRAY};
  }
  @media (max-width: 768px) {
    height: 180px;
    overflow: scroll;
  }
`;

export const ListCycle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  margin-top: 6px;
  margin-right: 8px;
`;

export const HolidayDateItem = styled.div`
  color: ${COLORS.SILVER_CHALICE};
  padding: 2px 35px 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const BusinessHoursTitle = styled(ModalStyles.ModalStepTitle)`
  padding: 0px;
  margin: 0 0 10px 15px;
`;

export const BusinessHoursContent = styled(ModalStyles.ModalContentContainer)`
  padding: 22px 0;
`;

export const PhoneContent = styled.a`
  color: ${(props) => props.color};
  text-decoration: none;
  font-weight: 500;

  padding-right: 5px;
  font-size: 20px;

  :hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 10px 15px;
  width: 400px;
  font-size: 14px;

  color: ${COLORS.SILVER_CHALICE};

  @media (max-width: 768px) {
    width: 300px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
