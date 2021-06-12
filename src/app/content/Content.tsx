import React, { ReactElement } from 'react';

import content from './content.module.css';
import car from './car.jpeg';

const Content: React.FC = (): ReactElement => (
    <div className={content.container}>
        <img src={car} className={content.car} alt="Car" />
    </div>
);

export default Content;