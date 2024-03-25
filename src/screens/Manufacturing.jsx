import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React, { useState, useContext } from "react";
import ChartBar from "../components/ChartBar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchContext from "@/context/SearchContext";

const Research = () => {
  const [showSidebar, setShowSidebar] = useState(true);
    const { dark } = useContext(SearchContext);
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
            <h2 className="text-3xl mb-8">Manufacturing</h2>
            <div className=" text-white mt-3 ml-auto ">
              <Link to="/planning/prd">
                <Button className="bg-indigo-900 mr-2 w-32">Material</Button>
              </Link>
              <Link to="/planning/specs">
                <Button className="bg-indigo-900 w-32">Production</Button>
              </Link>
            </div>
          </div>

          <div>
            <p className="text-lg shadow bg-sky-200 rounded text-black italic mt-3 mb-8 p-5">
              Manufacturing stands as the cornerstone of the automotive sector,
              playing an integral role in shaping the industry's landscape
              through its intricate web of production and assembly processes.
              This pivotal section delves into the rich tapestry of
              manufacturing within automotive development, offering a
              comprehensive exploration of its myriad facets. From the adoption
              of cutting-edge production technologies to the implementation of
              lean manufacturing principles, from the stringent enforcement of
              quality control measures to the pursuit of ambitious
              sustainability initiatives, each aspect contributes to the
              intricate ecosystem that propels the automotive industry forward.
            </p>
          </div>
          <div className="sm:flex sm:gap-12">
            <div>
              <h2 className="text-2xl  m-4 underline decoration-indigo-500">
                Manufacturing based on feedback.
              </h2>
              <ul className="list-disc ml-4 p-3">
                <li>
                  Advanced Production Technologies: Automotive manufacturing
                  leverages advanced production technologies such as robotics,
                  automation, and additive manufacturing to streamline
                  production processes, enhance efficiency, and improve product
                  quality.
                </li>
                <li>
                  Lean Manufacturing Principles: Central to automotive
                  manufacturing is the adoption of lean manufacturing
                  principles, aimed at eliminating waste, optimizing production
                  flow, and maximizing resource utilization
                </li>
                <li>
                  Quality Control Measures: Ensuring product quality and
                  reliability is paramount in automotive manufacturing. Quality
                  control measures encompass rigorous testing protocols, strict
                  adherence to industry standards, and implementation of robust
                  inspection processes throughout the manufacturing lifecycle
                </li>
                <li>
                  Sustainability Initiatives: Automotive manufacturing is
                  increasingly focused on sustainability initiatives aimed at
                  minimizing environmental impact and promoting eco-friendly
                  practices.
                </li>
                <li>
                  Supply Chain Integration: Effective automotive manufacturing
                  involves seamless integration of supply chain processes,
                  encompassing procurement, logistics, and inventory management.
                </li>
              </ul>
            </div>
            <div className="mb-4 p-4 ">
              <div className="mb-6">
                <ChartBar
                  id="myAreaChart"
                  labels={[
                    "Advanced Production",
                    "Lean Manufacturing",
                    "Quality Control",
                    "Sustainability Initiatives",
                    "Supply Chain",
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
