"use server";

import { FormState, RegisterFormSchema } from "@/lib/types";
import { BACKEND_URL } from "@/lib/constants";
import { redirect } from "next/navigation";

export async function registerUser(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  const validationFields = RegisterFormSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    redirect("/auth/sighin");
  }

  return {
    message:
      response.status === 409
        ? "The user is already existed!"
        : response.statusText,
  };
}
