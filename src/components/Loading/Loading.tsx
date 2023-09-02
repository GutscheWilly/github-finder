import React from 'react';
import { CircularProgress } from '@mui/material';

import './Loading.css';

function Loading() {
    return (
        <div className="loading">
            <CircularProgress color="inherit" />
        </div>
    );
}

export default Loading;
