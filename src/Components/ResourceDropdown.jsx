import React from "react";

function ResourceDropdown(){

   const resourcesContent = {
    resources: [
      {
        icon: "📚",
        heading: "Effentia guide",
        content: "Our easy to follow workflow guide will take you from project set-up to Effentia expert in no time.",
      },
      {
        icon: "🏠",
        heading: "Remote work guide",
        content: "The complete guide to setting up your team for remote work success.",
      },
      {
        icon: "🎥",
        heading: "Webinars",
        content: "Enjoy our free Effentia webinars and become a productivity professional.",
      },
      {
        icon: "💼",
        heading: "Customer stories",
        content: "See how businesses have adopted Effentia as a vital part of their workflow.",
      },
      {
        icon: "⚙️",
        heading: "Developers",
        content: "The sky's the limit in what you can deliver to Effentia users in your Power-Up!",
      },
      {
        icon: "❓",
        heading: "Help resources",
        content: "Need help? Articles and FAQs to get you unstuck.",
      },
    ]
  };

    return(
        <div className="absolute z-[999] w-full top-15 h-auto flex left-0 shadow-lg animate-fadeIn">
              <div className="w-[60%] bg-white pt-8 pl-28 pr-8 pb-8">
                <div className="flex items-center text-left mb-6">
                  <h4 className="text-md font-medium text-gray-700">
                    Learn & connect
                  </h4>
                </div>
                <hr className="text-zinc-300 mb-2"/>
                <div className="grid grid-cols-3 gap-2">
                  {resourcesContent.resources.map((resource, i) => (
                    <div
                      key={i}
                      className="flex flex-col p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-100 group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{resource.icon}</span>
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-gray-800 group-hover:text-[#FA812F] transition-colors duration-100 mb-2">
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
              <div className="w-[40%] bg-zinc-100 pt-8 pl-8 pr-8 pb-8">
                <div className="mb-6">
                  <h4 className="text-md font-medium text-gray-700 mb-6">
                    Helping teams work better, together
                  </h4>
                  <hr className="text-zinc-500 mb-10"/>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Discover Effentia use cases, productivity tips, best practices for team collaboration, and expert remote work advice.
                    </p>
                    <button className="w-full bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-100">
                      Check out the Effentia blog
                    </button>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default ResourceDropdown;