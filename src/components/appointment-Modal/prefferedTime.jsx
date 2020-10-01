import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@common/colors';
import TimePicker from '@components/time-picker/time-picker';

const PrefferedTime = (props) => {
  const {
    selectedTime1,
    setSelectedTime1,
    selectedTime2,
    setSelectedTime2,
  } = props;

  return (
    <div>
      <TimePickerWrapper>
        <TimePickerLabel>
          1<sup>st</sup> Choice
        </TimePickerLabel>
        <TimePicker
          onTimeSelected={(time) => {
            setSelectedTime1(time);
          }}
          initialValue={selectedTime1}
        />
      </TimePickerWrapper>

      <LineContainer>
        <LineText>OR</LineText>
      </LineContainer>
      <TimePickerWrapper>
        <TimePickerLabel>
          2<sup>nd</sup> Choice
        </TimePickerLabel>
        <TimePicker
          onTimeSelected={(time) => {
            setSelectedTime2(time);
          }}
          initialValue={selectedTime2}
        />
      </TimePickerWrapper>
    </div>
  );
};
// TODO move common styles file

const TimePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 45px;
  width: 450px;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
const TimePickerLabel = styled.div`
  margin-right: 30px;
  width: 80px;
  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;
const LineContainer = styled.div`
  position: relative;
  border: 1px dashed #e2e2e2;
  width: 500px;
  margin: 16px 0px;
  @media (max-width: 768px) {
    width: 360px;
  }
`;
const LineText = styled.div`
  position: absolute;
  top: -11px;
  left: 268px;
  border: 1px solid #e2e2e2;
  padding: 2px;
  line-height: 1;
  width: 25px;
  color: ${COLORS.SILVER_CHALICE};
  background-color: ${COLORS.WHITE};
  @media (max-width: 768px) {
    left: 207px;
  }
`;

export default PrefferedTime;
