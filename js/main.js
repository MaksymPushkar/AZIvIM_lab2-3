const fs = require("fs");
const key = require("./key.js");
const encrypt = require("./functions/encrypt.js");
const decrypt = require("./functions/decrypt.js");

function main() {
  let text;
  let encryptedText;
  let decryptedText;

  try {
    text = fs.readFileSync("./text.txt", "utf8");
    console.log("text.txt:\n", text);
  } catch (error) {
    console.error(error);
  }

  try {
    fs.writeFileSync("./encryptedText.txt", encrypt(text, key));
  } catch (error) {
    console.error(error);
  }
  try {
    encryptedText = fs.readFileSync("./encryptedText.txt", "utf8");
    console.log("encryptedText.txt:\n", encryptedText);
  } catch (error) {
    console.error(error);
  }

  try {
    fs.writeFileSync("./decryptedText.txt", decrypt(encryptedText, key));
  } catch (error) {
    console.error(error);
  }
  try {
    decryptedText = fs.readFileSync("./decryptedText.txt", "utf8");
    console.log("decryptedText.txt:\n", decryptedText);
  } catch (error) {
    console.error(error);
  }
}

main();
