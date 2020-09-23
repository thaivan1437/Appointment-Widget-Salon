import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import React, { useState, useEffect } from 'react';
import { ColorContext, FirstStepMessage } from '@components/widget-view';
import styled from 'styled-components';
import { COLORS } from '@common/colors';
import sortBy from 'lodash/sortBy';
import find from 'lodash/find';
import { formatAmount } from '@common/utils';
import { CONFIGS } from '@environment';

const MainCategoryButton = styled.div`
  display: flex;
  align-items: center;

  width: 300px;
  cursor: pointer;
  font-size: 20px;
  padding: 5px 0;
  color: ${COLORS.DOVE_GRAY};
  transition: font-size 0.5s ease;

  :hover,
  &.selected {
    .list-cycle {
      width: 16px;
      height: 16px;
      font-size: 16px;
    }
  }
`;

const MainCategoryListWrapper = styled.div`
  overflow: auto;
  padding: 0 50px;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.STORM_GRAY};
  }
`;

// margin and padding for scroll position
const ServiceListWrapper = styled.div`
  overflow: auto;
  width: 100%;
  margin: 0 20px;
  padding: 0 30px;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.STORM_GRAY};
  }
`;

const ServiceName = styled.div`
  font-size: 20px;
  margin-top: 10px
  color: ${COLORS.DOVE_GRAY};
`;

const PriceItem = styled.div`
  color: ${COLORS.SILVER_CHALICE};
  padding: 6px 20px 0;
  display: flex;
  justify-content: space-between;
`;

const PricingModalInformationContainer = styled(
  ModalStyles.ModalInformationContainer
)`
  display: flex;
`;

const ListCycle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${(props) => props.color};

  transition: all 0.5s ease;

  margin-right: 8px;
`;

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const Pricing = ({
  showPricingModal,
  setShowPricingModal,
  folderName,
  color,
  pricingList = {},
}) => {
  const mainCategoryList = pricingList.map((item) => item.category.name).sort();
  const [selectedCategory, setSelectedCategory] = useState();
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    const serviceList =
      find(pricingList, (item) => item.category.name === selectedCategory) ||
      [];
    const sortedServiceList = serviceList.categoryItems
      ? sortBy([...serviceList.categoryItems], ['name'])
      : [];

    if (sortedServiceList.length > 0) {
      sortedServiceList.forEach((service) => {
        const sortedVariations = sortBy([...service.variations], ['name']);
        service.variations = sortedVariations;
      });
    }

    setServiceList(sortedServiceList);
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
          </ModalStyles.HalfModelFooter>
        </ModalStyles.HalfModalContent>
        <PricingModalInformationContainer>
          <ServiceListWrapper>
            <div>
              <ModalStyles.ModalDetailContentContainer>
                {serviceList && serviceList.length > 0 ? (
                  serviceList.map((service) => (
                    <>
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
                        ? service.variations.map((variation) => (
                            <PriceItem>
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
                          ))
                        : null}
                    </>
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

export default Pricing;
