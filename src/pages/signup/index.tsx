import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import HeaderLayout from "../../components/Layout/HeaderLayout";
import { useAuth } from "../../context/AuthContext";

function SignUp() {
  const { authConfig } = useAuth();
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <SignUpForm>
        <Input label="아이디" />
        <Input label="비밀번호" type="password" />
        <Input label="비밀번호 확인" type="password" />
        <Button label="회원가입" />
      </SignUpForm>
      {/* <div
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          authConfig({
            userId: 1,
            username: "hwanmin",
            auth: true,
            token: "#asdasdasdsad",
          });
          navigate("/page2");
        }}
      >
        Loing GoGO
      </div> */}
    </HeaderLayout>
  );
}

export default SignUp;

const SignUpForm = styled.form`
  padding: 5rem;
  width: 50rem;
  margin: auto;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
