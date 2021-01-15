import styled from 'styled-components';
import { COLORS } from '@common/colors';
import Slider from 'react-slick';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';

interface BaseContentStyleProps {
  disabled?: boolean;
  color: string;
}

export const BaseContentStyle = styled.div`
  color: ${(props) => (props.color ? props.color : COLORS.DOVE_GRAY)};
  text-align: center;
`;

export const ClickableContent = styled(BaseContentStyle)<BaseContentStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px 18px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.color};

  font-size: 20px;
  font-family: inherit;

  color: white;

  :focus {
    outline: 0;
  }

  :hover {
    cursor: pointer;
  }

  ${(props) =>
    props.disabled
      ? 'opacity: 0.4; pointer-events: none; user-select:none; background-color: #747883;'
      : null}
`;

export const PromotionTitle = styled(BaseContentStyle)`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const PromotionCode = styled(BaseContentStyle)`
  font-size: 35px;
  font-weight: 500;
  user-select: text;
  color: black;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const PromotionCodeDesc = styled(BaseContentStyle)`
  font-size: 30px;
  font-weight: 500;
  display: inline-block;
  user-select: text;
  color: ${COLORS.ERROR};
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const PromotionDesc = styled(BaseContentStyle)`
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CustomModalContent = styled(ModalStyles.ModalContentContainer)`
  padding: 40px 50px;

  &.e-gift {
    padding: 0;
    width: 500px;
  }
  .mt-half {
    margin-top: 1rem;
  }

  *:focus {
    outline: 0;
  }

  .clear {
    clear: both;
  }
  img{
    max-width:100%;
  }
  .slick-prev:before,
  .slick-next:before {
    color: ${(props) => props.color};
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

export const PromotionSlider = styled(Slider)`
  width: 100%;
  width: 500px;
  height: 320px;

  &.e-gift {
    height: 280px;

  }

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const PromotionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const NoPromotion = styled.div`
  text-align: center;
  font-size: 30px;
  padding: 152px 0;
  color: ${COLORS.ERROR};
`;

export const PromotionItem = styled.div``;

export const GroupWrapper = styled.div`
  padding: 0 24px;
  @media (max-width: 768px) {
    min-height: 80px;
  }
`;

export const BoldDate = styled.span`
  font-weight: 500;
  color: black;
`;

export const SETTINGS = {
  dots: false,
  infinite: false,
};
