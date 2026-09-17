import Link from "next/link";
import { FiBriefcase } from "react-icons/fi";

const latestJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechPalestine",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignHub",
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "Innovation Labs",
  },
];

export default function LatestJobs() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white px-6 py-6">
      
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[20px] font-extrabold text-slate-950">
          Latest Jobs
        </h2>

        <Link
          href="/dashboard/jobs"
          className="text-sm font-bold text-blue-600 transition hover:text-violet-600"
        >
          View All
        </Link>
      </div>

      {/* Jobs */}
      <div>
        {latestJobs.map((job, index) => (
          <div
            key={job.id}
            className={`flex items-center gap-4 py-4 ${
              index !== latestJobs.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <FiBriefcase className="text-[22px]" />
            </div>

            {/* Job Info */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[15px] font-bold text-slate-950">
                {job.title}
              </h3>

              <p className="mt-1 truncate text-sm font-medium text-slate-500">
                {job.company}
              </p>
            </div>

            {/* View */}
            <Link
              href={`/dashboard/jobs/${job.id}`}
              className="shrink-0 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600 transition hover:bg-blue-100"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}