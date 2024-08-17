import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";
import { InputBox } from "../Components/InputBox";

export const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Heading label="Sign in" />
        <SubHeading label="Enter your credentials to access your account" />
        
        <div className="space-y-4 mt-6">
          <InputBox placeholder="samisha@gmail.com" label="Email" />
          <InputBox placeholder="12345" label="Password" />
        </div>
        
        <div className="pt-6">
          <Button label="Sign in" />
        </div>

        <div className="pt-6 text-center">
          <BottomWarning label="Don’t have an account?" buttonText="Sign up" to="/signup" />
        </div>
      </div>
    </div>
  );
}
