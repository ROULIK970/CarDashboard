import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import datas from "../data";
import SearchContext from "@/context/SearchContext";

const Sidebar = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const { dark } = useContext(SearchContext);

  return (
    <div
      className={`min-h-full ${
        dark
          ? "bg-gradient-to-b from-black to-red-800 text-white"
          : "bg-gradient-to-b from-indigo-600 to-sky-500 text-white"
      }`}
    >
      <div className="flex items-center  border-b-[0.1px] border-white mx-3 h-20">
        <img
          src="https://www.bing.com/th?id=OIP.v3sdvBjMfVzdQ2fFDijmngAAAA&w=206&h=206&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          className="w-11 h-11 rounded-full ml-auto"
          alt="lismotors logo"
        />
        <Link to="/" className="mr-auto p-2 text-lg">
          <h2>Liz Motors</h2>
        </Link>
      </div>
      {datas.map((data, index) => (
        <div
          key={data.id}
          className="flex p-5 border-b-[0.1px] m-3 cursor-pointer"
          onClick={() => handleToggle(index)}
        >
          {" "}
          <FontAwesomeIcon className="mt-3" icon={data.icon} />
          <div className="flex flex-col">
            <Link to={`/${data.name.toLowerCase()}`}>
              <h2 className="m-2 hover:font-bold">{data.name}</h2>
            </Link>

            {expandedIndex === index &&
              data.specifics.map((specific, i) => (
                <ul key={i} className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <Link
                    to={`/${data.name.toLowerCase()}/${specific.toLowerCase()}`}
                  >
                    {console.log(i)}
                    <li>{specific}</li>
                  </Link>
                </ul>
              ))}
          </div>
          <FontAwesomeIcon className="ml-auto mt-3" icon={faCaretRight} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
