import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
   <>
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-violet-300/50">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
          <div className="h-3.5 w-3.5 rounded-full border-2 border-white">
            <div className="m-auto mt-[3px] h-1.5 w-1.5 rounded-full bg-white" />
          </div>
        </div>
      </div>

      <span className="text-2xl font-extrabold tracking-tight text-blue-600">
        CodeBridge Gaza
      </span>
    </Link>
   </>
  );
}