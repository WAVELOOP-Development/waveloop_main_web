import { NumberTicker } from "@/components/motion/number-tracker";

const stats = [
  { number: 20, suffix: "+", label: "Custom Software\nProjects Delivered" },
  { number: 10, suffix: "+", label: "Mobile Apps\nLaunched" },
  { number: 3, suffix: "+", label: "Cloud Migrations\nCompleted" },
  { number: 2, suffix: "+", label: "Cybersecurity\nIntegrations Completed" },
  { number: 5, suffix: "+", label: "AI-Powered\nSystems Developed" },
];

export const ImpactNumbers = () => {
  return (
    <section className="bg-white flex flex-col gap-8 justify-start items-center lg:py-16 py-8 px-6 text-center md:px-20">
      <div className="text-[#021443] max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-800">Impact In Numbers</h2>
        <div className="mt-2 mb-4 text-sm lg:text-lg">
          Behind every number is a story of innovation, growth, and meaningful digital
          transformation.
        </div>
      </div>

      <div className="text-[#021443] max-w-6xl">
        <div className="flex items-center justify-center">
          <NumberTicker value={100} startValue={50} className="text-8xl font-bold" />
          <span className="text-8xl text-black font-bold">%</span>
        </div>
        <p className="mt-2 text-lg font-semibold">Client Satisfaction Rate</p>
      </div>

      <div className="grid grid-cols-2  justify-center max-w-6xl gap-4 md:grid-cols-5">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center ${index === stats.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <div className="flex items-center">
              <NumberTicker value={stat.number} startValue={0} className="text-4xl font-bold" />
              <span className="text-4xl font-bold">{stat.suffix}</span>
            </div>
            <p className="mt-2 text-sm lg:text-lg whitespace-pre-line">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactNumbers;
