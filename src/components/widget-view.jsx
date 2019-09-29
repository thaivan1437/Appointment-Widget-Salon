import React, { useState } from 'react';
import styled from 'styled-components';

import AppointmentIcon from '@assets/icon_widgets_appointment.png';
import PricingIcon from '@assets/icon_widgets_pricing.png';
import PromotionsIcon from '@assets/icon_widgets_promotions.png';
import ArrowIcon from '@assets/arrow.svg';

import DayPicker from '@components/day-picker/day-picker';
import CustomRodal from '@components/custom-rodal/custom-rodal';
import { COLORS } from '../common/colors';

import { S as CommonStyles } from 'common/styles';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';

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

const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin: 30px 50px 0 0;
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
      <CustomRodal showModal={showModal} setShowModal={setShowModal}>
        <ModalStyles.ModalContentContainer>
          <ModalStyles.ModalStepTitle>About Me</ModalStyles.ModalStepTitle>
          <InputWrapper>
            <CommonStyles.Input placeholder="Enter name"></CommonStyles.Input>
          </InputWrapper>
          <InputWrapper>
            <CommonStyles.Input placeholder="Enter phone number"></CommonStyles.Input>
          </InputWrapper>
          <InputWrapper>
            <CounterWrapper>
              <Counter countChange={newCount => console.log(newCount)} />
              <InlineInformation>Number of people</InlineInformation>
            </CounterWrapper>
          </InputWrapper>

          <ButtonWrapper>
            <CommonStyles.Button>
              Next
              <img src={ArrowIcon}></img>
            </CommonStyles.Button>
          </ButtonWrapper>

          <ModalStyles.ModalFooter>
            powered by Salon Manager
          </ModalStyles.ModalFooter>
        </ModalStyles.ModalContentContainer>
        <ModalStyles.ModalInformationContainer />
      </CustomRodal>
    </>
  );
};

export default WidgetView;
