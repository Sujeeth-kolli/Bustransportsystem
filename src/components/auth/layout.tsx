import * as React from 'react';
import Box from '@mui/material/Box';
<<<<<<< HEAD
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from '@/paths';
// import { DynamicLogo } from '@/components/core/logo';
=======
>>>>>>> 6670f1130dc99bbbeb0861670dc85adb4d7dd2de

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
<<<<<<< HEAD
    <Box
      sx={{
        display: { xs: 'flex', lg: 'grid' },
        flexDirection: 'column',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100%',
      }}
    >
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
        <Box sx={{ p: 3 }}>
          <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-block', fontSize: 0 }}>
            {/* <DynamicLogo colorDark="light" colorLight="dark" height={32} width={122} /> */}
          </Box>
        </Box>
        <Box sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto', justifyContent: 'center', p: 3 }}>
          <Box sx={{ maxWidth: '450px', width: '100%' }}>{children}</Box>
=======
    <>
      {/* Header with Title */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh' }}>
        <Box component="span" sx={{ fontSize: '40px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
          Transport Management System
>>>>>>> 6670f1130dc99bbbeb0861670dc85adb4d7dd2de
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
