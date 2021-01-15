import React, { useRef, useEffect, FC, useState } from 'react';
import {
  PromotionSlider,
} from '@modules/promotions/promotions-style';

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
      <PromotionSlider {...settings} ref={sliderRef} className="e-gift">
        <div>
          <h3>
            <img src="http://cdn.salonmanager.net/widgets/icons/1a.png" />
          </h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </PromotionSlider>
    </>
  );
};

export default Step1;

export type PromotionsProps = {
  showPromotionsModal: boolean;
  funcSetDesign: (e) => void;
};
