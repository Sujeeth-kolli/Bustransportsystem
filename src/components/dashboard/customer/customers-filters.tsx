// import * as React from 'react';
// import Card from '@mui/material/Card';
// import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';

// export function CustomersFilters(): React.JSX.Element {
//   return (
//     <Card sx={{ p: 2 }}>
//       <OutlinedInput
//         defaultValue=""
//         fullWidth
//         placeholder="Search customer"
//         startAdornment={
//           <InputAdornment position="start">
//             <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
//           </InputAdornment>
//         }
//         sx={{ maxWidth: '500px' }}
//       />
//     </Card>
//   );
// }

// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import Card from '@mui/material/Card';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import OutlinedInput from '@mui/material/OutlinedInput';
// // import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';

// // export function CustomersFilters(): React.JSX.Element {
// //   const handleApprove = () => {
// //     // Implement your approve logic here
// //   };

// //   const handleApproveAll = () => {
// //     // Implement your approve all logic here
// //   };

// //   return (
// //     <Card sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
// //       <OutlinedInput
// //         defaultValue=""
// //         fullWidth
// //         placeholder="Search customer"
// //         startAdornment={
// //           <InputAdornment position="start">
// //             <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
// //           </InputAdornment>
// //         }
// //         sx={{ maxWidth: '500px' }}
// //       />
// //       <div>
// //         <Button variant="contained" color="primary" onClick={handleApprove} sx={{ mx: 1 }}>
// //           Approve
// //         </Button>
// //         <Button variant="contained" color="primary" onClick={handleApproveAll} sx={{ mx: 1 }}>
// //           Approve All
// //         </Button>
// //       </div>
// //     </Card>
// //   );
// // }

// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import Card from '@mui/material/Card';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import OutlinedInput from '@mui/material/OutlinedInput';
// // import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';

// // // Example Customer data
// // const customersData = [
// //   {
// //     id: '1',
// //     name: 'John Doe',
// //     passStatus: 'pending',
// //   },
// //   {
// //     id: '2',
// //     name: 'Jane Smith',
// //     passStatus: 'pending',
// //   },
// //   // Add more customers as needed
// // ];

// // export function CustomersFilters(): React.JSX.Element {
// //   const [searchTerm, setSearchTerm] = React.useState('');
// //   const [selectedCustomerIds, setSelectedCustomerIds] = React.useState<string[]>([]);

// //   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     setSearchTerm(event.target.value);
// //     // Implement search logic here if needed
// //   };

// //   const handleApprove = () => {
// //     // Update passStatus of selected customers to 'approved'
// //     const updatedCustomers = customersData.map((customer) =>
// //       selectedCustomerIds.includes(customer.id) ? { ...customer, passStatus: 'approved' } : customer
// //     );
// //   };

// //   const handleApproveAll = () => {
// //     // Update passStatus of all customers to 'approved'
// //     const updatedCustomers = customersData.map((customer) => ({ ...customer, passStatus: 'approved' }));
// //   };

// //   const handleCustomerSelection = (customerId: string) => {
// //     if (selectedCustomerIds.includes(customerId)) {
// //       setSelectedCustomerIds(selectedCustomerIds.filter((id) => id !== customerId));
// //     } else {
// //       setSelectedCustomerIds([...selectedCustomerIds, customerId]);
// //     }
// //   };

// //   return (
// //     <Card sx={{ p: 2 }}>
// //       <OutlinedInput
// //         value={searchTerm}
// //         onChange={handleSearchChange}
// //         fullWidth
// //         placeholder="Search customer"
// //         startAdornment={
// //           <InputAdornment position="start">
// //             <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
// //           </InputAdornment>
// //         }
// //         sx={{ maxWidth: '500px', mb: 2 }}
// //       />
// //       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={handleApprove}
// //           style={{ marginLeft: '10px' }}
// //           disabled={selectedCustomerIds.length === 0}
// //         >
// //           Approve
// //         </Button>
// //         <Button variant="contained" color="primary" onClick={handleApproveAll} style={{ marginLeft: '10px' }}>
// //           Approve All
// //         </Button>
// //       </div>
// //     </Card>
// //   );
// // }

// src/components/dasboard/customer/customers-filter.tsx
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

export function CustomersFilters(): React.ReactElement {
  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Search customer"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        sx={{ maxWidth: '500px' }}
      />
    </Card>
  );
}
