"use client";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { User } from "lucide-react";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function SignInButton() {
  const CreateUser = useMutation(api.users.CreateUser);
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

      console.log(userInfo.data);
      const user = userInfo.data;

      // Save the user info to the database
      const result = await CreateUser({
        name: user?.name,
        email: user?.email,
        picture: user?.picture,
      });

      const userDetail = {
        ...user,
        _id: result?.id ?? result,
      };
      if (typeof window !== undefined) {
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <button
      onClick={googleLogin}
      className="flex items-center gap-2 cursor-pointer p-2 pr-4 pl-4 border-2 border-slate-800 text-slate-100 font-medium bg-slate-800 duration-150 hover:bg-slate-950 rounded-sm shadow-lg hover:shadow-none"
    >
      Get Started
      <User className="w-4 h-4" />
    </button>
  );
}

export default SignInButton;
