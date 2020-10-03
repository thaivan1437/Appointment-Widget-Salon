import React, { FC } from 'react';
import styled from 'styled-components';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { COLORS } from '@common/colors';
import sortBy from 'lodash/sortBy';
import ServiceSelection from '@components/service-selection/service-selection';
import { ErrorType } from '@components/widget-view/widget-view';
import { CategoryItem, WidgetConfigData } from '../../types';

const DesiredService: FC<DesiredServiceProps> = ({
  errors,
  setErrors,
  widgetConfig,
  selectedServices,
  setSelectedServices,
}) => {
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

export type DesiredServiceProps = {
  errors: ErrorType;
  setErrors: (error: ErrorType) => void;
  widgetConfig: WidgetConfigData;
  selectedServices: CategoryItem[];
  setSelectedServices: (services: CategoryItem[]) => void;
};

// TODO move common styles file

type UpToLabelProps = { hasError: boolean };

const UpToLabel = styled.span<UpToLabelProps>`
  font-size: ${(props) => (props.hasError ? '20px' : '16px')};
  margin-left: 10px;
  color: ${(props) => (props.hasError ? 'red' : COLORS.DOVE_GRAY)};
  transition: font-size 0.5s ease;
  font-weight: ${(props) => (props.hasError ? 500 : 400)};
`;

export default DesiredService;
