<<<<<<< HEAD
// // // 'use client';

// // // import * as React from 'react';
// // // import Avatar from '@mui/material/Avatar';
// // // import Box from '@mui/material/Box';
// // // import Card from '@mui/material/Card';
// // // import Checkbox from '@mui/material/Checkbox';
// // // import Divider from '@mui/material/Divider';
// // // import Stack from '@mui/material/Stack';
// // // import Table from '@mui/material/Table';
// // // import TableBody from '@mui/material/TableBody';
// // // import TableCell from '@mui/material/TableCell';
// // // import TableHead from '@mui/material/TableHead';
// // // import TablePagination from '@mui/material/TablePagination';
// // // import TableRow from '@mui/material/TableRow';
// // // import Typography from '@mui/material/Typography';
// // // import dayjs from 'dayjs';

// // // import { useSelection } from '@/hooks/use-selection';

// // // function noop(): void {
// // //   // do nothing
// // // }

// // // export interface Customer {
// // //   id: string;
// // //   avatar: string;
// // //   name: string;
// // //   email: string;
// // //   feeStatus: 'paid' | 'not paid';
// // //   phone: string;
// // //   passStatus: 'approved' | 'rejected';
// // // }

// // // interface CustomersTableProps {
// // //   count?: number;
// // //   page?: number;
// // //   rows?: Customer[];
// // //   rowsPerPage?: number;
// // // }

// // // export function CustomersTable({
// // //   count = 0,
// // //   rows = [],
// // //   page = 0,
// // //   rowsPerPage = 0,
// // // }: CustomersTableProps): React.JSX.Element {
// // //   const rowIds = React.useMemo(() => {
// // //     return rows.map((customer) => customer.id);
// // //   }, [rows]);

// // //   const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

// // //   const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
// // //   const selectedAll = rows.length > 0 && selected?.size === rows.length;

// // //   return (
// // //     <Card>
// // //       <Box sx={{ overflowX: 'auto' }}>
// // //         <Table sx={{ minWidth: '800px' }}>
// // //           <TableHead>
// // //             <TableRow>
// // //               <TableCell padding="checkbox">
// // //                 <Checkbox
// // //                   checked={selectedAll}
// // //                   indeterminate={selectedSome}
// // //                   onChange={(event) => {
// // //                     if (event.target.checked) {
// // //                       selectAll();
// // //                     } else {
// // //                       deselectAll();
// // //                     }
// // //                   }}
// // //                 />
// // //               </TableCell>
// // //               <TableCell>Name</TableCell>
// // //               <TableCell>Email</TableCell>
// // //               <TableCell>Fee Status</TableCell>
// // //               <TableCell>Phone</TableCell>
// // //               <TableCell>Pass Status</TableCell>
// // //             </TableRow>
// // //           </TableHead>
// // //           <TableBody>
// // //             {rows.map((row) => {
// // //               const isSelected = selected?.has(row.id);

// // //               return (
// // //                 <TableRow hover key={row.id} selected={isSelected}>
// // //                   <TableCell padding="checkbox">
// // //                     <Checkbox
// // //                       checked={isSelected}
// // //                       onChange={(event) => {
// // //                         if (event.target.checked) {
// // //                           selectOne(row.id);
// // //                         } else {
// // //                           deselectOne(row.id);
// // //                         }
// // //                       }}
// // //                     />
// // //                   </TableCell>
// // //                   <TableCell>
// // //                     <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
// // //                       <Avatar src={row.avatar} />
// // //                       <Typography variant="subtitle2">{row.name}</Typography>
// // //                     </Stack>
// // //                   </TableCell>
// // //                   <TableCell>{row.email}</TableCell>
// // //                   <TableCell>{row.feeStatus}</TableCell>
// // //                   <TableCell>{row.phone}</TableCell>
// // //                   <TableCell>{dayjs(row.createdAt).format('MMM D, YYYY')}</TableCell>
// // //                 </TableRow>
// // //               );
// // //             })}
// // //           </TableBody>
// // //         </Table>
// // //       </Box>
// // //       <Divider />
// // //       <TablePagination
// // //         component="div"
// // //         count={count}
// // //         onPageChange={noop}
// // //         onRowsPerPageChange={noop}
// // //         page={page}
// // //         rowsPerPage={rowsPerPage}
// // //         rowsPerPageOptions={[5, 10, 25]}
// // //       />
// // //     </Card>
// // //   );
// // // }

// 'use client';

// import * as React from 'react';
// import Link from 'next/link'; // Importing Link from Next.js
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Checkbox from '@mui/material/Checkbox';
// import Divider from '@mui/material/Divider';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';

// import { useSelection } from '@/hooks/use-selection';

// function noop(): void {
//   // do nothing
// }

// export interface Customer {
//   id: string;
//   avatar: string;
//   name: string;
//   email: string;
//   feeStatus: 'paid' | 'not paid';
//   phone: string;
//   passStatus: 'approved' | 'rejected';
// }

