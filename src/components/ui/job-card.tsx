import { cn } from "../../lib/utils";

interface JobCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function JobCard({
  icon,
  title,
  description,
  className,
}: JobCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg bg-white",
        "shadow-sm hover:shadow-md transition-shadow duration-100",
        "hover:border hover:border-[#A93636] hover:bg-[#F9E9E9]",
        className
      )}
    >
      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}