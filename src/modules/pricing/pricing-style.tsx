import { S as ModalStyles } from '@components/custom-rodal/custom-rodal.styles';
import styled from 'styled-components';
import { COLORS } from '@common/colors';

export const MainCategoryButton = styled.div`
  display: flex;
  align-items: center;

  width: 300px;
  cursor: pointer;
  font-size: 20px;
  padding: 5px 0;
  color: ${COLORS.DOVE_GRAY};
  transition: font-size 0.5s ease;

  :hover,
  &.selected {
    .list-cycle {
      width: 16px;
      height: 16px;
      font-size: 16px;
    }
  }
`;

export const MainCategoryListWrapper = styled.div`
  overflow: auto;
  padding: 0 50px;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.STORM_GRAY};
  }
`;

// margin and padding for scroll position
export const ServiceListWrapper = styled.div`
  overflow: auto;
  width: 100%;
  margin: 0 20px;
  padding: 0 30px;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.STORM_GRAY};
  }
`;

export const ServiceName = styled.div`
  font-size: 20px;
  margin-top: 10px
  color: ${COLORS.DOVE_GRAY};
`;

export const PriceItem = styled.div`
  color: ${COLORS.SILVER_CHALICE};
  padding: 6px 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const PricingModalInformationContainer = styled(
  ModalStyles.ModalInformationContainer
)`
  display: flex;
`;

export const ListCycle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${(props) => props.color};

  transition: all 0.5s ease;

  margin-right: 8px;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;
