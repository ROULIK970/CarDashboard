import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React, { useContext, useState } from "react";
import ChartBar from "../components/ChartBar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchContext from "@/context/SearchContext";

const Research = () => {
  
 const { dark} = useContext(SearchContext);
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="sm:grid sm:grid-cols-12">
      {/* Sidebar component */}
      <div
        className={`hidden h-full sm:col-span-2 ${showSidebar && "sm:block"}`}
      >
        <Sidebar />
      </div>
      {/* Navbar and landingPage */}
      <div
        className={`bg-white h-full ${
          showSidebar ? "sm:col-span-10" : "sm:col-span-12"
        }`}
      >
        <div>
          <Navbar setShowSidebar={setShowSidebar} />
        </div>
        <div
          className={`h-full p-4 ${dark ? "bg-black text-white" : "bg-slate-200"} `}
        >
          <div className="flex">
            <h2 className="text-3xl mb-8">Research</h2>
            <div className=" text-white mt-3 ml-auto ">
              <Link to="/research/external">
                <Button className="bg-indigo-900 mr-2">External</Button>
              </Link>
              <Link to="/research/internal">
                <Button className="bg-indigo-900">Internal</Button>
              </Link>
            </div>
          </div>

          <div>
            <p className="text-lg shadow bg-sky-200 text-black rounded italic mt-3 mb-8 p-5">
              The research phase of any project serves as the foundational
              groundwork upon which subsequent actions and decisions are built.
              It involves thorough investigation, data gathering, and analysis
              to gain insights into various aspects relevant to the project's
              objectives. In the context of car manufacturing, research plays a
              critical role in understanding market dynamics, consumer
              preferences, technological advancements, regulatory requirements,
              and internal capabilities. By conducting comprehensive research,
              stakeholders can identify opportunities, assess risks, and
              formulate informed strategies to guide the project's direction
              effectively. From identifying market trends to evaluating
              production processes, the research phase enables stakeholders to
              make evidence-based decisions that ultimately contribute to the
              success and sustainability of the project. In essence, the
              research phase acts as a compass, providing valuable insights and
              guiding the project towards its desired outcomes while mitigating
              potential pitfalls along the way.
            </p>
          </div>
          <div className="sm:flex sm:gap-12">
            <div>
              <h2 className="text-2xl  m-4 underline decoration-indigo-500">
                Customer preferences based on technology.
              </h2>
              <ul className="list-disc ml-4 p-3 ">
                <li>
                  Infotainment System Preference: Measure the popularity of
                  different infotainment systems such as touchscreen displays,
                  voice control, or smartphone integration.
                </li>
                <li>
                  Advanced Driver Assistance Systems (ADAS): Explore the demand
                  for safety features like adaptive cruise control, lane
                  departure warning, or automatic emergency braking.
                </li>
                <li>
                  Connectivity Options: Assess the interest in connectivity
                  features like Wi-Fi hotspot, Bluetooth connectivity, or
                  wireless charging.
                </li>
                <li>
                  Navigation Systems: Gauge the preference for navigation
                  systems, including built-in GPS, augmented reality navigation,
                  or integration with smartphone apps like Google Maps or Waze.
                </li>
                <li>
                  Electric Vehicle (EV) Features: Investigate interest in
                  electric vehicle technology, including battery range, charging
                  infrastructure, or smart grid integration.
                </li>
              </ul>
            </div>
            <div className="mb-4 p-4 ">
              <div className="mb-6">
                <ChartBar
                  id="myAreaChart"
                  labels={[
                    "Infotainment System",
                    "ADAS",
                    "Connectivity Options",
                    "Navigation Systems",
                    "EV",
                  ]}
                  data={[70, 20, 30, 50, 60]}
                />
              </div>
              <h2 className="text-2xl p-5 bg-slate-300 italic text-center text-slate-800">
                Car Technology
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:col-span-12 bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Research;
