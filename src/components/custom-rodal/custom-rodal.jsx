import React from 'react';
import { S } from '@components/custom-rodal/custom-rodal.styles';
import { CONFIGS } from '@environment';

const CustomRodal = ({ children, showModal, setShowModal, selectedStyle }) => {
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
      {selectedStyle ? (
        <S.CloseIcon
          src={`https://widgets.salonmanager.${CONFIGS.domainExtension}/assets/icons/${selectedStyle}/close-button.png`}
          role="button"
          onClick={() => setShowModal(false)}
        />
      ) : null}
      <S.DialogCycle top />
      <S.DialogCycle bottom />

      <S.ModalContentWrapper>{children}</S.ModalContentWrapper>
    </S.CustomRodal>
  );
};

export default CustomRodal;