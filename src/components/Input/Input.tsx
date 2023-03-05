import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import styled from "styled-components";

interface StyleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

function Input({ label, helperText, ...props }: StyleInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Container>
      <InputBox>
        {label && <Label>{label}</Label>}
        <CoreInput {...props} ref={inputRef} />
      </InputBox>
      {helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  );
}

export default Input;

const Container = styled.div``;

const InputBox = styled.div``;

const Label = styled.label`
  font-size: 1.5rem;
`;

const CoreInput = styled.input`
  width: 20rem;
  height: 3rem;
  border: none;
  border-bottom: solid 2px lightgray;

  &:focus {
    outline: none;
    transition: 1s;
    border-bottom: solid 2px blue;
  }
`;

const HelperText = styled.p``;
