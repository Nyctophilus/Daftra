import { useContext } from "react";
import AlertBanner from "../components/AlertBanner";
import JobsList from "../components/Jobs/JobsList";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { JobsContext } from "@/context/jobsContext";

const JobsPostingSection = ({ className }: { className?: string }) => {
  const cntx = useContext(JobsContext);
  return (
    <section className={cn("mt-10", className)}>
      <AlertBanner />

      <JobsList jobs={cntx?.jobs! || []} />

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};
export default JobsPostingSection;
