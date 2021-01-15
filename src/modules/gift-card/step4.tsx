import React, {FC, useState } from 'react';
import {
  Subject,
  WrapInput,
  BaseInput,
  GroupInputRadio,
  WrapReceipt,
} from '@modules/gift-card/gift-card.styles';

const Step4: FC<PromotionsProps> = ({
  setDeliverCallback,
  error,
  deliverInit,
}) => {
  const [deliver, setDeliver] = useState<deliverType>({
    sms: true,
    email: false ,
    now: true,
    schedule: false
  });

  const handleSetValue = (e) => {
    const { value, name } = e.target;

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

        setDeliverCallback({ ...deliverInit, phone: processedValue });
      }
    }

    if (name === "email") {
      setDeliverCallback({ ...deliverInit, email: value });
    }

    if (name === "message") {
      setDeliverCallback({ ...deliverInit, message: value });
    }

  }
  const changeMethodReceipt = (e) => {
    const { id } = e.target;
    // reset useState when change method input
    if (id === "sms") {
      setDeliver({ ...deliver, sms: true, email: false });
      setDeliverCallback({
        ...deliverInit,
        email: '',
        phone: ''
      });
    }
    if (id === "email") {
      setDeliver({ ...deliver, sms: false, email: true });
      setDeliverCallback({
        ...deliverInit,
        email: '',
        phone: ''
      });
    }

    if (id === "now") {
      setDeliver({ ...deliver, schedule: false, now: true });
    }

    if (id === "schedule") {
      setDeliver({ ...deliver, now: false, schedule: true });
    }

  };

  return(
    <>
      <Subject color="#444">eGift Cards 4</Subject>

      <WrapReceipt>
        <label className="w100">Deliver by:</label>
        <GroupInputRadio className="w150">
          <BaseInput
            id="sms"
            type="radio"
            checked={(deliver.sms) ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label className="weight" htmlFor="sms">Text message</label>
        </GroupInputRadio>
        <GroupInputRadio className="150">
          <BaseInput
            id="email"
            type="radio"
            checked={deliver.email ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label className="weight" htmlFor="email">Email</label>
        </GroupInputRadio>
      </WrapReceipt>

      <WrapInput>
        <BaseInput
          type={deliver.sms ? "tel" : "email"}
          name={deliver.sms ? "phone" : "email"}
          value={deliver.sms ? deliverInit.phone : deliverInit.email}
          className={(error.phone || error.email) ? "error" : "" + "no-radius-bottom"}
          placeholder={deliver.sms ? "Enter your phone (000) 000-0000" : "Enter your email"}
          onChange={(e) => handleSetValue(e)}
        />
        <BaseInput
          type="text"
          name="message"
          value={deliverInit.message}
          className="no-radius-top"
          placeholder="Enter short message"
          onChange={(e) => handleSetValue(e)}
        />
      </WrapInput>

      <WrapReceipt className="mt-half">
        <label className="w100">Deliver Date:</label>
        <GroupInputRadio className="w150">
          <BaseInput
            id="now"
            type="radio"
            checked={(deliver.now) ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label className="weight" htmlFor="now">Now</label>
        </GroupInputRadio>
        <GroupInputRadio className="150">
          <BaseInput
            id="schedule"
            type="radio"
            checked={deliver.schedule ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label className="weight" htmlFor="schedule">Schedule</label>
        </GroupInputRadio>
      </WrapReceipt>
    </>
  );
};

export default Step4;

export type PromotionsProps = {
  setDeliverCallback: (e) => void;
  color?: string;
  error?: errorInit;
  deliverInit?: deliverDataType;
};
export type errorInit = {
  phone?: boolean;
  email?: boolean;
}
export type deliverType = {
  sms?: boolean;
  email?: boolean;
  now?: boolean;
  schedule?: boolean;
}
export type deliverDataType = {
  phone?: string;
  email?: string;
  message?: string;
}
