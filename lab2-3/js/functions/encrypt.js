function encrypt(text, key) {
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    for (const keykey in key) {
      if (text[i] === keykey) {
        encryptedText +=
          key[keykey][Math.floor(Math.random() * key[keykey].length)];
        break;
      }
    }
  }

  return encryptedText;
}

module.exports = encrypt;
