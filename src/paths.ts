export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password', },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    AddRoutePage:'/dashboard/routes',
  },
  routes: {
    AddRoutePage:'/dashboard/routes/AddRoutePage',
  },
  app:{
    AddRoutePage:' /app/AddRoutePage',

  },
  errors: { notFound: '/errors/not-found' },
} as const;
