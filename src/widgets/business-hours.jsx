import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { CONFIGS } from '../environments/development';
import React from 'react';
import { ColorContext } from '@components/widget-view';
import { colorWeekend } from '../common/utils';
import styled from 'styled-components';
import { COLORS } from 'common/colors';

const MainContent = styled.div`
  display: table;
  padding: 0 120px;
`;
const MainRow = styled.div`
  display: table-row;
`;
const TitleCell = styled.div`
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
const ItemCell = styled.div`
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
  vertical-align:middle;
  font-size:14px;
`;
const ItemCellWhite = styled.div`
  display: table-cell;
  text-align: left;
  border-color: white;
  border-left-style: solid;
  border-top-style: solid;
  height: 20px;
  padding-top: 5px;
`;
const SplitTitle = styled.div`
  display: flex;
  padding: 0px;
  margin-left: 15px;
`;
const HolidayItem = styled.div`
  display: flex;
  font-size: 16px;
  padding-top: 15px;
  padding-left: 20px;
`;
const HolidayTitle = styled.div`
  color: ${props => (props.header ? COLORS.DOVE_GRAY : COLORS.SILVER_CHALICE)};
  padding: 0 20px 8px;
  font-size: 20px;
  text-align: ${props => (props.header ? 'center' : 'left')};
`;
const HolidayModalInformationContainer = styled(
  ModalStyles.ModalInformationContainer
)`
  display: flex;
`;
const HolidayListWrapper = styled.div`
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.STORM_GRAY};
  }
`;
const ListCycle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 12px;
  background-color: ${props => props.color};
  margin-top: 6px;
  margin-right: 8px;
`;
const HolidayDateItem = styled.div`
  color: ${COLORS.SILVER_CHALICE};
  padding: 2px 35px 0;
  display: flex;
  justify-content: space-between;
`;

const BusinessHours = ({
  showBusinessHoursModal,
  setShowBusinessHoursModal,
  folderName,
  color,
  businessHours,
}) => {
  // console.log(businessHours.customMessage.toString().length)
  return (
    <CustomRodal
      showModal={showBusinessHoursModal}
      setShowModal={setShowBusinessHoursModal}
      selectedStyle={folderName}
    >
      <ColorContext.Provider value={color}>
        <ModalStyles.ModalContentContainer>
          <ModalStyles.ModalStepTitle>
            <SplitTitle>Business Hours</SplitTitle>
          </ModalStyles.ModalStepTitle>
        <HolidayListWrapper>
          <MainContent>
            <MainRow>
              <ItemCellWhite></ItemCellWhite>
              <TitleCell>Open</TitleCell>
              <TitleCell>Close</TitleCell>
            </MainRow>
            {parseInt(businessHours.periods.length) > 0
              ? businessHours.periods.map((item, index) => {
                  // console.log(openTimeStart(item.hours[0]['openTime'],item.hours[0]['closeTime']))
                  return (
                    <MainRow>
                      <ItemCell
                        style={{
                          backgroundColor: colorWeekend(index, color),
                          color: '#FFF',
                          borderTopLeftRadius: 10,
                          borderBottomLeftRadius: 10,
                          width: 50,
                        }}
                      >
                        {item.day}
                      </ItemCell>
                      <ItemCell>
                        {item.hours[0]['openTime']}
                        {item.hours.length > 1 ? (
                          <>
                            <br /> {item.hours[1]['openTime']}
                          </>
                        ) : null}
                      </ItemCell>
                      <ItemCell
                        style={{
                          borderBottomRightRadius:
                            index === businessHours.periods.length - 1 ? 10 : 0,
                        }}
                      >
                        {item.hours[0]['closeTime']}
                        {item.hours.length > 1 ? (
                          <>
                            <br /> {item.hours[1]['closeTime']}
                          </>
                        ) : null}
                      </ItemCell>
                    </MainRow>
                  );
                })
              : null}
          </MainContent>
          </HolidayListWrapper>
          <ModalStyles.ModalFooter>
            powered by
            <ModalStyles.FooterLink
              href={`https://salonmanager.${CONFIGS.domainExtension}`}
              target="_blank"
            >
              Salon Manager
            </ModalStyles.FooterLink>
          </ModalStyles.ModalFooter>
        </ModalStyles.ModalContentContainer>
        <HolidayModalInformationContainer>
          <HolidayListWrapper>
            <HolidayTitle header>Holidays and Closed Days</HolidayTitle>
            {parseInt(businessHours.holidays.length) > 0
              ? businessHours.holidays.map((holidayItem, holidayIndex) => {
                  var date_options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  };
                  let start_date = new Date(holidayItem.date);
                  return (
                    <>
                      <HolidayItem>
                        <ListCycle className="list-cycle" color={color} />
                        {holidayItem.name}
                      </HolidayItem>
                      <HolidayDateItem>
                        {start_date.toLocaleDateString('en-US', date_options)}
                      </HolidayDateItem>
                    </>
                  );
                })
              : null}
            {businessHours.customMessage.toString().length > 0 ? (
              <HolidayItem style={{ color: color }}>
                {businessHours.customMessage}
              </HolidayItem>
            ) : null}
          </HolidayListWrapper>
        </HolidayModalInformationContainer>
      </ColorContext.Provider>
    </CustomRodal>
  );
};

export default BusinessHours;
