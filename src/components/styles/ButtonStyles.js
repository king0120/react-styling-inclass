import styled, { keyframes } from "styled-components";
import { rubberBand } from 'react-animations'

const rBand = keyframes`${rubberBand}`;

export const ButtonStyles = styled.a`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3c93d5;
  &:hover {
    background-color: #6fc6ff;
    animation: ${rBand} 2s 1;
  }
  &:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;

export const ErrorButton = ButtonStyles.extend`
  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #ce3323;
  &:hover {
    background-color: #ff6656;
  }
`;
export const SuccessButton = ButtonStyles.extend`
  background-color: #2ecc71;
  box-shadow: 0px 5px 0px 0px #15b358;
  &:hover {
    background-color: #48e68b;
  }
`;

export const InfoButton = ButtonStyles.extend`
  background-color: #f1c40f;
  box-shadow: 0px 5px 0px 0px #d8ab00;
  &:hover {
    background-color: #ffde29;
  }
`;
