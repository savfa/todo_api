const crypto = require('crypto');

// crypto.randomBytes(16).toString('hex');
const salt = `f5a7acdf8a6603cab086cf2b657756cf`;


const getPasswordHash = (password) => {
  return crypto.pbkdf2Sync(password, salt,
    1000, 64, `sha512`).toString(`hex`);
};

const validPassword = (hash, password) => {
  return hash === getPasswordHash(password)
};

exports.getPasswordHash = getPasswordHash;
exports.validPassword = validPassword;