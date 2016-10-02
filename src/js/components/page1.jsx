import React from 'react';
import { Link } from 'react-router';

const Page1 = ({}) =>
    <div>
        page1
        <Link  to="/page2" >Go to Page2</Link>
    </div>;

export default Page1;