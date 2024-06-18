import * as React from 'react';
import Box from '@mui/material/Box';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <>
      {/* Header with Title */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh' }}>
        <Box component="span" sx={{ fontSize: '40px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
          Transport Management System
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '75vh',
          minWidth: '700px',
          width: '100%',
          p: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxHeight: '1500px',
            maxWidth: '450px',
            p: 3,
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: 3,
          }}
        >
          {/* Sign-In Box */}
          <Box sx={{ maxWidth: '450px', width: '100%', textAlign: 'center' }}>{children}</Box>
        </Box>
      </Box>
    </>
  );
}
