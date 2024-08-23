import initJobs, { Job } from "@/constants/jobs";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export const JobsContext = createContext<{
  jobs: Job[];
  setJobs: Dispatch<SetStateAction<Job[]>>;
  clickedJob: string;
  setClickedJob: Dispatch<SetStateAction<string>>;
} | null>(null);

export const JobsProvider = ({ children }: PropsWithChildren) => {
  const [jobs, setJobs] = useState<Job[]>(initJobs);
  const [clickedJob, setClickedJob] = useState<string>("");

  return (
    <JobsContext.Provider value={{ jobs, setJobs, clickedJob, setClickedJob }}>
      {children}
    </JobsContext.Provider>
  );
};
