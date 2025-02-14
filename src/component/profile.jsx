import ReactECharts from "echarts-for-react";
import { useState } from "react";


function Profile() {

  // useState
  let [move, setMove] = useState(Array(7).fill(true));

  function handelMove(i) {
    let newMove = [...move];
    newMove[i] = !newMove[i];
    setMove((move = [...newMove]));
  }


  // charts
  const circle = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 68, name: "Loaded" },
          { value: 32, name: "Unloaded" },
        ],
      },
    ],
  };

  const line = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <div className="my-4 w-11/12 mx-auto text-white">
      {/* About me */}
      <div className="md:flex md:justify-between bg-red-800 rounded-3xl p-4">
        <div className="md:flex md:items-center md:gap-10">
          <img className="w-20 rounded-3xl" src="/image/car.png" alt="" />
          <div className="my-1">
            <h1 className="text-xl">Danial Ghobeishavi</h1>
            <p className="text-sm text-cyan-200">danial.@gmail.com</p>
          </div>
        </div>
        <div className="my-4 md:w-1/2 md:my-0">
          <div className="flex justify-center items-center gap-2 my-1 rounded-3xl hover:bg-sky-500 transition-bg duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
            </svg>
            <p>OVERVIEW</p>
          </div>
          <div className="flex justify-center items-center gap-2 my-1 rounded-3xl hover:bg-sky-500 transition-bg duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
            <p>TEAMS</p>
          </div>
          <div className="flex justify-center items-center gap-2 my-1 rounded-3xl hover:bg-sky-500 transition-bg duration-500">
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
            <p>PROJECTS</p>
          </div>
        </div>
      </div>

      {/* Welcome img */}
      <div className="flex justify-center my-8 text-white">
        <div className="img w-full rounded-2xl p-3 flex flex-col justify-between gap-24 bg-cover py-10 px-5">
          <div>
            <p className="text-4xl mb-3 fon">Welcome back!</p>
            <p className="text-base font-medium mb-6">
              Nice to see you, Danial Ghobeishavi!
            </p>
          </div>
          <div className="flex items-center text-white font-medium">
            <p className="text-base">Tap to record</p>
            <svg
              className="size-5 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Informations */}
      <div className="bg-red-800 rounded-3xl p-4">
        <div>
          <h1>Car Informations</h1>
          <p>Hello, Danial Ghobeishavi</p>
        </div>
        <div className="md:flex">
          <div className="my-2 md:w-1/5">
            <div className="-mb-6 w-full">
              <ReactECharts option={circle} />
            </div>
            <div className="text-center">
              <h1 className="text-xl">0h 58 min</h1>
              <p className="text-sm text-cyan-200">Time to full charge</p>
            </div>
          </div>
          <div className="md:w-4/5 md:grid md:grid-cols-2 md:gap-4 h-full my-auto">
            <div className="flex justify-between items-center rounded-3xl w-11/12 md:w-full bg-red-900 p-4 ">
              <div>
                <p className="text-sm text-cyan-200">Battery Health</p>
                <p className="text-2xl">76%</p>
              </div>
              <div className="p-2 bg-sky-600 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center rounded-3xl w-11/12 md:w-full bg-red-900 p-4 ">
              <div>
                <p className="text-sm text-cyan-200">Efficiency</p>
                <p className="text-2xl">+20%</p>
              </div>
              <div className="p-2 w-2/3">
                <div className="flex items-center w-full h-1 bg-slate-500 rounded-3xl">
                  <div className="w-3/4 h-1.5 bg-sky-500 rounded-3xl"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center rounded-3xl w-11/12 md:w-full bg-red-900 p-4 ">
              <div>
                <p className="text-sm text-cyan-200">Consumption</p>
                <p className="text-2xl">163W/km</p>
              </div>
              <div className="p-2 bg-sky-600 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center rounded-3xl w-11/12 md:w-full bg-red-900 p-4 ">
              <div>
                <p className="text-sm text-cyan-200">This Week</p>
                <p className="text-2xl">1.342km</p>
              </div>
              <div className="p-2 w-2/3">
                <div className="flex items-center w-full h-1 bg-slate-500 rounded-3xl">
                  <div className="w-1/2 h-1.5 bg-sky-500 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Informations */}
      <div className="bg-red-800 rounded-3xl p-4 my-4 flex justify-center items-center">
        <div>
          <h1 className="text-xl my-2">Profile Informations</h1>
          <p className="text-sm text-cyan-200 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            libero in repudiandae laudantium velit officia similique architecto,
            debitis necessitatibus voluptatum esse perspiciatis odit quis
            nesciunt, accusamus quidem? Voluptatibus, beatae eius.
          </p>
          <p className="text-sm text-cyan-200">
            Full Name:{" "}
            <span className="text-base text-white">Danial Ghobeishavi</span>
          </p>
          <p className="text-sm text-cyan-200">
            Mobile: <span className="text-base text-white">09123456789</span>
          </p>
          <p className="text-sm text-cyan-200">
            Email:{" "}
            <span className="text-base text-white">danial@gmail.com</span>
          </p>
          <p className="text-sm text-cyan-200">
            Location: <span className="text-base text-white">Iran</span>
          </p>
          <p className="text-sm text-cyan-200 flex items-center gap-2">
            Social:{" "}
            <span className="text-base text-white flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </span>
          </p>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="bg-red-800 rounded-3xl p-4 my-4 flex justify-center items-center">
        <div className="w-full">
          <h1>Platform Settings</h1>
          <p className="text-cyan-200 text-xs mt-4">ACCOUNT</p>
          <div className="my-4 flex items-center gap-4">
            <div
              onClick={() => {
                handelMove(0);
              }}
              style={{
                justifyContent: move[0] ? "flex-end" : "flex-start",
                backgroundColor: move[0] ? "#0ea5e9" : "black",
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
            <p className="text-cyan-200 text-sm">
              Email me when someone follows me
            </p>
          </div>
          <div className="my-4 flex items-center gap-4">
            <div
              onClick={() => {
                handelMove(1);
              }}
              style={{
                justifyContent: !move[1] ? "flex-end" : "flex-start",
                backgroundColor: !move[1] ? "#0ea5e9" : "black",
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
            <p className="text-cyan-200 text-sm">
              Email me when someone answers on my post
            </p>
          </div>
          <div className="my-4 flex items-center gap-4">
            <div
              onClick={() => {
                handelMove(2);
              }}
              style={{
                justifyContent: move[2] ? "flex-end" : "flex-start",
                backgroundColor: move[2] ? "#0ea5e9" : "black",
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
            <p className="text-cyan-200 text-sm">
              Email me when someone mentions me
            </p>
          </div>
          <p className="text-cyan-200 text-xs mt-8">APPLICATION</p>
          <div className="my-4 flex items-center gap-4">
            <div
              onClick={() => {
                handelMove(3);
              }}
              style={{
                justifyContent: !move[3] ? "flex-end" : "flex-start",
                backgroundColor: !move[3] ? "#0ea5e9" : "black",
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
            <p className="text-cyan-200 text-sm">New launches and projects</p>
          </div>
          <div className="my-4 flex items-center gap-4">
            <div
              onClick={() => {
                handelMove(4);
              }}
              style={{
                justifyContent: move[4] ? "flex-end" : "flex-start",
                backgroundColor: move[4] ? "#0ea5e9" : "black",
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
            <p className="text-cyan-200 text-sm">Monthly product updates</p>
          </div>
          <div className="my-4 flex items-center gap-4">
            <div
              onClick={() => {
                handelMove(5);
              }}
              style={{
                justifyContent: move[5] ? "flex-end" : "flex-start",
                backgroundColor: move[5] ? "#0ea5e9" : "black",
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
            <p className="text-cyan-200 text-sm">Subscribe to newsletter</p>
          </div>
          <div className="my-4 flex items-center gap-4">
            <div
              onClick={() => {
                handelMove(6);
              }}
              style={{
                justifyContent: !move[6] ? "flex-end" : "flex-start",
                backgroundColor: !move[6] ? "#0ea5e9" : "black",
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
            <p className="text-cyan-200 text-sm">Receive mails weekly</p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-red-800 rounded-3xl p-4 my-4 flex justify-center items-center">
        <div>
          <div>
            <h1 className="text-xl">Projects</h1>
            <p className="text-cyan-200 text-sm my-2">
              Architects design houses
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div className="my-4">
              <img
                className="w-full h-60 rounded-3xl"
                src="/image/c4.jpg"
                alt=""
              />
              <p className="text-xs text-cyan-200 my-4">Project #1</p>
              <h1 className="text-xl">Modern</h1>
              <p className="text-sm text-cyan-200 my-4">
                As Uber works through a huge amount of internal management
                turmoil.
              </p>
              <div className="flex justify-between items-center">
                <a className="text-sm border py-1 px-6 rounded-xl" href="#">
                  VIEW ALL
                </a>
                <div className="flex">
                  <img className="w-6 rounded-full -mx-1" src="/image/m1.jpg" />
                  <img className="w-6 rounded-full -mx-1" src="/image/m2.jpg" />
                  <img className="w-6 rounded-full -mx-1" src="/image/m3.jpg" />
                </div>
              </div>
            </div>
            <div className="my-4">
              <img
                className="w-full h-60 rounded-3xl"
                src="/image/c5.jpg"
                alt=""
              />
              <p className="text-xs text-cyan-200 my-4">Project #2</p>
              <h1 className="text-xl">Scandinavian</h1>
              <p className="text-sm text-cyan-200 my-4">
                Music is somthing that every person has his or her own specific
                option about.
              </p>
              <div className="flex justify-between items-center">
                <a className="text-sm border py-1 px-6 rounded-xl" href="#">
                  VIEW ALL
                </a>
                <div className="flex">
                  <img className="w-6 rounded-full -mx-1" src="/image/m1.jpg" />
                  <img className="w-6 rounded-full -mx-1" src="/image/m2.jpg" />
                  <img className="w-6 rounded-full -mx-1" src="/image/m3.jpg" />
                </div>
              </div>
            </div>
            <div className="my-4 md:my-0">
              <img
                className="w-full h-60 rounded-3xl"
                src="/image/c6.jpg"
                alt=""
              />
              <p className="text-xs text-cyan-200 my-4">Project #3</p>
              <h1 className="text-xl">Minimalist</h1>
              <p className="text-sm text-cyan-200 my-4">
                Different people have different taste, and various types of
                music.
              </p>
              <div className="flex justify-between items-center">
                <a className="text-sm border py-1 px-6 rounded-xl" href="#">
                  VIEW ALL
                </a>
                <div className="flex">
                  <img className="w-6 rounded-full -mx-1" src="/image/m1.jpg" />
                  <img className="w-6 rounded-full -mx-1" src="/image/m2.jpg" />
                  <img className="w-6 rounded-full -mx-1" src="/image/m3.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;