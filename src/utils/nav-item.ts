export const NavItem = {
  false: [
    {
      id: '1',
      name: 'Home',
      link: '/',
    },
    {
      id: '2',
      name: 'Login',
      link: '/login',
    },
  ],
  true: {
    admin: [
      {
        id: '3',
        name: 'Stock Update',
        link: '/stock-update',
      },
      {
        id: '4',
        name: 'Rekap Penjualan',
        link: '/rekap-penjualan',
      },
      {
        id: '5',
        name: 'Logout',
        link: '/',
      },
    ],
    user: [
      {
        id: '3',
        name: 'Products',
        link: '/products',
      },
      {
        id: '4',
        name: 'Cart',
        link: '/cart',
      },
      {
        id: '5',
        name: 'Logout',
        link: '/',
      },
    ],
  },
};
