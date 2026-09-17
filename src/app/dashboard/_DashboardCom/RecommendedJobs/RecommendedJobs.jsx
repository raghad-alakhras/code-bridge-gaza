import Link from "next/link";
import {
  FiBriefcase,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const recommendedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechPalestine",
    location: "Gaza, Palestine",
    type: "Full-time",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Remote",
  },
  {
    id: 3,
    title: "React Developer",
    company: "Innovation Labs",
    location: "Gaza, Palestine",
    type: "Part-time",
  },
];

export default function RecommendedJobs() {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-8 py-7">
        <h2 className="text-[23px] font-extrabold text-slate-950">
          Recommended Jobs
        </h2>

        <Link
          href="/dashboard/jobs"
          className="flex items-center gap-2 text-[16px] font-semibold text-blue-600 transition hover:text-violet-600"
        >
          View All Jobs
          <FiArrowRight className="text-lg" />
        </Link>
      </div>

      {/* Jobs List */}
      <div className="px-8 py-7">
        <div className="space-y-7">
          {recommendedJobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center gap-5"
            >
              {/* Icon */}
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[18px] border border-blue-100 bg-blue-50 text-blue-600">
                <FiBriefcase className="text-[27px]" />
              </div>

              {/* Job Info */}
              <div className="min-w-0 flex-1">
                <h3 className="text-[19px] font-extrabold text-slate-950">
                  {job.title}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] font-medium text-slate-500">

                  <span>
                    {job.company}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="text-[16px]" />
                    {job.location}
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                    {job.type}
                  </span>

                </div>
              </div>

              {/* View Job */}
              <Link
                href={`/dashboard/jobs/${job.id}`}
                className="flex shrink-0 items-center gap-2 text-[16px] font-semibold text-blue-600 transition hover:text-violet-600"
              >
                View Job
                <FiArrowRight className="text-lg" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}