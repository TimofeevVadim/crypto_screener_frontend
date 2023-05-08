import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import './ComandPanel.scss';

export default function ComandPanel({ value, handleChange }) {
  return (
    <Box className="interexchange-comand-panel" sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab value="active" label="Active" />
        <Tab value="history" label="History" />
      </Tabs>
    </Box>
  );
}
