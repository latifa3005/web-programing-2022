//input jam masuk
let jamMasuk = prompt(`Masukkan jam masuk ?`);

//input jam keluar
let jamKeluar = prompt(`Masukkan jam keluar ?`);

//selisih
const selisih = Number(jamKeluar) - Number(jamMasuk);

//tarif awal
const tarifAwal = 3000;

//tarif 2 jam
if(selisih <= 2){
    alert(`Biaya keluaran : ${tarifAwal}`);
} else {
    const tarifAkhir = tarifAwal + (selisih - 2) * 1000;
    alert(`Biaya keluaran : ${tarifAkhir}`);
}