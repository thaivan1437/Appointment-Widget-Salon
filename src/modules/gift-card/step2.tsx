import React, {FC } from 'react';
import {
  WrapButton,
  Title,
  Subject,
  BaseInput,
} from '@modules/gift-card/gift-card.styles';

const dataFake = [
  {value: 25 , type: '$'},
  {value: 50 , type: '$'},
  {value: 75 , type: '$'},
  {value: 100 , type: '$'},
]

const Step2: FC<PromotionsProps> = ({
  setAmountCallback,
  color,
  amount,
  error,
}) => {
  const handleSelectAmount = (e) => {
    const { value, tagName } = e.target;
    const newValue = parseInt(value, 10);
    const defaultValue = [25, 50, 75, 100];
    if (tagName === "BUTTON") {
      setAmountCallback({ amount: newValue, typeButton: 'button'});
      error.customAmount = false;
      return;
    }

    setAmountCallback({ amount: newValue, typeButton: 'number'});

  }

  return(
    <>
      <Subject>eGift Cards</Subject>
      <Title>Select eGift Card Amount</Title>
      <WrapButton
        bColor='#f8f7f7'
        color='#383838'
        activeColor={color}
      >
        {
          dataFake?.map((item, index) => {

            return (

              <button
                key={index}
                onClick={(e) => handleSelectAmount(e)}
                value={item.value}
                className={ (amount.amount === (item.value)) ? 'active': ''}
              >
                {item.type} {item.value}
              </button>
            )
          })
        }
        <div className={`wrap--customAmount ${(error.customAmount) ? 'error' : ''}`}>
          <BaseInput
            type={amount.typeButton === "number" ? "number" : "button"}
            value={(amount?.amount && amount.typeButton === "number") ? amount.amount : "Custom Amount"}
            className={`${(amount.typeButton === "number") ? "active": ''}  `}
            min="100"
            max="200"
            onClick= {() => {
              setAmountCallback({ amount: 0, typeButton: 'number'});
            }}
            onChange={(e) => handleSelectAmount(e)}
          />
          {amount.typeButton === "number" ? <label className='customAmount'>$</label> : ""}
        </div>
      </WrapButton>
    </>
  );
};

export default Step2;

export type PromotionsProps = {
  setAmountCallback: (e) => void;
  color?: string;
  amount?: AmountType;
  error?: errorInit;
};

export type AmountType = {
  amount?: number;
  typeButton?: string;
}
export type errorInit = {
  customAmount?: boolean;
}
