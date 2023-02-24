import React from "react";
import { HeaderSideBarLayout } from "../../components/Layout/HeaderSideBarLayout";
import { useAuth } from "../../context/AuthContext";

function Page1() {
  const { authObj, authConfig } = useAuth();
  console.log(authObj);
  return (
    <HeaderSideBarLayout>
      <div
        style={{
          border: "solid 1px lightgray",
        }}
      >
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() =>
            authConfig({
              userId: 1,
              username: "hwanMin",
              auth: true,
              token: "#asdasdasdsad",
            })
          }
        >
          Click Me
        </div>
      </div>
    </HeaderSideBarLayout>
  );
}

export default Page1;
