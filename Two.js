function kdigits(kchiffres, n) {
  const result = new Array(),
    temp = new Array();
  BONUS = true;
  let kTableau = [...kchiffres.toString()],
    j = n;
  kTableau = kTableau.map(x => parseInt(x)).sort((a, b) => b - a);

  if (n > kTableau.length) {
    try {
      throw new Error(
        "Attention, votre nombre d'extraction est plus grand que le nombre"
      );
    } catch (e) {
      console.log(e.message);
    }
  } else {
    for (let i = 0; i < j; i++) {
      if (!temp.includes(kTableau[i])) {
        temp.push(kTableau[i]);
      } else {
        j++;
      }
    }
    kTableau = kTableau
      .filter(x => x < temp[n - 1] && x !== 0)
      .sort((a, b) => a - b);
    if (BONUS === true) {
      for (let i = 0; i < n; i++) {
        if (!result.includes(kTableau[i])) {
          result.push(kTableau[i]);
        }
      }
    } else {
      result.push(kTableau[0]);
    }
    return kTableau[0] !== undefined ? result : "Aucun K nombre détécté";
  }
}

console.log(kdigits(693289, 2));
console.log(kdigits(1032, 1));
console.log(kdigits(9573, 2));
console.log(kdigits(48576575, 3));
console.log(kdigits(12131211212, 2));
console.log(kdigits(111112, 2));
console.log(kdigits(1234, 4));
console.log(kdigits(123, 4));
