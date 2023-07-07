import React, { useEffect, useRef } from "react";
// import NavBar from "../components/layout/NavBar";
import Body from "../components/layout/Body";
import AuthImage from "../assets/auth-imagepng.png";
import WomenAuthImage from "../assets/WomenAuthImage.jpg";
import Input from "../components/utilities/Input";
import Button from "../components/utilities/Button";

const Auth = () => {
  const signIn = useRef();
  const signUp = useRef();
  const signInImage = useRef();
  const signUpImage = useRef();

  const scrollUp = () => {
    signIn?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollDown = () => {
    signUp?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Body>
        <div className="w-full px-4 flex flex-col lg:flex-row gap-10 justify-center mt-6 h-[80vh]">
          {/* sign in and sign up form container */}
          <div className="w-4/5 lg:w-[40%] bg-white/30 overflow-hidden noscrollBar">
            {/* Sign in Component  */}
            <div
              ref={signIn}
              className="flex flex-col gap-20 items-center p-6 lg:p-16 w-full h-full"
            >
              <p className="text-4xl text-primary font-semibold font-primary">
                Sign in
              </p>
              <form className="flex flex-col gap-8 w-full lg:w-4/5">
                <Input type="email" placeholder="Email Address" />
                <div className="flex flex-col gap-2 w-full items-end">
                  <Input type="password" placeholder="Password" />
                  <p className="text-xs ">Forgot Password?</p>
                </div>
                <div className="flex flex-col gap-4 w-full items-center">
                  <Button>Sign in</Button>
                  <p className="text-sm ">
                    Dont have an account?
                    <span
                      onClick={scrollDown}
                      className="font-medium text-sky-500 cursor-pointer"
                    >
                      
                      Sign up
                    </span>
                  </p>
                </div>
              </form>
            </div>

            {/* Sign up Component  */}
            <div
              ref={signUp}
              className="flex flex-col gap-20 items-center p-6 lg:p-16 w-full h-full"
            >
              <p className="text-4xl text-primary font-semibold font-primary">
                Sign up
              </p>
              <form className="flex flex-col gap-8 w-full lg:w-4/5">
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <div className="flex flex-col gap-4 w-full items-center">
                  <Button>Sign up</Button>
                  <p className="text-sm ">
                    Already have an account?
                    <span
                      onClick={scrollUp}
                      className="font-medium text-sky-500 cursor-pointer"
                    >
                      {" "}
                      Sign in
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Image for Auth */}
          <div className="w-4/5 lg:w-[40%] bg-white/30 overflow-auto noscrollBar">
            {/* <img
              ref={signInImage}
              src={WomenAuthImage}
              alt="Auth Placeholder"
              className="h-[80vh] object-cover w-full"
            /> */}
            <img
              ref={signUpImage}
              src={AuthImage}
              alt="Auth Placeholder"
              className="h-[80vh] object-cover w-full"
            />
          </div>
        </div>
      </Body>
    </>
  );
};

export default Auth;
