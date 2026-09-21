import ProfileInfoCard from "./_ProfileCom/ProfileInfoCard/ProfileInfoCard";
import ProfileIntro from "./_ProfileCom/ProfileIntro/ProfileIntro";
import TechnicalSkills from "./_ProfileCom/TechnicalSkills/TechnicalSkills";
import SocialLinks from "./_ProfileCom/SocialLinks/SocialLinks";
import ExperienceEducation from "./_ProfileCom/ExperienceEducation/ExperienceEducation";
import ProfileQuickNav from "./_ProfileCom/ProfileQuickNav/ProfileQuickNav";

export default function ProfilePage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">

        {/* Left Profile Card */}
        <div className="xl:col-span-3">
          <ProfileInfoCard />
        </div>

        {/* Main Profile Content */}
        <div className="space-y-6 xl:col-span-8">
          <ProfileIntro />

          <div id="skills">
            <TechnicalSkills />
          </div>

          <SocialLinks />

          <div>
            <ExperienceEducation />
          </div>
        </div>

        {/* Right Quick Navigation */}
        <div className="hidden xl:col-span-1 xl:block">
          <ProfileQuickNav />
        </div>

      </div>
    </div>
  );
}