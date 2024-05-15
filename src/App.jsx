const App = () => {
  return (
    //Mobile First Design//
    <div className="flex flex-col items-center justify-between w-full h-screen ">
      {/* header */}
      <h1 className="text-3xl font-bold text--primary-800">سبد دوره های شما</h1>
      <div className="flex flex-col gap-4">
        <div className="">
          <div className="flex justify-between max-w-xs p-4 bg-white gap-x-4 rounded-xl">
            <img className="w-1/3" src="/src/assets/img/Rectangle 21.png"></img>
            <div className="flex flex-col justify-between ">
              <h3 className="text-sm font-bold text--primary-900">
                دوره حرفه ای متخصص ری اکت
              </h3>
              <div className="flex items-start justify-between gap-x-8">
                <p className="text-xs font-bold text-text--price-blue">
                  6,298,000
                  <span className="mr-2 text-[9px] opacity-50 text-text--secondary-800">
                    تومان
                  </span>
                </p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg"></div>
        </div>
        <div className="">
          <div className="flex justify-between max-w-xs p-4 bg-white gap-x-4 rounded-xl">
            <img className="w-1/3" src="/src/assets/img/Rectangle 21.png"></img>
            <div className="flex flex-col justify-between">
              <h3 className="text-sm font-bold text--primary-900">
                دوره حرفه ای متخصص ری اکت
              </h3>
              <div className="flex items-start justify-between gap-x-8">
                <p className="text-xs font-bold text-text--price-blue">
                  6,298,000
                  <span className="mr-2 opacity-50 text-text--secondary-800 text-[9px]">
                    تومان
                  </span>
                </p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-xs py-4 bg-white rounded-xl">
        <div className="flex items-center ">
          <span className="p-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3334 4.99999V7.01666C18.3334 8.33332 17.5 9.16666 16.1834 9.16666H13.3334V3.34166C13.3334 2.41666 14.0917 1.66666 15.0167 1.66666C15.925 1.67499 16.7584 2.04166 17.3584 2.64166C17.9584 3.24999 18.3334 4.08332 18.3334 4.99999Z"
                fill="#555775"
              />
              <path
                opacity="0.4"
                d="M1.66663 5.83332V17.5C1.66663 18.1917 2.44996 18.5833 2.99996 18.1667L4.42496 17.1C4.75829 16.85 5.22496 16.8833 5.52496 17.1833L6.90829 18.575C7.23329 18.9 7.76663 18.9 8.09163 18.575L9.49162 17.175C9.78329 16.8833 10.25 16.85 10.575 17.1L12 18.1667C12.55 18.575 13.3333 18.1833 13.3333 17.5V3.33332C13.3333 2.41666 14.0833 1.66666 15 1.66666H5.83329H4.99996C2.49996 1.66666 1.66663 3.15832 1.66663 4.99999V5.83332Z"
                fill="#555775"
              />
              <path
                d="M10 8.125H5C4.65833 8.125 4.375 7.84167 4.375 7.5C4.375 7.15833 4.65833 6.875 5 6.875H10C10.3417 6.875 10.625 7.15833 10.625 7.5C10.625 7.84167 10.3417 8.125 10 8.125Z"
                fill="#555775"
              />
              <path
                d="M9.375 11.4583H5.625C5.28333 11.4583 5 11.175 5 10.8333C5 10.4917 5.28333 10.2083 5.625 10.2083H9.375C9.71667 10.2083 10 10.4917 10 10.8333C10 11.175 9.71667 11.4583 9.375 11.4583Z"
                fill="#555775"
              />
            </svg>
          </span>
          <p className="text-xl font-bold text-text--primary-800">پرداخت</p>
        </div>
        <div className="mb-1 border-b-2 border-gray-200 opacity-50 "></div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex justify-between gap-x-32">
            <p className="font-bold text-text--secondary-700">جمع دوره ها</p>
            <p className="font-extrabold text-text--price-blue">4،250،000+</p>
          </div>
          <div className="flex justify-between gap-x-32">
            <p className="font-bold text-text--secondary-700">تخفیف ها</p>
            <p className="font-extrabold text-text--price-red">750،000-</p>
          </div>
        </div>
          <div className="mb-1 border-b-2 border-gray-200 border-dashed opacity-50 "></div>
        <p className="mt-4 text-xs text-center text-text--secondary-700">کد تخفیف دارم!</p>
        <button className="p-4 mx-10 mt-4 text-white bg-text--price-blue rounded-xl">
          پرداخت 3.500.000&nbsp; <span className="text-[9px]">تومان</span>
        </button>
      </div>
    </div>
  );
};

export default App;
