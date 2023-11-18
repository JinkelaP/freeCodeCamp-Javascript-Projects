function isLetterAndConvertToUnicode(char) {
    if (/^[A-Za-z]$/.test(char)) {
        return char.charCodeAt(0);
    } else {
        return false;
    }
}



function rot13(str) {
    let strArray = str.split('');
    for (let i=0; i<strArray.length; i++) {
        let unicodeChar = isLetterAndConvertToUnicode(strArray[i])
        if (unicodeChar != false) {
            unicodeChar += 13
            if (unicodeChar > 'Z'.charCodeAt(0)) {
                unicodeChar -= 26;
            }
            strArray[i] = String.fromCharCode(unicodeChar)
        }
    }
    return strArray.join('')
  }
  


  rot13("SERR PBQR PNZC");