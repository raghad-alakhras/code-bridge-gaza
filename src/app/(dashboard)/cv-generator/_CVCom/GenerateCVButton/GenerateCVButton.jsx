import { FiFileText } from "react-icons/fi";

export default function GenerateCVButton() {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="inline-flex w-full h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 text-[16px] font-bold text-white shadow-lg shadow-violet-200 transition hover:scale-[1.02] hover:shadow-xl"
      >
        <FiFileText className="text-[21px]" />

        Generate Professional CV
      </button>
    </div>
  );
}