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

    &.error, &.error::placeholder {
      color: ${COLORS.ERROR};
    }
  }

  input::placeholder {
    color: #babbc0;
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
  position: absolute;
  bottom: 0;
  left: 0;

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

    &.black {
      color: #212529;
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

  &.wrap--date {
    position:relative;
  }
  .input--date {
    display:none;
    position: absolute;
    bottom: 36px;
    left: -50%;
    width: auto;
    height:auto;
  }
  &.wrap--date.active .input--date {
    display:block;
  }

  &.margin-left {
    margin-left: 45px;
  }
`

export const DFlex = styled(BaseContentStyle)`
  display:flex;
  width: 100%;
  justify-content: space-between;

  &.step1 {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const FWrap = styled(DFlex)`
  flex-wrap: wrap;
`;

export const Subject = styled.div`
  padding: 0px 0px 30px 40px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 23px;
  color: ${(props) => (props?.color ? props?.color : COLORS.ROOT)};

  &.no-paddingBottom {
    padding-bottom: 0;
  }
`

export const Title = styled.div`
  padding: 18px 0;
  text-align: center;
  font-size: 20px;
  color: ${(props) => (props?.color ? props?.color : COLORS.ROOT)};
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
    color: ${(props) => (props?.color ? props?.color : COLORS.ROOT)};
    background-color: ${(props) => (props?.bColor ? props?.bColor : COLORS.BLACK)};
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

  .wrap--customAmount {
    position: relative;

    label {
      position: absolute;
      top: 20px;
      left: calc(50% - 35px);
      color: #fff;
    }
    &.error input, &.error label{
      color: ${COLORS.ERROR}
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

`
export const WrapReceipt = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    color: #aaa;
    margin-bottom: 1.5rem;
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
export const WrapInformation = styled.div`
  position: relative;
  font-size: 14px;


  .info-gift {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    text-align: center;
  }

  .company-name {
    color: red;
  }
  .phone {
    font-weight: 700;
  }

  .address {
    font-size: 12px;
  }

  .redeem-code {
    position: absolute;
    font-size: 16px;
    left: calc(50% - 92px);
    bottom: 56px;

    &.gift {
      bottom: 70px;
    }
  }

`
