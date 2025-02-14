import { useState } from "react";


function Nav(props) {
  
  // useState
  let [bg, setBg] = useState(Array(7).fill(true));
  const [CAO, setCAO] = useState(true);
  let [border, setBorder] = useState(Array(5).fill(true));
  const [OAC, setOAC] = useState(true);
  const [move, setMove] = useState(true);
  const [info, setInfo] = useState(true);

  // handle functions

  function handleBg(i) {
    bg.fill(true);
    let newBg = [...bg];
    newBg[i] = !newBg[i];
    setBg((bg = [...newBg]));
  }

  function handleCAO() {
    setCAO(!CAO);
  }

  function handleBorder(i) {
    border.fill(true);
    let newBorder = [...border];
    newBorder[i] = !newBorder[i];
    setBorder((border = [...newBorder]));
  }

  function handleOAC() {
    setOAC(!OAC);
  }

  function handelMove() {
    setMove(!move);
  }

  function handleInfo() {
    setInfo(!info);
  }

  return (
    // navbar
    <div className="flex justify-center items-center w-full">
      <div className="fixed w-11/12 z-20">
        {/* menu */}
        <div className="p-2 rounded-3xl backdrop-blur-lg border md:flex md:justify-between">
          {/* title */}
          <div className="flex flex-col">
            <div className="flex justify-start items-center">
              <svg
                className="size-5 text-slate-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              <h1 className="font-semibold text-white">/ {props.name}</h1>
            </div>
            <h1 className="text-white font-bold text-lg m-1">{props.name}</h1>
          </div>

          {/* search and icons */}
          <div className="flex justify-between items-center md:justify-end">
            {/* search box */}
            <div className="flex items-center bg-red-700 p-1 rounded-3xl w-1/3 md:w-2/3 mr-2 border border-red-300">
              <svg
                className="size-5 text-white mx-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                className="bg-red-700 text-white w-4/5 outline-1 outline-red-500 focus:pl-2 m-0 rounded-r-2xl"
                type="text"
                placeholder="Type here..."
              />
            </div>

            {/* btns */}
            <div className="flex items-center justify-around w-1/3 md:w-2/3">
              {/* sign in btn*/}
              <div
                onClick={() => {
                  props.handleName("SignIn");
                }}
                className="flex items-center gap-1"
              >
                <svg
                  className="size-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-white hidden md:block">Sign in</p>
              </div>

              {/* menu mtn */}
              <div onClick={handleCAO}>
                <svg
                  className="size-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>

              {/* setting btn */}
              <div onClick={handleOAC}>
                <svg
                  className="size-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* notification btn */}
              <div onClick={handleInfo}>
                <svg
                  className="size-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div
        className="fixed top-1 z-30 w-80 h-full bg-red-600 text-white rounded-3xl transition-all duration-500"
        style={{
          left: CAO ? "-350px" : "4px",
        }}
      >
        {/* title */}
        <div className="border-b flex items-center justify-center gap-2 py-4 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
          </svg>

          <p className="text-lg">DANIAL GHOBEISHAVI</p>

          {/* close btn */}
          <div
            onClick={handleCAO}
            className="absolute top-2 right-2 rounded-full active:bg-red-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Dashboard btn */}
        <div
          onClick={() => {
            handleBg(0);
            props.handleName("Dashboard");
            setCAO(!CAO);
          }}
          style={{
            backgroundColor: bg[0] ? "" : "#f87171",
          }}
          className="flex items-center gap-4 p-2 m-2 w-11/12 mx-auto rounded-xl"
        >
          <div
            style={{
              backgroundColor: bg[0] ? "#f87171" : "#b91c1c",
              color: bg[0] ? "#b91c1c" : "white",
            }}
            className="p-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          </div>
          <p>Dashboard</p>
        </div>

        {/* tabels btn */}
        <div
          onClick={() => {
            handleBg(1);
          }}
          style={{
            backgroundColor: bg[1] ? "" : "#f87171",
          }}
          className="flex items-center gap-4 p-2 m-2 w-11/12 mx-auto rounded-xl"
        >
          <div
            style={{
              backgroundColor: bg[1] ? "#f87171" : "#b91c1c",
              color: bg[1] ? "#b91c1c" : "white",
            }}
            className="p-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
            </svg>
          </div>
          <p>Tabels</p>
        </div>

        {/* billing btn */}
        <div
          onClick={() => {
            handleBg(2);
          }}
          style={{
            backgroundColor: bg[2] ? "" : "#f87171",
          }}
          className="flex items-center gap-4 p-2 m-2 w-11/12 mx-auto rounded-xl"
        >
          <div
            style={{
              backgroundColor: bg[2] ? "#f87171" : "#b91c1c",
              color: bg[2] ? "#b91c1c" : "white",
            }}
            className="p-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
              <path
                fillRule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p>Billing</p>
        </div>

        {/* RTL btn */}
        <div
          onClick={() => {
            handleBg(3);
          }}
          style={{
            backgroundColor: bg[3] ? "" : "#f87171",
          }}
          className="flex items-center gap-4 p-2 m-2 w-11/12 mx-auto rounded-xl"
        >
          <div
            style={{
              backgroundColor: bg[3] ? "#f87171" : "#b91c1c",
              color: bg[3] ? "#b91c1c" : "white",
            }}
            className="p-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p>RTL</p>
        </div>

        {/* account pages */}
        <h1 className="m-3">ACCOUNT PAGES</h1>

        {/* profile btn */}
        <div
          onClick={() => {
            handleBg(4);
            props.handleName("Profile");
            setCAO(!CAO);
          }}
          style={{
            backgroundColor: bg[4] ? "" : "#f87171",
          }}
          className="flex items-center gap-4 p-2 m-2 w-11/12 mx-auto rounded-xl"
        >
          <div
            style={{
              backgroundColor: bg[4] ? "#f87171" : "#b91c1c",
              color: bg[4] ? "#b91c1c" : "white",
            }}
            className="p-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p>Profile</p>
        </div>

        {/* sign in btn */}
        <div
          onClick={() => {
            handleBg(5);
            props.handleName("SignIn");
            setCAO(!CAO);
          }}
          style={{
            backgroundColor: bg[5] ? "" : "#f87171",
          }}
          className="flex items-center gap-4 p-2 m-2 w-11/12 mx-auto rounded-xl"
        >
          <div
            style={{
              backgroundColor: bg[5] ? "#f87171" : "#b91c1c",
              color: bg[5] ? "#b91c1c" : "white",
            }}
            className="p-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
          </div>
          <p>Sign In</p>
        </div>

        {/* sign up btn */}
        <div
          onClick={() => {
            handleBg(6);
            props.handleName("SignUp");
            setCAO(!CAO);
          }}
          style={{
            backgroundColor: bg[6] ? "" : "#f87171",
          }}
          className="flex items-center gap-4 p-2 m-2 w-11/12 mx-auto rounded-xl"
        >
          <div
            style={{
              backgroundColor: bg[6] ? "#f87171" : "#b91c1c",
              color: bg[6] ? "#b91c1c" : "white",
            }}
            className="p-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                clipRule="evenodd"
              />
              <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>
          </div>
          <p>Sign Up</p>
        </div>
      </div>

      {/* sitting btn */}
      <div
        onClick={handleOAC}
        className="fixed bottom-8 right-8 bg-red-500 p-3 rounded-full"
      >
        <svg
          className="size-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* setting menu */}
      <div
        style={{
          right: OAC ? "-350px" : "4px",
        }}
        className="absolute top-1 z-30 w-80 h-full bg-red-600 text-white rounded-3xl transition-all duration-500"
      >
        {/* title */}
        <div
          onClick={handleOAC}
          className="border-b flex items-center justify-center gap-2 py-4 relative"
        >
          <svg
            className="size-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-lg">SETTING</p>

          {/* close btn */}
          <div className="absolute top-2 right-2 rounded-full active:bg-red-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* choise colour */}
        <div className="w-11/12 mx-auto my-3">
          <h1 className="my-2">Sindenav Colours</h1>
          <div className="flex gap-2">
            <div
              onClick={() => {
                handleBorder(0);
              }}
              style={{ borderWidth: border[0] ? "1px" : "0px" }}
              className="w-5 h-5 rounded-full bg-blue-500"
            ></div>
            <div
              onClick={() => {
                handleBorder(1);
              }}
              style={{ borderWidth: border[1] ? "1px" : "0px" }}
              className="w-5 h-5 rounded-full bg-green-500"
            ></div>
            <div
              onClick={() => {
                handleBorder(2);
              }}
              style={{ borderWidth: border[2] ? "1px" : "0px" }}
              className="w-5 h-5 rounded-full bg-yellow-500"
            ></div>
            <div
              onClick={() => {
                handleBorder(3);
              }}
              style={{ borderWidth: border[3] ? "1px" : "0px" }}
              className="w-5 h-5 rounded-full bg-red-500"
            ></div>
            <div
              onClick={() => {
                handleBorder(4);
              }}
              style={{ borderWidth: border[4] ? "1px" : "0px" }}
              className="w-5 h-5 rounded-full bg-purple-500"
            ></div>
          </div>
        </div>

        {/* nav fix */}
        <div className="w-11/12 mx-auto mt-4 border-b pb-4">
          <h1>Navbar Fixed</h1>
          <div
            onClick={handelMove}
            style={{
              justifyContent: move ? "flex-end" : "flex-start",
              backgroundColor: move ? "#0ea5e9" : "black",
            }}
            className="mt-2 w-12 h-6 p-1 rounded-xl flex items-center transition-all duration-500"
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
        </div>

        {/* info btn */}
        <div className="w-11/12 mx-auto text-center my-2">
          <button className="w-full bg-sky-500 py-2 text-sm rounded-3xl mb-2">
            FREE DOWNLOAD
          </button>
          <br />
          <button className="w-full border text-sky-500 border-sky-500 py-2 text-sm rounded-3xl mb-2">
            VEIW DOCUMENTATION
          </button>
          <div className="flex justify-center items-center">
            <div className="rounded-l-md flex justify-center items-center border-r border-r-slate-500 shadow-lg bg-slate-400 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <p className="px-2">Star</p>
            </div>
            <div className="px-2 bg-slate-200 text-black shadow-lg rounded-r-md">
              117
            </div>
          </div>
        </div>
      </div>

      {/* notification */}
      <div
        style={{
          opacity: info ? "0" : "1",
        }}
        className="fixed z-30 right-1 top-36 md:top-28 w-80 bg-red-600 transition-all duration-500 rounded-xl p-2 text-white"
      >
        <div className="flex gap-4 items-center">
          <img className="w-10 rounded-xl" src="/image/m1.jpg" alt="" />
          <div>
            <h1 className="font-medium">
              New Message <span className="font-light">From Laur</span>
            </h1>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-normal text-sm">13 minutes ago</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center my-2">
          <img className="w-10 rounded-xl" src="/image/c3.jpg" alt="" />
          <div>
            <h1 className="font-medium">
              New Car <span className="font-light">From Ferrari</span>
            </h1>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-normal text-sm">1 day</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
          <div>
            <h1 className="font-light">Paymant Successfully Complated</h1>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-normal text-sm">13 minutes ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-36 md:h-28"></div>
    </div>
  );
}

export default Nav;
