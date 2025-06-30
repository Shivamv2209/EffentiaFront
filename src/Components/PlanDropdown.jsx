import React from "react";

function PlanDropdown() {
  const plansContent = {
    plans: [
      {
        icon: "💎",
        color: "#E0F7FA",
        heading: "Standard",
        content:
          "For teams that need to manage more work and scale collaboration.",
      },
      {
        icon: "⭐",
        color: "#FCE4EC",
        heading: "Premium",
        content:
          "Best for teams up to 100 that need to track multiple projects and visualize work in a variety of ways.",
      },
      {
        icon: "🏢",
        color: "#E3F2FD",
        heading: "Enterprise",
        content:
          "Everything your enterprise teams and admins need to manage projects.",
      },
      {
        icon: "⚡",
        color: "#FFF8E1",
        heading: "Free plan",
        content:
          "For individuals or small teams looking to keep work organized.",
      },
    ],
  };

  return (
    <div className="absolute z-[999] w-full top-15 h-auto flex left-0 shadow-lg animate-fadeIn">
      <div className="w-[60%] bg-white pt-8 pl-12 pr-8 pb-8">
        <div className="grid grid-cols-2 gap-6">
          {plansContent.plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-100 group border border-gray-100"
              style={{ backgroundColor: plan.color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = plan.color;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = plan.color;
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{plan.icon}</span>
                <div className="flex-1">
                  <h5 className="text-md font-semibold text-gray-800 group-hover:text-[#FA812F] transition-colors duration-100 mb-3">
                    {plan.heading}
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-100">
            Take a tour of Leadnest
          </button>
        </div>
      </div>
      <div className="w-[40%] bg-zinc-100 pt-8 pl-8 pr-8 pb-8">
        <div className="mb-6">
          <h4 className="text-md font-semibold text-gray-800 mb-6">
            Compare plans & pricing
          </h4>
          <hr className="mb-10 text-zinc-500" />
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Whether you're a team of 2 or 2,000, Leadnest's flexible pricing
              model means you only pay for what you need.
            </p>
            <button className="w-full bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-100">
              View Leadnest pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanDropdown;
