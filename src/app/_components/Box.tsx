export default function Box({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-5 max-w-[700px] flex flex-col justify-content-center">
      <h3 className="text-lg text-left font-bold text-gray-800 md:text-black mb-3">
        {title}
      </h3>
      <p className="text-gray-700 md:text-black text-sm text-left leading-relaxed">
        {description}
      </p>
    </div>
  );
}
