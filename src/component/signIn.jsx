import { useState } from "react";


function SignIn(props) {

  // useState
  const [move, setMove] = useState(false);

  function handelMove() {
    setMove(!move);
  }

  return (
    <div className="my-12 mx-auto w-11/12 text-white md:w-1/3">
      {/* title */}
      <div className="my-8">
        <h1 className="text-4xl my-2">Nice to see you!</h1>
        <p>Enter your email and password to sign in</p>
      </div>

      {/* sign in form */}
      <form>
        <label htmlFor="e">Email</label>
        <br />
        <input
          className="my-2 w-full h-8 rounded-xl bg-red-800 p-4 text-sm border border-slate-600 outline-none focus:border-slate-500 focus:border-2"
          id="e"
          type="text"
          placeholder="Your email..."
        />
        <br />
        <label htmlFor="p">Password</label>
        <br />
        <input
          className="my-2 w-full h-8 rounded-xl bg-red-800 p-4 text-sm border border-slate-600 outline-none focus:border-slate-500 focus:border-2"
          id="p"
          type="text"
          placeholder="Your password..."
        />
        <br />
        <div className="flex gap-3 mt-4">
          <div
            onClick={handelMove}
            style={{
              justifyContent: move ? "flex-end" : "flex-start",
              backgroundColor: move ? "#0ea5e9" : "black",
            }}
            className="w-12 h-6 p-1 rounded-xl flex items-center transition-all duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 bg-white rounded-full"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p>Remember me</p>
        </div>
        <br />
        <input
          className="my-2 w-full h-8 rounded-xl bg-sky-500 text-sm"
          type="submit"
          value="SIGN IN"
        />
      </form>
      <div className="my-4 text-center">
        <p className="text-slate-400">
          Don't have an account?{" "}
          <a
            onClick={() => {
              props.handleName("SignUp");
            }}
            className="text-white font-medium"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
