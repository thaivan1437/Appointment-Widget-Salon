import React, { useState, useEffect, FC } from 'react';
// @ts-ignore
import { CONFIGS } from '@environment';
import sortBy from 'lodash/sortBy';
import find from 'lodash/find';
import { Collapse } from 'reactstrap';
import { S } from './service-selection.styles';
import { CategoryItem, ProvidedService } from '../../types';

const ServiceSelection: FC<ServiceSelectionProps> = ({
  color,
  initialValue = [],
  onServiceSelected,
  serviceList = [],
  setErrors,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  const [selectedCategory, setSelectedCategory] = useState<string>(null);
  const [selectedServicesIds, setSelectedServicesIds] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState(initialValue || []);
  const [selectedItems, setSelectedItems] = useState<ProvidedService>(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = serviceList.map((item) => item.category.name).sort();

  const sortedServiceList = [...serviceList];
  sortedServiceList.forEach((item, index) => {
    sortedServiceList[index].categoryItems = sortBy(item.categoryItems, [
      'name',
    ]);
  });

  useEffect(() => {
    const listItems = find(
      sortedServiceList,
      (item) => item.category.name === selectedCategory
    );
    setSelectedItems(listItems);
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, []);

  useEffect(() => {
    setSelectedServicesIds(selectedServices.map((service) => service.id));

    onServiceSelected(selectedServices);
  }, [selectedServices]);

  function multipleCollaps(category) {
    if (selectedCategories.includes(category)) {
      const arr = selectedCategories.filter((ct) => ct != category);
      // arr.push(category)
      setSelectedCategories(arr);
    } else {
      let arr = [];
      arr = [...selectedCategories];
      arr.push(category);
      setSelectedCategories(arr);
    }
  }
  function selectedCategoriesCheck(category) {
    return selectedCategories.includes(category);
  }
  return (
    <S.ServiceSelectionContainer>
      <S.ServiceCategoryContainer>
        {serviceList.map((item, index) => (
          <div key={index}>
            <S.CategoryItem
              onClick={() => {
                toggle();
                setSelectedCategory(item.category.name);
                multipleCollaps(item.category.name);
              }}
              selected={selectedCategory === item.category.name}
            >
              <S.CircleIcon color={color} />
              <div>{item.category.name}</div>
            </S.CategoryItem>

            <Collapse isOpen={selectedCategoriesCheck(item.category.name)}>
              <S.ServiceServicesContainer>
                {selectedItems &&
                  item.categoryItems &&
                  item.categoryItems.length > 0 &&
                  item.categoryItems.map((service, index) => (
                    <S.ServiceItem
                      key={index}
                      onClick={() => {
                        const tempSelectedServicesIds = [
                          ...selectedServicesIds,
                        ];
                        const tempSelectedServices = [...selectedServices];

                        if (
                          tempSelectedServicesIds.indexOf(service.id) === -1
                        ) {
                          if (tempSelectedServicesIds.length < 4) {
                            tempSelectedServices.push(service);
                          } else {
                            setErrors((prev) => ({
                              ...prev,
                              upToLabel: true,
                            }));
                          }
                        } else {
                          setErrors((prev) => ({
                            ...prev,
                            upToLabel: false,
                          }));

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
                            : `https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/radio_off.png`
                        }
                      />

                      <div>{service.name}</div>
                    </S.ServiceItem>
                  ))}
              </S.ServiceServicesContainer>
            </Collapse>
          </div>
        ))}
      </S.ServiceCategoryContainer>
    </S.ServiceSelectionContainer>
  );
};

export type ServiceSelectionProps = {
  color: string;
  initialValue: CategoryItem[];
  onServiceSelected: (categoryItems: CategoryItem[]) => void;
  serviceList: ProvidedService[];
  setErrors: any;
};

export default ServiceSelection;
