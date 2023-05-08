import * as React from 'react';
import './CLinePreloader.scss';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function CLinePreloader() {
  return (
    <div className="c-line-preloader">
      <Box>
        <LinearProgress color="primary" />
      </Box>
    </div>
  );
}
