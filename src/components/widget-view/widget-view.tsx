import React, { useState, useEffect, FC } from 'react';
import styled from 'styled-components';
import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as CommonStyles } from '@common/styles';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { R } from '@components/widget-view/widget-view.styles';
import { getDisplayDateString, getRequestDateString } from '@common/utils';
import { COLOR_SCHEMA } from '@common/constants';
// @ts-ignore
import { CONFIGS } from '@environment';
import { COLORS } from '@common/colors';
import MyEntry from '@components/appointment-modal/my-entry';
import AppointmentDate from '@components/appointment-modal/appointment-date';
import PreferredTime from '@components/appointment-modal/preffered-time';
import DesiredService from '@components/appointment-modal/desired-service';
import RequestPage from '@components/appointment-modal/request-page';
import Pricing from '@modules/pricing/pricing';
import BusinessHours from '@modules/business-hours/business-hours';
import Promotions from '@modules/promotions/promotions';
import { DatePickerDate } from '@components/day-picker/day-picker';
import { WidgetConfigData, Promotion } from '../../types';

const FALLBACK_COLOR = 'red';

export const ColorContext = React.createContext(COLOR_SCHEMA[FALLBACK_COLOR]);
const showWidgetButton = (widgetName, registeredWidgets) => {
  return Array.isArray(registeredWidgets)
    ? registeredWidgets.indexOf(widgetName) !== -1
    : false;
};

const getValidPromotions = (promotions = []) => {
  const promArray = [];
  const today = new Date();
  const todayTime = today.getTime();

  promotions.forEach((promotion) => {
    if (promotion.toDate > todayTime) {
      promArray.push(promotion);
    }
  });
  return promArray;
};

