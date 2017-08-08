import React, { Component } from "react";
import { ButtonStyles, ErrorButton, SuccessButton, InfoButton } from './styles/ButtonStyles';
import styled from "styled-components";


const Button = () => {
  return (
    <div>
      <ButtonStyles href="#">Click Me</ButtonStyles>
      <ErrorButton>I've made a huge mistake</ErrorButton>
      <SuccessButton>Success</SuccessButton>
      <InfoButton>Info</InfoButton>
    </div>
  );
};

export default Button;
