import { useState } from "react";


function SignUp(props) {

  // useState
  const [move, setMove] = useState(false);

  function handelMove() {
    setMove(!move);
  }

  return (
    <div className="my-12 mx-auto w-11/12 text-white md:w-1/3">
      {/* title */}
      <div className="my-8 text-center">
        <h1 className="text-4xl my-2">Welcome!</h1>
        <p>Use these awesome forms to login or create</p>
        <p>new account in your project for free.</p>
      </div>

      {/* sign up box */}
      <div className="w-11/12 mx-auto border border-slate-600 p-8 rounded-3xl">

        {/* Register With */}
        <h1 className="text-center text-xl">Register With</h1>

        {/* icons */}
        <div className="flex justify-around my-8">
          <div className="border-2 p-5 rounded-3xl border-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="border-2 p-5 rounded-3xl border-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>
          </div>
          <div className="border-2 p-5 rounded-3xl border-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
              <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
            </svg>
          </div>
        </div>
        <h1 className="text-center text-lg text-cyan-200 mb-4">or</h1>

        {/* sign up form */}
        <form className="w-11/12">
          <label htmlFor="e">Name</label>
          <br />
          <input
            className="my-2 w-full h-8 rounded-xl bg-red-800 p-4 text-sm border border-slate-600 outline-none focus:border-slate-500 focus:border-2"
            id="e"
            type="text"
            placeholder="Your full name..."
          />
          <br />
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
            value="SIGN UP"
          />
        </form>
        <div className="my-4 text-center">
          <p className="text-slate-400">
            Already have an account?{" "}
            <a
              onClick={() => {
                props.handleName("SignIn");
              }}
              className="text-white font-medium"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
