import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import React, { FC, useEffect, useState } from 'react';
import { ColorContext } from '@components/widget-view/widget-view';
import sortBy from 'lodash/sortBy';
import find from 'lodash/find';
import { formatAmount } from '@common/utils';
// @ts-ignore
import { CONFIGS } from '@environment';
import { FirstStepMessage } from '@components/appointment-modal/my-entry';
import {
  ListCycle,
  ListItemWrapper,
  MainCategoryButton,
  MainCategoryListWrapper,
  PriceItem,
  PricingModalInformationContainer,
  ServiceListWrapper,
  ServiceName,
} from './pricing-style';
import { ProvidedService } from '../../types';

const Pricing: FC<PricingProps> = ({
  showPricingModal,
  setShowPricingModal,
  folderName,
  color,
  pricingList = [],
}) => {
  const mainCategoryList = pricingList.map((item) => item.category.name).sort();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    const services =
      find(pricingList, (item) => item.category.name === selectedCategory) ||
      [];
    const sortedServices = services.categoryItems
      ? sortBy([...services.categoryItems], ['name'])
      : [];

    if (sortedServices.length > 0) {
      sortedServices.forEach((service) => {
        service.variations = sortBy([...service.variations], ['name']);
      });
    }

    setServiceList(sortedServices);
  }, [selectedCategory]);

  useEffect(() => {
    if (!showPricingModal) {
      setSelectedCategory(null);
    }
  }, [showPricingModal]);

  return (
    <CustomRodal
      showModal={showPricingModal}
      setShowModal={setShowPricingModal}
      selectedStyle={folderName}
      halfMode={true}
    >
      <ColorContext.Provider value={color}>
        <ModalStyles.HalfModalContent>
          <ModalStyles.ModalStepTitle style={{ marginLeft: '84px' }}>
            Prices
          </ModalStyles.ModalStepTitle>

          <MainCategoryListWrapper>
            {mainCategoryList && mainCategoryList.length > 0
              ? mainCategoryList.map((a) => (
                  <MainCategoryButton
                    key={a}
                    className={a === selectedCategory ? 'selected' : ''}
                    color={color}
                    onClick={() => {
                      setSelectedCategory(a);
                    }}
                  >
                    <ListCycle className="list-cycle" color={color} />
                    {a}
                  </MainCategoryButton>
                ))
              : 'No Service Available'}
          </MainCategoryListWrapper>
          <ModalStyles.HalfModelFooter>
            Powered by
            <ModalStyles.FooterLink
              href={`https://salonmanager.${CONFIGS.domainExtension}`}
              target="_blank"
            >
              Salon Manager
            </ModalStyles.FooterLink>
            <ModalStyles.FooterLinkRight>
              {CONFIGS.xAppVersion}
            </ModalStyles.FooterLinkRight>
          </ModalStyles.HalfModelFooter>
        </ModalStyles.HalfModalContent>
        <PricingModalInformationContainer>
          <ServiceListWrapper>
            <div>
              <ModalStyles.ModalDetailContentContainer>
                {serviceList && serviceList.length > 0 ? (
                  serviceList.map((service, index) => (
                    <div key={index}>
                      <ListItemWrapper>
                        <ServiceName>{service.name}</ServiceName>
                        {service.variations &&
                        service.variations.length === 1 ? (
                          <ServiceName>
                            {service.variations[0].price_money.symbol &&
                            service.variations[0].price_money.amount
                              ? `${
                                  service.variations[0].price_money.symbol
                                }${formatAmount(
                                  service.variations[0].price_money.amount
                                )}`
                              : 'Call Us'}
                          </ServiceName>
                        ) : null}
                      </ListItemWrapper>
                      {service.variations && service.variations.length > 1
                        ? service.variations.map(
                            (variation, variationIndex) => (
                              <PriceItem key={`variation-${variationIndex}`}>
                                <div>
                                  {variation.name === 'Regular'
                                    ? variation.name.toLowerCase()
                                    : variation.name}
                                </div>

                                <div>
                                  {variation.price_money &&
                                  variation.price_money.amount &&
                                  variation.price_money.symbol
                                    ? `${
                                        variation.price_money.symbol
                                      }${formatAmount(
                                        variation.price_money.amount
                                      )}`
                                    : 'Call Us'}
                                </div>
                              </PriceItem>
                            )
                          )
                        : null}
                    </div>
                  ))
                ) : (
                  <FirstStepMessage>Prices will appear here</FirstStepMessage>
                )}
              </ModalStyles.ModalDetailContentContainer>
            </div>
          </ServiceListWrapper>
        </PricingModalInformationContainer>
      </ColorContext.Provider>
    </CustomRodal>
  );
};

export type PricingProps = {
  showPricingModal: boolean;
  setShowPricingModal: (show: boolean) => void;
  folderName: string;
  color: string;
  pricingList: ProvidedService[];
};

export default Pricing;
