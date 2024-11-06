"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/submitButton";
import { useFormState } from "react-dom";
import { registerUser } from "@/lib/auth";

const RegisterForm = () => {
  const [state, action] = useFormState(registerUser, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-2">
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <div>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" name="firstname" placeholder="John" />
        </div>
        {state?.error?.firstname && (
          <p className="text-sm text-red-500">{state.error.firstname}</p>
        )}
        <div>
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" name="lastname" placeholder="Doe" />
        </div>
        {state?.error?.lastname && (
          <p className="text-sm text-red-500">{state.error.lastname}</p>
        )}
        <div>
          <Label htmlFor="username">User name</Label>
          <Input id="username" name="username" placeholder="John Doe" />
        </div>
        {state?.error?.username && (
          <p className="text-sm text-red-500">{state.error.username}</p>
        )}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="john@example.com" />
        </div>
        {state?.error?.email && (
          <p className="text-sm text-red-500">{state.error.email}</p>
        )}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
        </div>
        {state?.error?.password && (
          <div className="text-sm text-red-500">
            <p>Password must:</p>
            <ul>
              {state?.error.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <SubmitButton>Register</SubmitButton>
      </div>
    </form>
  );
};

export default RegisterForm;
