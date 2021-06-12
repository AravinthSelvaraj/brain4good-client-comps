import React, { ReactElement } from "react";

// import Content from "./content/Content";
import WebglExample from "./webgl-example/WebglExample";

const App: React.FC = (): ReactElement => (
    <>
        {/* <Content /> */}
        <WebglExample />
    </>
);

export default App;