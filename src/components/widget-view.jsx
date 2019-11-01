import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ArrowIcon from '@assets/arrow.svg';

import DayPicker from '@components/day-picker/day-picker';
import CustomRodal from '@components/custom-rodal/custom-rodal';
import { COLORS, INPUT_COLORS } from '../common/colors';

import { S as CommonStyles } from 'common/styles';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';

import Counter from '@components/counter/counter';
import TimePicker from '@components/time-picker/time-picker';
import ServiceSelection from '@components/service-selection/service-selection';
import { getDisplayDateString, getRequestDateString } from 'common/utils';
import httpUtil from 'common/HttpUtil';
import { COLOR_SCHEMA } from 'common/constants';

export const ColorContext = React.createContext(COLOR_SCHEMA['red']);

const WidgetViewWrapper = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;

  width: ${props => (props.vertical ? '90px' : 'auto')};

  top: ${props => (props.top ? '5px' : 'auto')};
  left: ${props => (props.left ? '5px' : 'auto')};
  right: ${props => (props.right ? '5px' : 'auto')};
  bottom: ${props => (props.bottom ? '5px' : 'auto')};
`;

const ImageWrapper = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  margin-top: 20px;

  width: 424px;
`;

const InlineInformation = styled.span`
  padding: 0 10px;
  color: ${INPUT_COLORS.TEXT_COLOR};
  font-size: 22px;
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin: 47px 50px 0 0;

  display: flex;
  align-items: center;
`;

// TODO move common styles file
const ButtonWrapper2 = styled(ButtonWrapper)`
  margin-top: 17px;
`;

const ButtonWrapper4 = styled(ButtonWrapper)`
  margin-top: -4px;
`;

const ButtonWrapper3 = styled(ButtonWrapper)`
  margin-top: 37px;
`;

const DayPickerWrapper = styled.div`
  margin: 42px 0;
`;

const ConfirmMessage = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  color: ${COLORS.DOVE_GRAY};
  font-size: 20px;
`;

const TimePickerLabel = styled.div`
  margin-right: 40px;
`;

const TimePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
`;

const LineContainer = styled.div`
  border: 1px dashed #e2e2e2;
  width: 500px;
  margin: 16px 0px;
`;

const BackButton = styled.div`
  color: ${COLORS.DOVE_GRAY};
  cursor: pointer;
  margin-right: 15px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.STORM_GRAY};

  padding: 0 3px;

  :hover {
    font-weight: 500;
  }
`;

const AppointmentInfo = styled.div`
  color: ${props => (props.header ? COLORS.DOVE_GRAY : COLORS.SILVER_CHALICE)};
  padding: 0 20px 8px;
  font-size: 20px;

  text-align: ${props => (props.header ? 'center' : 'left')};
`;

const FirstStepMessage = styled(AppointmentInfo)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  height: 100%;
  font-size: 24px;
  text-align: center;
`;

const InformationWrapper = styled.div`
  margin-top: 16px;
`;

const EditAppointment = styled.div`
  color: ${COLORS.DOVE_GRAY};

  margin: 30px 0;

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
const ConfirmationStepWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  border: 1px solid ${INPUT_COLORS.BORDER};
  border-radius: 10px;
`;

const SeparatorLine = styled.div`
  border-bottom-color: ${INPUT_COLORS.BORDER};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const showWidgetButton = (widgetName, registeredWidgets) => {
  return Array.isArray(registeredWidgets)
    ? registeredWidgets.indexOf(widgetName) !== -1
    : false;
};

