import React, { useState } from 'react';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import { TimePicker } from '@components/time-picker';
import 'react-datepicker/dist/react-datepicker.css';

import { COLORS } from '../common/colors';

import AppointmentIcon from '@assets/appointment.svg';

import { AppointmentInput, SendButton } from '../common/styles';
import { getDateString, getTimeString } from '../common/utils';

// TODO: move styles
const AppointmentContent = styled.div`
  color: ${COLORS.OSLO_GRAY};
  margin-right: 10px;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;

  * {
    box-sizing: border-box;
  }
`;

const AppointmentWidgetWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  background: ${COLORS.MANDY};
  color: ${COLORS.WHITE};

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  line-height: 30px;
  cursor: pointer;
`;

const AppointmentImage = styled.img`
  width: 30px;
  padding: 5px;

  background: ${COLORS.CABARET};
  border-top-left-radius: 5px;
`;

const WidgetText = styled.div`
  padding: 0 10px;
`;

const AppointmentContainer = styled.div`
  width: ${props => (props.status ? '280px' : '180px')};
  height: ${props => (props.status ? '320px' : '0px')};
  background: white;
  box-shadow: 0 0 3px 2px ${COLORS.SHADOW};
  transition: all 0.3s ease;
`;

const FormContent = styled.div`
  padding: 5px 16px;
  box-shadow: inset 0 1px 3px ${COLORS.SHADOW};

  .appointment-date {
    //overrides
    .react-datepicker__day--selected {
      background-color: ${COLORS.CABARET};
    }
  }
`;

const CloseIcon = styled.div`
  padding: 0 10px;
  font-size: 15px;
  font-weight: bold;
`;

const TimeWrapper = styled.div`
  display: flex;

  .time-selection {
    //overrides
    .react-datepicker__time-container {
      width: 100px;

      .react-datepicker__time-box {
        width: 100px;

        .react-datepicker__time-list {
          .react-datepicker__time-list-item--selected {
            background-color: ${COLORS.CABARET};
          }
        }
      }
    }
  }
`;

const InputLabel = styled.div`
  padding: 10px 0 5px;
`;

const TimeLabel = styled.div`
  line-height: 27px;
  padding: 0 5px;
`;

const Appointment = () => {
  const [status, setStatus] = useState(false);
  const [userName, setUserName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [beforeNoonFrom, setBeforeNoonFrom] = useState();
  const [beforeNoonTo, setBeforeNoonTo] = useState();
  const [afterNoonFrom, setAfterNoonFrom] = useState();
  const [afterNoonTo, setAfterNoonTo] = useState();

  return (
    <AppointmentContent>
      <AppointmentWidgetWrapper onClick={() => setStatus(!status)}>
        <AppointmentImage src={AppointmentIcon}></AppointmentImage>
        <WidgetText>Make an appointment</WidgetText>
        {status ? <CloseIcon>-</CloseIcon> : null}
      </AppointmentWidgetWrapper>

      <AppointmentContainer status={status}>
        {status ? (
          <FormContent>
            <InputLabel>Enter Your Name</InputLabel>
            <AppointmentInput
              type="text"
              value={userName}
              onChange={event => {
                const { value } = event.target;
                setUserName(value);
              }}
            />

            <InputLabel> Please Select Appointment Day</InputLabel>
            <DatePicker
              selected={appointmentDate}
              minDate={new Date()}
              calendarClassName="appointment-date"
              customInput={<AppointmentInput />}
              onChange={date => setAppointmentDate(date)}
            />
            <InputLabel>
              Select the appropriate times in the before noon
            </InputLabel>
            {/*TODO: Add time validation and range*/}
            <TimeWrapper>
              <TimeLabel>From</TimeLabel>
              <TimePicker
                selected={beforeNoonFrom}
                onChange={date => setBeforeNoonFrom(date)}
              ></TimePicker>
              <TimeLabel>to</TimeLabel>
              <TimePicker
                selected={beforeNoonTo}
                onChange={date => setBeforeNoonTo(date)}
              ></TimePicker>
            </TimeWrapper>
            <InputLabel>
              Select the appropriate times in the afternoon
            </InputLabel>
            <TimeWrapper>
              <TimeLabel>From</TimeLabel>
              <TimePicker
                selected={afterNoonFrom}
                onChange={date => setAfterNoonFrom(date)}
              ></TimePicker>
              <TimeLabel>to</TimeLabel>
              <TimePicker
                selected={afterNoonTo}
                onChange={date => setAfterNoonTo(date)}
              ></TimePicker>
            </TimeWrapper>
            <SendButton
              onClick={() => {
                // TODO: Submit data to service
                console.log({
                  userName,
                  appointmentDate: getDateString(appointmentDate),
                  beforeNoonFrom: getTimeString(beforeNoonFrom),
                  beforeNoonTo: getTimeString(beforeNoonTo),
                  afterNoonFrom: getTimeString(afterNoonFrom),
                  afterNoonTo: getTimeString(afterNoonTo),
                });
              }}
            >
              Send Request
            </SendButton>
          </FormContent>
        ) : null}
      </AppointmentContainer>
    </AppointmentContent>
  );
};

export default Appointment;
