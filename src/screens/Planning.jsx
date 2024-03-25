import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React, { useState, useContext} from "react";
import ChartBar from "../components/ChartBar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchContext from "@/context/SearchContext";

const Research = () => {
  const { dark } = useContext(SearchContext);
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
          className={`h-full p-4 ${
            dark ? "bg-black text-white" : "bg-slate-200"
          } `}
        >
          <div className="flex">
            <h2 className="text-3xl mb-8">Planning</h2>
            <div className=" text-white mt-3 ml-auto ">
              <Link to="/planning/prd">
                <Button className="bg-indigo-900 mr-2 w-32">PRD</Button>
              </Link>
              <Link to="/planning/specs">
                <Button className="bg-indigo-900 w-32">Specs</Button>
              </Link>
            </div>
          </div>

          <div>
            <p className="text-lg shadow bg-sky-200 text-black rounded italic mt-3 mb-8 p-5">
              Effective planning is indispensable for navigating the intricate
              landscape of the automotive industry, where evolving market
              dynamics, technological advancements, regulatory requirements, and
              competitive pressures demand proactive strategies and agile
              decision-making. This section explores the pivotal role of
              planning in the automotive sector, encompassing strategic
              planning, product development roadmaps, supply chain optimization,
              and risk management frameworks. By emphasizing rigorous planning
              processes, stakeholders can anticipate challenges, capitalize on
              opportunities, and achieve sustainable growth in a rapidly
              evolving industry.
            </p>
          </div>
          <div className="sm:flex sm:gap-12">
            <div>
              <h2 className="text-2xl m-4 underline decoration-indigo-500">
                Planning based on feedback.
              </h2>
              <ul className="list-disc ml-4 p-3 ">
                <li>
                  Strategic Roadmapping: Planning in the automotive industry
                  begins with strategic roadmapping, which entails defining
                  long-term objectives, identifying key market trends and
                  disruptions, and formulating strategies to achieve competitive
                  advantage.
                </li>
                <li>
                  Product Development Planning: Central to automotive planning
                  is product development planning, which involves
                  conceptualizing, designing, and commercializing new vehicle
                  models, components, and technologies.
                </li>
                <li>
                  Supply Chain Optimization: Planning extends to optimizing the
                  automotive supply chain to ensure efficient procurement,
                  production, and distribution of components, materials, and
                  finished vehicles.
                </li>
                <li>
                  Risk Management Frameworks: Automotive planning incorporates
                  risk management frameworks to identify, assess, and mitigate
                  risks arising from market volatility, geopolitical
                  uncertainties, supply chain disruptions, and regulatory
                  changes.
                </li>
                <li>
                  Resource Allocation and Budgeting: Planning efforts entail
                  resource allocation and budgeting to optimize the allocation
                  of financial, human, and technological resources across
                  strategic initiatives, operational activities, and investment
                  projects.
                </li>
              </ul>
            </div>
            <div className="mb-4 p-4 ">
              <div className="mb-6">
                <ChartBar
                  id="myAreaChart"
                  labels={[
                    "Strategic Roadmapping",
                    "Product Development Planning",
                    "Supply Chain Optimization",
                    "Risk Management Frameworks",
                    "Resource Allocation and Budgeting",
                  ]}
                  data={[10, 20, 30, 90, 60]}
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
