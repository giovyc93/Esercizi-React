import React from "react";
import HelloName from "./helloName"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloName name= "Giovanni"/>
  </React.StrictMode>
);

