// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Stack from '@mui/material/Stack';
// import type { SxProps } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
// import { ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';
// import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';

// export interface TotalCustomersProps {
//   diff?: number;
//   trend: 'up' | 'down';
//   sx?: SxProps;
//   value: string;
// }

// export function TotalCustomers({ diff, trend, sx, value }: TotalCustomersProps): React.JSX.Element {
//   const TrendIcon = trend === 'up' ? ArrowUpIcon : ArrowDownIcon;
//   const trendColor = trend === 'up' ? 'var(--mui-palette-success-main)' : 'var(--mui-palette-error-main)';

//   return (
//     <Card sx={{ ...sx, width: '400px', height: '200px', padding: 2 }}>
//       <CardContent>
//         <Stack spacing={3}>
//           <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
//             <Stack spacing={1}>
//               <Typography color="text.secondary" variant="overline">
//                 Total Approvals
//               </Typography>
//               <Typography variant="h4">{value}</Typography>
//             </Stack>
//           </Stack>
//           {diff !== undefined && (
//             <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
//               <TrendIcon style={{ color: trendColor }} />
//               <Typography color={trendColor} variant="body2">
//                 {diff}%
//               </Typography>
//             </Stack>
//           )}
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export interface ApprovalsDoneCardProps {
  sx?: SxProps; // Additional styles (optional)
  value: string; // Total number of approvals done
}

export function ApprovalsDone({ sx, value }: ApprovalsDoneCardProps): React.JSX.Element {
  return (
    <Card sx={{ ...sx, width: '300px', padding: '16px', borderRadius: '12px' }}>
      <CardContent sx={{ padding: 0 }}>
        <Stack spacing={2}>
          <Typography color="text.secondary" variant="overline">
            Approvals Done
          </Typography>
          <Typography variant="h4">{value}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
