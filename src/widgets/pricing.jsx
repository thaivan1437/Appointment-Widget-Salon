import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { CONFIGS } from '../environments/development';
import React, { useState, useEffect } from 'react';
import { ColorContext } from '@components/widget-view';
import styled from 'styled-components';
import { COLORS } from 'common/colors';

const MainCategoryButton = styled.div`
  width: 250px;
  border-radius: 5px;
  border: 1px solid ${COLORS.MERCURY};
  background-color: ${props =>
    props.selected ? props.color : COLORS.ALABASTER};
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 20px;
  padding: 12px;
  color: ${props => (props.selected ? COLORS.WHITE : COLORS.DOVE_GRAY)};
  text-align: center;

  :hover {
    background-color: ${props =>
      props.selected ? props.color : COLORS.MERCURY};
  }
`;

const MainCategoryListWrapper = styled.div`
  overflow: auto;
  padding: 0 50px;
`;

const ServiceListWrapper = styled.div`
  overflow: auto;
  width: 100%;
  padding: 0 20px;
`;

const ServiceName = styled.div`
  font-size: 20px;
  margin-top: 10px
  color: ${COLORS.DOVE_GRAY};
`;

const PriceItem = styled.div`
  color: ${COLORS.SILVER_CHALICE};
  padding-left: 16px;
  margin-bottom: 4px;
`;

const PricingModalInformationContainer = styled(
  ModalStyles.ModalInformationContainer
)`
  display: flex;
`;

const Pricing = ({
  showPricingModal,
  setShowPricingModal,
  folderName,
  color,
  pricingList = {},
}) => {
  const mainCategoryList = Object.keys(pricingList);
  const [selectedCategory, setSelectedCategory] = useState();
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    const serviceList = pricingList[selectedCategory] || [];
    setServiceList(serviceList);
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
    >
      <ColorContext.Provider value={color}>
        <ModalStyles.ModalContentContainer>
          <MainCategoryListWrapper>
            {mainCategoryList && mainCategoryList.length > 0
              ? mainCategoryList.map(a => (
                  <MainCategoryButton
                    selected={a === selectedCategory}
                    color={color}
                    onClick={() => {
                      setSelectedCategory(a);
                    }}
                  >
                    {a}
                  </MainCategoryButton>
                ))
              : 'No Service Available'}
          </MainCategoryListWrapper>
          <ModalStyles.ModalFooter>
            powered by
            <ModalStyles.FooterLink
              href={`https://salonmanager.${CONFIGS.domainExtension}`}
              target="_blank"
            >
              Salon Manager
            </ModalStyles.FooterLink>
          </ModalStyles.ModalFooter>
        </ModalStyles.ModalContentContainer>
        <PricingModalInformationContainer>
          <ServiceListWrapper>
            {serviceList && serviceList.length > 0
              ? serviceList.map(service => (
                  <>
                    <ServiceName>{service.name}</ServiceName>
                    {service.variations && service.variations.length > 0
                      ? service.variations.map(variation => (
                          <PriceItem>
                            {variation.name === 'Regular'
                              ? variation.name.toLowerCase()
                              : variation.name}
                            - {variation.price.currencySymbol}
                            {variation.price.amount}
                          </PriceItem>
                        ))
                      : null}
                  </>
                ))
              : null}
          </ServiceListWrapper>
        </PricingModalInformationContainer>
      </ColorContext.Provider>
    </CustomRodal>
  );
};

export default Pricing;
