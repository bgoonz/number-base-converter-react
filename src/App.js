import React from "react";
import BaseConverter from "./BaseConverter";

const App = () => {
  return (
    <div className="App base-converter">
      <div id="title" className={"title"}>Number Base Converter</div>
      <div>
        <BaseConverter />
      </div>
    </div>
  );
};

export default App;
