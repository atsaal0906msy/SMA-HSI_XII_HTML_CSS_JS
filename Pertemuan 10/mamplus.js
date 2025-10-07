const skorTimA = document.querySelector("#skor-tim-a");
skorTimA.innerHTML = "20";
let skorTimB = document.querySelector("#skor-tim-b");
skorTimB.innerHTML = "50";
let judulAwal = document.querySelector("#judul-awal");
judulAwal.style.color = "lightblue";

const lampuAjaib = document.querySelector("#lampu-ajaib");
lampuAjaib.style.backgroundColor = "#0ef";
lampuAjaib.style.color = "green";
lampuAjaib.style.borderColor = "orange";
lampuAjaib.innerHTML = "Lampu Menyala!";

const tombol = document.querySelector("#tombol-ubah");
const pesan = document.querySelector("#pesan");
// Langkah 2: Pasang "telinga" pada tombol
tombol.addEventListener("click", function () {
  // Langkah 3: Definisikan apa yang harus terjadi saat tombol di-klik
  // Kode di dalam sini hanya berjalan SETELAH klik!
  console.log("Tombol baru saja diklik!");
  pesan.innerHTML = "Wow, teksnya berhasil diubah oleh JavaScript!";
  pesan.style.color = "crimson";
});

const tombolMode = document.querySelector("#tombol-mode");

tombolMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

const kotak = document.querySelector("#kotak-interaktif");

kotak.addEventListener("mouseover", function () {
  kotak.style.backgroundColor = "orange";
  kotak.innerHTML = "Wow, berhasil!";
});

kotak.addEventListener("mouseout", function () {
  kotak.style.backgroundColor = "steelblue";
  kotak.innerHTML = "Arahkan mouse ke sini!";
});
