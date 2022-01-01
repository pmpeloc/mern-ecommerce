import bcrypt from 'bcryptjs';

const hashPassword = async (pass) => {
  const hashed = await bcrypt.hash(pass, 10);
  return hashed;
};

export default hashPassword;
