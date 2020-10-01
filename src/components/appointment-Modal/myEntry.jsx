import React from 'react';
import styled from 'styled-components';
import { S as CommonStyles } from '@common/styles';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { COLORS, INPUT_COLORS } from '@common/colors';
import { USERNAME_REGEX } from '@common/constants';
import Counter from '@components/counter/counter';

const MyEntry = (props) => {
  const {
    userName,
    userPhone,
    setUserName,
    setUserPhone,
    errors,
    userCount,
    setErrors,
    selectedPromotion,

    setUserCount,
  } = props;

  return (
    <div>
      <ModalStyles.ModalStepTitle>Me</ModalStyles.ModalStepTitle>
      <FormWrapper>
        <CommonStyles.Input
          value={userName}
          hasError={errors.userName}
          onChange={(event) => {
            const { value } = event.target;
            const replacedValue = value
              .replace(USERNAME_REGEX, '')
              .toLowerCase()
              .replace(/\b[a-z](?=[a-z]{2})/g, function (letter) {
                return letter.toUpperCase();
              });

            if (errors.userName && replacedValue.length >= 2) {
              setErrors((prev) => ({
                ...prev,
                userName: false,
              }));
            }

            if (replacedValue.length <= 32) {
              setUserName(replacedValue);
            }
          }}
          placeholder="Enter name"
          // hasValue={userName.length > 0}
        ></CommonStyles.Input>
        <SeparatorLine />
        <CommonStyles.Input
          value={userPhone}
          hasError={errors.userPhone}
          onChange={(event) => {
            const { value } = event.target;
            //TODO move validation separate file
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

              if (errors.userPhone && processedValue.length === 14) {
                setErrors((prev) => ({
                  ...prev,
                  userPhone: false,
                }));
              }

              setUserPhone(processedValue);
            }
          }}
          placeholder="Enter phone (000) 000-0000"
          // hasValue={userPhone.length > 0}
        ></CommonStyles.Input>
      </FormWrapper>
      <InputWrapper>
        <CounterWrapper>
          <Counter
            initialValue={userCount}
            countChange={(newCount) => {
              setUserCount(newCount);
            }}
          />
        </CounterWrapper>
      </InputWrapper>
      {selectedPromotion ? (
        <AppointmentPromotionCode>
          <PromotionCode>Promo code:&nbsp;</PromotionCode>
          {selectedPromotion.promoCode}
        </AppointmentPromotionCode>
      ) : null}
    </div>
  );
};

// TODO move common styles file

const InputWrapper = styled.div`
  margin-top: 20px;

  width: 400px;
  @media (max-width: 768px) {
    width: 300px;
    margin-top: 10px;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AppointmentInfo = styled.div`
  color: ${(props) =>
    props.header ? COLORS.DOVE_GRAY : COLORS.SILVER_CHALICE};
  padding: 0 20px 8px;
  font-size: 19px;
  font-weight: 500;
  text-transform: ${(props) => (props.userName ? 'capitalize' : 'none')};

  text-align: ${(props) => (props.header ? 'center' : 'left')};
`;

export const FirstStepMessage = styled(AppointmentInfo)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  height: 100%;
  font-size: 24px;
  text-align: center;
`;

const FormWrapper = styled.div`
  border: 1px solid ${INPUT_COLORS.BORDER};
  border-radius: 10px;
  background-color: ${INPUT_COLORS.BACKGROUND_COLOR};
`;

const SeparatorLine = styled.div`
  border-bottom-color: ${INPUT_COLORS.BORDER};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const AppointmentPromotionCode = styled.div`
  position: absolute;
  display: flex;
  bottom: 70px;
  left: 100px;
  font-size: 22px;
  color: ${INPUT_COLORS.TEXT_COLOR};
  @media (min-width: 768px) and (max-width: 1024px) {
    bottom: 345px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    bottom: 270px;
    left: 30px;
  }
`;
const PromotionCode = styled.div`
  font-weight: 500;
`;

export default MyEntry;
