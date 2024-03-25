import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React, { useState,useContext } from "react";
import ChartBar from "../components/ChartBar";
import { Link } from "react-router-dom";
import ChartArea from "./ChartArea";
import { Button } from "./ui/button";
import SearchContext from "@/context/SearchContext";
const External = () => {
  const [showSidebar, setShowSidebar] = useState(true); 
  const { dark } = useContext(SearchContext);
  return (
    <div className="sm:grid sm:grid-cols-12 h-full ">
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
          className={`h-full ${
            dark ? "bg-black text-white" : "bg-blue-100 text-black"
          }`}
        >
          <h1 className="p-5 mx-5 mb-5 text-lg shadow text-slate-700 text-center bg-sky-200 rounded italic">
            Specifications in automotive design serve as the blueprint for
            creating vehicles that meet the highest standards of performance,
            safety, and efficiency. From engine specifications to interior
            features, each aspect is meticulously crafted to deliver a cohesive
            and compelling driving experience. In this section, we explore the
            key components of automotive specifications and their role in
            shaping the future of mobility. <br />
            <Link to="/planning/prd">
              <Button className="rounded p-3 hover:bg-gray-200 hover:mt-4 mt-3 hover:text-slate-700">
                {" "}
                Click to Explore Our PRD{" "}
              </Button>
            </Link>
          </h1>
          <div>
            <div className="mb-4 p-6 bg-slate-100 w-[800px] m-auto">
              <ChartArea id="myAreaChart" />
              <p className="mt-7 text-slate-700 ">
                At the heart of our endeavor lies a vision to create vehicles
                that not only transport but inspire. With each design iteration,
                engineering breakthrough, and strategic decision, we strive to
                push the boundaries of possibility, challenging conventional
                norms and reshaping industry standards. From the sleek curves of
                exterior aesthetics to the intricate algorithms powering
                autonomous driving systems, every aspect of our vehicles
                reflects a dedication to excellence and a passion for
                innovation.
              </p>
            </div>
            <div className="mt-4 mb-4 p-6 bg-slate-100 w-[800px] m-auto">
              <ChartBar
                labels={[
                  "Strategic Roadmapping",
                  "Product Development Planning",
                  "Supply Chain Optimization",
                  "Risk Management Frameworks",
                  "Resource Allocation and Budgeting",
                ]}
                data={[10, 20, 30, 50, 60]}
              />
              <div className="mt-4 text-slate-700">
                <p>
                  Yet, innovation alone is not enough. In a world where
                  sustainability is paramount and regulatory landscapes are
                  ever-shifting, our approach is holistic, addressing not only
                  the performance and appeal of our vehicles but also their
                  environmental impact and compliance with global standards.
                  Through a blend of forward-thinking design, eco-conscious
                  manufacturing processes, and proactive engagement with
                  regulatory bodies, we aim to set new benchmarks for
                  responsible automotive development.
                </p>
                <ul>
                  <li>
                    Sensor Integration: The integration of advanced sensors such
                    as LiDAR, radar, and cameras is a cornerstone of autonomous
                    driving technology. Bar chart markers can illustrate the
                    progression in sensor capabilities over time, including
                    improvements in range, resolution, and accuracy.
                  </li>
                  <li>
                    Processing Power: The evolution of onboard computing power
                    is another critical aspect. Bar charts can depict the
                    increasing processing power of onboard computers, measured
                    in terms of operations per second (OPS) or teraflops,
                    reflecting the ability to handle complex algorithms for
                    real-time decision-making.
                  </li>
                  <li>
                    Machine Learning Algorithms: Machine learning algorithms
                    play a pivotal role in autonomous systems, enabling vehicles
                    to perceive and respond to their environment. Bar charts can
                    showcase advancements in machine learning models,
                    highlighting improvements in accuracy, efficiency, and
                    adaptability.
                  </li>
                  <li>
                    Vehicle Autonomy Levels: The progression from driver
                    assistance features to fully autonomous vehicles can be
                    depicted using bar charts to illustrate the adoption and
                    deployment of different autonomy levels, as defined by
                    organizations like SAE International.
                  </li>
                  <li>
                    Safety Metrics: Safety remains a paramount concern in
                    autonomous driving development. Bar charts can visualize
                    safety metrics such as accident rates, miles driven between
                    interventions, and the effectiveness of safety features,
                    providing insights into the overall safety performance of
                    autonomous vehicles.
                  </li>
                </ul>
              </div>
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

export default External;
