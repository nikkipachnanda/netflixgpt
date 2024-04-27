import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>

      <form className="absolute p-12 bg-black bg-opacity-80 w-4/12 my-36 mx-auto right-0 left-0 text-white">
        <h2 className="font-bold py-4 text-3xl">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <button className="p-2 my-4 bg-red-700 w-full font-bold rounded-lg">
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          <span className="">
            {isSignInform
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}{" "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