// interface CustomersTableProps {
//   count?: number;
//   page?: number;
//   rows?: Customer[];
//   rowsPerPage?: number;
// }

// export function CustomersTable({
//   count = 0,
//   rows = [],
//   page = 0,
//   rowsPerPage = 0,
// }: CustomersTableProps): React.JSX.Element {
//   const rowIds = React.useMemo(() => {
//     return rows.map((customer) => customer.id);
//   }, [rows]);

//   const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

//   const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
//   const selectedAll = rows.length > 0 && selected?.size === rows.length;

//   return (
//     <Card>
//       <Box sx={{ overflowX: 'auto' }}>
//         <Table sx={{ minWidth: '800px' }}>
//           <TableHead>
//             <TableRow>
//               <TableCell padding="checkbox">
//                 <Checkbox
//                   checked={selectedAll}
//                   indeterminate={selectedSome}
//                   onChange={(event) => {
//                     if (event.target.checked) {
//                       selectAll();
//                     } else {
//                       deselectAll();
//                     }
//                   }}
//                 />
//               </TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Fee Status</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Pass Status</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => {
//               const isSelected = selected?.has(row.id);

//               return (
//                 <TableRow hover key={row.id} selected={isSelected}>
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={isSelected}
//                       onChange={(event) => {
//                         if (event.target.checked) {
//                           selectOne(row.id);
//                         } else {
//                           deselectOne(row.id);
//                         }
//                       }}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
//                       <Avatar src={row.avatar} />
//                       <Typography variant="subtitle2">{row.name}</Typography>
//                     </Stack>
//                   </TableCell>
//                   <TableCell>{row.email}</TableCell>
//                   <TableCell>{row.feeStatus}</TableCell>
//                   <TableCell>{row.phone}</TableCell>
//                   <TableCell>
//                     <Link href={row.passStatus === 'approved' ? `/approval/${row.id}` : `/rejection/${row.id}`}>
//                       {row.passStatus}
//                     </Link>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </Box>
//       <Divider />
//       <TablePagination
//         component="div"
//         count={count}
//         onPageChange={noop}
//         onRowsPerPageChange={noop}
//         page={page}
//         rowsPerPage={rowsPerPage}
//         rowsPerPageOptions={[5, 10, 25]}
//       />
//     </Card>
//   );
// }

// src/components/dasboard/customer/customers-table.tsx

=======
>>>>>>> 6670f1130dc99bbbeb0861670dc85adb4d7dd2de
'use client';

import * as React from 'react';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { useSelection } from '@/hooks/use-selection';

export interface Customer {
  id: string;
  avatar: string;
  name: string;
  email: string;
  phone: string;
  passStatus: string; // Changed to string to accommodate links
  busPassId: string;
  paymentStatus: 'paid' | 'not paid'; // Dropdown for payment status
  stop: string;
  passValidity: string;
}

interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: Customer[];
  rowsPerPage?: number;
}

function noop(): void {
  // do nothing
}

export function CustomersTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: CustomersTableProps): React.ReactElement {
  const rowIds = React.useMemo(() => {
    return rows.map((customer) => customer.id);
  }, [rows]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

  const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
  const selectedAll = rows.length > 0 && selected?.size === rows.length;

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      selectAll();
                    } else {
                      deselectAll();
                    }
                  }}
                />
              </TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Name</TableCell>
<<<<<<< HEAD
=======
              <TableCell>Email</TableCell>
>>>>>>> 6670f1130dc99bbbeb0861670dc85adb4d7dd2de
              <TableCell>Bus Pass ID</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Stop</TableCell>
              <TableCell>Pass Status</TableCell>
              <TableCell>Pass Validity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isSelected = selected?.has(row.id);

              return (
                <TableRow hover key={row.id} selected={isSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          selectOne(row.id);
                        } else {
                          deselectOne(row.id);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                      <Avatar src={row.avatar} />
                      <Typography variant="subtitle2">{row.name}</Typography>
                    </Stack>
                  </TableCell>
<<<<<<< HEAD
=======
                  <TableCell>{row.email}</TableCell>
>>>>>>> 6670f1130dc99bbbeb0861670dc85adb4d7dd2de
                  <TableCell>{row.busPassId}</TableCell>
                  <TableCell>
                    <Select
                      value={row.paymentStatus}
                      onChange={(event) => {
                        // Handle change of payment status
                      }}
                    >
                      <MenuItem value="paid">Paid</MenuItem>
                      <MenuItem value="not paid">Not Paid</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>{row.stop}</TableCell>
                  <TableCell>
                    <Link href={row.passStatus}>{row.passStatus.includes('approval') ? 'Approval' : 'Rejection'}</Link>
                  </TableCell>
                  <TableCell>{row.passValidity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
