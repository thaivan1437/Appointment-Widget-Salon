import React, { useRef, useEffect, FC } from 'react';
import {
  PromotionSlider,
} from '@modules/promotions/promotions-style';
import {
  Subject,
  WrapInformation,
} from '@modules/gift-card/gift-card.styles';
import IconOptionChecked from '@common/icons/icon-option-checked';
import IconOptionUnChecked from '@common/icons/icon-option-unchecked';

const Step1: FC<PromotionsProps> = ({
  funcSetDesign,
  design,
}) => {

  const handleSelectAmount = ({ value, action, images }) => {

    if (action === 'click') {
      funcSetDesign({
        value: value,
        check: design.label ==='Selected' ? <IconOptionUnChecked /> : <IconOptionChecked /> ,
        action: design.label ==='Selected' ? null : action,
        label: design.label ==='Selected' ? 'Select this design' : 'Selected',
        images: images });
      return;
    }
    funcSetDesign({ ...design,
      check: design.value === value ? <IconOptionChecked /> : <IconOptionUnChecked />,
      label: design.value === value ? 'Selected' : 'Select this design',
      fake: value,
    });
  }

  const sliderRef = useRef(null);

  useEffect(() => {
    if (
      sliderRef &&
      sliderRef.current &&
      sliderRef.current.slickGoTo
    ) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

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
      handleSelectAmount({ value: 'design ' + current, action: '', images: '' });
    },
    beforeChange: (current) => {
      handleSelectAmount({ value: 'design ' + current, action: '', images: '' });
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
                <div className="info-gift" onClick={() => handleSelectAmount({ value: 'design ' + index , action: 'click', images: item.images})}>
                  <div className="company-name">Belmont Beauty Salon</div>
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
              <div>
                <IconOptionUnChecked /> select chose design
              </div>
            </div>
          )
        })}
      </PromotionSlider>
    </>
  );
};

export default Step1;

export type PromotionsProps = {
  funcSetDesign: (e) => void;
  design?: DesignProps;
};
export type DesignProps = {
  check?: string;
  value?: string;
  action?: string;
  label?: string;
};
