import DatePicker from 'react-datepicker/es';
import React from 'react';
import { AppointmentTimeInput } from '../common/styles';

export const TimePicker = props => (
  <DatePicker
    showTimeSelect
    showTimeSelectOnly
    dateFormat="h:mm aa"
    customInput={<AppointmentTimeInput />}
    calendarClassName="time-selection"
    {...props}
  ></DatePicker>
);
