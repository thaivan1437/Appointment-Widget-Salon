import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import React, { FC } from 'react';
import { ColorContext } from '@components/widget-view/widget-view';
// @ts-ignore
import { CONFIGS } from '@environment';
import { colorWeekend } from '@common/utils';
import { PHONE_REGEX } from '@common/constants';
import {
  BusinessHoursContent,
  BusinessHoursTitle,
  HolidayDateItem,
  HolidayItem,
  HolidayListWrapper,
  HolidayModalInformationContainer,
  HolidayTitle,
  ItemCell,
  ItemCellWhite,
  ListCycle,
  MainContent,
  MainRow,
  PhoneContent,
  PhoneWrapper,
  TitleCell,
} from '@modules/business-hours/business-hours-style';
import { WorkingHours } from '../../types';

const getTime = (timeString) => {
  const timeStringLength = (timeString || '').length;

  if (timeStringLength > 0) {
    const timeValue = timeString.slice(0, timeStringLength - 2);
    const timeText = timeString.slice(-2);

    return `${timeValue} ${timeText.toUpperCase()}`;
  } else {
    return timeString;
  }
};

const getFormattedPhone = (phoneString) => {
  return phoneString && phoneString.length > 0
    ? phoneString.replace(PHONE_REGEX, '($2) $3-$4')
    : null;
};

const BusinessHours: FC<BusinessHoursProps> = ({
  showBusinessHoursModal,
  setShowBusinessHoursModal,
  folderName,
  color,
  businessHours,
}) => {
  const businessPhone =
    (businessHours.businessPhone && businessHours.businessPhone.phoneNumber) ||
    '';

  return (
    <CustomRodal
      showModal={showBusinessHoursModal}
      setShowModal={setShowBusinessHoursModal}
      selectedStyle={folderName}
    >
      <ColorContext.Provider value={color}>
        <BusinessHoursContent>
          <BusinessHoursTitle>Business Hours</BusinessHoursTitle>
          {businessPhone ? (
            <PhoneWrapper>
              <PhoneContent href={`tel:${businessPhone}`} color={color}>
                {getFormattedPhone(businessPhone)}
              </PhoneContent>
              {`(${
                businessHours.businessPhone &&
                businessHours.businessPhone.canSMS
                  ? 'can'
                  : 'cannot'
              } receive SMS/text message)`}
            </PhoneWrapper>
          ) : null}
          {businessHours.periods ? (
            <HolidayListWrapper>
              <MainContent>
                <MainRow>
                  <ItemCellWhite></ItemCellWhite>
                  <TitleCell>Open</TitleCell>
                  <TitleCell>Close</TitleCell>
                </MainRow>
                {businessHours.periods && businessHours.periods.length > 0
                  ? businessHours.periods.map((item, index) => {
                      // console.log(openTimeStart(item.hours[0]['openTime'],item.hours[0]['closeTime']))
                      return (
                        <MainRow key={index}>
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
                            {getTime(
                              (item.hours[0] && item.hours[0]['openTime']) ||
                                '—'
                            )}
                            {item.hours.length > 1 ? (
                              <>
                                <br />{' '}
                                {getTime(
                                  (item.hours[1] &&
                                    item.hours[1]['openTime']) ||
                                    '—'
                                )}
                              </>
                            ) : null}
                          </ItemCell>
                          <ItemCell
                            style={{
                              borderBottomRightRadius:
                                index === businessHours.periods.length - 1
                                  ? 10
                                  : 0,
                            }}
                          >
                            {getTime(
                              (item.hours[0] && item.hours[0]['closeTime']) ||
                                '—'
                            )}
                            {item.hours.length > 1 ? (
                              <>
                                <br />{' '}
                                {getTime(
                                  (item.hours[1] &&
                                    item.hours[1]['closeTime']) ||
                                    '—'
                                )}
                              </>
                            ) : null}
                          </ItemCell>
                        </MainRow>
                      );
                    })
                  : null}
              </MainContent>
            </HolidayListWrapper>
          ) : (
            businessHours.fullDay && (
              <BusinessHoursTitle>We open 24/7</BusinessHoursTitle>
            )
          )}
          <ModalStyles.ModalFooter>
            Powered by
            <ModalStyles.FooterLink
              href={`https://salonmanager.${CONFIGS.domainExtension}`}
              target="_blank"
            >
              Salon Manager
            </ModalStyles.FooterLink>
            <ModalStyles.FooterLinkRight>
              {CONFIGS.xAppVersion}
            </ModalStyles.FooterLinkRight>
          </ModalStyles.ModalFooter>
        </BusinessHoursContent>
        <HolidayModalInformationContainer>
          <HolidayListWrapper>
            <HolidayTitle header>Holidays and Closed Days</HolidayTitle>
            {businessHours.holidays && businessHours.holidays.length > 0
              ? businessHours.holidays.map((holidayItem, index) => {
                  const date_options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  };
                  const start_date = new Date(holidayItem.date);
                  return (
                    <div key={index}>
                      <HolidayItem>
                        <ListCycle className="list-cycle" color={color} />
                        {holidayItem.name}
                      </HolidayItem>
                      <HolidayDateItem>
                        {start_date.toLocaleDateString('en-US', date_options)}
                      </HolidayDateItem>
                    </div>
                  );
                })
              : null}
            {businessHours.customMessage &&
            businessHours.customMessage.toString().length > 0 ? (
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

type BusinessHoursProps = {
  showBusinessHoursModal: boolean;
  setShowBusinessHoursModal: (show: boolean) => void;
  folderName: string;
  color: string;
  businessHours: WorkingHours;
};

export default BusinessHours;
