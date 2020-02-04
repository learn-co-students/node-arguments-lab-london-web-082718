const generatePassword = length => {
  let password = "";
  const chars =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@£$%^&*()";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const argv = process.argv;

if (!argv[2]) {
  console.log("Please provide arguments");
  process.exit(1);
}

if (!argv[3]) {
  console.log("Please provide both arguments");
  process.exit(1);
}

const length = parseInt(argv[2]);
const numberOfPasswords = parseInt(argv[3]);

for (let i = 0; i < numberOfPasswords; i++) {
  console.log(generatePassword(length));
}

process.exit(0);
