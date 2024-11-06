import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/submitButton";

const RegisterForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-2">
        <div>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" name="firstname" placeholder="John" />
        </div>
        <div>
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" name="lastname" placeholder="Doe" />
        </div>
        <div>
          <Label htmlFor="username">User name</Label>
          <Input id="username" name="username" placeholder="John Doe" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="john@example.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
        </div>
        <SubmitButton>Register</SubmitButton>
      </div>
    </form>
  );
};

export default RegisterForm;
