import styled from 'styled-components';
import { COLORS } from '@common/colors';

export const S: any = {};

S.ServiceSelectionContainer = styled.div`
  * {
    box-sizing: border-box; // todo remove
  }

  display: flex;
  width: 400px;

  height: 190px;
  padding: 16px;

  color: ${COLORS.DOVE_GRAY};

  @media (max-width: 768px) {
    width: 300px;
  }
`;

S.ServiceCategoryContainer = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.STORM_GRAY};
  }
`;
S.ServiceServicesContainer = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-left: 24px;
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.STORM_GRAY};
  }
`;

const BaseItem = styled.div`
  padding: 8px;
  border-radius: 5px;

  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: ${COLORS.ALABASTER};
  }
`;

S.CategoryItem = styled(BaseItem)``;
S.ServiceItem = styled(BaseItem)``;

S.IconContainer = styled.img`
  flex-shrink: 0;

  width: 22px;
  height: 22px;

  margin-right: 8px;
  @media (max-width: 768px) {
    width: 16;
    height: 16px;
  }
`;

S.CircleIcon = styled.span`
  height: 20px;
  width: 20px;
  background: red;
  border-radius: 50px;
  margin-right: 8px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    background: red;
    border-radius: 50%;
    margin-right: 8px;
  }
`;
