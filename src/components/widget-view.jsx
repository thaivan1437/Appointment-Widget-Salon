import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

import { CONFIGS } from '@environment';

const FALLBACK_COLOR = 'red';

export const ColorContext = React.createContext(COLOR_SCHEMA[FALLBACK_COLOR]);

const WidgetViewWrapper = styled.div`
  position: absolute;

  width: ${props => (props.vertical ? '90px' : 'auto')};

  top: ${props => (props.top ? '10px' : 'auto')};
  left: ${props => (props.left ? '10px' : 'auto')};
  right: ${props => (props.right ? '10px' : 'auto')};
  bottom: ${props => (props.bottom ? '10px' : 'auto')};
`;

const ImageWrapper = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  margin-top: 20px;

  width: 400px;
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

  ${props =>
    props.disabled
      ? 'opacity: 0.4; pointer-events: none; user-select:none;'
      : null}
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

const UpToLabel = styled.span`
  font-size: 16px;
  margin-left: 10px;
  color: ${COLORS.DOVE_GRAY};
`;

const PolicyContainer = styled.div`
  position: absolute;
  bottom: 90px;
  color: ${COLORS.DOVE_GRAY};
  width: 400px;

  a,
  a:visited {
    color: ${COLORS.DOVE_GRAY};
  }
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
  const [color, setColor] = useState(COLOR_SCHEMA[FALLBACK_COLOR]);
  const [folderName, setFolderName] = useState();

  const [errors, setErrors] = useState({ userName: false, userPhone: false });

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
        setFrameStyle(prev => ({
          ...prev,
          position: 'top:0;left:0',
        }));
        break;

      case 'TOP_RIGHT':
        setTop(true);
        setRight(true);
        setFrameStyle(prev => ({
          ...prev,
          position: 'top:0;right:0',
        }));
        break;

      case 'BOTTOM_LEFT':
        setBottom(true);
        setLeft(true);
        setFrameStyle(prev => ({
          ...prev,
          position: 'bottom:0;left:0',
        }));
        break;

      case 'BOTTOM_RIGHT':
        setBottom(true);
        setRight(true);
        setFrameStyle(prev => ({
          ...prev,
          position: 'bottom:0;right:0',
        }));
        break;
      default:
        setRight(true);
        setBottom(true);
        setFrameStyle(prev => ({
          ...prev,
          position: 'bottom:0;right:0',
        }));
    }

    const color =
      COLOR_SCHEMA[widgetConfig.style] || COLOR_SCHEMA[FALLBACK_COLOR];
    setColor(color);
    setFolderName(
      COLOR_SCHEMA[widgetConfig.style] ? widgetConfig.style : FALLBACK_COLOR
    );

    const size = (widgetConfig.widgets.length || 1) * 90;

    setFrameStyle(prev => ({
      ...prev,
      orientation: `width: ${
        widgetConfig.orientation === 'VERTICAL' ? '100px' : size + 10 + 'px'
      };height: ${
        widgetConfig.orientation === 'VERTICAL' ? size + 10 + 'px' : '100px'
      };`,
    }));
  }, []);

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
      setShowLoading(false);
    }

    if (showModal) {
      parent.postMessage({
        type: 'showModal',
        data: {
          showModal,
          style:
            'position:fixed;width:100%;height:100%;bottom:0px;right:0px;border:none;z-index:2147483647;',
        },
      });
    } else if (!isInit) {
      setTimeout(() => {
        parent.postMessage({
          type: 'showModal',
          data: {
            showModal,
            style: getFrameStyle(),
          },
        });
      }, 300);
    } else {
      setIsInit(false);
    }
  }, [showModal]);

  useEffect(() => {
    const style = getFrameStyle();

    parent.postMessage({
      type: 'init',
      data: {
        style,
      },
    });
  }, [frameStyle]);

  const getFrameStyle = () => {
    return frameStyle.common + frameStyle.orientation + frameStyle.position;
  };

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
                <InlineInformation>
                  {userCount === 1 ? 'person' : 'people'}
                </InlineInformation>
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
                <img
                  src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/arrow.svg`}
                ></img>
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
                <img
                  src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/arrow.svg`}
                ></img>
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
                onClick={() => setSelectedStep(4)}
              >
                Next
                <img
                  src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/arrow.svg`}
                ></img>
              </CommonStyles.Button>
            </ButtonWrapper3>
          </>
        );

      case 4:
        return (
          <>
            <ModalStyles.ModalStepTitle>
              Desired Services
              <UpToLabel>(up to 4 Services)</UpToLabel>
            </ModalStyles.ModalStepTitle>
            <ServiceSelection
              serviceList={widgetConfig.widgetData.appointments}
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
                Next{' '}
                <img
                  src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/arrow.svg`}
                ></img>
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
                disabled={showLoading}
                onClick={() => {
                  const data = {
                    customerName: userName,
                    customerPhoneNumber: `+1${userPhone.replace(/[^\d]/g, '')}`,
                    numberOfPeople: userCount,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    date: getRequestDateString(selectedDate.dateValue),
                    time1: getHourString(selectedTime1),
                    time2: getHourString(selectedTime2),
                    services: [...selectedServices],
                  };

                  setShowLoading(true);

                  httpUtil
                    .makeRequest({
                      method: 'POST',
                      url: `https://salon.api.salonmanager.${CONFIGS.domainExtension}/${CONFIGS.version}/widgets/${appId}/appointment`,
                      data,
                      headers: {
                        'x-api-key': CONFIGS.xApiKey,
                        'x-app-version': CONFIGS.xAppVersion,
                      },
                    })
                    .then(() => {
                      setSelectedStep(6);
                    })
                    .finally(() => {
                      setShowLoading(false);
                    });
                }}
              >
                {showLoading ? (
                  <img
                    id="spinner"
                    src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/spinner.png`}
                  />
                ) : (
                  'Request an Appointment'
                )}
              </CommonStyles.AppointmentButton>
              <EditAppointment
                disabled={showLoading}
                onClick={() => {
                  setSelectedStep(1);
                }}
              >
                Edit Details
              </EditAppointment>

              <PolicyContainer>
                {
                  'By requesting an appointment, you agree to receive text messages and to our '
                }
                <a
                  href={`https://salonmanager.${CONFIGS.domainExtension}/terms-of-use`}
                  target="_blank"
                >
                  Terms of Use
                </a>
                {' and '}
                <a
                  href={`https://salonmanager.${CONFIGS.domainExtension}/privacy-policy`}
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </PolicyContainer>
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
      {(top || left || bottom || right) && folderName ? (
        <WidgetViewWrapper
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          vertical={widgetConfig.orientation === 'VERTICAL'}
        >
          {showWidgetButton('WIDGET_APPOINTMENT', widgetConfig.widgets) ? (
            <ImageWrapper
              onClick={() => setShowModal(true)}
              src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/${folderName}/appointments.png`}
            />
          ) : null}
          {showWidgetButton('WIDGET_PRICING', widgetConfig.widgets) ? (
            <ImageWrapper
              src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/${folderName}/pricing.png`}
            />
          ) : null}
          {showWidgetButton('WIDGET_PROMOTIONS', widgetConfig.widgets) ? (
            <ImageWrapper
              src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/${folderName}/promotions.png`}
            />
          ) : null}
        </WidgetViewWrapper>
      ) : null}

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
              powered by
              <FooterLink
                href={`https://salonmanager.${CONFIGS.domainExtension}`}
                target="_blank"
              >
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
                  <AppointmentInfo>{service.name}</AppointmentInfo>
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
