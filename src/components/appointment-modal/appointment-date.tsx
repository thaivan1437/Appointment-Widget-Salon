import React, { FC } from 'react';
import styled from 'styled-components';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import DayPicker, { DatePickerDate } from '@components/day-picker/day-picker';
import { WidgetConfigData } from '../../types';

const AppointmentDate: FC<AppointmentDateProps> = ({
  setSelectedDate,
  selectedDate,
  widgetConfig,
}) => {
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

export type AppointmentDateProps = {
  setSelectedDate: (date: DatePickerDate) => void;
  selectedDate: DatePickerDate;
  widgetConfig: WidgetConfigData;
};

// TODO move common styles file
const DayPickerWrapper = styled.div`
  margin: 42px 0;
`;

export default AppointmentDate;
