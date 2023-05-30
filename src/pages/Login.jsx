import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../services/baseApi";
import { useForm, Controller } from "react-hook-form";
import { pathRouters } from "../router";

function Login() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { username: "", password: "" },
  });
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const onSubmit = async (values) => {
    const { username, password } = values;

    // calling api
    try {
      const res = await instance.get("/users");
      const user = res.data.find((user) => {
        return (
          (username === user.email && password === user.password) ||
          (username === user.username && password === user.password)
        );
      });
      if (user) {
        localStorage.setItem("user_id", user.id);
        navigate(pathRouters.LIST);
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  function navSignup() {
    navigate(pathRouters.SIGNUP);
  }

  return (
    <div className="content">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-header">
          <span>LOGIN</span>
          <button className="button" onClick={navSignup}>
            Sign Up
          </button>
        </div>
        <Controller
          name="username"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <input
              {...rest}
              placeholder="Email/Username"
              className={`input-login password ${isError ? "input-error" : ""}`}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <input
              {...rest}
              type="password"
              placeholder="Password"
              className={`input-login password ${isError ? "input-error" : ""}`}
            />
          )}
        />
        <span className={!isError ? "login-success" : "login-error"}>
          *Tên đăng nhập hoặc mật khẩu không chính xác!
        </span>
        <button className="input-login button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
