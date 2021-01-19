import React, {FC, useState } from 'react';
import {
  Subject,
  WrapInput,
  BaseInput,
  GroupInputRadio,
  WrapReceipt,
} from '@modules/gift-card/gift-card.styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Step4: FC<PromotionsProps> = ({
  setDeliverCallback,
  error,
  deliverInit,
}) => {

  const [startDate, setStartDate] = useState({ value: deliverInit?.schedule, status: false });

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
    if (id === "phone") {

      setDeliverCallback({
        ...deliverInit,
        email: '',
        phone: '',
        type: id,
      });
    }
    if (id === "email") {
      setDeliverCallback({
        ...deliverInit,
        email: '',
        phone: '',
        type: id,
      });
    }

    if (id === "now") {
      setDeliverCallback({
        ...deliverInit,
        typeDeliver: id,
      });
    }

    if (id === "schedule") {
      setDeliverCallback({
        ...deliverInit,
        typeDeliver: id,
      });
      setStartDate({ ...startDate, status: true});
    }

  };

  const handleSetDate = (date) => {
    setDeliverCallback({ ...deliverInit, schedule: date });
    setStartDate({ value: date, status: false});
  };

  return(
    <>
      <Subject>eGift Cards</Subject>

      <WrapReceipt>
        <label className="w100">Deliver by:</label>
        <GroupInputRadio className="w150">
          <BaseInput
            id="phone"
            type="radio"
            checked={(deliverInit?.type === "phone") ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label className="weight" htmlFor="phone">Text message</label>
        </GroupInputRadio>
        <GroupInputRadio className="150">
          <BaseInput
            id="email"
            type="radio"
            checked={deliverInit.type === "email" ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label className="weight" htmlFor="email">Email</label>
        </GroupInputRadio>
      </WrapReceipt>

      <WrapInput>
        <BaseInput
          type={deliverInit?.type === "phone" ? "tel" : "email"}
          name={deliverInit?.type === "phone" ? "phone" : "email"}
          value={deliverInit?.type === "phone" ? deliverInit?.phone : deliverInit?.email}
          className={(error?.phone || error?.email) ? "error" : "" + "no-radius-bottom"}
          placeholder={deliverInit?.type === "phone" ? "Enter your phone (000) 000-0000" : "Enter your email"}
          onChange={(e) => handleSetValue(e)}
        />
        <BaseInput
          type="text"
          name="message"
          value={deliverInit?.message}
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
            checked={(deliverInit?.typeDeliver === "now") ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label className="weight" htmlFor="now">Now</label>
        </GroupInputRadio>
        <GroupInputRadio className={`150 wrap--date ${startDate.status ? 'active' : ''}`}>
          <BaseInput
            id="schedule"
            type="radio"
            checked={deliverInit?.typeDeliver === "schedule" ? true : false}
            onChange={(e) => changeMethodReceipt(e)}
          />
          <label
            className="weight"
            htmlFor="schedule"
            onClick={() => setStartDate({ ...startDate, status: !startDate.status })}
          >
              Schedule
          </label>
          <div className="input--date">
            <DatePicker
              selected={startDate.value}
              onChange={(date) => handleSetDate(date)}
              inline
            />
          </div>

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

export type deliverDataType = {
  phone?: string;
  email?: string;
  message?: string;
  type?: string;
  typeDeliver?: string;
  schedule?: Date;
}
