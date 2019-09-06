import React, { useState } from 'react';
import styled from 'styled-components';

import AppointmentIcon from '@assets/icon_widgets_appointment.png';
import PricingIcon from '@assets/icon_widgets_pricing.png';
import PromotionsIcon from '@assets/icon_widgets_promotions.png';

import 'rodal/lib/rodal.css';
import Rodal from 'rodal';

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

      <Rodal
        visible={showModal}
        animation="flip"
        onClose={() => setShowModal(false)}
      ></Rodal>
    </>
  );
};

export default WidgetView;
