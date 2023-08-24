const reverseNumberPattern = (inputAngka: number): void => {
  for (let i: number = inputAngka; i >= 1; i--) {
    let hasil: string[] = [];
    for (let h: number = i; h >= 1; h--) {
      hasil.push(h.toString());
    }
    console.log(hasil.join(' '));
  }
};

const angka: number = 5;
reverseNumberPattern(angka);

// @im.waky
// Muhammad Hilmi
// SMK MADINATULQURAN
