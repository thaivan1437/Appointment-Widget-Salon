import React, { useRef, useEffect, FC } from 'react';
import {
  PromotionSlider,
} from '@modules/promotions/promotions-style';
import {
  Subject,
  WrapInformation,
} from '@modules/gift-card/gift-card.styles';

const Step1: FC<PromotionsProps> = ({
  showPromotionsModal,
  funcSetDesign,
}) => {

  const handleSelectAmount = (value) => {
    funcSetDesign(value);
  }

  const sliderRef = useRef(null);

  useEffect(() => {
    if (
      !showPromotionsModal &&
      sliderRef &&
      sliderRef.current &&
      sliderRef.current.slickGoTo
    ) {
      sliderRef.current.slickGoTo(0);
      handleSelectAmount('design 0');
    }
  }, [showPromotionsModal]);

  const designData = [
    {images: 'https://cdn.salonmanager.net/egiftcards/designs/generic/1.png', class: 'gift'},
    {images: 'https://cdn.salonmanager.net/egiftcards/designs/generic/2.png', class: 'gift'},
    {images: 'https://cdn.salonmanager.net/egiftcards/designs/valentinesday/1.png' , class: ''},
    {images: 'https://cdn.salonmanager.net/egiftcards/designs/valentinesday/2.png', class: ''},
    {images: 'https://cdn.salonmanager.net/egiftcards/designs/mothersday/1.png', class: ''},
    {images: 'https://cdn.salonmanager.net/egiftcards/designs/mothersday/2.png', class: ''}
  ]

  const settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      handleSelectAmount('design ' + current);
    },
    beforeChange: (current) => {
      handleSelectAmount('design ' + current);
    }
  };

  return(
    <>
      <Subject className="no-paddingBottom">eGift Cards</Subject>
      <PromotionSlider {...settings} ref={sliderRef} className="e-gift">
        {designData && designData?.map((item, index) => {
          return (
            <div key={index} className="images">
              <WrapInformation>
                <img className="slider" src={item.images} />
                <div className="info-gift">
                  <div className="company-name">Belmont beauty salon</div>
                  <div className="address">
                    951 Old County Rd. Suite 4<br />
                    Belmont, CA 94002
                  </div>
                  <div className="phone">(650) 595-2800</div>
                  <div className={`redeem-code ${item.class}`}>
                    0000 - 0000 - 0000 - 0000
                  </div>
                </div>
              </WrapInformation>
            </div>
          )
        })}
      </PromotionSlider>
    </>
  );
};

export default Step1;

export type PromotionsProps = {
  showPromotionsModal: boolean;
  funcSetDesign: (e) => void;
};
