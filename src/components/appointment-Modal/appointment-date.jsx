import React from 'react';
import styled from 'styled-components';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import DayPicker from '@components/day-picker/day-picker';

const AppointmentDate = (props) => {
  const { setSelectedDate, selectedDate, widgetConfig } = props;

  return (
    <div>
      <ModalStyles.ModalStepTitle>Appointment Date</ModalStyles.ModalStepTitle>

      <DayPickerWrapper>
        <DayPicker
          initialValue={selectedDate}
          selectedDateChange={(value) => {
            setSelectedDate(value);
          }}
          holidays={
            widgetConfig.widgetData &&
            widgetConfig.widgetData.businessHours &&
            widgetConfig.widgetData.businessHours.holidays
          }
        />
      </DayPickerWrapper>
    </div>
  );
};

// TODO move common styles file

const DayPickerWrapper = styled.div`
  margin: 42px 0;
`;

export default AppointmentDate;
