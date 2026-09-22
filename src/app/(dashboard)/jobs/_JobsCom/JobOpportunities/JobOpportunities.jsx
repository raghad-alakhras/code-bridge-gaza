import JobCard from "../JobCard/JobCard";

const jobs = [
  {
    logoLetter: "T",
    title: "Frontend Developer",
    company: "TechPalestine",
    location: "Gaza City",
    type: "Full-time",
    salary: "$800–1,200/mo",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    postedAt: "2 days ago",
  },
  {
    logoLetter: "D",
    title: "UI/UX Designer",
    company: "DesignHub Gaza",
    location: "Remote",
    type: "Remote",
    salary: "$700–1,000/mo",
    skills: ["Figma", "Adobe XD", "UI Design"],
    postedAt: "1 week ago",
  },
  {
    logoLetter: "I",
    title: "React Developer",
    company: "Innovation Labs",
    location: "Khan Younis",
    type: "Part-time",
    salary: "$500–800/mo",
    skills: ["React", "JavaScript", "CSS"],
    postedAt: "3 days ago",
  },
  {
    logoLetter: "G",
    title: "Full Stack Developer",
    company: "Gaza Tech Solutions",
    location: "Gaza City",
    type: "Full-time",
    salary: "$1,000–1,500/mo",
    skills: ["Node.js", "React", "MongoDB"],
    postedAt: "5 days ago",
  },
  {
    logoLetter: "C",
    title: "Graphic Designer",
    company: "Creative Studios",
    location: "Remote",
    type: "Freelance",
    salary: "$600–900/mo",
    skills: ["Illustrator", "Photoshop", "Branding"],
    postedAt: "1 day ago",
  },
  {
    logoLetter: "D",
    title: "Web Developer",
    company: "Digital Agency Gaza",
    location: "Rafah",
    type: "Full-time",
    salary: "$750–1,100/mo",
    skills: ["HTML", "CSS", "JavaScript"],
    postedAt: "4 days ago",
  },
];

export default function JobOpportunities() {
  return (
    <section>

      {/* Section Header */}
      <div className="mb-7">
        <h2 className="text-[20px] font-extrabold text-slate-950">
          Job Opportunities
        </h2>

        <p className="mt-1 text-[13px] font-medium text-slate-500">
          Explore available opportunities and find the right job for you.
        </p>
      </div>

      {/* Jobs List */}
      <div className="space-y-5">
        {jobs.map((job) => (
          <JobCard
            key={`${job.title}-${job.company}`}
            {...job}
          />
        ))}
      </div>

    </section>
  );
}