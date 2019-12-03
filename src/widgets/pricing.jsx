import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { CONFIGS } from '../environments/development';
import React from 'react';
import { ColorContext } from '@components/widget-view';

const Pricing = ({
  showPricingModal,
  setShowPricingModal,
  folderName,
  color,
}) => {
  return (
    <CustomRodal
      showModal={showPricingModal}
      setShowModal={setShowPricingModal}
      selectedStyle={folderName}
    >
      <ColorContext.Provider value={color}>
        <ModalStyles.ModalContentContainer>
          Content goes here
          <ModalStyles.ModalFooter>
            powered by
            <ModalStyles.FooterLink
              href={`https://salonmanager.${CONFIGS.domainExtension}`}
              target="_blank"
            >
              Salon Manager
            </ModalStyles.FooterLink>
          </ModalStyles.ModalFooter>
        </ModalStyles.ModalContentContainer>
        <ModalStyles.ModalInformationContainer>
          dsadas
        </ModalStyles.ModalInformationContainer>
      </ColorContext.Provider>
    </CustomRodal>
  );
};

export default Pricing;
