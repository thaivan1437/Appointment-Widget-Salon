import React, { useState, useEffect } from 'react';
import { S } from './time-picker.styles';

import { ColorContext } from '@components/widget-view';

const HOURS = [
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
];

const MINUTES = ['00', '10', '20', '30', '40', '50'];

const TimePicker = ({ onTimeSelected, initialValue }) => {
  const [showHourSelection, setShowHourSelection] = useState(false);
  const [showMinutesSelection, setShowMinutesSelection] = useState(false);
  const [selectedHour, setSelectedHour] = useState();
  const [selectedMinute, setSelectedMinute] = useState('_ _');
  const [displayHour, setDisplayHour] = useState({ hour: '_ _', text: '' });

  useEffect(() => {
    if (selectedHour) {
      const temp = selectedHour.split(' ');

      setDisplayHour({ hour: temp[0], text: temp[1] });
    }
  }, [selectedHour]);

  useEffect(() => {
    if (selectedHour && selectedMinute !== '_ _') {
      onTimeSelected({ selectedHour, selectedMinute });
    }
  }, [selectedHour, selectedMinute]);

  useEffect(() => {
    if (initialValue) {
      setSelectedHour(initialValue.selectedHour);
      setSelectedMinute(initialValue.selectedMinute);
    }
  }, []);

  return (
    <>
      <ColorContext.Consumer>
        {color => (
          <S.TimePickerWrapper>
            <S.SelectionContainer
              selected={showHourSelection}
              hasValue={selectedHour}
              onClick={() => {
                setShowMinutesSelection(false);
                setShowHourSelection(true);
              }}
            >
              <S.SelectionText>HOUR</S.SelectionText>
              <S.SelectionValue>{displayHour.hour}</S.SelectionValue>
            </S.SelectionContainer>
            <S.TimeSeparator>:</S.TimeSeparator>
            <S.SelectionContainer
              selected={showMinutesSelection}
              hasValue={selectedMinute !== '_ _'}
              onClick={() => {
                setShowHourSelection(false);
                setShowMinutesSelection(true);
              }}
            >
              <S.SelectionText>MINUTE</S.SelectionText>
              <S.SelectionValue>{selectedMinute}</S.SelectionValue>
            </S.SelectionContainer>
            <S.TimeText>{displayHour.text}</S.TimeText>

            {showHourSelection || showMinutesSelection ? (
              <S.SelectionOptionContainer>
                {showHourSelection
                  ? HOURS.map(value => (
                      <S.OptionItem
                        color={color}
                        key={`option_${value}`}
                        onClick={() => {
                          setSelectedHour(value);
                          setShowHourSelection(false);
                        }}
                        selected={selectedHour === value}
                      >
                        {value}
                      </S.OptionItem>
                    ))
                  : null}
                {showMinutesSelection ? (
                  <S.MinuteWrapper>
                    {MINUTES.map(value => (
                      <S.OptionItem
                        color={color}
                        key={`option_${value}`}
                        onClick={() => {
                          setSelectedMinute(value);
                          setShowMinutesSelection(false);
                        }}
                        selected={selectedMinute === value}
                      >
                        {value}
                      </S.OptionItem>
                    ))}
                  </S.MinuteWrapper>
                ) : null}
              </S.SelectionOptionContainer>
            ) : null}
          </S.TimePickerWrapper>
        )}
      </ColorContext.Consumer>
      {showHourSelection || showMinutesSelection ? (
        <S.TimePickerOverlay
          onClick={() => {
            setShowMinutesSelection(false);
            setShowHourSelection(false);
          }}
        />
      ) : null}
    </>
  );
};

export default TimePicker;
