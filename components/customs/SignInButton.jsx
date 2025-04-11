"use client";
import React from "react";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";

function SignInButton() {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: "Bearer" + tokenResponse?.access_token,
          },
        }
      );

      console.log(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return <Button onClick={googleLogin}>Get Started</Button>;
}

export default SignInButton;
