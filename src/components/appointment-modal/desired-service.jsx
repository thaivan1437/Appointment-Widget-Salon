import React from 'react';
import styled from 'styled-components';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { COLORS } from '@common/colors';
import sortBy from 'lodash/sortBy';
import ServiceSelection from '@components/service-selection/service-selection';

const DesiredService = (props) => {
  const {
    errors,
    setErrors,
    widgetConfig,
    selectedServices,
    setSelectedServices,
  } = props;

  return (
    <div>
      <ModalStyles.ModalStepTitle>
        Desired Services
        <UpToLabel hasError={errors.upToLabel}>(up to 4 Services)</UpToLabel>
      </ModalStyles.ModalStepTitle>
      <ServiceSelection
        setErrors={setErrors}
        serviceList={widgetConfig.widgetData.appointments}
        initialValue={selectedServices}
        onServiceSelected={(services) => {
          const sortedList = sortBy(services, ['name']);
          setSelectedServices(sortedList);
        }}
      />
    </div>
  );
};
// TODO move common styles file

const UpToLabel = styled.span`
  font-size: ${(props) => (props.hasError ? '20px' : '16px')};
  margin-left: 10px;
  color: ${(props) => (props.hasError ? 'red' : COLORS.DOVE_GRAY)};
  transition: font-size 0.5s ease;
  font-weight: ${(props) => (props.hasError ? 500 : 400)};
`;

export default DesiredService;
