import React, { useState } from 'react';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import AppointmentIcon from '@assets/appointment.svg';

// TODO: move styles
const AppointmentContent = styled.div`
  color: #868e96;
  margin-right: 10px;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;

  * {
    box-sizing: border-box;
  }
`;

const AppointmentWidgetWrapper = styled.div`
  cursor: pointer;
  background: #e04f67;
  color: #ffffff;
  display: flex;
  justify-content: space-between;

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  line-height: 30px;
`;

const AppointmentImage = styled.img`
  padding: 5px;
  width: 30px;

  border-top-left-radius: 5px;
  background: #d1415b;
`;

const WidgetText = styled.div`
  padding: 0 10px;
`;

const AppointmentContainer = styled.div`
  width: ${props => (props.status ? '280px' : '180px')};
  height: ${props => (props.status ? '280px' : '0px')};
  background: white;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const FormContent = styled.div`
  padding: 10px 16px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);

  .appointment-date {
    .react-datepicker__day--selected {
      background: #d1415b;
    }
  }
`;

const CloseIcon = styled.div`
  padding: 0 10px;
  font-size: 15px;
  font-weight: bold;
`;

const Appointment = () => {
  const [status, setStatus] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

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
            <div> Please Select Appointment Day</div>
            <DatePicker
              selected={startDate}
              minDate={new Date()}
              calendarClassName="appointment-date"
              onChange={date => setStartDate(date)}
            />
          </FormContent>
        ) : null}
      </AppointmentContainer>
    </AppointmentContent>
  );
};

export default Appointment;
