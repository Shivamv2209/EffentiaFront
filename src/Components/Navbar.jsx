import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const featureContent = [
    {
      image: "/star.png",
      heading: "Feature 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#F8EDEB",
    },
    {
      image: "/star.png",
      heading: "Feature 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#E1F6F2",
    },
    {
      image: "/star.png",
      heading: "Feature 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#F1DEEE",
    },
    {
      image: "/star.png",
      heading: "Feature 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#EEECF4",
    },
    {
      image: "/star.png",
      heading: "Feature 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#F1EFEB",
    },
    {
      image: "/star.png",
      heading: "Feature 6",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#FFF1F5",
    },
    {
      image: "/star.png",
      heading: "Feature 7",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#C9E4DE",
    },
  ];

  const solutionsContent = {
    teams: [
      {
        icon: "📢",
        heading: "Marketing teams",
        content: "Whether launching a new product, campaign, or creating content, Leadnest helps marketing teams succeed.",
      },
      {
        icon: "📋",
        heading: "Product management",
        content: "Use Leadnest's management boards and roadmap features to simplify complex projects and processes.",
      },
      {
        icon: "⚙️",
        heading: "Engineering teams",
        content: "Ship more code, faster, and give your developers the freedom to be more agile with Leadnest.",
      },
      {
        icon: "🎨",
        heading: "Design teams",
        content: "Empower your design teams by using Leadnest to streamline creative requests and promote more fluid cross-team collaboration.",
      },
      {
        icon: "🚀",
        heading: "Startups",
        content: "From hitting revenue goals to managing workflows, small businesses thrive with Leadnest.",
      },
      {
        icon: "🌍",
        heading: "Remote teams",
        content: "Keep your remote team connected and motivated, no matter where they're located around the world.",
      },
    ],
    useCases: [
      {
        heading: "Task management",
        content: "Track progress of tasks in one convenient place with a visual layout that adds 'ta-da' to your to-do's.",
      },
      {
        heading: "Resource hub",
        content: "Save hours when you give teams a well-designed hub to find information easily and quickly.",
      },
      {
        heading: "Project management",
        content: "Keep projects organized, deadlines on track, and teammates aligned with Leadnest.",
      },
    ]
  };

  const plansContent = {
    plans: [
      {
        icon: "💎",
        color: "#E0F7FA",
        heading: "Standard",
        content: "For teams that need to manage more work and scale collaboration.",
      },
      {
        icon: "⭐",
        color: "#FCE4EC",
        heading: "Premium",
        content: "Best for teams up to 100 that need to track multiple projects and visualize work in a variety of ways.",
      },
      {
        icon: "🏢",
        color: "#E3F2FD",
        heading: "Enterprise",
        content: "Everything your enterprise teams and admins need to manage projects.",
      },
      {
        icon: "⚡",
        color: "#FFF8E1",
        heading: "Free plan",
        content: "For individuals or small teams looking to keep work organized.",
      },
    ]
  };

  const resourcesContent = {
    resources: [
      {
        icon: "📚",
        heading: "Leadnest guide",
        content: "Our easy to follow workflow guide will take you from project set-up to Leadnest expert in no time.",
      },
      {
        icon: "🏠",
        heading: "Remote work guide",
        content: "The complete guide to setting up your team for remote work success.",
      },
      {
        icon: "🎥",
        heading: "Webinars",
        content: "Enjoy our free Leadnest webinars and become a productivity professional.",
      },
      {
        icon: "💼",
        heading: "Customer stories",
        content: "See how businesses have adopted Leadnest as a vital part of their workflow.",
      },
      {
        icon: "⚙️",
        heading: "Developers",
        content: "The sky's the limit in what you can deliver to Leadnest users in your Power-Up!",
      },
      {
        icon: "❓",
        heading: "Help resources",
        content: "Need help? Articles and FAQs to get you unstuck.",
      },
    ]
  };

  const [featureDrop, setFeatureDrop] = useState(false);
  const [solutionDrop, setSolutionDrop] = useState(false);
  const [plansDrop, setPlansDrop] = useState(false);
  const [resourceDrop, setResourceDrop] = useState(false);

  const featureClick = () => {
    setFeatureDrop(!featureDrop);
    setSolutionDrop(false);
    setPlansDrop(false);
    setResourceDrop(false);
  };

  const solutionClick = () => {
    setSolutionDrop(!solutionDrop);
    setFeatureDrop(false);
    setPlansDrop(false);
    setResourceDrop(false);
  };

  const plansClick = () => {
    setPlansDrop(!plansDrop);
    setFeatureDrop(false);
    setSolutionDrop(false);
    setResourceDrop(false);
  };

  const resourceClick = () => {
    setResourceDrop(!resourceDrop);
    setFeatureDrop(false);
    setSolutionDrop(false);
    setPlansDrop(false);
  };

  return (
    <>
      <nav className="bg-white fixed z-[999] w-full top-0 start-0 shadow-xl">
        <div className="max-w-screen-xl flex items-center mx-auto justify-between md:p-0 sm:p-3">
          <div className="flex items-center gap-16">
            <a href="#" className="flex items-center gap-3">
              <span className="text-3xl font-extrabold mt-2 mb-2">
                LEADNEST
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-4 mt-2 mb-2 text-zinc-700">
              <li
                onClick={featureClick}
                className={`flex items-center hover:text-[#FA812F] cursor-pointer transition-colors duration-200 ${
                    featureDrop ? "text-[#FA812F] " : ""
                }`}
              >
                Features{" "}
                <span className={`text-xl transition-transform duration-200 ${featureDrop ? 'rotate-180' : ''}`}>
                  <RiArrowDropDownLine />
                </span>
              </li>
              <li 
                onClick={solutionClick}
                className={`flex items-center hover:text-[#FA812F] cursor-pointer transition-colors duration-200 ${
                    solutionDrop ? "text-[#FA812F] " : ""
                }`}
              >
                Solutions{" "}
                <span className={`text-xl transition-transform duration-200 ${solutionDrop ? 'rotate-180' : ''}`}>
                  <RiArrowDropDownLine />
                </span>
              </li>
              <li 
                onClick={plansClick}
                className={`flex items-center hover:text-[#FA812F] cursor-pointer transition-colors duration-200 ${
                    plansDrop ? "text-[#FA812F] " : ""
                }`}
              >
                Plans{" "}
                <span className={`text-xl transition-transform duration-200 ${plansDrop ? 'rotate-180' : ''}`}>
                  <RiArrowDropDownLine />
                </span>
              </li>
              <li className="hover:text-[#FA812F] cursor-pointer transition-colors duration-200">Pricing</li>
              <li 
                onClick={resourceClick}
                className={`flex items-center hover:text-[#FA812F] cursor-pointer transition-colors duration-200 ${
                    resourceDrop ? "text-[#FA812F] " : ""
                }`}
              >
                Resources{" "}
                <span className={`text-xl transition-transform duration-200 ${resourceDrop ? 'rotate-180' : ''}`}>
                  <RiArrowDropDownLine />
                </span>
              </li>
            </ul>
          </div>

          {/* Features Dropdown */}
          {featureDrop && (
            <div className="absolute z-[999] w-full top-15 h-auto flex items-center left-0 shadow-lg animate-fadeIn">
              <div className="w-[60%] bg-white pt-10 pl-30 pr-10 pb-10">
                <div className="flex items-center text-left">
                  <h4 className="text-md font-medium">
                    Explore the features that help your team succeed
                  </h4>
                </div>
                <hr className="mt-4 text-zinc-300" />
                <div className="grid grid-cols-3 mt-3">
                  {featureContent.map((f, i) => (
                    <div
                      key={i}
                      className="flex flex-col px-4 py-2 hover:bg-emerald-50 cursor-pointer transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = f.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <div className="flex items-center gap-5">
                        <img src={f.image} alt="" className="w-4 h-4" />
                        <h5 className="text-sm">{f.heading}</h5>
                      </div>
                      <p className="mt-1 text-zinc-500 text-xs">{f.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[40%] bg-zinc-100"></div>
            </div>
          )}

          {/* Plans Dropdown */}
          {plansDrop && (
            <div className="absolute z-[999] w-full top-15 h-auto flex left-0 shadow-lg animate-fadeIn">
              <div className="w-[60%] bg-white pt-8 pl-12 pr-8 pb-8">
                <div className="grid grid-cols-2 gap-6">
                  {plansContent.plans.map((plan, i) => (
                    <div
                      key={i}
                      className="flex flex-col p-6 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 group border border-gray-100"
                      style={{ backgroundColor: plan.color }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = plan.color;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = plan.color;
                        e.currentTarget.style.transform = 'translateY(0px)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{plan.icon}</span>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-gray-800 group-hover:text-[#FA812F] transition-colors duration-200 mb-3">
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
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    Take a tour of Leadnest
                  </button>
                </div>
              </div>
              <div className="w-[40%] bg-gray-50 pt-8 pl-8 pr-8 pb-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">
                    Compare plans & pricing
                  </h4>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Whether you're a team of 2 or 2,000, Leadnest's flexible pricing model means you only pay for what you need.
                    </p>
                    <button className="w-full bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                      View Leadnest pricing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Solutions Dropdown */}
          {solutionDrop && (
            <div className="absolute z-[999] w-full top-15 h-auto flex left-0 shadow-lg animate-fadeIn">
              <div className="w-[60%] bg-white pt-8 pl-12 pr-8 pb-8">
                <div className="flex items-center text-left mb-6">
                  <h4 className="text-lg font-medium text-gray-700">
                    Take a page out of these pre-built Leadnest playbooks designed for all teams
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {solutionsContent.teams.map((team, i) => (
                    <div
                      key={i}
                      className="flex flex-col p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{team.icon}</span>
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-gray-800 group-hover:text-[#FA812F] transition-colors duration-200">
                            {team.heading}
                          </h5>
                          <p className="mt-2 text-gray-600 text-xs leading-relaxed">
                            {team.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
                    See all teams →
                  </a>
                </div>
              </div>
              <div className="w-[40%] bg-gray-50 pt-8 pl-8 pr-8 pb-8">
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-700 mb-6">
                    Our product in action
                  </h4>
                  <div className="space-y-6">
                    {solutionsContent.useCases.map((useCase, i) => (
                      <div key={i} className="group cursor-pointer">
                        <h5 className="text-sm font-medium text-gray-800 group-hover:text-[#FA812F] transition-colors duration-200 mb-2">
                          Use case: {useCase.heading}
                        </h5>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {useCase.content}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
                      See all use cases →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Resources Dropdown */}
          {resourceDrop && (
            <div className="absolute z-[999] w-full top-15 h-auto flex left-0 shadow-lg animate-fadeIn">
              <div className="w-[60%] bg-white pt-8 pl-12 pr-8 pb-8">
                <div className="flex items-center text-left mb-6">
                  <h4 className="text-lg font-medium text-gray-700">
                    Learn & connect
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {resourcesContent.resources.map((resource, i) => (
                    <div
                      key={i}
                      className="flex flex-col p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{resource.icon}</span>
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-gray-800 group-hover:text-[#FA812F] transition-colors duration-200 mb-2">
                            {resource.heading}
                          </h5>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {resource.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[40%] bg-gray-50 pt-8 pl-8 pr-8 pb-8">
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-700 mb-6">
                    Helping teams work better, together
                  </h4>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Discover Leadnest use cases, productivity tips, best practices for team collaboration, and expert remote work advice.
                    </p>
                    <button className="w-full bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                      Check out the Leadnest blog
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center gap-4">
            <button className="mt-1 text-xl cursor-pointer text-zinc-700 hover:text-[#FA812F] transition-colors duration-200">
              Log in
            </button>
            <button className="bg-[#FA812F] px-3 py-4 text-xl cursor-pointer hover:bg-orange-300 transition-colors duration-200">
              Get Leadnest for free
            </button>
          </div>
          <div className="md:hidden text-2xl">
            <IoMenu />
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;