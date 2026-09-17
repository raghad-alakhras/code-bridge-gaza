import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const availableCourses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    category: "Frontend",
    level: "Advanced",
    image: "/images/course-react.jpg",
  },
  {
    id: 2,
    title: "TypeScript Masterclass",
    category: "Programming",
    level: "Intermediate",
    image: "/images/course-typescript.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    level: "Beginner",
    image: "/images/course-uiux.jpg",
  },
];

export default function AvailableCourses() {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-8 py-7">
        <h2 className="text-[23px] font-extrabold text-slate-950">
          Available Courses
        </h2>

        <Link
          href="/dashboard/courses"
          className="flex items-center gap-2 text-[16px] font-semibold text-blue-600 transition hover:text-violet-600"
        >
          View All Courses
          <FiArrowRight className="text-lg" />
        </Link>
      </div>

      {/* Courses */}
      <div className="px-8 py-7">
        <div className="space-y-7">
          {availableCourses.map((course) => (
            <div
              key={course.id}
              className="flex items-center gap-5"
            >

              {/* Course Image */}
              <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[18px]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Course Info */}
              <div className="min-w-0 flex-1">
                <h3 className="text-[19px] font-extrabold text-slate-950">
                  {course.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-600">
                    {course.category}
                  </span>

                  <span className="text-[15px] font-medium text-slate-500">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* View Course */}
              <Link
                href={`/dashboard/courses/${course.id}`}
                className="flex shrink-0 items-center gap-2 text-[16px] font-semibold text-blue-600 transition hover:text-violet-600"
              >
                View Course
                <FiArrowRight className="text-lg" />
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}