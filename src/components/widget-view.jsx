import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AppointmentIcon from '@assets/icon_widgets_appointment.png';
import PricingIcon from '@assets/icon_widgets_pricing.png';
import PromotionsIcon from '@assets/icon_widgets_promotions.png';
import ArrowIcon from '@assets/arrow.svg';

import DayPicker from '@components/day-picker/day-picker';
import CustomRodal from '@components/custom-rodal/custom-rodal';
import { COLORS } from '../common/colors';

import { S as CommonStyles } from 'common/styles';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';

import Counter from '@components/counter/counter';
import TimePicker from '@components/time-picker/time-picker';
import ServiceSelection from '@components/service-selection/service-selection';
import { getDisplayDateString } from 'common/utils';
const WidgetViewWrapper = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;

  width: ${props => (props.vertical ? '65px' : 'auto')};

  top: ${props => (props.top ? '5px' : 'auto')};
  left: ${props => (props.left ? '5px' : 'auto')};
  right: ${props => (props.right ? '5px' : 'auto')};
  bottom: ${props => (props.bottom ? '5px' : 'auto')};
`;

const ImageWrapper = styled.img`
  width: 65px;
  height: 65px;
  cursor: pointer;
`;

// TODO remove after demo
const OptionsWrapper = styled.div`
  width: 175px;
  margin: 100px auto;
`;

const InputWrapper = styled.div`
  width: 320px;
  margin-bottom: 16px;
`;

const InlineInformation = styled.span`
  padding: 0 10px;
  color: ${COLORS.DOVE_GRAY};
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin: 30px 50px 0 0;

  display: flex;
  align-items: center;
`;

// TODO move common styles file
const ButtonWrapper2 = styled(ButtonWrapper)`
  margin-top: 0;
`;

const ButtonWrapper4 = styled(ButtonWrapper)`
  margin-top: -4px;
`;

const ButtonWrapper3 = styled(ButtonWrapper)`
  margin-top: 20px;
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
  padding: 0 40px;
  height: 100%;
  font-size: 20px;
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

const WidgetView = () => {
  // Demo section should remove
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(false);
  const [vertical, setVertical] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedStep, setSelectedStep] = useState(1);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCount, setUserCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime1, setSelectedTime1] = useState();
  const [selectedTime2, setSelectedTime2] = useState();
  const [selectedServices, setSelectedServices] = useState([]);

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
            <InputWrapper>
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
              ></CommonStyles.Input>
            </InputWrapper>
            <InputWrapper>
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
              ></CommonStyles.Input>
            </InputWrapper>
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
                disabled={!(selectedTime1 && selectedTime2)}
                onClick={() => setSelectedStep(4)}
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
                onClick={() => {
                  console.log('request atılacak');
                  setSelectedStep(6);
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
      {/*TODO: remove after demo*/}
      <OptionsWrapper>
        <div
          onChange={e => {
            const isLeft = e.target.value === 'left';

            setLeft(isLeft);
            setRight(!isLeft);
          }}
        >
          <input type="radio" name="Group1" value="left" /> Left
          <input type="radio" name="Group1" value="right" defaultChecked />{' '}
          Right
        </div>

        <div
          onChange={e => {
            const isBottom = e.target.value === 'bottom';

            setBottom(isBottom);
            setTop(!isBottom);
          }}
        >
          <input type="radio" name="Group2" value="top" defaultChecked /> Top
          <input type="radio" name="Group2" value="bottom" /> Bottom
        </div>

        <div
          onChange={e => {
            const isVertical = e.target.value === 'vertical';
            setVertical(isVertical);
          }}
        >
          <input type="radio" name="Group3" value="horizontal" defaultChecked />{' '}
          Horizontal
          <input type="radio" name="Group3" value="vertical" />
          Vertical
        </div>
      </OptionsWrapper>
      <WidgetViewWrapper
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        vertical={vertical}
      >
        <ImageWrapper
          onClick={() => setShowModal(true)}
          src={AppointmentIcon}
        />
        <ImageWrapper onClick={() => setShowModal(true)} src={PricingIcon} />
        <ImageWrapper onClick={() => setShowModal(true)} src={PromotionsIcon} />
      </WidgetViewWrapper>

      {/*TODO: (refactor) move content separate component*/}
      <CustomRodal showModal={showModal} setShowModal={setShowModal}>
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
      </CustomRodal>
    </>
  );
};

export default WidgetView;
