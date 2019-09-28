import React, { useState } from 'react';
import styled from 'styled-components';

import AppointmentIcon from '@assets/icon_widgets_appointment.png';
import PricingIcon from '@assets/icon_widgets_pricing.png';
import PromotionsIcon from '@assets/icon_widgets_promotions.png';

import CloseDialogIcon from '@assets/icon_dialog_close.png';

import 'rodal/lib/rodal.css';
import Rodal from 'rodal';

import DayPicker from '@components/day-picker';
import { COLORS } from '../common/colors';

import { AppointmentInput, ShortCenteredInput } from '../common/styles';

import Counter from '@components/counter/counter';

const WidgetViewWrapper = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;

  width: ${props => (props.vertical ? '65px' : 'auto')};

  top: ${props => (props.top ? '5px' : 'auto')};
  left: ${props => (props.left ? '5px' : 'auto')};
  right: ${props => (props.right ? '5px' : 'auto')};
  bottom: ${props => (props.bottom ? '5px' : 'auto')};
`;

const ImageWrapper = styled.img`
  width: 65px;
  height: 65px;
  cursor: pointer;
`;

// TODO remove after demo
const OptionsWrapper = styled.div`
  width: 175px;
  margin: 100px auto;
`;

//
// const CloseIcon = styled.div`
//   width: 72px;
//   height: 72px;
//   background: red;
//
//   border-top-left-radius: 10px;
// `;
// const CloseInner = styled.div`
//   width: 100px;
//   height: 50px;
//   background: white;
//
//   position: absolute;
//   transform: rotate(-45deg);
// `;
// TODO move styles to global style
const CustomRodal = styled(Rodal)`
  .rodal-dialog {
    padding: 0;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  height: 100%;
`;
const ModalContentContainer = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 0 68px;
`;
const ModalInformationContainer = styled.div`
  flex: 1;
  background-color: ${COLORS.ALABASTER};
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${COLORS.MERCURY};
`;

const DialogCycle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${COLORS.MERCURY};

  left: 585px;

  top: ${props => (props.top ? '-15px' : 'auto')};
  bottom: ${props => (props.bottom ? '-15px' : 'auto')};
`;

const WidgetFooter = styled.div`
  position: fixed;
  bottom: 0;
  border-top-width: 2px;
  border-top-style: dotted;
  border-color: ${COLORS.MERCURY};
  width: 500px;
  color: ${COLORS.MERCURY};
  font-size: 12px;

  padding: 10px 0;
  margin-bottom: 30px;
`;

const WidgetStepTitle = styled.div`
  width: 400px;
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  width: 320px;
  margin-bottom: 16px;
`;

const InlineInformation = styled.span`
  padding: 0 10px;
  color: ${COLORS.DOVE_GRAY};
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WidgetView = () => {
  // Demo section should remove
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(false);
  const [vertical, setVertical] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/*TODO: remove after demo*/}
      <OptionsWrapper>
        <div
          onChange={e => {
            const isLeft = e.target.value === 'left';

            setLeft(isLeft);
            setRight(!isLeft);
          }}
        >
          <input type="radio" name="Group1" value="left" /> Left
          <input type="radio" name="Group1" value="right" defaultChecked />{' '}
          Right
        </div>

        <div
          onChange={e => {
            const isBottom = e.target.value === 'bottom';

            setBottom(isBottom);
            setTop(!isBottom);
          }}
        >
          <input type="radio" name="Group2" value="top" defaultChecked /> Top
          <input type="radio" name="Group2" value="bottom" /> Bottom
        </div>

        <div
          onChange={e => {
            const isVertical = e.target.value === 'vertical';
            setVertical(isVertical);
          }}
        >
          <input type="radio" name="Group3" value="horizontal" defaultChecked />{' '}
          Horizontal
          <input type="radio" name="Group3" value="vertical" />
          Vertical
        </div>
      </OptionsWrapper>
      <WidgetViewWrapper
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        vertical={vertical}
      >
        <ImageWrapper
          onClick={() => setShowModal(true)}
          src={AppointmentIcon}
        />
        <ImageWrapper onClick={() => setShowModal(true)} src={PricingIcon} />
        <ImageWrapper onClick={() => setShowModal(true)} src={PromotionsIcon} />
      </WidgetViewWrapper>

      <DayPicker />
      {/*TODO: (refactor) move content separate component*/}
      <CustomRodal
        visible={showModal}
        animation="flip"
        closeMaskOnClick={false}
        showCloseButton={false}
        width={900}
        height={420}
        onClose={() => setShowModal(false)}
      >
        <CloseIcon
          src={CloseDialogIcon}
          role="button"
          onClick={() => setShowModal(false)}
        />
        <DialogCycle top />
        <DialogCycle bottom />

        <ModalContentWrapper>
          <ModalContentContainer>
            <WidgetStepTitle>About Me</WidgetStepTitle>
            <InputWrapper>
              <AppointmentInput placeholder="Enter name"></AppointmentInput>
            </InputWrapper>
            <InputWrapper>
              <AppointmentInput placeholder="Enter phone number"></AppointmentInput>
            </InputWrapper>
            <InputWrapper>
              <CounterWrapper>
                <Counter countChange={newCount => console.log(newCount)} />
                <InlineInformation>Number of people</InlineInformation>
              </CounterWrapper>
            </InputWrapper>
            <WidgetFooter>powered by Salon Manager</WidgetFooter>
          </ModalContentContainer>
          <ModalInformationContainer />
        </ModalContentWrapper>
      </CustomRodal>
    </>
  );
};

export default WidgetView;
