import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./ex2_functions/App";
import NameList from "./ex2_functions/ex3_var_function/NameList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <NameList/>
)