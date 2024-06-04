"use server";

import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { authKey } from "@/constant/authKey";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  cookies().set(authKey, userInfo?.data?.token);
  return userInfo;
};
