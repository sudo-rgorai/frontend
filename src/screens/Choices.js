import React from 'react';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';

export default function Choices() {
return (
    <div>
    <Link to="/student">
        <Button variant="contained">Student</Button>
    </Link>
    <Link to="/parent">
        <Button variant="contained">Parent</Button>
    </Link>
    <Link to="/teacher">
        <Button variant="contained">Teacher</Button>
    </Link>
    </div> 
    )
};