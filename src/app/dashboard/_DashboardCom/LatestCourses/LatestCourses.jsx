import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

const latestCourses = [
  {
    id: 1,
    title: "Next.js 14 Masterclass",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Python for Data Science",
    category: "Data Science",
  },
  {
    id: 3,
    title: "Figma Advanced UI/UX",
    category: "Design",
  },
];

export default function LatestCourses() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white px-6 py-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[20px] font-extrabold text-slate-950">
          Latest Courses
        </h2>

        <Link
          href="/dashboard/courses"
          className="text-sm font-bold text-blue-600 transition hover:text-violet-600"
        >
          View All
        </Link>
      </div>

      {/* Courses */}
      <div>
        {latestCourses.map((course, index) => (
          <div
            key={course.id}
            className={`flex items-center gap-4 py-4 ${
              index !== latestCourses.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
              <FiBookOpen className="text-[22px]" />
            </div>

            {/* Course Info */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[15px] font-bold text-slate-950">
                {course.title}
              </h3>

              <p className="mt-1 truncate text-sm font-medium text-slate-500">
                {course.category}
              </p>
            </div>

            {/* View */}
            <Link
              href={`/dashboard/courses/${course.id}`}
              className="shrink-0 rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-600 transition hover:bg-violet-100"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}