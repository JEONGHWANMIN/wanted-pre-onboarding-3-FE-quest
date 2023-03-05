import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface StyleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
function Button({ label, ...props }: StyleButtonProps) {
  return <StyledButton {...props}>{label ?? ""}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  width: 100%;
  height: 3rem;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;
