import hashPassword from '../services/hashPassword';

const users = [
  {
    name: 'Admin User',
    emai: 'admin@example.com',
    password: hashPassword('123456'),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    emai: 'john@example.com',
    password: hashPassword('123456'),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    emai: 'jane@example.com',
    password: hashPassword('123456'),
    isAdmin: false,
  },
];

export default users;
