import React, { useState, useEffect } from 'react';
import { S } from './service-selection.styles';

import CheckIcon from '@assets/icon_checked.png';
import UncheckIcon from '@assets/icon_unchecked.png';
import RadioOn from '@assets/radio_on.png';
import RadioOf from '@assets/radio_off.png';

// TODO: mock data should remove
const serviceList = {
  Hair: [
    {
      serviceId: 111,
      serviceName: 'Hair 0',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 222,
      serviceName: 'Hair 1',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 333,
      serviceName: 'Hair 2',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 444,
      serviceName: 'Hair 3',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 442,
      serviceName: 'Hair 32',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 441,
      serviceName: 'Hair 31',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
  ],
  Nail: [
    {
      serviceId: 221,
      serviceName: 'Nail 0',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 555,
      serviceName: 'Nail 1',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 666,
      serviceName: 'Nail 2',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 777,
      serviceName: 'Nail 3',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 888,
      serviceName: 'Nail 4',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
    {
      serviceId: 999,
      serviceName: 'Nail 5',
      price: {
        amount: 12.45,
        currencyCode: 'USD',
        currencySymbol: '$',
      },
    },
  ],
};

const ServiceSelection = ({ initialValue = [], onServiceSelected }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedServicesIds, setSelectedServicesIds] = useState([]);
  const [selectedServices, setSelectedServices] = useState(initialValue || []);

  const categories = Object.keys(serviceList);

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, []);

  useEffect(() => {
    setSelectedServicesIds(selectedServices.map(service => service.serviceId));

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

                if (tempSelectedServicesIds.indexOf(service.serviceId) === -1) {
                  if (tempSelectedServicesIds.length < 4) {
                    tempSelectedServices.push(service);
                  }
                } else {
                  tempSelectedServices.splice(
                    tempSelectedServicesIds.indexOf(service.serviceId),
                    1
                  );
                }

                setSelectedServices(tempSelectedServices);
              }}
            >
              <S.IconContainer
                src={
                  selectedServicesIds.indexOf(service.serviceId) !== -1
                    ? CheckIcon
                    : UncheckIcon
                }
              />
              <div>{service.serviceName}</div>
            </S.ServiceItem>
          ))}
      </S.ServiceServicesContainer>
    </S.ServiceSelectionContainer>
  );
};

export default ServiceSelection;
