import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
        <Input label="비밀번호" />
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

const SignUpForm = styled.form``;
