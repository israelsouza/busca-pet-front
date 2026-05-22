import type { LucideIcon } from "lucide-react";

export default function Box({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-5 max-w-[700px] flex flex-col">
      <h3 className="text-lg text-left font-bold text-gray-800 md:text-black mb-3 flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-black" />}
        {title}
      </h3>
      <p className="text-gray-700 md:text-black text-sm text-left leading-relaxed">
        {description}
      </p>
    </div>
  );
}
