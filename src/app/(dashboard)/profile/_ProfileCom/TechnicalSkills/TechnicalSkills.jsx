const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "UI/UX Design",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
];

export default function TechnicalSkills() {
  return (
    <section className="rounded-[30px] border border-slate-100 bg-white px-10 py-9 shadow-sm">
      
      <h2 className="text-[24px] font-extrabold text-slate-950">
        Technical Skills
      </h2>

      <div className="mt-8 flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-[14px] border border-violet-200 bg-[#F8F7FF] px-5 py-3 text-[16px] font-semibold text-violet-600 transition hover:border-violet-300 hover:bg-violet-50"
          >
            {skill}
          </span>
        ))}
      </div>

    </section>
  );
}