import React, { FC} from 'react';
import {
  Subject,
} from '@modules/gift-card/gift-card.styles';
import PaymentPage from './payment';

const Step5: FC<PromotionsProps> = ({
}) => {

  return(
    <>
      <Subject color="#444">eGift Cards</Subject>
      <PaymentPage />
    </>
  );
};

export default Step5;

export type PromotionsProps = {
};
