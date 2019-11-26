import styled from 'styled-components';
import { COLORS } from 'common/colors';

export const S = {};

S.ServiceSelectionContainer = styled.div`
  * {
    box-sizing: border-box; // todo remove
  }

  display: flex;
  width: 400px;

  height: 162px;
  padding: 16px;

  color: ${COLORS.DOVE_GRAY};
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
  width: 24px;
  height: 24px;

  margin-right: 8px;
`;
