import bcrypt from 'bcryptjs';

const hashPassword = (pass) => {
  const hashed = bcrypt.hashSync(pass, 10);
  return hashed;
};

export default hashPassword;
