import Link from "next/link";
import RegisterForm from "@/app/auth/register/registerForm";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg w-96 flex flex-col justify-center items-center">
      <Image className="mb-5" src="/assets/img/logo.png" alt="Logo" width={150} height={150} />
      <h1 className="text-center text-2xl font-bold mb-4">
        Register user page
      </h1>
      <RegisterForm />
      <div className="flex gap-4 text-sm">
        <p>Already have an account?</p>
        <Link href={"/auth/signin"}>Sign In</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
