import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { CONFIGS } from '../environments/development';
import React from 'react';
import { ColorContext } from '@components/widget-view';
import styled from 'styled-components';
import { COLORS } from 'common/colors';
import { getDisplayDateString } from 'common/utils';
import Slider from 'react-slick';

const BaseContentStyle = styled.div`
  color: ${props => (props.color ? props.color : COLORS.DOVE_GRAY)};
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
  padding: 40px 50px;

  *:focus {
    outline: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${props => props.color};
    font-size: 45px;
  }
  .slick-arrow:not(.slick-disabled):before {
    opacity: 1;
  }

  .slick-prev,
  .slick-next {
    width: 45px;
    height: 45px;
  }
  .slick-next {
    right: -40px;
  }

  .slick-prev {
    left: -40px;
  }
`;

const PromotionSlider = styled(Slider)`
  width: 100%;
  width: 500px;
  height: 320px;
`;

const PromotionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const NoPromotion = styled.div`
  text-align: center;
  font-size: 30px;
  padding: 50px 0;
  color: ${COLORS.DOVE_GRAY};
`;

const PromotionItem = styled.div``;
const ClickableContent = styled.span`
  cursor: pointer;
`;

const BoldDate = styled.span`
  font-weight: 500;
  color: #a0a0a0;
`;

const SETTINGS = {
  dots: false,
  infinite: false,
};

const Promotions = ({
  showPromotionsModal,
  setShowPromotionsModal,
  folderName,
  color,
  promotionData = [],
  makeAnAppointmentClick,
}) => {
  return (
    <CustomRodal
      showModal={showPromotionsModal}
      setShowModal={setShowPromotionsModal}
      selectedStyle={folderName}
      width={600}
    >
      <ColorContext.Provider value={color}>
        <CustomModalContent color={color}>
          <PromotionSlider {...SETTINGS}>
            {promotionData.length > 0 ? (
              promotionData.map(promotion => (
                <PromotionItem>
                  <PromotionItemWrapper>
                    <PromotionTitle>{promotion.title}</PromotionTitle>
                    <PromotionCode>{promotion.promoCode}</PromotionCode>
                    <div>
                      <PromotionDesc>
                        {promotion.shortDescription}
                      </PromotionDesc>
                      <BaseContentStyle>
                        {promotion.longDescription}
                      </BaseContentStyle>
                    </div>
                    <BaseContentStyle color={COLORS.SILVER_CHALICE}>
                      {'valid from '}
                      <BoldDate>
                        {getDisplayDateString(new Date(promotion.fromDate), {
                          month: 'short',
                        })}
                      </BoldDate>
                      {' to '}
                      <BoldDate>
                        {getDisplayDateString(new Date(promotion.toDate), {
                          month: 'short',
                        })}
                      </BoldDate>
                    </BaseContentStyle>
                    <BaseContentStyle>
                      click
                      <ClickableContent
                        onClick={() => {
                          makeAnAppointmentClick(promotion.promoCode);
                        }}
                      >
                        {' here '}
                      </ClickableContent>
                      to making an appointment using this offer
                    </BaseContentStyle>
                  </PromotionItemWrapper>
                </PromotionItem>
              ))
            ) : (
              <NoPromotion>There is no promotion available :(</NoPromotion>
            )}
          </PromotionSlider>
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
