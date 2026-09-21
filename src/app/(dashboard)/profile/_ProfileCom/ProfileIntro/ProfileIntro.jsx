import {
  FiDownload,
  FiEdit3,
} from "react-icons/fi";

export default function ProfileIntro() {
  return (
    <section className="rounded-[30px] border border-slate-100 bg-white px-10 py-12 shadow-sm">

      {/* Badge */}
      <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-medium uppercase tracking-wide text-violet-600">
        Hello, I'm
      </span>

      {/* Name */}
      <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
        Ahmed Hassan
      </h1>

      {/* Job Title */}
      <h2 className="mt-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
        Senior Full Stack Developer
      </h2>

      {/* Description */}
      <p className="mt-8 max-w-3xl text-[17px] font-medium leading-8 text-slate-500">
        Passionate developer skilled in React, Node.js, and modern web
        technologies, looking for career opportunities through CodeBridge
        Gaza. With a strong foundation in full-stack development, I bring
        creativity and technical expertise to every project.
      </p>

      {/* Actions */}
      <div className="mt-10 flex flex-wrap gap-5">

        {/* Download CV */}
        <button
          type="button"
          className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 text-[16px] font-bold text-white shadow-lg shadow-violet-200 transition hover:scale-[1.02]"
        >
          <FiDownload className="text-[22px]" />
          Download CV
        </button>

        {/* Edit Profile */}
        <button
          type="button"
          className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border-2 border-violet-600 bg-white px-8 text-[16px] font-bold text-violet-600 transition hover:bg-violet-50"
        >
          <FiEdit3 className="text-[22px]" />
          Edit Profile
        </button>

      </div>
    </section>
  );
}
