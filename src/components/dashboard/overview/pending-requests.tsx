// // // import * as React from 'react';
// // // import Avatar from '@mui/material/Avatar';
// // // import Card from '@mui/material/Card';
// // // import CardContent from '@mui/material/CardContent';
// // // import LinearProgress from '@mui/material/LinearProgress';
// // // import Stack from '@mui/material/Stack';
// // // import type { SxProps } from '@mui/material/styles';
// // // import Typography from '@mui/material/Typography';
// // // import { ListBullets as ListBulletsIcon } from '@phosphor-icons/react/dist/ssr/ListBullets';

// // // export interface TasksProgressProps {
// // //   sx?: SxProps;
// // //   value: number;
// // // }

// // // export function TasksProgress({ value, sx }: TasksProgressProps): React.JSX.Element {
// // //   return (
// // //     <Card sx={sx}>
// // //       <CardContent>
// // //         <Stack spacing={2}>
// // //           <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
// // //             <Stack spacing={1}>
// // //               <Typography color="text.secondary" gutterBottom variant="overline">
// // //               Pending
// // //               </Typography>
// // //               <Typography variant="h4">{value}%</Typography>
// // //             </Stack>
// // //           </Stack>
// // //         </Stack>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // }

// // import * as React from 'react';
// // import Avatar from '@mui/material/Avatar';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import LinearProgress from '@mui/material/LinearProgress';
// // import Stack from '@mui/material/Stack';
// // import type { SxProps } from '@mui/material/styles';
// // import Typography from '@mui/material/Typography';
// // import { ListBullets as ListBulletsIcon } from '@phosphor-icons/react/dist/ssr/ListBullets';

// // export interface TasksProgressProps {
// //   sx?: SxProps;
// //   value: number;
// // }

// // export function TasksProgress({ value, sx }: TasksProgressProps): React.JSX.Element {
// //   return (
// //     <Card sx={{ ...sx, width: '400px', height: '200px', padding: 2 }}>
// //       <CardContent>
// //         <Stack spacing={3}>
// //           <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
// //             <Stack spacing={1}>
// //               <Typography color="text.secondary" gutterBottom variant="overline">
// //                 Pending
// //               </Typography>
// //               <Typography variant="h4">{value}%</Typography>
// //             </Stack>
// //           </Stack>
// //         </Stack>
// //       </CardContent>
// //     </Card>
// //   );
// // }

// import * as React from 'react';
// // import Avatar from '@mui/material/Avatar';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// // import LinearProgress from '@mui/material/LinearProgress';
// import Stack from '@mui/material/Stack';
// import type { SxProps } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';

// // import { ListBullets as ListBulletsIcon } from '@phosphor-icons/react/dist/ssr/ListBullets';

// export interface PendingRequestsProgressProps {
//   sx?: SxProps;
//   value: string;
// }

// export function PendingRequestsProgress({ value, sx }: PendingRequestsProgressProps): React.JSX.Element {
//   return (
//     <Card sx={{ ...sx, width: '300px', padding: '16px', borderRadius: '12px' }}>
//       <CardContent sx={{ padding: 0 }}>
//         <Stack spacing={2}>
//           <Typography color="text.secondary" variant="overline">
//             Pending Requests
//           </Typography>
//           <Typography variant="h4">{value}</Typography>
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

export interface PendingRequestsProgressProps {
  sx?: SxProps;
  value: string;
}

export function PendingRequestsProgress({ value, sx }: PendingRequestsProgressProps): React.JSX.Element {
  return (
    <Card sx={{ ...sx, width: '100%', maxWidth: 300, padding: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Stack spacing={2}>
          <Typography color="text.secondary" variant="overline">
            Pending Requests
          </Typography>
          <Typography variant="h4">{value}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
