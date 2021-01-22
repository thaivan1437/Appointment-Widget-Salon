import CustomRodal from '@components/custom-rodal/custom-rodal';
import styled from 'styled-components';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { S as CommonStyles } from '@common/styles';
import React, { FC, useState, useEffect } from 'react';
import { ColorContext } from '@components/widget-view/widget-view';
import IconChevronRight from '../../common/icons/icon-chevron-right';
import IconChevronLeft from '../../common/icons/icon-chevron-left';
// @ts-ignore
import { CONFIGS } from '@environment';
import {
  CustomModalContent,
} from '@modules/promotions/promotions-style';

import {
  DFlex,
  GroupInputRadio,
  ButtonWrap2,
} from '@modules/gift-card/gift-card.styles';
import { COLORS } from '@common/colors';
import { Promotion } from '../../types';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import { validateEmail } from './helper'
import { R } from '@components/widget-view/widget-view.styles';
import IconOptionChecked from '@common/icons/icon-option-checked';
import IconOptionUnChecked from '@common/icons/icon-option-unchecked';


const GiftCard: FC<PromotionsProps> = ({
  showPromotionsModal,
  setShowPromotionsModal,
  folderName,
  color,
}) => {
  const [selectedEGift, setSelectedEGift] = useState({ status: false, value: null});
  const [selectedStep, setSelectedStep] = useState(1);
  const [amount, setAmount] = useState<AmountType>({ amount: 0, typeButton: 'button'});
  const [design, setDesign] = useState({ value: '', check: null, action: '', label: 'Select this design', images: '', fake: '' });

  const [receiptData, setReceiptData] = useState({ nameCard: ''});
  const [deliverData, setDeliverData] = useState({ message: '', phone: '', email: '', type: 'phone',
  typeDeliver: 'now',
  schedule: new Date(),
  action: '',
  });
  const [error, setError] = useState<ErrorType>({ nameCard: false, phone: false, email: false});
  const [closeDate, setCloseDate] = useState({ value: false });

  const funcSetDesign = (value) => {
    setSelectedEGift({ ...selectedEGift, value: value});
    setDesign(value);
  }
  const funcSetAmount = (value) => {
    setAmount(value);
  }

  const funcSetReceiptData = (value) => {
    setReceiptData(value);
    funcCheckError(value);

  }
  const funcCheckError = (value) => {
    if (value?.nameCard && value?.nameCard?.length < 2) {
      setError({ nameCard: true });
      return;
    }

    if (value?.phone && value?.phone.length !== 14) {
      setError({ phone: true });
      return;
    }

    if (value?.email && !validateEmail(value?.email)) {
      setError({ email: true });
      return;
    }

    setError({ nameCard: false, phone: false, email: false })
  }

  const funcSetDeliverData = (value) => {
    setDeliverData(value);
    funcCheckError(value);
    setCloseDate({ value: false});
  }

  const handleCloseDate = () => {
    setCloseDate({ value: true })
  }

  const renderContent = () => {

    switch (selectedStep) {
      case 1:

        return (
          <>
            <Step1
              funcSetDesign = {funcSetDesign}
              design = {design}
            />

            <DFlex className="step1">
              <GroupInputRadio className="margin-left" onClick={() => setDesign({
                ...design,
                label: design.label === 'Select this design' ? 'Selected' : 'Select this design',
                check: design.label === 'Select this design' ? <IconOptionChecked /> : <IconOptionUnChecked />,
                action: design.label === 'Select this design' ? 'click' : '',
                value: design.fake
              })}>
                {design.action !=='' ? design?.check : <IconOptionUnChecked />}
                <label className="black">{design?.label}</label>
              </GroupInputRadio>

              <CommonStyles.Button
                color={color}
                disabled={!design?.value || !design.action}
                onClick={() => setSelectedStep(2)}
              >
                {'Next '}
                <IconChevronRight />
              </CommonStyles.Button>
            </DFlex>
          </>
        );
      case 2:

        return (
          <>
            <Step2
              setAmountCallback={funcSetAmount}
              color={color}
              amount={amount}
              error={error}
            />
            <ButtonWrap2 className="step2">
              <R.BackButton onClick={() => setSelectedStep(1)}>
                <IconChevronLeft />
                {' Back'}
              </R.BackButton>
              <CommonStyles.Button
                color={color}
                disabled={
                  !amount?.amount || amount?.amount === 0 ||
                  amount?.amount < 20 || amount?.amount > 500
                }
                onClick={() => {
                  if (
                    amount &&
                    amount.typeButton ==="text" &&
                    (amount.amount < 20 || amount.amount > 500 )
                    ) {
                    setError({ customAmount: true });
                    return;
                  }
                  setSelectedStep(3);
                }}
              >
                {'Next '}
                <IconChevronRight />
              </CommonStyles.Button>
            </ButtonWrap2>
          </>
        );

      case 3:

        return (
          <>
            <Step3
              setReceiptCallback={funcSetReceiptData}
              color={color}
              error={error}
              receiptInit={receiptData}
            />
            <ButtonWrap2 className="step3">
              <R.BackButton onClick={() => setSelectedStep(2)}>
                <IconChevronLeft />
                {' Back'}
              </R.BackButton>
              <CommonStyles.Button
                color={color}
                disabled={!receiptData.nameCard}
                onClick={() => {
                  funcCheckError(receiptData);
                  if (!receiptData.nameCard) {
                    setError({ nameCard: true });
                    return;
                  }
                  if (!error.nameCard) {
                    setSelectedStep(4);
                  }
                }}
              >
                {'Next '}
                <IconChevronRight />
              </CommonStyles.Button>
            </ButtonWrap2>
          </>
        );

      case 4:

        return (
          <>
            <Step4
              setDeliverCallback={funcSetDeliverData}
              color={color}
              error={error}
              deliverInit = {deliverData}
              closeDate ={closeDate}
            />
            <ButtonWrap2 className="step4">
              <R.BackButton onClick={() => setSelectedStep(3)}>
                <IconChevronLeft />
                {' Back'}
              </R.BackButton>
              <CommonStyles.Button
                color={color}
                disabled={!deliverData?.phone && !deliverData?.email}
                onClick={() => {
                  funcCheckError(deliverData);
                  if (!deliverData?.phone && !deliverData?.email) {
                    setError({ phone: true, email: true });
                    return;
                  }
                  if (!error.email && !error.phone) {
                    setSelectedStep(5);
                  }
                }}
              >
                {'Next '}
                <IconChevronRight />
              </CommonStyles.Button>
            </ButtonWrap2>
          </>
        );

      case 5:

        return (
          <>
            <Step5 />
            <ButtonWrap2 className="step5">
              <R.BackButton onClick={() => setSelectedStep(4)}>
                <IconChevronLeft />
                {' Back'}
              </R.BackButton>
              {/* <CommonStyles.Button
                color={color}
                disabled={amount?.amount < 1}
                onClick={() => {
                  funcCheckError(deliverData);
                  if (!deliverData?.phone && !deliverData?.email) {
                    setError({ phone: true, email: true });
                    return;
                  }
                  if (!error.email && !error.phone) {
                    setSelectedStep(5);
                  }
                }}
              >
                {'Next '}
                <IconChevronRight />
              </CommonStyles.Button> */}
            </ButtonWrap2>
          </>
        );

      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <CustomRodal
      showModal={showPromotionsModal}
      setShowModal={setShowPromotionsModal}
      selectedStyle={folderName}
      width={900}
      clickToCloseDate = {handleCloseDate}
      type="eGift"
    >
      <ColorContext.Provider value={color}>
        {/* left */}
        <ModalStyles.ModalContentContainer>
          <CustomModalContent color={color} className="e-gift">

            {renderContent()}

            <ModalStyles.ModalFooter>
              Powered by
              <ModalStyles.FooterLink
                href={`https://salonmanager.${CONFIGS.domainExtension}`}
                target="_blank"
              >
                Salon Manager
              </ModalStyles.FooterLink>
              <ModalStyles.FooterLinkRight>
                {CONFIGS.xAppVersion}
              </ModalStyles.FooterLinkRight>
            </ModalStyles.ModalFooter>
          </CustomModalContent>

          {/* footer */}
          <ModalStyles.ModalFooter>
              Powered by
              <ModalStyles.FooterLink
                href={`https://salonmanager.${CONFIGS.domainExtension}`}
                target="_blank"
              >
                Salon Manager
              </ModalStyles.FooterLink>
              <ModalStyles.FooterLinkRight>
                {CONFIGS.xAppVersion}
              </ModalStyles.FooterLinkRight>
            </ModalStyles.ModalFooter>
        </ModalStyles.ModalContentContainer>
        {/* right */}
        <ModalStyles.ModalInformationContainer>
          <ModalStyles.ModalDetailContentContainer>
            {/* check step show content right */}
            {selectedStep === 1 ? (
              <FirstStepMessage>
                Your eGift Card details will appear here
              </FirstStepMessage>
            ) : null}

            {selectedStep > 1 ? (
              <>
                <AppointmentInfo header>eGift Card Details</AppointmentInfo>
                <R.InformationWrapper>
                  <AppointmentInfo>
                    {design?.images ? <img src={design.images} /> : null}
                    {selectedStep > 2 && amount?.amount ? "$" + amount?.amount : null}
                  </AppointmentInfo>

                  { selectedStep > 3 &&
                    <AppointmentInfo>
                      <label>From</label>
                      <div>{receiptData?.nameCard ? receiptData?.nameCard : null}</div>
                    </AppointmentInfo>
                  }

                  {selectedStep > 4 &&
                    <AppointmentInfo>
                      <label>To</label>
                      <div>{deliverData?.phone ? deliverData?.phone : deliverData?.email}</div>
                      <div>{(deliverData?.schedule.toDateString() && deliverData?.typeDeliver ==="schedule") ? deliverData?.schedule.toDateString() : null}</div>
                      <div className="message">{deliverData?.message ? deliverData?.message : null}</div>
                    </AppointmentInfo>
                  }

                </R.InformationWrapper>
              </>
            ) : null}

          </ModalStyles.ModalDetailContentContainer>
        </ModalStyles.ModalInformationContainer>
      </ColorContext.Provider>
    </CustomRodal>
  );
};

export type PromotionsProps = {
  showPromotionsModal: boolean;
  setShowPromotionsModal: (show: boolean) => void;
  folderName: string;
  color: string;
  promotionData: Promotion[];
  makeAnAppointmentClick: (promotion: Promotion) => void;
};

export type ErrorType = {
  nameCard?: boolean;
  phone?: boolean;
  email?: boolean;
  customAmount?: boolean;
};
export type AmountType = {
  amount?: number;
  typeButton?: string;
};
type AppointmentInfoStyleProps = { header?: boolean; userName?: boolean };
const AppointmentInfo = styled.div<AppointmentInfoStyleProps>`
  color: ${(props) =>
    props.header ? COLORS.DOVE_GRAY : COLORS.SILVER_CHALICE};
  padding: 0 20px 8px;
  font-size: 19px;
  font-weight: 500;
  text-transform: ${(props) => (props.userName ? 'capitalize' : 'none')};

  text-align: ${(props) => (props.header ? 'center' : 'left')};

  img {
    max-width: 200px;
    margin: auto;
    display: block;
  }

  label {
    display:block;
    color: ${COLORS.DOVE_GRAY1};
    font-weight: 700;
    font-style: italic;
    margin-bottom: 0;
  }
  div {
    margin-left: 30px;

    &.message {
      height: 50px;
      overflow-y: auto;

      /* width */
      ::-webkit-scrollbar {
        width: 5px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }
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

export default GiftCard;
