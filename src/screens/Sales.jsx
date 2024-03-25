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
            <h2 className="text-3xl  mb-8">Sales</h2>
            <div className=" text-white mt-3 ml-auto ">
              <Link to="/planning/prd">
                <Button className="bg-indigo-900 mr-2 w-32">Online</Button>
              </Link>
              <Link to="/planning/specs">
                <Button className="bg-indigo-900 w-32">Dealership</Button>
              </Link>
            </div>
          </div>

          <div>
            <p className="text-lg shadow bg-sky-200 text-black rounded italic mt-3 mb-8 p-5">
              Sales play a pivotal role in the automotive industry, serving as
              the primary conduit through which vehicles are brought from the
              production line to the hands of consumers. This section delves
              into the intricate world of automotive sales, exploring the
              various facets that drive success in this dynamic and competitive
              arena. At the heart of automotive sales lies a deep understanding
              of consumer behavior and market dynamics. Sales professionals must
              possess keen insights into evolving consumer preferences,
              demographic trends, and economic indicators to effectively
              position their products and capitalize on emerging opportunities.
            </p>
          </div>
          <div className="sm:flex sm:gap-12">
            <div>
              <h2 className="text-2xl  m-4 underline decoration-indigo-500">
                Planning based on feedback.
              </h2>
              <ul className="list-disc ml-4 p-3 ">
                <li>
                  Customer Relationship Management: At the heart of automotive
                  sales lies effective customer relationship management (CRM),
                  which involves building strong connections with buyers
                  throughout their journey.
                </li>
                <li>
                  Sales Strategies: Automotive sales demand strategic planning
                  and execution to navigate competitive markets and meet revenue
                  targets. Sales teams develop comprehensive strategies
                  encompassing pricing, promotions, distribution channels, and
                  market segmentation to maximize sales volumes and
                  profitability.
                </li>
                <li>
                  Digital Transformation: In today's digital age, automotive
                  sales are increasingly shaped by digital transformation
                  initiatives. From online lead generation and virtual showroom
                  experiences to e-commerce platforms and digital marketing
                  campaigns, digital channels offer new avenues for customer
                  engagement and sales growth.
                </li>
                <li>
                  Dealership Operations: Dealerships serve as the frontline of
                  automotive sales, providing customers with personalized
                  experiences and expert guidance throughout the purchasing
                  process.
                </li>
                <li>
                  Collaboration and Integration: Successful automotive sales
                  hinge on seamless collaboration and integration across sales
                  channels, dealership networks, and OEM partners.
                </li>
              </ul>
            </div>
            <div className="mb-4 p-4 ">
              <div className="mb-6">
                <ChartBar
                  id="myAreaChart"
                  labels={[
                    "Customer Relationship",
                    "Sales Strategies",
                    "Digital Transformation",
                    "Dealership Operations",
                    "Collaboration and Integration",
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
