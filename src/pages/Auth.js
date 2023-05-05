import "../App.css";
import React, { useState, useEffect } from "react";

function Auth() {
  const [hasAccount, setHasAccount] = useState(true);
  function account() {
    if (hasAccount == true) {
      setHasAccount(false);
    } else {
      setHasAccount(true);
    }
    console.log(hasAccount);
  }

  return (
    <div className="w-full relative">
      <div className=" flex">
        <div className=" text-center px-8 w-1/2 bg-[#E7E7E7] ">
          <div>
            <a href="/">
              <img
                src="images/Black_Logo.png"
                className="mx-auto mt-14"
                alt="logo"
              />
            </a>
          </div>
          <form className="border-2 mx-auto rounded shadow-xl mt-12 items-center w-2/5">
            <p className="text-2xl pt-4 font-semibold">Login</p>
            <p>
              Not registered yet? <a href="/register">Create one</a>
            </p>
            <div className="pt-2 px-4 text-left w-full">
              <label className="text-primary-body  font-medium">
                Email Address
              </label>
              <input
                className="rounded border-gray-300 bg-violet-200 w-full my-1 text-primary-body"
                type="email"
                placeholder="name@email.com"
                name="email"
              />
            </div>

            <div className="w-full  px-4 text-left">
              <label className="text-primary-body font-medium">Password</label>
              <div className="w-full my-1 relative">
                <input
                  className="rounded border-gray-300 w-full bg-violet-200 relative top-0 pr-10"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
            <div className="py-4 px-4">
              <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-2 w-full  rounded-full">
                {" "}
                LOGIN
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 h-screen items-center  borderRadius ">
          <img
            src="images/Auth-illustration.png"
            className="mx-auto"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
export default Auth;
