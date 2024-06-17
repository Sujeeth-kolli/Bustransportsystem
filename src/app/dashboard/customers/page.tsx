// src/app/dashboard/customers/page.tsx
import * as React from 'react';
// import { Link } from 'next/link';
// import AddIcon from '@mui/icons-material/Add';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
// import MenuIcon from '@mui/icons-material/Menu';
import UploadIcon from '@mui/icons-material/Upload';
import Button from '@mui/material/Button';
// import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable, type Customer } from '@/components/dashboard/customer/customers-table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` };

const customers: Customer[] = [
  {
    id: 'USR-010',
    name: 'Alcides Antonio',
    avatar: '/assets/avatar-10.png',
    email: 'idcse@gmail.com',
    phone: '908-691-3242',
    passStatus: '/approval/USR-010', // Example links, actual logic may vary
    busPassId: 'BP-010',
    paymentStatus: 'paid',
    stop: 'Main Street',
    passValidity: '2024-12-31',
  },
  {
    id: 'USR-009',
    name: 'Marcus Finn',
    avatar: '/assets/avatar-9.png',
    email: 'idcse@gmail.com',
    phone: '415-907-2647',
    passStatus: '/rejection/USR-009', // Example links, actual logic may vary
    busPassId: 'BP-009',
    paymentStatus: 'not paid',
    stop: 'First Avenue',
    passValidity: '2025-01-15',
  },
  // Add other customers with similar fields
];

export default function Page(): React.ReactElement {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Customers</Typography>
          {/* <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon />}>
              Export
            </Button>
          </Stack> */}
        </Stack>
        <div>
          <Button startIcon={<AddIcon />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable count={customers.length} page={page} rows={paginatedCustomers} rowsPerPage={rowsPerPage} />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
