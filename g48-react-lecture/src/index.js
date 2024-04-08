import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./ex2_functions/App";
import NameList from "./ex4_props/NameList";


const root = ReactDOM.createRoot(document.getElementById("root"));

const names = ["Simon Elbrink", "Mehrdad Javan", "Marcus Gudmundsen"];

root.render(
    <NameList names={names} />
)
