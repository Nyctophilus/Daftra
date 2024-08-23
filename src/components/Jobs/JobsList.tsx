import { Job } from "@/constants/jobs";
import JobCard from "./JobCard";

const JobsList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <div className="space-y-4 mt-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
export default JobsList;
