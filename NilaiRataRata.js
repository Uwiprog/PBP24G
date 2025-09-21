let Matematika = 85;
let BahasaInggris = 90;
let Ipa = 78;

let ratarata = (Matematika + BahasaInggris + Ipa) / 3; 
console.log("Nilai rata-rata :" +  parseInt(ratarata)); //menghapus desimal tanpa pembulatan

if (ratarata > 80) { //Jika ratarata lebih dari 80
    console.log("Selamat Anda Lulus"); //maka anda lulus
} else { //jika tidak
    console.log("Maaf Anda tidak Lulus"); //maka anda tidak lulus
}