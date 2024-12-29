import React from "react";
import "../../assets/style/style.css";
import image4 from "../../assets/Signin/images/auth-login-image4.png";
import logo from "../../assets/Signin/images/logo-purpose.png";
import Google from '../../assets/Signin/images/Social icon.png'
import eye from '../../assets/Signin/images/eye.png'
const Signin = () => {
  return (
    <div class="h-screen gap-[1.5rem] flex p-[1rem]  ">
      <div class="w-1/2 bg-gradient-to-b  from-[#018AAF] to-[#46BADA]  rounded-[1.25rem] hidden 2xl:block ">
        <div className="layerAuth relative">
          <div className="image-login"></div>
        </div>
        <div className="text-center pt-[2.3rem] pb-[3rem] w-[19rem] text-white m-auto ">
          <h2 className="text-[1.5rem] font-bold">Seamless Social Media</h2>
          <p className="text-[1.1rem]">
            Effortlessly work together with your team in real-time.
          </p>
          <div className="m-auto flex justify-center pt-[2rem]">
            <img src={image4} alt={image4} />
          </div>
        </div>
      </div>

      <div class="2xl:w-1/2 w-full flex items-center justify-center  ">
        <div class="w-3/4 max-w-md ">
          <div class="2xl:text-start text-center mb-3 sm:mb-6">
            <img
              src={logo}
              alt="Logo"
              class="mb-[0.8rem] sm:mb-[1.3rem] sm:h-[3.1rem] sm:w-[3.6rem] h-[2.5rem] w-[2.5rem] mx-auto 2xl:m-0"
            />
            <h2 class="text-[1.2rem] sm:text-[1.6rem] font-[600] leading-[2.5rem] mb-[0.3rem]">
              Sign in
            </h2>
            <p class="text-[#667085] font-normal text-[0.73rem] sm:text-[0.83rem]">
              Wecome Back! 👋 Log-in to get started
            </p>
          </div>
          <form className="mt[0.9rem] ">
            <div class="sm:mb-4 mb-3">
              <label
                class="block text-[#26203B] text-[0.7rem] sm:text-[0.8rem] font-[400]"
                for="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                class="mt-1 block w-full px-4 py-2 border border-[#018AAF66] rounded-[0.5rem] shadow-xl outline-none placeholder-[#9C9AA5]  placeholder:text-[0.658rem] sm:placeholder:text-[0.8rem] placeholder:font-normal"
              />
            </div>
            <div class="mb-4 relative">
              <label
                class="block text-[#26203B] text-[0.7rem] sm:text-[0.8rem] font-[400]"
                for="password"
              >
                Password
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  class="mt-1 block w-full px-4 py-2 border border-[#018AAF66] rounded-[0.5rem] shadow-xl outline-none placeholder-[#9C9AA5] placeholder:text-[0.658rem] sm:placeholder:text-[0.8rem] placeholder:font-normal"
                />
                <span
                  class="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer "
                  id="togglePassword"
                >
                  <img src={eye} alt="" className="h-[0.85rem] w-[0.85rem] sm:h-auto sm:w-auto"/>
                </span>
              </div>
            </div>
            <div class="flex  items-center justify-between  mb-4">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="h-3 w-3 sm:h-4 sm:w-4 bg-gray-200 rounded-[0.2rem]  checked:bg-btn checked:border-none"
                />
                <span className="m-0.5 sm:ml-2 sm:text-[0.8rem] text-[0.6rem] font-medium text-[#475467]">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="sm:text-[0.8rem] text-[0.5rem] font-semibold text-btn "
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-btn text-white py-[0.4rem] sm:py-[0.6rem] px-4 rounded-lg text-[0.8rem] sm:text-[0.9rem]"
            >
              Sign In
            </button>
          </form>

          <div class="flex items-center justify-center sm:mt-[0.7rem] mt-[0.5rem] mb-[0.5rem] sm:mb-[0.7rem]">
            <div class="h-[1px] w-[80px] bg-[#9C9AA54D]"></div>
            <span class="mx-4 text-[#9C9AA54D] text-[0.7rem] sm:text-[0.8rem]">
              OR
            </span>
            <div class="h-[1px] w-[80px] bg-[#9C9AA54D]"></div>
          </div>

          <div className="border border-[#D0D5DD] rounded-[0.8rem] gap-[10px] flex items-center px-2 py-[0.4rem] sm:py-[0.6rem] justify-center">
            <img
              src={Google}
              alt=""
              className="sm:h-[1rem] sm:w-[1rem] h-[0.88rem] w-[0.88rem]"
            />
            <p className="text-[0.55rem] sm:text-[0.8rem] font-medium">
              Sign in with Google account
            </p>
          </div>

          <div className="text-center mt-4 leading-[22px]">
            <p className="text-[0.8rem] sm:text-sm text-[#475467] font-normal">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-btn font-semibold text-[0.8rem] sm:text-[0.87rem]"
              >
                Sign up
              </a>
            </p>
          </div>
          <div className="m-auto mt-[1rem]">
            <p className="text-[0.588rem] sm:text-[0.7rem] font-normal  text-[#9C9AA5]  text-center pt-[0.5rem]">
              By signing up to create an account I accept Company’s
              <span className="text-[#26203B] m-auto block">
                Terms of use & Privacy Policy.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
