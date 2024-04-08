import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import NameList from "./ex4_props/NameList";
import App from "./ex4_props/App.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

//const names = ["Simon Elbrink", "Mehrdad Javan", "Marcus Gudmundsen"];

/* <NameList names={names} />*/

root.render(
    <App/>
)