const WidgetView: FC<WidgetViewProps> = ({ widgetConfig, appId }) => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showBusinessHoursModal, setShowBusinessHoursModal] = useState(false);
  const [showPromotionsModal, setShowPromotionsModal] = useState(false);
  const [selectedStep, setSelectedStep] = useState(1);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCount, setUserCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState<DatePickerDate>(null);
  const [selectedTime1, setSelectedTime1] = useState(null);
  const [selectedTime2, setSelectedTime2] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [color, setColor] = useState(COLOR_SCHEMA[FALLBACK_COLOR]);
  const [folderName, setFolderName] = useState<string>();
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion>(null);

  const [errors, setErrors] = useState<ErrorType>({
    userName: false,
    userPhone: false,
    upToLabel: false,
  });

  const [frameStyle, setFrameStyle] = useState({
    common:
      'position:fixed;bottom:0px;right:0px;border:none;z-index:2147483647;',
    position: null,
    orientation: 'width:0;height:0;',
  });

  const [isInit, setIsInit] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    switch (widgetConfig.position) {
      case 'TOP_LEFT':
        setTop(true);
        setLeft(true);
        setFrameStyle((prev) => ({
          ...prev,
          position: 'top:0;left:0',
        }));
        break;

      case 'TOP_RIGHT':
        setTop(true);
        setRight(true);
        setFrameStyle((prev) => ({
          ...prev,
          position: 'top:0;right:0',
        }));
        break;

      case 'BOTTOM_LEFT':
        setBottom(true);
        setLeft(true);
        setFrameStyle((prev) => ({
          ...prev,
          position: 'bottom:0;left:0',
        }));
        break;

      case 'BOTTOM_RIGHT':
        setBottom(true);
        setRight(true);
        setFrameStyle((prev) => ({
          ...prev,
          position: 'bottom:0;right:0',
        }));
        break;
      default:
        setRight(true);
        setBottom(true);
        setFrameStyle((prev) => ({
          ...prev,
          position: 'bottom:0;right:0',
        }));
    }

    const color =
      (widgetConfig.style && COLOR_SCHEMA[widgetConfig.style.toLowerCase()]) ||
      COLOR_SCHEMA[FALLBACK_COLOR];
    setColor(color);
    setFolderName(
      widgetConfig.style && COLOR_SCHEMA[widgetConfig.style.toLowerCase()]
        ? widgetConfig.style.toLowerCase()
        : FALLBACK_COLOR
    );

    const size = (widgetConfig.widgets.length || 1) * 90;

    setFrameStyle((prev) => ({
      ...prev,
      orientation: `width: ${
        widgetConfig.orientation === 'VERTICAL' ? '100px' : `${size + 10}px`
      };height: ${
        widgetConfig.orientation === 'VERTICAL' ? `${size + 10}px` : '100px'
      };`,
    }));
  }, []);

  useEffect(() => {
    if (!showModal) {
      setSelectedStep(1);
      setUserName('');
      setUserPhone('');
      setUserCount(1);
      setSelectedDate(null);
      setSelectedTime1(null);
      setSelectedTime2(null);
      setSelectedServices([]);
      setShowLoading(false);
      setSelectedPromotion(null);
      setErrors({
        userName: false,
        userPhone: false,
        upToLabel: false,
      });
    }
    setIFrameStyle(showModal);
  }, [showModal]);

  useEffect(() => {
    setIFrameStyle(showPricingModal);
  }, [showPricingModal]);

  useEffect(() => {
    setIFrameStyle(showBusinessHoursModal);
  }, [showBusinessHoursModal]);

  useEffect(() => {
    setIFrameStyle(showPromotionsModal);
  }, [showPromotionsModal]);

  useEffect(() => {
    if (selectedPromotion) {
      setTimeout(() => {
        setShowModal(true);
      }, 300);
    }
  }, [selectedPromotion]);

  // TODO: move util
  const setIFrameStyle = (modalKey) => {
    if (modalKey) {
      parent.postMessage(
        {
          type: 'showModal',
          data: {
            showModal: modalKey,
            style:
              'position:fixed;width:100%;height:100%;bottom:0px;right:0px;border:none;z-index:2147483647;',
          },
        },
        '*'
      );
    } else if (!isInit) {
      setTimeout(() => {
        parent.postMessage(
          {
            type: 'showModal',
            data: {
              showModal: modalKey,
              style: getFrameStyle(),
            },
          },
          '*'
        );
      }, 300);
    } else {
      setIsInit(false);
    }
  };
  useEffect(() => {
    const style = getFrameStyle();
    parent.postMessage(
      {
        type: 'init',
        data: {
          style,
        },
      },
      '*'
    );
  }, [frameStyle]);

  const getFrameStyle = () => {
    return frameStyle.common + frameStyle.orientation + frameStyle.position;
  };
  const getHourString = (selectedTimeObject, display = false) => {
    const hourString =
      selectedTimeObject.selectedHour
        .split(' ')
        .join(
          display
            ? `:${selectedTimeObject.selectedMinute} `
            : `:${selectedTimeObject.selectedMinute}`
        ) || '';

    return display ? hourString : hourString.toLowerCase();
  };

  const makeAnAppointmentClick = (promotion) => {
    setShowPromotionsModal(false);

    setTimeout(() => {
      setSelectedPromotion(promotion);
    }, 300);
  };

  const renderContent = () => {
    switch (selectedStep) {
      case 1:
        return (
          <>
            <MyEntry
              userName={userName}
              userPhone={userPhone}
              errors={errors}
              setUserPhone={setUserPhone}
              setUserName={setUserName}
              userCount={userCount}
              setErrors={setErrors}
              selectedPromotion={selectedPromotion}
              setUserCount={setUserCount}
            />
            <R.ButtonWrapper4>
              <CommonStyles.Button
                color={color}
                onClick={() => {
                  if (userName.length < 2 || userPhone.length !== 14) {
                    setErrors({
                      userName: userName.length < 2,
                      userPhone: userPhone.length !== 14,
                    });
                  } else {
                    setSelectedStep(2);
                  }
                }}
              >
                Next
                <img
                  src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/arrow.svg`}
                />
              </CommonStyles.Button>
            </R.ButtonWrapper4>
          </>
        );
      case 2:
        return (
          <>
            <AppointmentDate
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
              widgetConfig={widgetConfig}
            />
            <R.ButtonWrapper1>
              <R.BackButton onClick={() => setSelectedStep(1)}>
                {'< Back'}
              </R.BackButton>
              <CommonStyles.Button
                color={color}
                disabled={!(selectedDate && selectedDate.dateValue)}
                onClick={() => setSelectedStep(3)}
              >
                Next
                <img
                  src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/arrow.svg`}
                />
              </CommonStyles.Button>
            </R.ButtonWrapper1>
          </>
        );
      case 3:
        return (
          <>
            <PreferredTime
              selectedTime1={selectedTime1}
              setSelectedTime1={setSelectedTime1}
              selectedTime2={selectedTime2}
              setSelectedTime2={setSelectedTime2}
            />
            <R.ButtonWrapper3>
              <R.BackButton onClick={() => setSelectedStep(2)}>
                {'< Back'}
              </R.BackButton>
              <CommonStyles.Button
                color={color}
                disabled={!(selectedTime1 && selectedTime2)}
                onClick={() => setSelectedStep(4)}
              >
                Next
                <img
                  src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/arrow.svg`}
                />
              </CommonStyles.Button>
            </R.ButtonWrapper3>
          </>
        );

      case 4:
        return (
          <>
            <DesiredService
              errors={errors}
              setErrors={setErrors}
              widgetConfig={widgetConfig}
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
            />
            <R.ButtonWrapper2>
              <R.BackButton onClick={() => setSelectedStep(3)}>
                {'< Back'}
              </R.BackButton>
              <CommonStyles.Button
                color={color}
                disabled={selectedServices.length < 1}
                onClick={() => setSelectedStep(5)}
              >
                Next{' '}
                <img
                  src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/arrow.svg`}
                />
              </CommonStyles.Button>
            </R.ButtonWrapper2>
          </>
        );

      case 5:
        return (
          <>
            <RequestPage
              color={color}
              userName={userName}
              userPhone={userPhone}
              userCount={userCount}
              setShowLoading={setShowLoading}
              getRequestDateString={getRequestDateString}
              getHourString={getHourString}
              selectedDate={selectedDate}
              selectedTime1={selectedTime1}
              selectedTime2={selectedTime2}
              selectedServices={selectedServices}
              showLoading={showLoading}
              setSelectedStep={setSelectedStep}
              selectedPromotion={selectedPromotion}
              appId={appId}
            />
          </>
        );
      case 6:
        return (
          <R.ConfirmMessage>
            We will confirm your appointment by text message
          </R.ConfirmMessage>
        );
      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <>
      {(top || left || bottom || right) && folderName ? (
        <R.WidgetViewWrapper
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          vertical={widgetConfig.orientation === 'VERTICAL'}
        >
          {showWidgetButton('WIDGET_APPOINTMENT', widgetConfig.widgets) ? (
            <R.ImageWrapper
              onClick={() => setShowModal(true)}
              src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/${folderName}/appointments.png`}
            />
          ) : null}
          {showWidgetButton('WIDGET_PRICING', widgetConfig.widgets) ? (
            <R.ImageWrapper
              onClick={() => setShowPricingModal(true)}
              src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/${folderName}/pricing.png`}
            />
          ) : null}
          {showWidgetButton('WIDGET_PROMOTIONS', widgetConfig.widgets) ? (
            <R.ImageWrapper
              onClick={() => setShowPromotionsModal(true)}
              src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/${folderName}/promotions.png`}
            />
          ) : null}
          {showWidgetButton('WIDGET_BUSINESS_HOURS', widgetConfig.widgets) ? (
            <R.ImageWrapper
              onClick={() => setShowBusinessHoursModal(true)}
              src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/${folderName}/business-hours.png`}
            />
          ) : null}
        </R.WidgetViewWrapper>
      ) : null}

      {/*Appointment*/}
      {/*TODO: (refactor) move content separate component*/}
      <CustomRodal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedStyle={folderName}
      >
        <ColorContext.Provider value={color}>
          <ModalStyles.ModalContentContainer>
            {renderContent()}
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
          </ModalStyles.ModalContentContainer>
          <ModalStyles.ModalInformationContainer>
            <ModalStyles.ModalDetailContentContainer>
              {selectedStep === 1 ? (
                <FirstStepMessage>
                  Your appointment details will appear here
                </FirstStepMessage>
              ) : null}

              {selectedStep > 1 ? (
                <>
                  <AppointmentInfo header>Appointment Details</AppointmentInfo>
                  <R.InformationWrapper>
                    <AppointmentInfo userName>{userName}</AppointmentInfo>
                    <AppointmentInfo>{userPhone}</AppointmentInfo>
                    <AppointmentInfo>
                      {userCount} {userCount === 1 ? 'Person' : 'People'}
                    </AppointmentInfo>
                    {selectedPromotion ? (
                      <AppointmentInfo>
                        Promo code: {selectedPromotion?.promoCode}
                      </AppointmentInfo>
                    ) : null}
                  </R.InformationWrapper>
                </>
              ) : null}

              {selectedStep > 2 ? (
                <R.InformationWrapper>
                  <AppointmentInfo>
                    {getDisplayDateString(selectedDate.dateValue)}
                  </AppointmentInfo>
                  {selectedStep > 3 ? (
                    <AppointmentInfo>
                      {`${getHourString(selectedTime1, true)} / ${getHourString(
                        selectedTime2,
                        true
                      )}`}
                    </AppointmentInfo>
                  ) : null}
                </R.InformationWrapper>
              ) : null}

              {selectedStep > 4 ? (
                <R.InformationWrapper>
                  {selectedServices.map((service, index) => (
                    <AppointmentInfo key={index}>
                      {service.name}
                    </AppointmentInfo>
                  ))}
                </R.InformationWrapper>
              ) : null}
            </ModalStyles.ModalDetailContentContainer>
          </ModalStyles.ModalInformationContainer>
        </ColorContext.Provider>
      </CustomRodal>
      {/*Pricing*/}
      <Pricing
        showPricingModal={showPricingModal}
        setShowPricingModal={setShowPricingModal}
        folderName={folderName}
        color={color}
        pricingList={widgetConfig.widgetData.categoryPrices}
      />
      {/*Business hours*/}
      <BusinessHours
        showBusinessHoursModal={showBusinessHoursModal}
        setShowBusinessHoursModal={setShowBusinessHoursModal}
        folderName={folderName}
        color={color}
        businessHours={widgetConfig.widgetData.businessHours}
      />
      {/*Promotions*/}
      <Promotions
        showPromotionsModal={showPromotionsModal}
        setShowPromotionsModal={setShowPromotionsModal}
        folderName={folderName}
        color={color}
        promotionData={getValidPromotions(widgetConfig.widgetData.promotions)}
        makeAnAppointmentClick={makeAnAppointmentClick}
      />
    </>
  );
};

export type WidgetViewProps = {
  widgetConfig: WidgetConfigData;
  appId: string;
};

type AppointmentInfoStyleProps = { header?: boolean; userName?: boolean };

const AppointmentInfo = styled.div<AppointmentInfoStyleProps>`
  color: ${(props) =>
    props.header ? COLORS.DOVE_GRAY : COLORS.SILVER_CHALICE};
  padding: 0 20px 8px;
  font-size: 19px;
  font-weight: 500;
  text-transform: ${(props) => (props.userName ? 'capitalize' : 'none')};

  text-align: ${(props) => (props.header ? 'center' : 'left')};
`;

export const FirstStepMessage = styled(AppointmentInfo)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  height: 100%;
  font-size: 24px;
  text-align: center;
`;

export default WidgetView;

export type ErrorType = {
  userName?: boolean;
  userPhone?: boolean;
  upToLabel?: boolean;
};
