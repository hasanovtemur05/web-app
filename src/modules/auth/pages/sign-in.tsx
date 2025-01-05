import { Button, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { SignInType } from "../types";

const SignIn = () => {
  const navigate = useNavigate()
  function handleSubmit(values: SignInType): void {
    const password = values.password
    if (password === "123" ) {
      navigate("/admin-layout");
    }
  }

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[70%] flex flex-col justify-center items-center md:w-[50%]">
          <div className="w-full md:w-[60%]">
            <h1
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bold",
                padding: "10px 10px",
              }}
            >
              Login
            </h1>
            <Form onFinish={handleSubmit} layout="vertical">
              <Form.Item
                name="email"
                label={<span style={{ fontSize: "14px" }}>Email</span>}
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  style={{ padding: "6px 15px", fontSize: "16px" }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={<span style={{ fontSize: "14px" }}>Password</span>}
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  style={{ padding: "7px 15px", fontSize: "16px" }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="font-medium "
                  style={{
                    backgroundColor: "#ffa107",
                    fontSize: "16px",
                    padding: "25px",
                  }}
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div className=" flex gap-3">
              <h1>Don’t you have an account?</h1>
              <NavLink to={"/sign-up"} className="text-[#ffa107] font-medium">
                Registrate
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
