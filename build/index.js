"use strict";
const reverseNumberPattern = (inputAngka) => {
    for (let i = inputAngka; i >= 1; i--) {
        let hasil = [];
        for (let h = i; h >= 1; h--) {
            hasil.push(h.toString());
        }
        console.log(hasil.join(' '));
    }
};
const angka = 5;
reverseNumberPattern(angka);
// @im.waky
// Muhammad Hilmi
// SMK MADINATULQURAN
