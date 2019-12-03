import CustomRodal from '@components/custom-rodal/custom-rodal';
import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import { CONFIGS } from '../environments/development';
import React from 'react';
import { ColorContext } from '@components/widget-view';

const WorkingHours = ({
  showWorkingHoursModal,
  setShowWorkingHoursModal,
  folderName,
  color,
}) => {
  return (
    <CustomRodal
      showModal={showWorkingHoursModal}
      setShowModal={setShowWorkingHoursModal}
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
          WorkingHours
        </ModalStyles.ModalInformationContainer>
      </ColorContext.Provider>
    </CustomRodal>
  );
};

export default WorkingHours;
