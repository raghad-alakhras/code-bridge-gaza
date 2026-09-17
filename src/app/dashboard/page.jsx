import ProfileCard from "./_DashboardCom/ProfileCard/ProfileCard";
import QuickActions  from "./_DashboardCom/QuickActions/QuickActions";
import RecommendedJobs  from "./_DashboardCom/RecommendedJobs/RecommendedJobs";
import AvailableCourses  from "./_DashboardCom/AvailableCourses/AvailableCourses";
import RecentApplications  from "./_DashboardCom/RecentApplications/RecentApplications";
import LatestJobs  from "./_DashboardCom/LatestJobs/LatestJobs";
import LatestCourses  from "./_DashboardCom/LatestCourses/LatestCourses";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">

        <div className="space-y-6 xl:col-span-9">
          <ProfileCard />
          <QuickActions />
          <RecommendedJobs />
          <AvailableCourses />
          <RecentApplications />
        </div>

        <div className="space-y-6 xl:col-span-3">
          <LatestJobs />
          <LatestCourses />
        </div>

      </div>
    </div>
  );
}