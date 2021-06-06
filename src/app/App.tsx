import React, { ReactElement } from "react";

import Heading from "./heading/Heading";
import Content from "./content/Content";

const App: React.FC = (): ReactElement => (
    <>
        <Heading />
        <Content />
    </>
);

export default App;