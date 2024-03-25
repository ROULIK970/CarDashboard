import {
  faBookOpenReader,
  faRuler,
  faHands,
  faIndustry,
  faRectangleAd,
} from "@fortawesome/free-solid-svg-icons";

export default [
  {
    id: 1,
    icon: faBookOpenReader,
    name: "Research",
    specifics: ["External", "Internal"],
  },
  {
    id: 2,
    icon: faRuler,
    name: "Planning",
    specifics: ["PRD", "Specs"],
  },
  {
    id: 3,
    icon: faHands,
    name: "Designing",
    specifics: ["Hardware", "Software"],
  },
  {
    id: 4,
    icon: faIndustry,
    name: "Manufacturing",
    specifics: ["Material", "Production"],
  },
  {
    id: 5,
    icon: faRectangleAd,
    name: "Sales",
    specifics: ["Online", "Dealership"],
  },
];
