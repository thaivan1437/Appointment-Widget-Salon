import React, { useState, useEffect } from 'react';
import { S } from './service-selection.styles';

import CheckIcon from '@assets/icon_checked.png';
import UncheckIcon from '@assets/icon_unchecked.png';
import RadioOn from '@assets/radio_on.png';
import RadioOf from '@assets/radio_off.png';

const ServiceSelection = ({ initialValue = [], onServiceSelected, serviceList = {} }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedServicesIds, setSelectedServicesIds] = useState([]);
  const [selectedServices, setSelectedServices] = useState(initialValue || []);

  const categories = Object.keys(serviceList);

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, []);

  useEffect(() => {
    setSelectedServicesIds(selectedServices.map(service => service.id));

    onServiceSelected(selectedServices);
  }, [selectedServices]);

  return (
    <S.ServiceSelectionContainer>
      <S.ServiceCategoryContainer>
        {categories.map(category => (
          <S.CategoryItem
            onClick={() => {
              setSelectedCategory(category);
            }}
            selected={selectedCategory === category}
          >
            <S.IconContainer
              src={selectedCategory === category ? RadioOn : RadioOf}
            />
            <div>{category}</div>
          </S.CategoryItem>
        ))}
      </S.ServiceCategoryContainer>
      <S.ServiceServicesContainer>
        {serviceList[selectedCategory] &&
          serviceList[selectedCategory].map(service => (
            <S.ServiceItem
              onClick={() => {
                const tempSelectedServicesIds = [...selectedServicesIds];
                const tempSelectedServices = [...selectedServices];

                if (tempSelectedServicesIds.indexOf(service.id) === -1) {
                  if (tempSelectedServicesIds.length < 4) {
                    tempSelectedServices.push(service);
                  }
                } else {
                  tempSelectedServices.splice(
                    tempSelectedServicesIds.indexOf(service.id),
                    1
                  );
                }

                setSelectedServices(tempSelectedServices);
              }}
            >
              <S.IconContainer
                src={
                  selectedServicesIds.indexOf(service.id) !== -1
                    ? CheckIcon
                    : UncheckIcon
                }
              />
              <div>{service.name}</div>
            </S.ServiceItem>
          ))}
      </S.ServiceServicesContainer>
    </S.ServiceSelectionContainer>
  );
};

export default ServiceSelection;
