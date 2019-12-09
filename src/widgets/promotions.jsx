import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { CONFIGS } from '../environments/development';
import React from 'react';
import { ColorContext } from '@components/widget-view';
import styled from 'styled-components';
import { COLORS } from 'common/colors';

const BaseContentStyle = styled.div`
  color: ${COLORS.DOVE_GRAY};
`;

const PromotionTitle = styled(BaseContentStyle)`
  font-size: 30px;
`;
const PromotionCode = styled(BaseContentStyle)`
  font-size: 35px;
  font-weight: 500;
`;
const PromotionDesc = styled(BaseContentStyle)`
  font-size: 24px;
`;

const CustomModalContent = styled(ModalStyles.ModalContentContainer)`
  justify-content: space-around;
  padding: 50px;
`;

const Promotions = ({
  showPromotionsModal,
  setShowPromotionsModal,
  folderName,
  color,
  promotionData,
}) => {
  return (
    <CustomRodal
      showModal={showPromotionsModal}
      setShowModal={setShowPromotionsModal}
      selectedStyle={folderName}
      width={600}
    >
      <ColorContext.Provider value={color}>
        <CustomModalContent>
          <PromotionTitle> {promotionData.promotionTitle} </PromotionTitle>
          <PromotionCode> {promotionData.promotionCode} </PromotionCode>
          <PromotionDesc> {promotionData.promotionDesc} </PromotionDesc>
          {/*TODO: check date format later*/}
          <BaseContentStyle>
            {' '}
            Expire Date: {promotionData.expiryDate}{' '}
          </BaseContentStyle>
          <BaseContentStyle> {promotionData.description} </BaseContentStyle>
          <ModalStyles.ModalFooter>
            powered by
            <ModalStyles.FooterLink
              href={`https://salonmanager.${CONFIGS.domainExtension}`}
              target="_blank"
            >
              Salon Manager
            </ModalStyles.FooterLink>
          </ModalStyles.ModalFooter>
        </CustomModalContent>
      </ColorContext.Provider>
    </CustomRodal>
  );
};

export default Promotions;
