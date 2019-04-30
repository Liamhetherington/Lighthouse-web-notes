var string = process.argv[2]

var password = "";

for (i = 0; i < string.length; i++) {
  if (string[i] === "a") {
   password += "4"}
  else if (string[i] === "e") {
    password += "3"}
  else if (string[i] === "l") {
    password += "1"}
  else if (string[i] === "o") {
    password += "0" }
  else {
    password += string[i];
  }
};

console.log(password)