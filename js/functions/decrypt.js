function decrypt(encryptedText, key) {
  let decryptedText = "";

  for (let i = 0; i < encryptedText.length * 2; i += 2) {
    let symbolIsFound = false;

    for (const keykey in key) {
      for (let j = 0; j < key[keykey].length; j++) {
        if (encryptedText[i] + encryptedText[i + 1] === key[keykey][j]) {
          decryptedText += keykey;
          symbolIsFound = true;
          break;
        }
      }

      if (symbolIsFound) {
        break;
      }
    }
  }

  return decryptedText;
}

module.exports = decrypt;
