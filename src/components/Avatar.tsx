const Avatar = () => {
  return (
    <div className="relative">
      <img
        className="size-10 rounded-full lg:size-6 lg:mx-auto"
        src="https://i.pravatar.cc/300"
        alt="avatar"
      />

      {window.innerWidth < 1024 && (
        <div
          className={
            "lg:hidden bg-white rounded-full absolute -bottom-1 -right-1 grid place-items-center p-1"
          }
        >
          <svg
            viewBox="0 -2 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="size-2"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>align_text_distribute [#914]</title>
              <desc>Created with Sketch.</desc> <defs> </defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-300.000000, -4161.000000)"
                  fill="currentColor"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M244,4017 L264,4017 L264,4015 L244,4015 L244,4017 Z M244,4003 L264,4003 L264,4001 L244,4001 L244,4003 Z M244,4010 L264,4010 L264,4008 L244,4008 L244,4010 Z"
                      id="align_text_distribute-[#914]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}

      {window.innerWidth >= 1024 && (
        <div className="hidden lg:flex items-center text-white text-xs">
          Profile
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M9.5 10.5L12.1997 13.1997V13.1997C12.3656 13.3656 12.6344 13.3656 12.8003 13.1997V13.1997L15.5 10.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
export default Avatar;
