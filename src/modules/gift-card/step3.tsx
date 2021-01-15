import React, {FC, useState } from 'react';
import {
  Subject,
  WrapInput,
  BaseInput,
  GroupInputRadio,
  WrapReceipt,
} from '@modules/gift-card/gift-card.styles';

const Step3: FC<PromotionsProps> = ({
  setReceiptCallback,
  error,
  receiptInit,
}) => {
  const [receipt, setReceipt] = useState({ sms: true, email: false});
  const handleSetValue = (e) => {
    const { value, name } = e.target;

    if (name === "name") {
      setReceiptCallback({...receiptInit, nameCard: value});
    }

    if (name === "phone") {
      const { value } = e.target;
      let processedValue = value.replace(/[^\d]/g, '');

      if (processedValue.length <= 10) {
        const formatterPattern1 = '($1';
        const formatterPattern2 = '($1) $2';
        const formatterPattern3 = '($1) $2-$3';

        let selectedPattern = formatterPattern1;

        if (processedValue.length > 3) {
          selectedPattern = formatterPattern2;
        }

        if (processedValue.length > 6) {
          selectedPattern = formatterPattern3;
        }

        processedValue = processedValue.replace(
          /(\d{1,3})(\d{0,3})(\d{0,4})/,
          selectedPattern
        );

        setReceiptCallback({ ...receiptInit, phone: processedValue });
      }
    }

    if (name === "email") {
      setReceiptCallback({ ...receiptInit, email: value });
    }

  }
  const changeMethodReceipt = (e) => {
    const { id } = e.target;
    if (id === "sms") {
      setReceipt({ sms: true, email: false });
    }
    if (id === "email") {
      setReceipt({ sms: false, email: true });
    }
    setReceiptCallback({ ...receiptInit, email: '', phone: ''});
  };

  return(
    <>
      <Subject color="#444">eGift Cards 3</Subject>
      <WrapInput>
        <BaseInput
          type="text"
          id="name"
          name="name"
          value={receiptInit?.nameCard}
          className={error.nameCard ? "error" : ""}
          placeholder="Enter your name"
          onChange={(e) => handleSetValue(e)}
        />
        <label htmlFor="name">Your name will appear on the eGift card</label>
      </WrapInput>

      <WrapReceipt className="step3">
        <label className="w100">Receipt by:</label>
        <GroupInputRadio className="w150">
          <BaseInput
            id="sms"
            type="radio"
            checked={(receipt.sms) ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label className="weight" htmlFor="sms">Text message</label>
        </GroupInputRadio>
        <GroupInputRadio className="150">
          <BaseInput
            id="email"
            type="radio"
            checked={receipt.email ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label className="weight" htmlFor="email">Email</label>
        </GroupInputRadio>
      </WrapReceipt>

      <WrapInput>
        <BaseInput
          type={receipt.sms ? "tel" : "email"}
          name={receipt.sms ? "phone" : "email"}
          value={receipt.sms ? receiptInit?.phone : receiptInit?.email}
          className={(error.phone || error.email) ? "error" : ""}
          placeholder={receipt.sms ? "Enter your phone (000) 000-0000" : "Enter your email"}
          onChange={(e) => handleSetValue(e)}
        />
      </WrapInput>
    </>
  );
};

export default Step3;

export type PromotionsProps = {
  setReceiptCallback: (e) => void;
  color?: string;
  error?: errorInit;
  receiptInit?: receiptData;
};
export type errorInit = {
  nameCard?: boolean;
  phone?: boolean;
  email?: boolean;
}
export type receiptData = {
  nameCard?: string;
  phone?: string;
  email?: string;
}
