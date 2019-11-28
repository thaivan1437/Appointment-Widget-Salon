import React, { useState, useEffect } from 'react';
import { S } from './service-selection.styles';
import { CONFIGS } from '@environment';

const ServiceSelection = ({
  initialValue = [],
  onServiceSelected,
  serviceList = {},
}) => {
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
              src={
                selectedCategory === category
                  ? `https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/radio_on.png`
                  : `https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/radio_off.png`
              }
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
                    ? `https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/icon_checked.png`
                    : `https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/icon_unchecked.png`
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
