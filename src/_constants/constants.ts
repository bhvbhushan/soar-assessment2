import { userDataInterface } from '_interfaces';

export const menuItem = [
  { label: 'Dashboard', icon: 'dashboard', name: 'dashboard' },
  { label: 'Transactions', icon: 'txns', name: 'transactions' },
  { label: 'Accounts', icon: 'accounts', name: 'accounts' },
  { label: 'Investments', icon: 'investments', name: 'investments' },
  { label: 'Credit Cards', icon: 'cc', name: 'cc' },
  { label: 'Loans', icon: 'loans', name: 'loans' },
  { label: 'Services', icon: 'services', name: 'services' },
  { label: 'My Privileges', icon: 'privileges', name: 'privileges' },
  { label: 'Setting', icon: 'setting', name: 'setting' },
];

export const TabData = [
  {
    label: 'Edit Profile',
    active: true,
  },
  {
    label: 'Preferences',
    active: false,
  },
  {
    label: 'Security',
    active: false,
  },
];

export const fieldLabelMapping: userDataInterface = {
  name: 'Name',
  username: 'User Name',
  email: 'Email',
  password: 'Password',
  dob: 'Date of Birth',
  address: 'Present Address',
  permanentAddress: 'Permanent Address',
  city: 'City',
  postalCode: 'Postal Code',
  country: 'Country',
};
