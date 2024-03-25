import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="sm:grid sm:grid-cols-12">
      {/* Sidebar component */}
      <div className={`hidden sm:col-span-2 ${showSidebar && "sm:block"}`}>
        <Sidebar />
      </div>
      {/* Navbar and landingPage */}
      <div
        className={`bg-white ${
          showSidebar ? "sm:col-span-10" : "sm:col-span-12"
        }`}
      >
        <div>
          <Navbar setShowSidebar={setShowSidebar} />
        </div>

        <div className="text-white h-screen p-3 landing-page text-xl grid place-content-center text-center leading-10">
          <div className=" mb-14 italic">
            <h1 className=" text-xl">
              Welcome to Our Car Manufacturing Dashboard!!!
            </h1>
            <p className="m-auto">
              Gain valuable insights into the car manufacturing process and
              streamline your operations with our intuitive dashboard.
            </p>
            <p>
              Get Started with our{" "}
              <span className="underline decoration-indigo-500">
                Research inputs
              </span>{" "}
            </p>
            <div className=" text-white mt-3">
              <Link to='/research/external'>
                <Button className="bg-indigo-900 mr-2">External</Button>
              </Link>
              <Link to='/research/internal'>
                <Button className="bg-indigo-900">Internal</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* footer component */}
      <div className="sm:col-span-12">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
