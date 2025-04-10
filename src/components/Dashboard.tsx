import { JobCard } from "./ui/job-card";
import { jobs } from "../lib/data/dashboard";



export function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Hello Eric Omotolani</h1>
        <p className="text-gray-500">Welcome to your dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            icon={job.icon}
            title={job.title}
            description={job.description}
          />
        ))}
      </div>
    </div>
  );
}