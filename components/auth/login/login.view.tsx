import { FormTextField, OutlineButton } from "@/uikit/ui";
import Image from "next/image";
import { LoginSchemaType } from "./login.model";

export default function LoginView() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden mx-4 md:mx-0">
        {/* Login Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          {/* <h2 className="text-2xl font-semibold text-center mb-6">Login</h2> */}
          <p className="bg-gray-300 text-center border border-gray-400 p-8 mb-6">
            Company Logo
          </p>

          <div className="space-y-4">
            <div>
              <FormTextField<LoginSchemaType>
                type="text"
                name="username"
                placeholder="username"
              />
            </div>
            <div>
              <FormTextField<LoginSchemaType>
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            {/* Remember Me & Forgot Password Section */}
            {/* <div className="sm:flex justify-between items-center text-sm">
              <Checkbox
                label="Remember Me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <TextButton
                className="mt-2 sm:mt-0"
                text="Forgot Password?"
              />
            </div> */}
            <div>
              <OutlineButton type="submit">Login</OutlineButton>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 items-center justify-center bg-gray-200 p-6 hidden sm:block">
          <div>
            <Image
              src={"/assets/login.jpg"}
              width={400}
              height={400}
              alt={"Login"}
            />
            <p className="text-center mt-2">Manage Your agency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
