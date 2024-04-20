// tes pertama
// random nomor generator 1-50
const array = 100;

const arraytotal = [];

for (let i = 0; i < array; i++) {
    const nilairandom= Math.floor(Math.random() * 50) + 1;
    arraytotal.push(nilairandom);
  }
console.log(arraytotal)

// Pemisah array indeks genap dan array index ganjil
const arrayindeksgenap = [];
const arrayindeksganjil = [];

for (let i = 0; i < arraytotal.length; i++ ){
    if ( i % 2 ===0){// indeks genap
        arrayindeksgenap.push(arraytotal[i]);
    } else {// indeks ganjil
        arrayindeksganjil.push(arraytotal[i]);
    }

}
console.log("Array indeks genap:", arrayindeksgenap);
console.log("Array indeks ganjil:", arrayindeksganjil);
// fungsi min

// fungsi max

// fungsi total

// fungsi rata rata

// fungsi main 