const WidgetView = ({ widgetConfig, appId }) => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedStep, setSelectedStep] = useState(1);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCount, setUserCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime1, setSelectedTime1] = useState();
  const [selectedTime2, setSelectedTime2] = useState();
  const [selectedServices, setSelectedServices] = useState([]);
  const [color, setColor] = useState(COLOR_SCHEMA['red']);

  const [errors, setErrors] = useState({ userName: false, userPhone: false });

  useEffect(() => {
    if (!showModal) {
      setSelectedStep(1);
      setUserName('');
      setUserPhone('');
      setUserCount(1);
      setSelectedDate();
      setSelectedTime1();
      setSelectedTime2();
      setSelectedServices([]);
    }
  }, [showModal]);

  useEffect(() => {
    switch (widgetConfig.position) {
      case 'TOP_LEFT':
        setTop(true);
        setLeft(true);
        break;

      case 'TOP_RIGHT':
        setTop(true);
        setRight(true);
        break;

      case 'BOTTOM_LEFT':
        setBottom(true);
        setLeft(true);
        break;

      case 'BOTTOM_RIGHT':
        setBottom(true);
        setRight(true);
        break;
      default:
        setRight(true);
        setBottom(true);
    }

    const color = COLOR_SCHEMA[widgetConfig.style] || COLOR_SCHEMA['red'];
    setColor(color);
  }, []);

  const getHourString = selectedTimeObject => {
    const hourString =
      selectedTimeObject.selectedHour
        .split(' ')
        .join(':' + selectedTimeObject.selectedMinute) || '';

    return hourString.toLowerCase();
  };

  const renderContent = () => {
    switch (selectedStep) {
      case 1:
        return (
          <>
            <ModalStyles.ModalStepTitle>Me</ModalStyles.ModalStepTitle>
            <FormWrapper>
              <CommonStyles.Input
                value={userName}
                hasError={errors.userName}
                onChange={event => {
                  const { value } = event.target;

                  if (errors.userName && value.length >= 2) {
                    setErrors(prev => ({
                      ...prev,
                      userName: false,
                    }));
                  }

                  if (value.length <= 32) {
                    setUserName(value);
                  }
                }}
                placeholder="Enter name"
                hasValue={userName.length > 0}
              ></CommonStyles.Input>
              <SeparatorLine />
              <CommonStyles.Input
                value={userPhone}
                hasError={errors.userPhone}
                onChange={event => {
                  const { value } = event.target;
                  //TODO move validation separate file
                  let processedValue = value.replace(/[^\d]/g, '');

                  if (processedValue.length <= 10) {
                    const formatterPattern1 = '($1';
                    const formatterPattern2 = '($1) $2';
                    const formatterPattern3 = '($1) $2-$3';

                    let selectedPattern = formatterPattern1;

                    if (processedValue.length > 3) {
                      selectedPattern = formatterPattern2;
                    }

                    if (processedValue.length > 6) {
                      selectedPattern = formatterPattern3;
                    }

                    processedValue = processedValue.replace(
                      /(\d{1,3})(\d{0,3})(\d{0,4})/,
                      selectedPattern
                    );

                    if (errors.userPhone && processedValue.length === 14) {
                      setErrors(prev => ({
                        ...prev,
                        userPhone: false,
                      }));
                    }

                    setUserPhone(processedValue);
                  }
                }}
                placeholder="Enter phone number (000) 000-0000"
                hasValue={userPhone.length > 0}
              ></CommonStyles.Input>
            </FormWrapper>
            <InputWrapper>
              <CounterWrapper>
                <Counter
                  initialValue={userCount}
                  countChange={newCount => {
                    setUserCount(newCount);
                  }}
                />
                <InlineInformation>Number of people</InlineInformation>
              </CounterWrapper>
            </InputWrapper>
            <ButtonWrapper4>
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
                <img src={ArrowIcon}></img>
              </CommonStyles.Button>
            </ButtonWrapper4>
          </>
        );
      case 2:
        return (
          <>
            <ModalStyles.ModalStepTitle>
              Appointment Date
            </ModalStyles.ModalStepTitle>

            <DayPickerWrapper>
              <DayPicker
                initialValue={selectedDate}
                selectedDateChange={value => {
                  setSelectedDate(value);
                }}
              />
            </DayPickerWrapper>
            <ButtonWrapper>
              <BackButton onClick={() => setSelectedStep(1)}>
                {'< Back'}
              </BackButton>
              <CommonStyles.Button
                color={color}
                disabled={!(selectedDate && selectedDate.dateValue)}
                onClick={() => setSelectedStep(3)}
              >
                Next
                <img src={ArrowIcon}></img>
              </CommonStyles.Button>
            </ButtonWrapper>
          </>
        );
      case 3:
        return (
          <>
            <ModalStyles.ModalStepTitle>
              Preferred Time
            </ModalStyles.ModalStepTitle>
            <TimePickerWrapper>
              <TimePickerLabel>Option 1</TimePickerLabel>
              <TimePicker
                onTimeSelected={time => {
                  setSelectedTime1(time);
                }}
                initialValue={selectedTime1}
              />
            </TimePickerWrapper>

            <LineContainer />
            <TimePickerWrapper>
              <TimePickerLabel>Option 2</TimePickerLabel>
              <TimePicker
                onTimeSelected={time => {
                  setSelectedTime2(time);
                }}
                initialValue={selectedTime2}
              />
            </TimePickerWrapper>

            <ButtonWrapper3>
              <BackButton onClick={() => setSelectedStep(2)}>
                {'< Back'}
              </BackButton>
              <CommonStyles.Button
                color={color}
                disabled={!(selectedTime1 && selectedTime2)}
                // onClick={() => setSelectedStep(4)} // TODO: open when services ready
                onClick={() => setSelectedStep(5)}
              >
                Next
                <img src={ArrowIcon} />
              </CommonStyles.Button>
            </ButtonWrapper3>
          </>
        );

      case 4:
        return (
          <>
            <ModalStyles.ModalStepTitle>
              Desired Services
            </ModalStyles.ModalStepTitle>
            <ServiceSelection
              initialValue={selectedServices}
              onServiceSelected={services => {
                setSelectedServices(services);
              }}
            />

            <ButtonWrapper2>
              <BackButton onClick={() => setSelectedStep(3)}>
                {'< Back'}
              </BackButton>
              <CommonStyles.Button
                color={color}
                disabled={selectedServices.length < 1}
                onClick={() => setSelectedStep(5)}
              >
                Next
                <img src={ArrowIcon}></img>
              </CommonStyles.Button>
            </ButtonWrapper2>
          </>
        );

      case 5:
        return (
          <>
            <ConfirmationStepWrapper>
              <CommonStyles.AppointmentButton
                color={color}
                onClick={() => {
                  const data = {
                    customerName: userName,
                    customerPhoneNumber: `+1${userPhone.replace(/[^\d]/g, '')}`,
                    numberOfPeople: userCount,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    date: getRequestDateString(selectedDate.dateValue),
                    time1: getHourString(selectedTime1),
                    time2: getHourString(selectedTime2),
                    services: [], // TODO add later
                  };

                  console.log('request data', data);

                  httpUtil
                    .makeRequest({
                      method: 'POST',
                      url: `https://salon.api.salonmanager.net/v1/widgets/${appId}/appointment`,
                      data,
                      headers: {
                        'x-api-key': 'yajpLtZTee2BAEcvWZgjYa4qXLT6WANy6JogEmQk',
                        appToken: 'e15cf450-e9a2-11e9-8911-afe5120f53d7',
                        'x-app-version': 'v1.0.1@20190610',
                      },
                    })
                    .then(response => {
                      console.log('result', response);
                      setSelectedStep(6);
                    });
                }}
              >
                Make an Appointment
              </CommonStyles.AppointmentButton>
              <EditAppointment
                onClick={() => {
                  setSelectedStep(1);
                }}
              >
                Edit Details
              </EditAppointment>
            </ConfirmationStepWrapper>
          </>
        );

      case 6:
        return (
          <ConfirmMessage>
            We will confirm your appointment by text message
          </ConfirmMessage>
        );

      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <>
      {top || left || bottom || right ? (
        <WidgetViewWrapper
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          vertical={widgetConfig.orientation === 'vertical'}
        >
          {showWidgetButton('WIDGET_APPOINTMENT', widgetConfig.widgets) ? (
            <ImageWrapper
              onClick={() => setShowModal(true)}
              src={`https://widgets.salonmanager.net/icons/${widgetConfig.style}/appointments.png`}
            />
          ) : null}
          {showWidgetButton('WIDGET_PRICING', widgetConfig.widgets) ? (
            <ImageWrapper
              src={`https://widgets.salonmanager.net/icons/${widgetConfig.style}/pricing.png`}
            />
          ) : null}
          {showWidgetButton('WIDGET_PROMOTIONS', widgetConfig.widgets) ? (
            <ImageWrapper
              src={`https://widgets.salonmanager.net/icons/${widgetConfig.style}/promotions.png`}
            />
          ) : null}
        </WidgetViewWrapper>
      ) : null}

      {/*TODO: (refactor) move content separate component*/}
      <CustomRodal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedStyle={widgetConfig.style}
      >
        <ColorContext.Provider value={color}>
          <ModalStyles.ModalContentContainer>
            {renderContent()}
            <ModalStyles.ModalFooter>
              powered by
              <FooterLink href="https://salonmanager.net" target="_blank">
                Salon Manager
              </FooterLink>
            </ModalStyles.ModalFooter>
          </ModalStyles.ModalContentContainer>
          <ModalStyles.ModalInformationContainer>
            {selectedStep === 1 ? (
              <FirstStepMessage>
                Your appointment details will appear here
              </FirstStepMessage>
            ) : null}

            {selectedStep > 1 ? (
              <>
                <AppointmentInfo header>Appointment Details</AppointmentInfo>
                <InformationWrapper>
                  <AppointmentInfo>{userName}</AppointmentInfo>
                  <AppointmentInfo>{userPhone}</AppointmentInfo>
                  <AppointmentInfo>
                    {userCount} {userCount === 1 ? 'Person' : 'People'}
                  </AppointmentInfo>
                </InformationWrapper>
              </>
            ) : null}

            {selectedStep > 2 ? (
              <InformationWrapper>
                <AppointmentInfo>
                  {getDisplayDateString(selectedDate.dateValue)}
                </AppointmentInfo>
                {selectedStep > 3 ? (
                  <AppointmentInfo>
                    {`${getHourString(selectedTime1)} / ${getHourString(
                      selectedTime2
                    )}`}
                  </AppointmentInfo>
                ) : null}
              </InformationWrapper>
            ) : null}

            {selectedStep > 4 ? (
              <InformationWrapper>
                {selectedServices.map(service => (
                  <AppointmentInfo>{service.serviceName}</AppointmentInfo>
                ))}
              </InformationWrapper>
            ) : null}
          </ModalStyles.ModalInformationContainer>
        </ColorContext.Provider>
      </CustomRodal>
    </>
  );
};

export default WidgetView;
