import React from "react";
import {Link} from "react-router-dom"

function SolutionDropdown(){
   
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

    return(
      <div className="absolute z-[999] w-full top-15 h-auto flex left-0 shadow-lg animate-fadeIn">
              <div className="w-[60%] bg-white pt-8 pl-28 pr-8 pb-8">
                <div className="flex items-center text-left mb-6">
                  <h4 className="text-md font-medium text-gray-700">
                    Take a page out of these pre-built Leadnest playbooks designed for all teams
                  </h4>
                </div>
                <hr className="text-zinc-300 mt-1"/>
                <div className="grid grid-cols-3 gap-2">
                  {solutionsContent.teams.map((team, i) => (
                    <div
                      key={i}
                      className="flex flex-col p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-100 group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{team.icon}</span>
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-gray-800 group-hover:text-[#FA812F] transition-colors duration-100">
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
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-100">
                    See all teams →
                  </a>
                </div>
              </div>
              <div className="w-[40%] bg-zinc-100 pt-8 pl-8 pr-30 pb-8">
                <div className="mb-6">
                  <h4 className="text-md font-medium text-gray-700 mb-6">
                    Our product in action
                  </h4>
                  <hr className="text-zinc-500 "/>
                  <div className="space-y-6">
                    {solutionsContent.useCases.map((useCase, i) => (
                      <div key={i} className="group cursor-pointer mt-5">
                        <h5 className="text-sm font-medium text-gray-800 group-hover:text-[#FA812F] transition-colors duration-100 mb-2">
                          Use case: {useCase.heading}
                        </h5>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {useCase.content}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link to="" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-100">
                      See all use cases →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default SolutionDropdown;