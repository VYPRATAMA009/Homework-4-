// tes pertama
// random nomor generator 1-50
const array = 100;

const arraytotal = [];

for (let i = 0; i < array; i++) {
    const nilairandom= Math.floor(Math.random() * 50) + 1;
    arraytotal.push(nilairandom);
  }


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

// fungsi min
function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }

const MinimalGenap = findMin(arrayindeksgenap)
const MinimalGanjil = findMin(arrayindeksganjil)

// fungsi max
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }

const MaksimalGenap = findMax(arrayindeksgenap)
const MaksimallGanjil = findMax(arrayindeksganjil)

// fungsi total
function total(array) {
    let total = array[0];
    for (let i = 1; i < array.length; i++) {
        total = total + array[i]
    }
    return total;
  }

const TotalGenap = total(arrayindeksgenap)
const TotalGanjil = total(arrayindeksganjil)


// fungsi rata rata
function ratarata(total,jumlahindeks) {
    return total/ jumlahindeks
}
const RatarataGenap = ratarata(TotalGenap,arrayindeksgenap.length)
const RatarataGanjil = ratarata(TotalGanjil,arrayindeksganjil.length)

// fungsi perbandingan

// fungsi main console
console.log(arraytotal)// create random number generator
console.log("Array indeks genap:", arrayindeksgenap);// print array indeks genap
console.log("Array indeks ganjil:", arrayindeksganjil);// print array indeks ganjil
console.log("Nilai Min pada array indeks genap: ", MinimalGenap);
console.log("Nilai Min pada array indeks ganjil: ", MinimalGanjil)
console.log("Nilai Max pada array indeks genap: ", MaksimalGenap);
console.log("Nilai Max pada array indeks ganjil: ", MaksimallGanjil);
console.log("Total Nilai pada array indeks genap: ", TotalGenap);
console.log("Total Nilai pada array indeks ganjil: ", TotalGanjil);
console.log("Rata Rata Nilai pada array indeks genap: ",RatarataGenap);
console.log("Rata Rata Nilai pada array indeks ganjil: ",RatarataGanjil);