import Link from "next/link";
import RegisterForm from "@/app/auth/register/registerForm";

const RegisterPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold mb-4">
        Register user page
      </h1>
      <RegisterForm />
      <div className="flex justify-between text-sm">
        <p>Already have an account?</p>
        <Link href={"/auth/signin"}>Sign In</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
