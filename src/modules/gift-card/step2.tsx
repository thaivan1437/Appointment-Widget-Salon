import React, {FC, useState } from 'react';
import {
  WrapButton,
  Title,
  Subject,
  BaseInput,
} from '@modules/gift-card/gift-card.styles';

const dataFake = [
  {value: 20 , type: '$'},
  {value: 50 , type: '$'},
  {value: 75 , type: '$'},
  {value: 100 , type: '$'},
]

const Step2: FC<PromotionsProps> = ({
  setAmountCallback,
  color,
  amount,
}) => {

  const handleSelectAmount = (e) => {
    const { value, tagName } = e.target;
    if (tagName === "BUTTON") {
      setTypeButton("button");
      setAmountCallback(value);
      return;
    }
    setAmountCallback(value);

  }
  const [typeButton, setTypeButton] = useState('button');

  return(
    <>
      <Subject color="#444">eGift Cards</Subject>
      <Title color='#444'>Select eGift Card Amount</Title>
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
                value={item.type + item.value}
                className={ (amount === (item.type + item.value)) ? 'active': ''}
              >
                {item.type} {item.value}
              </button>
            )
          })
        }
        <BaseInput
          type={typeButton === "text" ? "text" : "button"}
          value={amount ? amount : "Custom Amount"}
          className={(typeButton === "text") ? "active": ''}
          onClick= {() => {
            setTypeButton("text");
            setAmountCallback('$');
          }}
          onChange={(e) => handleSelectAmount(e)}
        />
      </WrapButton>
    </>
  );
};

export default Step2;

export type PromotionsProps = {
  setAmountCallback: (e) => void;
  color: string;
  amount: string;
};

