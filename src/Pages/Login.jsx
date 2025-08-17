import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col p-4 md:p-1 gap-4 justify-center items-center w-[100%] h-[100vh]">
      <div
        className=" w-[100%] md:w-[30%]  border flex flex-col gap-4 p-2"
        data-aos="flip-left"
      >
        <h1 className="text-center">Login</h1>
        <div>
          <label htmlFor="userInput">Username</label> <br />
          <input
            className="w-[100%] border shadow-sm outline-none p-2 rounded-md"
            type="text"
            placeholder="Enter Your Username"
            id="userInput"
          />
        </div>
        <div>
          <label htmlFor="userInput">Password</label> <br />
          <input
            className="w-[100%] border shadow-sm outline-none p-2 rounded-md"
            type="text"
            placeholder="Enter Your Password"
            id="userInput"
          />
        </div>
        <button className="px-4 hover:shadow-xl bg-green-400 rounded-md py-2 shadow-lg border">
          Login
        </button>
      </div>
      <div data-aos="flip-down">
        <a href="/">Forget Password</a> |{' '}
        <span className="font-bold cursor-pointer">Sign-Up</span>
      </div>
    </div>
  );
};

export default Login;
