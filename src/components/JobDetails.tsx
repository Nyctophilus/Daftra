import { JobsContext } from "@/context/jobsContext";
import { CheckCircledIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Fragment, useContext } from "react";
import { Button } from "./ui/button";

const JobDetails = () => {
  const cntx = useContext(JobsContext);

  console.log(cntx?.clickedJob);

  if (!cntx?.clickedJob) return null;

  const job = cntx.jobs.find((job) => job.id === cntx.clickedJob);

  if (job) {
    const {
      title,
      company_name,
      logo,
      location,
      post_date,
      req_experience,
      job_type,
      env,
      tags,
      edu_lvl,
      career_lvl,
      salary,
    } = job;

    return (
      <section className="capitalize border rounded-md shadow-md p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-x-2">
            <img src={logo} alt="company logo" className="size-16" />
            <div>
              <p className="font-semibold text-green-600/80">{company_name}</p>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <svg
              className="size-6 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                  fill="#000000"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <svg
              className="size-6 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm14 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM13.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </div>
        </div>

        <h2 className="my-4 font-semibold text-lg">{title}</h2>

        <div>
          <div className="flex items-center gap-x-10 gap-y-1 flex-wrap">
            <span className="flex items-center gap-x-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789Z"
                    fill="#000000"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10Z"
                    fill="#000000"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3856 23.789L12 23C12.6139 23.7894 12.615 23.7885 12.615 23.7885L12.6169 23.7871L12.6231 23.7822L12.645 23.765C12.6638 23.7501 12.6909 23.7287 12.7258 23.7008C12.7954 23.6451 12.8961 23.5637 13.0233 23.4587C13.2776 23.2488 13.6385 22.944 14.0706 22.5599C14.9334 21.793 16.0867 20.7041 17.2433 19.419C18.397 18.1371 19.5731 16.639 20.4653 15.0528C21.3524 13.4758 22 11.7393 22 10C22 7.34784 20.9464 4.8043 19.0711 2.92893C17.1957 1.05357 14.6522 0 12 0C9.34784 0 6.8043 1.05357 4.92893 2.92893C3.05357 4.8043 2 7.34784 2 10C2 11.7393 2.64762 13.4758 3.53467 15.0528C4.42693 16.639 5.60303 18.1371 6.75671 19.419C7.91329 20.7041 9.06662 21.793 9.92939 22.5599C10.3615 22.944 10.7224 23.2488 10.9767 23.4587C11.1039 23.5637 11.2046 23.6451 11.2742 23.7008C11.3091 23.7287 11.3362 23.7501 11.355 23.765L11.3769 23.7822L11.3831 23.7871L11.3856 23.789ZM6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 11.2607 19.5226 12.6492 18.7222 14.0722C17.9269 15.486 16.853 16.8629 15.7567 18.081C14.6633 19.2959 13.5666 20.332 12.7419 21.0651C12.4576 21.3178 12.2065 21.5337 12 21.7078C11.7935 21.5337 11.5424 21.3178 11.2581 21.0651C10.4334 20.332 9.33671 19.2959 8.24329 18.081C7.14697 16.8629 6.07307 15.486 5.27783 14.0722C4.47738 12.6492 4 11.2607 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
              <p>{location}</p>
            </span>
            <span className="flex items-center gap-x-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M7 4V2.5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M17 4V2.5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M21.5 9H16.625H10.75M2 9H5.875"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
                    fill="#1C274C"
                  ></path>
                  <path
                    d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z"
                    fill="#1C274C"
                  ></path>
                  <path
                    d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
                    fill="#1C274C"
                  ></path>
                  <path
                    d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
                    fill="#1C274C"
                  ></path>
                  <path
                    d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z"
                    fill="#1C274C"
                  ></path>
                  <path
                    d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
                    fill="#1C274C"
                  ></path>
                </g>
              </svg>
              <p>{post_date}</p>
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 sm:ps-4">
            <span className="py-1 px-2 bg-gray-100 rounded-md">{job_type}</span>
            <span className="py-1 px-2 bg-gray-100 rounded-md">{env}</span>
          </div>

          <div className="my-5 space-y-3">
            <p className="flex items-center gap-x-2">
              <CheckCircledIcon className="w-5 h-5 text-white bg-green-600 rounded-full" />
              5 of 6 skills match with you - you may be a good fit.
            </p>
            <div className="flex gap-x-4 items-center">
              <Button className="capitalize rounded-full bg-green-500 text-white">
                apply for job
              </Button>
              <span className="rounded-full p-2 border text-gray-300 border-gray-300">
                <HeartFilledIcon />
              </span>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-xl font-bold mb-2">Job Details</h4>
            <p>
              Years of Experience:
              <span className="font-semibold ms-2">{req_experience} years</span>
            </p>
            <p>
              Education level:
              <span className="font-semibold ms-2">{edu_lvl}</span>
            </p>
            <p>
              Career level:
              <span className="font-semibold ms-2">{career_lvl}</span>
            </p>
            <p>
              salary:
              <span className="font-semibold ms-2">{salary}</span>
            </p>

            <p className="max-w-md">
              Category:
              <span className="ms-2 font-semibold">
                {tags.map((tag, i) => (
                  <Fragment key={tag}>
                    {tag}
                    {i < tags.length - 1 ? (
                      <span className="mx-3.5">-</span>
                    ) : (
                      ""
                    )}
                  </Fragment>
                ))}
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }
};
export default JobDetails;
