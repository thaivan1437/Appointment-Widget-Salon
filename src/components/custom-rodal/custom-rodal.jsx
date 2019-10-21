import React from 'react';
import CloseDialogIcon from '@assets/icon_close_bg.png';
import { S } from '@components/custom-rodal/custom-rodal.styles';

const CustomRodal = ({ children, showModal, setShowModal }) => {
  return (
    <S.CustomRodal
      visible={showModal}
      animation="flip"
      closeMaskOnClick={false}
      showCloseButton={false}
      width={900}
      height={420}
      onClose={() => setShowModal(false)}
    >
      <S.CloseIconText onClick={() => setShowModal(false)}>
        Close
      </S.CloseIconText>
      <S.CloseIcon
        src={CloseDialogIcon}
        role="button"
        onClick={() => setShowModal(false)}
      />
      <S.DialogCycle top />
      <S.DialogCycle bottom />

      <S.ModalContentWrapper>{children}</S.ModalContentWrapper>
    </S.CustomRodal>
  );
};

export default CustomRodal;
