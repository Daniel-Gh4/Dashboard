import ReactECharts from "echarts-for-react";


function Dashboard() {

  // charts
  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["70%", "100%"],
        center: ["50%", "100%"],
        // adjust the start and end angle
        startAngle: 180,
        endAngle: 360,
        data: [
          { value: 95, name: "Satisfied" },
          { value: 5, name: "Dissatisfied" },
        ],
      },
    ],
  };

  const cercle = {
    tooltip: {
      trigger: "item",
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
          { value: 9.3, name: "Safety" },
          { value: 0.7, name: "unSafety" },
        ],
      },
    ],
  };

  var xAxisData = [];
  var data1 = [];
  var data2 = [];
  for (var i = 0; i < 100; i++) {
    xAxisData.push("M" + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
  }
  const bar = {
    tooltip: {},
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false,
      },
    },
    yAxis: {},
    series: [
      {
        name: "cars",
        type: "bar",
        data: data1,
        emphasis: {
          focus: "series",
        },
        animationDelay: function (idx) {
          return idx * 10;
        },
      },
      {
        name: "motors",
        type: "bar",
        data: data2,
        emphasis: {
          focus: "series",
        },
        animationDelay: function (idx) {
          return idx * 10 + 100;
        },
      },
    ],
    animationEasing: "elasticOut",
    animationDelayUpdate: function (idx) {
      return idx * 5;
    },
  };

  const bar2 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Users",
        type: "bar",
        barWidth: "50%",
        data: [10, 52, 200, 334, 390, 330, 400],
      },
    ],
  };

  return (
    <div>
      {/* statistic */}
      <div className="flex flex-col gap-6 justify-center items-center text-white md:grid md:grid-cols-2 md:mx-auto md:w-11/12">
        <div
          id="1"
          className="w-11/12 flex justify-between items-center p-6 bg-red-800 rounded-3xl md:w-full"
        >
          <div>
            <h3 className="text-xs text-gray-400">Today's Money</h3>
            <h1 className="text-xl font-medium">
              $53,000 <span className="text-sm text-emerald-500">+55%</span>
            </h1>
          </div>
          <div className="p-2 bg-cyan-600 rounded-xl">
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </div>
        </div>
        <div
          id="2"
          className="w-11/12 flex justify-between items-center p-6 bg-red-800 rounded-3xl md:w-full"
        >
          <div>
            <h3 className="text-xs text-gray-400">Today's User</h3>
            <h1 className="text-xl font-medium">
              2,300 <span className="text-sm text-emerald-500">+3%</span>
            </h1>
          </div>
          <div className="p-2 bg-cyan-600 rounded-xl">
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>
          </div>
        </div>
        <div
          id="3"
          className="w-11/12 flex justify-between items-center p-6 bg-red-800 rounded-3xl md:w-full"
        >
          <div>
            <h3 className="text-xs text-gray-400">New Clients</h3>
            <h1 className="text-xl font-medium">
              +3,462 <span className="text-sm text-rose-400">-2%</span>
            </h1>
          </div>
          <div className="p-2 bg-cyan-600 rounded-xl">
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div
          id="4"
          className="w-11/12 flex justify-between items-center p-6 bg-red-800 rounded-3xl md:w-full"
        >
          <div>
            <h3 className="text-xs text-gray-400">Total Sales</h3>
            <h1 className="text-xl font-medium">
              $103,430 <span className="text-sm text-emerald-500">+5%</span>
            </h1>
          </div>
          <div className="p-2 bg-cyan-600 rounded-xl">
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* welcome img */}
      <div className="flex justify-center mt-4">
        <div className="img w-11/12 rounded-2xl p-3 flex flex-col justify-between gap-24 bg-cover py-10 px-5">
          <div>
            <p className="text-xl m-1 text-cyan-200 fon">Welcome back,</p>
            <h1 className="text-3xl text-white font-medium mb-6">
              Danial Ghobeishavi
            </h1>
            <p className="text-xl m-1 text-cyan-200">Glad to see you again</p>
            <p className="text-xl m-1 text-cyan-200">Ask me anything.</p>
          </div>
          <div className="flex items-center text-white font-medium">
            <p className="text-lg">Tap to record</p>
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

      {/* Satisfaction Rate */}
      <div className="flex justify-center items-center mt-4">
        <div className="w-11/12 text-white bg-red-800 rounded-3xl p-4">
          <h1 className="text-xl">Satisfaction Rate</h1>
          <p className="text-base mt-1 -mb-20 text-cyan-200">
            From all projects
          </p>
          <ReactECharts option={option} />
          <div className="mt-0 bg-red-700 flex flex-col items-center rounded-3xl mb-4 p-2">
            <p className="text-3xl font-medium">95%</p>
            <p className="text-sm text-cyan-200">Based on likes</p>
          </div>
        </div>
      </div>

      {/* Referral Tracking */}
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="w-11/12 text-white bg-red-800 rounded-3xl p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Referral Tracking</h1>
            <div className="bg-red-500 rounded-xl p-2">
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
          </div>
          <div className="mt-2 md:flex md:items-center">
            <div className="md:w-1/2">
              <div className="bg-red-900 p-2 rounded-xl w-1/3">
                <p className="text-sm text-cyan-200">Invited</p>
                <h1 className="text-xl">145 people</h1>
              </div>
              <div className="bg-red-900 p-2 rounded-xl w-1/3 mt-4">
                <p className="text-sm text-cyan-200">Bonus</p>
                <h1 className="text-xl">1,465</h1>
              </div>
            </div>
            <div className="md:w-1/3 md:-my-8">
              <ReactECharts option={cercle} />
            </div>
          </div>
        </div>
      </div>

      {/* Sales Overview */}
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="w-11/12 text-white bg-red-800 rounded-3xl p-4">
          <h1 className="text-xl">Sales Overview</h1>
          <p className="text-base text-cyan-200">
            <span className="text-emerald-500">+5% more</span> in 2024
          </p>
          <ReactECharts option={bar} />
        </div>
      </div>

      {/* Active Users */}
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="w-11/12 text-white bg-red-800 rounded-3xl">
          <ReactECharts option={bar2} />
          <div className="m-3">
            <h1 className="text-xl">Active Users</h1>
            <p className="text-base text-cyan-200">
              <span className="text-emerald-500 font-medium">(+23)</span> than
              last week
            </p>
          </div>
          <div className="m-3 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="bg-red-700 p-1 rounded-xl">
              <div className="flex items-center">
                <div className="m-1 p-2 bg-cyan-600 rounded-xl">
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                </div>
                <h1>Users</h1>
              </div>
              <div className="m-1">
                <h1 className="my-1">32,984</h1>
                <div className="flex items-center bg-cyan-950 w-11/12 h-1 rounded-3xl m-1">
                  <div className="bg-cyan-600 w-4/5 h-1.5 rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="bg-red-700 p-1 rounded-xl">
              <div className="flex items-center">
                <div className="m-1 p-2 bg-cyan-600 rounded-xl">
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                      clipRule="evenodd"
                    />
                    <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                  </svg>
                </div>
                <h1>Clicks</h1>
              </div>
              <div className="m-1">
                <h1 className="my-1">2,42 M</h1>
                <div className="flex items-center bg-cyan-950 w-11/12 h-1 rounded-3xl m-1">
                  <div className="bg-cyan-600 w-4/5 h-1.5 rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="bg-red-700 p-1 rounded-xl">
              <div className="flex items-center">
                <div className="m-1 p-2 bg-cyan-600 rounded-xl">
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                </div>
                <h1>Sales</h1>
              </div>
              <div className="m-1">
                <h1 className="my-1">2,400$</h1>
                <div className="flex items-center bg-cyan-950 w-11/12 h-1 rounded-3xl m-1">
                  <div className="bg-cyan-600 w-4/5 h-1.5 rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="bg-red-700 p-1 rounded-xl">
              <div className="flex items-center">
                <div className="m-1 p-2 bg-cyan-600 rounded-xl">
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h1>Items</h1>
              </div>
              <div className="m-1">
                <h1 className="my-1">320</h1>
                <div className="flex items-center bg-cyan-950 w-11/12 h-1 rounded-3xl m-1">
                  <div className="bg-cyan-600 w-4/5 h-1.5 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects and Order overview */}
      <div className="my-4 md:flex md:w-11/12 md:mx-auto md:gap-4">
        {/* projects */}
        <div className="flex flex-col justify-center items-center mt-4 md:w-1/2 md:mt-0">
          <div className="w-11/12 text-white bg-red-800 rounded-3xl p-4 md:w-full ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl">Projects</h1>
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-base text-cyan-200">
                    <span className="font-medium text-cyan-300">30 done</span>{" "}
                    this month
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <table className="w-full mt-4 border-spacing-10">
              <thead>
                <tr className="text-cyan-200 text-sm text-left border-b-2">
                  <th className="font-normal">COMPAINIES</th>
                  <th className="font-normal">MEMBER</th>
                  <th className="font-normal">BUDGET</th>
                  <th className="font-normal">COMPLETION</th>
                </tr>
              </thead>
              <tbody className="font-medium">
                <tr className="border-b">
                  <td className="flex items-center my-2">
                    <img
                      className="rounded-xl w-6 h-6 mr-1"
                      src="image/c2.jpg"
                      alt="Not found"
                    />
                    <p>Rolls-Royce</p>
                  </td>
                  <td>
                    <div className="flex py-3">
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m1.jpg"
                        alt="Not found"
                      />
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m2.jpg"
                        alt="Not found"
                      />
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m3.jpg"
                        alt="Not found"
                      />
                    </div>
                  </td>
                  <td>$14,000</td>
                  <td>
                    <div className="m-1">
                      <h1 className="my-1">60%</h1>
                      <div className="flex items-center bg-cyan-950 w-11/12 h-1 rounded-3xl m-1">
                        <div className="bg-cyan-600 w-4/5 h-1.5 rounded-xl"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex items-center my-2">
                    <img
                      className="rounded-xl w-6 h-6 mr-1"
                      src="image/c3.jpg"
                      alt="Not found"
                    />
                    <p>LAMBORGHINI</p>
                  </td>
                  <td>
                    <div className="flex py-3">
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m1.jpg"
                        alt="Not found"
                      />
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m2.jpg"
                        alt="Not found"
                      />
                    </div>
                  </td>
                  <td>$3,000</td>
                  <td>
                    <div className="m-1">
                      <h1 className="my-1">10%</h1>
                      <div className="flex items-center bg-cyan-950 w-11/12 h-1 rounded-3xl m-1">
                        <div className="bg-cyan-600 w-1/5 h-1.5 rounded-xl"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex items-center my-2">
                    <img
                      className="rounded-xl w-6 h-6 mr-1"
                      src="image/c4.jpg"
                      alt="Not found"
                    />
                    <p>BMW-M3</p>
                  </td>
                  <td>
                    <div className="flex">
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m1.jpg"
                        alt="Not found"
                      />
                    </div>
                  </td>
                  <td>Not Set</td>
                  <td>
                    <div className="m-1">
                      <h1 className="my-1">100%</h1>
                      <div className="flex items-center bg-cyan-950 w-11/12 h-1 rounded-3xl m-1">
                        <div className="bg-cyan-600 w-full h-1.5 rounded-xl"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex items-center my-2">
                    <img
                      className="rounded-xl w-6 h-6 mr-1"
                      src="image/c5.jpg"
                      alt="Not found"
                    />
                    <p>F12</p>
                  </td>
                  <td>
                    <div className="flex py-3">
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m1.jpg"
                        alt="Not found"
                      />
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m2.jpg"
                        alt="Not found"
                      />
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m3.jpg"
                        alt="Not found"
                      />
                    </div>
                  </td>
                  <td>$20,500</td>
                  <td>
                    <div className="m-1">
                      <h1 className="my-1">25%</h1>
                      <div className="flex items-center bg-cyan-950 w-11/12 h-1 rounded-3xl m-1">
                        <div className="bg-cyan-600 w-1/4 h-1.5 rounded-xl"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center my-2">
                    <img
                      className="rounded-xl w-6 h-6 mr-1"
                      src="image/c6.jpg"
                      alt="Not found"
                    />
                    <p>FERRARI</p>
                  </td>
                  <td>
                    <div className="flex py-3">
                      <img
                        className="rounded-full w-6 h-6 -mx-1"
                        src="image/m3.jpg"
                        alt="Not found"
                      />
                    </div>
                  </td>
                  <td>$2000</td>
                  <td>
                    <div className="m-1">
                      <h1 className="my-1">40%</h1>
                      <div className="flex items-center bg-cyan-950 w-11/12 h-1 rounded-3xl m-1">
                        <div className="bg-cyan-600 w-2/5 h-1.5 rounded-xl"></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Order overview */}
        <div className="flex flex-col justify-center items-center mt-4 md:w-1/2 md:mt-0">
          <div className="w-11/12 text-white bg-red-800 rounded-3xl p-4 md:w-full">
            <div>
              <h1 className="text-xl">Order overview</h1>
              <div className="flex items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base text-cyan-200">
                  <span className="font-medium text-cyan-300">+30%</span> this
                  month
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-4 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h2 className="text-base">$2400,Design change</h2>
                  <p className="text-sm text-cyan-200">22DES 7:20PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-blue-400"
                >
                  <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                </svg>
                <div>
                  <h2 className="text-base">New order #1832412</h2>
                  <p className="text-sm text-cyan-200">21DES 11PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  className="size-5 text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                <div>
                  <h2 className="text-base">Server payments for April</h2>
                  <p className="text-sm text-cyan-200">21DES 9:34PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-yellow-500"
                >
                  <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                  <path
                    fillRule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h2 className="text-base">
                    New card added for order #4395133
                  </h2>
                  <p className="text-sm text-cyan-200">20DES 2:20AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-pink-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h2 className="text-base">New order #9583120</h2>
                  <p className="text-sm text-cyan-200">17DES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;