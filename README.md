# Deskripsi

ini gabut gak tau mau ngapain, kalau mau dicoba bisa ganti `angka` nya

## Tech Stack

**Language:** Typescript

## Full Code Preview

```ts
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
```

## Cara Jalanin

Clone projectnya kalau mau

```bash
  git clone https://github.com/Wakype/SMK.DEV-Challange3.git
```

terus masuk ke foldernya

```bash
  cd SMK.DEV-Challange3
```

Kalau mau di coba di install dulu packagenya

```bash
  npm install
```

Abis itu tinggal jalanin deh :)

```bash
  npm run build
  npm run dev
```
