import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import React, { useRef, useEffect, FC } from 'react';
import { ColorContext } from '@components/widget-view/widget-view';
import { COLORS } from '@common/colors';
import { getDisplayDateString } from '@common/utils';
// @ts-ignore
import { CONFIGS } from '@environment';
import {
  BaseContentStyle,
  BoldDate,
  ClickableContent,
  CustomModalContent,
  GroupWrapper,
  NoPromotion,
  PromotionCode,
  PromotionDesc,
  PromotionItem,
  PromotionItemWrapper,
  PromotionSlider,
  PromotionTitle,
  SETTINGS,
} from '@modules/promotions/promotions-style';
import { Promotion } from '../../types';

const Promotions: FC<PromotionsProps> = ({
  showPromotionsModal,
  setShowPromotionsModal,
  folderName,
  color,
  promotionData = [],
  makeAnAppointmentClick,
}) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (
      !showPromotionsModal &&
      sliderRef &&
      sliderRef.current &&
      sliderRef.current.slickGoTo
    ) {
      sliderRef.current.slickGoTo(0);
    }
  }, [showPromotionsModal]);

  return (
    <CustomRodal
      showModal={showPromotionsModal}
      setShowModal={setShowPromotionsModal}
      selectedStyle={folderName}
      width={600}
    >
      <ColorContext.Provider value={color}>
        <CustomModalContent color={color}>
          <PromotionSlider {...SETTINGS} ref={sliderRef}>
            {promotionData.length > 0 ? (
              promotionData.map((promotion) => (
                <PromotionItem key={promotion.id}>
                  <PromotionItemWrapper>
                    <PromotionTitle>{promotion.title}</PromotionTitle>
                    <PromotionCode>{promotion.promoCode}</PromotionCode>
                    <GroupWrapper>
                      <PromotionDesc>
                        {promotion.shortDescription}
                      </PromotionDesc>
                      <BaseContentStyle>
                        {promotion.longDescription}
                      </BaseContentStyle>
                    </GroupWrapper>
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
                    <ClickableContent
                      color={color}
                      onClick={() => {
                        makeAnAppointmentClick(promotion);
                      }}
                    >
                      Click here to redeem the offer
                    </ClickableContent>
                  </PromotionItemWrapper>
                </PromotionItem>
              ))
            ) : (
              <NoPromotion>There are no promotions available :(</NoPromotion>
            )}
          </PromotionSlider>
          <ModalStyles.ModalFooter>
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
          </ModalStyles.ModalFooter>
        </CustomModalContent>
      </ColorContext.Provider>
    </CustomRodal>
  );
};

export type PromotionsProps = {
  showPromotionsModal: boolean;
  setShowPromotionsModal: (show: boolean) => void;
  folderName: string;
  color: string;
  promotionData: Promotion[];
  makeAnAppointmentClick: (promotion: Promotion) => void;
};

export default Promotions;
