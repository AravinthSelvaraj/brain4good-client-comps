import React, { ReactElement } from 'react';

import heading from './heading.module.css';

const Heading: React.FC = (): ReactElement => <h1 className={heading.text}>My React and TypeScript App</h1>;

export default Heading;