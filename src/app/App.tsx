import React, { ReactElement } from "react";

import "../brain4good/ui-comps/global.css";

// import Heading from "./heading/Heading";
// import Content from "./content/Content";
import { Create } from "./crud/Create";

const App: React.FC = (): ReactElement => (
    <>
        {/* <Heading />
        <Content /> */}
        <Create />
    </>
);

export default App;