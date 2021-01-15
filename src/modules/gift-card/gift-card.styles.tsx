import styled from 'styled-components';
import { COLORS, INPUT_COLORS } from '@common/colors';

interface BaseContentStyleProps {
  color?: string;
  bColor?: string;
  activeColor?: string;

}
interface BaseInput {
  hasError?: boolean;
  color?: string;
}

export const BaseContentStyle = styled.div`
  color: ${(props) => (props.color ? props.color : COLORS.DOVE_GRAY)};
  text-align: center;
`;

export const BaseInput = styled.input<BaseInput>`
  color: ${(props) => (props.color ? props.color : COLORS.DOVE_GRAY)};
  text-align: center;
`;

export const WrapInput = styled.div<BaseInput>`
  display:block;
  width: 100%;

  input {
    width: 85%;
    padding: 15px;
    border-radius: 10px;
    background-color: ${INPUT_COLORS.BACKGROUND_COLOR};
    color:${INPUT_COLORS.TEXT_COLOR};
    font-weight: 600;
    text-align: left;
    border: solid 1px ${INPUT_COLORS.BORDER};

    &.no-radius-bottom {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &.no-radius-top {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &.error {
      color: ${COLORS.ERROR};
      border: solid 1px ${COLORS.ERROR};
    }
  }

  input::placeholder {
    color: #babbc0;
    &.error {
      color: ${COLORS.ERROR};
    }
  }

  label {
    color: ${COLORS.DOVE_GRAY1};
  }
`

export const ButtonWrap2 = styled.div`
  display:flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;

  &.step2 {
    margin-top: 5px;
  }

  &.step3 {
    margin-top: 45px;
    padding-right: 0;
  }

  &.step4 {
    margin-top: 21px;
  }
`

export const GroupInputRadio = styled.div`
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
      position: absolute;
      left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label
  {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: ${COLORS.DOVE_GRAY1};
    font-weight: 700;

    &.black {
      color: ${COLORS.BLACK};
      font-weight: 500;
    }
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      border: 1px solid #0679be;
      border-radius: 100%;
      background: #fff;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
      content: '';
      width: 10px;
      height: 10px;
      background: #0679be;
      position: absolute;
      top: 4px;
      left: 4px;
      border-radius: 100%;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
  }
  [type="radio"]:checked + label:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
  }

`

export const DFlex = styled(BaseContentStyle)`
  display:flex;
  width: 100%;
  justify-content: space-between;

  &.step1 {
    margin-top: 13px;
    padding-right: 0;
  }
`;

export const FWrap = styled(DFlex)`
  flex-wrap: wrap;
`;

export const Subject = styled.div`
  padding: 0px 0px 30px 40px;
  font-weight: 700;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 23px;
  color: ${(props) => (props?.color ? props?.color : COLORS.DOVE_GRAY)};
`

export const Title = styled.div`
  padding: 18px 0;
  font-weight: 700;
  text-align: center;
  font-size: 23px;
  color: ${(props) => (props?.color ? props?.color : COLORS.DOVE_GRAY3)};
`

export const WrapButton = styled.div<BaseContentStyleProps>`
  display:flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;

  button,input {
    padding: 15px 30px;
    border: solid 1px #ccc;
    margin: 0 10px;
    border-radius: 10px;
    font-size: 20px;
    color: ${(props) => (props?.color ? props?.color : COLORS.DOVE_GRAY)};
    background-color: ${(props) => (props?.bColor ? props?.bColor : COLORS.BLACK)};
    font-weight: 700;
    transition: ease-in 0.5s;
    margin-bottom: 15px;

    :hover{
      background-color: ${(props) => (props?.activeColor ? props?.activeColor : COLORS.DOVE_GRAY)};
      color: white;
    }

    &.active {
      background-color: ${(props) => (props?.activeColor ? props?.activeColor : COLORS.DOVE_GRAY)};
      color:white
    }
  }

`
export const WrapReceipt = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    color: #aaa;
    margin-bottom: 1rem;
  }

  &.step3 {
    margin-top: 15px;
  }

  .w25 {
    width: 25%;
  }

  .w100 {
    width: 120px;
  }

  .w150 {
    width: 180px;
  }

`
export const GiftDetail = styled.div`
  width: 100%;

  .e-title {
    font-size: 18px;
    padding: 10px 0 0 20px;
    color: ${COLORS.DOVE_GRAY2};

    label {
      color: ${COLORS.DOVE_GRAY2};
      font-weight: 700;
    }
    p {
      padding-left: 15px;
      margin-bottom: 5px;
    }
  }

`
