export function validAnagram(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  const letterStorage = {};

  for (const letter of firstWord) {
    letterStorage[letter]
      ? (letterStorage[letter] += 1)
      : (letterStorage[letter] = 1);
  }

  for (const letter of secondWord) {
    if (!letterStorage[letter]) {
      return false;
    }

    letterStorage[letter] -= 1;
  }

  return true;
}
