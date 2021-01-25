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
    let newValue = value.replace("$", "");
    newValue = parseInt(newValue, 10);

    if (tagName === "BUTTON") {
      setAmountCallback({ amount: newValue, typeButton: 'button'});
      error.customAmount = false;
      return;
    }

    setAmountCallback({ amount: newValue, typeButton: 'text'});

  }

  return(
    <>
      <Subject>eGift Cards</Subject>
      <Title className="step2">Select eGift Card Amount</Title>
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
                className={ (amount.amount === item.value && amount.typeButton === 'button') ? 'active': ''}
              >
                {item.type}{item.value}
              </button>
            )
          })
        }
        <div className={`wrap--customAmount ${(error.customAmount) ? 'error' : ''}`}>
          {amount?.typeButton === "button" &&
            <BaseInput
              type={"button"}
              value={"Custom Amount"}
              onClick= {() => {
                setAmountCallback({ amount: 'Enter amount', typeButton: 'text'});
              }}
            />
          }
          { amount?.typeButton === "text" &&
            <>
              <BaseInput
                type={"text"}
                value={`$${amount?.amount ? amount?.amount : ""}`}
                className={`${(amount?.typeButton === "text") ? "active": ''}  `}
                onClick= {() => {
                  setAmountCallback({ amount: '', typeButton: 'text'});
                }}
                pattern="[0-9]*"
                onChange={(e) => handleSelectAmount(e)}
              />
              <label>min $20, max $500</label>
            </>
          }

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
