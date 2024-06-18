// // // // import * as React from 'react';
// // // // import Avatar from '@mui/material/Avatar';
// // // // import Card from '@mui/material/Card';
// // // // import CardContent from '@mui/material/CardContent';
// // // // import Stack from '@mui/material/Stack';
// // // // import type { SxProps } from '@mui/material/styles';
// // // // import Typography from '@mui/material/Typography';
// // // // import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
// // // // import { ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';
// // // // import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';

// // // // export interface BudgetProps {
// // // //   diff?: number;
// // // //   trend: 'up' | 'down';
// // // //   sx?: SxProps;
// // // //   value: string;
// // // // }

// // // // export function Budget({ diff, trend, sx, value }: BudgetProps): React.JSX.Element {
// // // //   const TrendIcon = trend === 'up' ? ArrowUpIcon : ArrowDownIcon;
// // // //   const trendColor = trend === 'up' ? 'var(--mui-palette-success-main)' : 'var(--mui-palette-error-main)';

// // // //   return (
// // // //     <Card sx={sx}>
// // // //       <CardContent>
// // // //         <Stack spacing={3}>
// // // //           <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
// // // //             <Stack spacing={1}>
// // // //               <Typography color="text.secondary" variant="overline">
// // // //                 Total Requests
// // // //               </Typography>
// // // //               <Typography variant="h4">{value}</Typography>
// // // //             </Stack>
// // // //           </Stack>
// // // //         </Stack>
// // // //       </CardContent>
// // // //     </Card>
// // // //   );
// // // // }

// // // import * as React from 'react';
// // // import Avatar from '@mui/material/Avatar';
// // // import Card from '@mui/material/Card';
// // // import CardContent from '@mui/material/CardContent';
// // // import Stack from '@mui/material/Stack';
// // // import type { SxProps } from '@mui/material/styles';
// // // import Typography from '@mui/material/Typography';
// // // import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
// // // import { ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';
// // // import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';

// // // export interface BudgetProps {
// // //   diff?: number;
// // //   trend: 'up' | 'down';
// // //   sx?: SxProps;
// // //   value: string;
// // // }

// // // export function Budget({ diff, trend, sx, value }: BudgetProps): React.JSX.Element {
// // //   const TrendIcon = trend === 'up' ? ArrowUpIcon : ArrowDownIcon;
// // //   const trendColor = trend === 'up' ? 'var(--mui-palette-success-main)' : 'var(--mui-palette-error-main)';

// // //   return (
// // //     <Card sx={{ ...sx, width: '400px', height: '200px', padding: 2 }}>
// // //       <CardContent>
// // //         <Stack spacing={3}>
// // //           <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
// // //             <Stack spacing={1}>
// // //               <Typography color="text.secondary" variant="overline">
// // //                 Total Requests
// // //               </Typography>
// // //               <Typography variant="h4">{value}</Typography>
// // //             </Stack>
// // //           </Stack>
// // //           {diff !== undefined && (
// // //             <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
// // //               <TrendIcon style={{ color: trendColor }} />
// // //               <Typography color={trendColor} variant="body2">
// // //                 {diff}%
// // //               </Typography>
// // //             </Stack>
// // //           )}
// // //         </Stack>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // }

// // import * as React from 'react';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import Stack from '@mui/material/Stack';
// // // import type { SxProps } from '@mui/material/styles';
// // import Typography from '@mui/material/Typography';

// // // import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
// // // import { ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';
// // // import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';

// // export interface TotalRequestsCardProps {
// //   value: string; // Total number of requests
// // }

// // export function TotalRequests({ value }: TotalRequestsCardProps): React.JSX.Element {
// //   return (
// //     <Card sx={{width: '300px', padding: '16px', borderRadius: '12px' }}>
// //       <CardContent sx={{ padding: 0 }}>
// //         <Stack spacing={2}>
// //           <Typography color="text.secondary" variant="overline">
// //             Total Requests
// //           </Typography>
// //           <Typography variant="h4">{value}</Typography>
// //         </Stack>
// //       </CardContent>
// //     </Card>
// //   );
// // }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export interface TotalRequestsCardProps {
  value: string; // Total number of requests
}

export function TotalRequests({ value }: TotalRequestsCardProps): React.JSX.Element {
  return (
    <Card sx={{ width: '100%', maxWidth: 300, padding: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Stack spacing={2}>
          <Typography color="text.secondary" variant="overline">
            Total Requests
          </Typography>
          <Typography variant="h4">{value}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
