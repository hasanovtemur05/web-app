import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { SignInType } from "../types";

const SignIn = () => {
  const navigate = useNavigate();
  function handleSubmit(values: SignInType): void {
    const password = values.password;
    if (password === "123") {
      navigate("/user-layout");
    }
  }

  return (
    <div className="w-[100%] h-[100vh] flex  items-center bg-white">
      <div className="w-[90%] md:w-[50%] sm:w-[60%] lg:w-[35%]   m-auto ">
        <h1 className="text-2xl font-bold mb-6">Log in</h1>

        <Form onFinish={handleSubmit} layout="vertical" className="w-full">
          <Form.Item
            name="email"
            label={<span className="text-sm font-medium">Your Email</span>}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              placeholder="hello@gmail.com"
              className="w-full border-0 border-b focus:border-black focus:ring-0 text-base py-2"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span className="text-sm font-medium">Password</span>}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="w-full border-0 border-b focus:border-black focus:ring-0 text-base py-2"
            />
          </Form.Item>

          <button className="w-full bg-black text-white py-2 rounded-full">
            log in
          </button>
        </Form>

        <div className="flex justify-center gap-4 mt-4 w-full">
          <button className="w-[40%] h-10  border border-black text-sm rounded-xl flex items-center justify-center hover:bg-gray-200">
            Facebook
          </button>
          <button className="w-[40%] h-10  border border-black text-sm rounded-xl  flex items-center justify-center hover:bg-gray-200">
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
