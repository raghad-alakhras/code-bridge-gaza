import {
  FiBriefcase,
  FiBookOpen,
} from "react-icons/fi";

export default function ExperienceEducation() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      
      {/* Experience */}
      <div className="rounded-[28px] border border-slate-100 bg-white px-8 py-8 shadow-sm">
        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <FiBriefcase className="text-[26px]" />
          </div>

          <div>
            <h3 className="text-[20px] font-extrabold text-slate-950">
              Experience
            </h3>

            <p className="mt-1 text-[15px] font-medium text-slate-500">
              5+ Years
            </p>
          </div>
        </div>

        <p className="mt-6 text-[16px] font-medium leading-7 text-slate-500">
          Building modern web applications with expertise in full-stack
          development.
        </p>
      </div>

      {/* Education */}
      <div className="rounded-[28px] border border-slate-100 bg-white px-8 py-8 shadow-sm">
        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
            <FiBookOpen className="text-[26px]" />
          </div>

          <div>
            <h3 className="text-[20px] font-extrabold text-slate-950">
              Education
            </h3>

            <p className="mt-1 text-[15px] font-medium text-slate-500">
              BSc Computer Science
            </p>
          </div>
        </div>

        <p className="mt-6 text-[16px] font-medium leading-7 text-slate-500">
          Islamic University of Gaza, graduated with honors in 2019.
        </p>
      </div>

    </section>
  );
}