import styled from 'styled-components';
import { COLORS } from '@common/colors';

export const R: any = {};

interface WidgetViewWrapperProps {
  vertical: String;
  top: String;
  left: String;
  right: String;
  bottom: String;
}
R.WidgetViewWrapper = styled.div<WidgetViewWrapperProps>`
  position: absolute;

  width: ${(props) => (props.vertical ? '90px' : 'auto')};

  top: ${(props) => (props.top ? '10px' : 'auto')};
  left: ${(props) => (props.left ? '10px' : 'auto')};
  right: ${(props) => (props.right ? '10px' : 'auto')};
  bottom: ${(props) => (props.bottom ? '10px' : 'auto')};
`;
R.ImageWrapper = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
`;
const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin: 41px 50px 0 0;

  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin: 41px 30px 0 0;
  }
`;

// TODO move common styles file
R.ButtonWrapper1 = styled(ButtonWrapper)`
  margin-top: 55px;
`;
R.ButtonWrapper2 = styled(ButtonWrapper)`
  margin-top: 11px;
`;

R.ButtonWrapper4 = styled(ButtonWrapper)`
  margin-top: -10px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

R.ButtonWrapper3 = styled(ButtonWrapper)`
  margin-top: 31px;
`;
R.BackButton = styled.div`
  color: ${COLORS.DOVE_GRAY};
  cursor: pointer;
  margin-right: 15px;
`;
R.ConfirmMessage = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  color: ${COLORS.DOVE_GRAY};
  font-size: 20px;
`;

R.BackButton = styled.div`
  color: ${COLORS.DOVE_GRAY};
  cursor: pointer;
  margin-right: 15px;
`;
R.InformationWrapper = styled.div`
  margin-top: 10px;
`;
