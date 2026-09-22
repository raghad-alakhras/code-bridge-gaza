import { FiGlobe, FiSave } from "react-icons/fi";

export default function PreferencesSettings() {
  return (
    <div className="px-8 py-10">

      {/* Title */}
      <h2 className="text-[22px] font-extrabold text-slate-950">
        General Preferences
      </h2>

      {/* Language */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-[#F7F9FC] px-6 py-5">

        <div className="flex items-center gap-5">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <FiGlobe className="text-[22px]" />
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-slate-950">
              Language
            </h3>

            <p className="mt-1 text-[14px] font-medium text-slate-500">
              Choose your preferred language
            </p>
          </div>
        </div>

        <select
          defaultValue="English"
          className="h-13 min-w-[140px] cursor-pointer rounded-2xl border-1 border-slate-200 bg-white px-4 text-[14px] font-semibold text-slate-900 outline-none focus:border-violet-400"
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>

      </div>

      {/* Divider */}
      <div className="my-10 h-px bg-slate-200" />

      {/* Save Button */}
      <button
        type="button"
        className="flex h-14 items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 text-[16px] font-bold text-white shadow-md transition hover:shadow-lg"
      >
        <FiSave className="text-[21px]" />
        Save Changes
      </button>

    </div>
  );
}