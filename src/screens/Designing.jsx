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
            <h2 className="text-3xl mb-8">Designing</h2>
            <div className=" text-white mt-3 ml-auto ">
              <Link to="/planning/prd">
                <Button className="bg-indigo-900 mr-2 w-32">Hardware</Button>
              </Link>
              <Link to="/planning/specs">
                <Button className="bg-indigo-900 w-32">Software</Button>
              </Link>
            </div>
          </div>

          <div>
            <p className="text-lg shadow bg-sky-200 text-black rounded italic mt-3 mb-8 p-5">
              Designing plays a crucial role in the automotive industry,
              influencing not only the aesthetic appeal of vehicles but also
              their functionality, user experience, and brand identity. This
              section delves into the significance of design in automotive
              development, covering aspects such as user-centric design
              principles, innovative design trends, and the integration of
              advanced technologies for enhancing vehicle design.
            </p>
          </div>
          <div className="sm:flex sm:gap-12">
            <div>
              <h2 className="text-2xl  m-4 underline decoration-indigo-500">
                Designing based on feedback.
              </h2>
              <ul className="list-disc ml-4 p-3 ">
                <li>
                  User-Centric Design Principles: Designing automobiles involves
                  adhering to user-centric design principles, prioritizing
                  factors such as comfort, safety, ergonomics, and intuitive
                  interfaces to enhance the overall driving experience for
                  consumers.
                </li>
                <li>
                  Innovative Design Trends: The automotive industry is
                  witnessing a shift towards innovative design trends aimed at
                  sustainability, connectivity, and personalization. This
                  includes the incorporation of eco-friendly materials, seamless
                  integration of digital interfaces, and customizable design
                  options to cater to diverse consumer preferences.
                </li>
                <li>
                  Integration of Advanced Technologies: Designing modern
                  vehicles entails the integration of advanced technologies such
                  as augmented reality displays, autonomous driving features,
                  and smart connectivity solutions. These technologies not only
                  enhance the functionality of vehicles but also contribute to
                  creating futuristic and immersive driving experiences.
                </li>
                <li>
                  Emphasis on Brand Identity: Design plays a crucial role in
                  shaping brand identity and differentiation in the automotive
                  market. Automakers invest in distinctive design elements,
                  signature styling cues, and iconic brand aesthetics to
                  establish a strong brand identity and foster brand loyalty
                  among consumers.
                </li>
                <li>
                  Collaborative Design Processes: Effective automotive design
                  involves collaborative processes that bring together
                  interdisciplinary teams comprising designers, engineers,
                  marketers, and usability experts. Collaborative design
                  frameworks facilitate innovation, creativity, and
                  cross-functional synergy to deliver compelling vehicle designs
                  that resonate with consumers.
                </li>
              </ul>
            </div>
            <div className="mb-4 p-4 ">
              <div className="mb-6">
                <ChartBar
                  id="myAreaChart"
                  labels={[
                    "User-Centric",
                    "Innovative Design",
                    "Advanced Technologies",
                    "Brand Identity",
                    "Collaborative Design",
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
