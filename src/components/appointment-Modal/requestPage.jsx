import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@common/colors';
import { S as CommonStyles } from '@common/styles';
import httpUtil from '@common/HttpUtil';
import { CONFIGS } from '@environment';

const RequestPage = (props) => {
  const {
    color,
    userName,
    userPhone,
    userCount,
    getRequestDateString,
    getHourString,
    selectedDate,
    selectedTime1,
    selectedTime2,
    selectedServices,
    showLoading,
    setSelectedStep,
    setShowLoading,
    selectedPromotion,
    appId,
  } = props;

  return (
    <div>
      <ConfirmationStepWrapper>
        <CommonStyles.AppointmentButton
          color={color}
          disabled={showLoading}
          onClick={() => {
            const data = {
              customerName: userName,
              customerPhoneNumber: `+1${userPhone.replace(/[^\d]/g, '')}`,
              numberOfPeople: userCount,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              date: getRequestDateString(selectedDate.dateValue),
              preferTime1: getHourString(selectedTime1),
              preferTime2: getHourString(selectedTime2),
              selectedCategoryItemIds: selectedServices.map(
                (service) => service.id
              ),
              promotionId: selectedPromotion ? selectedPromotion.promoId : null,
            };

            setShowLoading(true);

            httpUtil
              .makeRequest({
                method: 'POST',
                url: `https://widgets.api.salonmanager.${CONFIGS.domainExtension}/${CONFIGS.version}/appointment-services/${appId}`,
                data,
                headers: {
                  'x-api-key': CONFIGS.xApiKey,
                  'x-app-version': CONFIGS.xAppVersion,
                  timezone: CONFIGS.timeZone,
                },
              })
              .then(() => {
                setSelectedStep(6);
              })
              .finally(() => {
                setShowLoading(false);
              });
          }}
        >
          {showLoading ? (
            <img
              id="spinner"
              src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/spinner.png`}
            />
          ) : (
            'Request an Appointment'
          )}
        </CommonStyles.AppointmentButton>
        <EditAppointment
          color={color}
          disabled={showLoading}
          onClick={() => {
            setSelectedStep(1);
          }}
        >
          Edit Details
        </EditAppointment>

        <PolicyContainer>
          {
            'By requesting an appointment, you agree to receive text messages and to our '
          }
          <a
            href={`https://salonmanager.${CONFIGS.domainExtension}/terms-of-use`}
            target="_blank"
            rel="noreferrer"
          >
            Terms of Use
          </a>
          {' and '}
          <a
            href={`https://salonmanager.${CONFIGS.domainExtension}/privacy-policy`}
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </PolicyContainer>
      </ConfirmationStepWrapper>
    </div>
  );
};
// TODO move common styles file

const ConfirmationStepWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
const EditAppointment = styled.div`
  color: ${(props) => props.color || COLORS.DOVE_GRAY};

  margin: 30px 0;

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.disabled
      ? 'opacity: 0.4; pointer-events: none; user-select:none;'
      : null}
`;
const PolicyContainer = styled.div`
  position: absolute;
  bottom: 90px;
  color: ${COLORS.DOVE_GRAY};
  width: 400px;

  a,
  a:visited {
    color: ${COLORS.DOVE_GRAY};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    bottom: 360px;
  }
  @media (max-width: 768px) {
    bottom: 300px;
    width: 300px;
  }
`;

export default RequestPage;
