# Panduan Membuat Google Form Siap Kerjakan — Latihan Tes Semesteran Al-Qur'an Hadis MA Kelas XII (Bab 1–5)

> **Tujuan:** mengubah 50 soal HOTS dalam repo ini menjadi Google Form resmi yang bisa dikerjakan siswa, dengan identitas **Nama, Kelas, No Absen** di bagian awal.
>
> **Cara Tercepat (Otomatis 1–2 menit):** pakai [`buat-google-form.gs`](buat-google-form.gs) lewat Google Apps Script — seluruh 50 soal, teks Arab, terjemahan, opsi A–E, kunci jawaban, poin, pembahasan, serta kolom Nama/Kelas/No Absen dan Google Sheets rekap nilai **terbuat otomatis sekali klik**.

---

## ⭐ Cara 1 (Direkomendasikan): Otomatis 1 Klik via Google Apps Script (1–2 menit)

1. Buka **[script.google.com](https://script.google.com/)** (login dengan akun Google guru).
2. Klik **Project baru** (*New project*).
3. Hapus seluruh kode bawaan (`function myFunction() {}`).
4. Buka file [`google-form/buat-google-form.gs`](buat-google-form.gs), salin seluruh isinya, lalu tempel ke editor Apps Script.
5. Klik ikon **Simpan** (`Ctrl+S`), lalu klik tombol **Jalankan** (*Run*) dengan fungsi `buatGoogleFormLatihan` terpilih.
6. Saat muncul dialog otorisasi Google: klik **Tinjau izin** → pilih akun Google Anda → klik **Lanjutan** → **Buka ... (tidak aman)** → **Izinkan** *(script ini hanya membuat Form & Sheet di akun Anda sendiri)*.
7. Tunggu ~15 detik. Di bagian bawah (**Log Eksekusi**), akan muncul 3 tautan:
   - **Link untuk SISWA (kerjakan)** — langsung bagikan ke siswa!
   - **Link untuk GURU (edit form)** — untuk mengubah kelas atau pengaturan kuis.
   - **Link Google Sheets (rekap nilai)** — tempat nilai dan jawaban siswa masuk otomatis.

---

## Cara 2 (Alternatif Manual): Copy-Paste dari `daftar-pertanyaan.txt` (15–25 menit)

Jika sekolah membatasi Google Apps Script, ikuti langkah manual di bawah ini.

---

## 0. File yang dipakai

| File | Fungsi |
|---|---|
| `google-form/buat-google-form.gs` | **Generator otomatis 1 klik** di Google Apps Script (Form + Kunci + Pembahasan + Sheets). |
| `google-form/daftar-pertanyaan.txt` | **Sumber copy-paste manual.** Berisi 50 soal lengkap: dalil Arab + terjemahan + stimulus + pertanyaan + opsi A–E + kunci + pembahasan. |
| `google-form/bank-soal-google-form.csv` | Bank soal dalam tabel (untuk dibuka di Excel/Sheets, diarsipkan, atau diimpor ke bank soal lain). |
| `google-form/template-nilai-google-sheets.csv` | Template kolom rekap nilai (Timestamp, Nama, Kelas, No Absen, Skor, Jawaban 1–50). |
| `data/soal.json` | Data terstruktur (dipakai `index.html`). |
| `kunci-jawaban-dan-pembahasan.md` | **Dokumen guru.** Jangan dibagikan ke siswa sebelum ujian. |

---

## 1. Buat Google Form baru

1. Buka **forms.google.com** → **Kosong** (Blank).
2. Judul form:
   ```
   Latihan Tes Semesteran Al-Qur'an Hadis MA Kelas XII (Bab 1-5)
   ```
3. Deskripsi form (klik ikon pensil di deskripsi):
   ```
   Isi Nama, Kelas, dan No Absen terlebih dahulu, lalu kerjakan 50 soal HOTS.
   Setiap soal memuat dalil Al-Qur'an teks Arab dan terjemahan sebagai bahan belajar.
   Waktu: 90 menit. Setiap soal benar = 2 poin (skor maks 100).
   Sumber: Buku Al-Qur'an Hadis MA Kelas XII, KSKK Kemenag RI 2020, Bab 1–5.
   ```
4. Klik **⚙️ Setelan (Settings)**:
   - **Umum:** aktifkan *Kumpulkan alamat email* jika perlu; *Batasi ke 1 respons per responden* jika ingin mencegah pengisian ganda (butuh login Google).
   - **Kuis (Quiz):** aktifkan **Jadikan ini kuis** → *Rilis nilai* = **Setelah setiap pengiriman** (siswa langsung tahu nilai) atau *Setelah pengiriman manual* (guru menilai dulu). Aktifkan *Tampilkan pertanyaan tanpa jawaban yang benar* jika ingin siswa tidak mengintip kunci.
   - **Presentasi:** aktifkan *Tampilkan bilah kemajuan* (progress bar) dan *Acak urutan pertanyaan* **hanya jika** semua siswa sudah menerima soal yang sama — jika diacak, kunci tetap benar karena Google mengacak beserta kuncinya. Untuk latihan pertama, **matikan acak** agar mudah dibahas di kelas.

---

## 2. Tambahkan bagian Identitas (Nama, Kelas, No Absen)

Di editor form, pastikan pertanyaan pertama adalah:

### Pertanyaan 1 — Nama Lengkap
- Klik **+ Tambah pertanyaan** → pilih **Jawaban singkat** (Short answer).
- Judul: `Nama Lengkap`
- Deskripsi: `Tulis nama lengkap sesuai absensi.`
- Aktifkan **Wajib (Required)**.

### Pertanyaan 2 — Kelas
- Tambah pertanyaan **Jawaban singkat**.
- Judul: `Kelas`
- Deskripsi: `Contoh: XII-1`
- Aktifkan **Wajib**.

> Jika ingin pilihan tetap, ganti ke **Pilihan ganda (Multiple choice)** dengan opsi `XII-1, XII-2, XII-3, XII-4, XII-5, XII-6, XII-IPA-1, XII-IPA-2, XII-IPS-1, XII-IPS-2, XII-AGAMA-1, XII-AGAMA-2, Lainnya`.

### Pertanyaan 3 — Nomor Absen
- Tambah pertanyaan **Jawaban singkat**.
- Judul: `Nomor Absen`
- Deskripsi: `Contoh: 07`
- Aktifkan **Wajib**.

> **Tips:** klik **⋮ (tiga titik) → Tambah bagian (Add section)** setelah identitas, beri judul bagian `Soal 1–50 (Pilih satu jawaban terbaik)`. Ini membuat form rapi dan ada progress per bagian.

---

## 3. Tambahkan 50 soal (copy-paste dari `daftar-pertanyaan.txt`)

Untuk **setiap soal** (ulangi 50 kali):

1. Buka `google-form/daftar-pertanyaan.txt`, cari `SOAL 1`, `SOAL 2`, dst.
2. Di Google Form, klik **+ Tambah pertanyaan** → pilih **Pilihan ganda**.
3. **Judul pertanyaan** — salin format ini (ganti N, Bab, Level, dan isi dalil/stimulus/pertanyaan dari file):

   ```
   [Soal 1 | Bab 1: Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa | C4 Analisis]
   Dalil (QS Al-Furqan (25): 67):
   وَالَّذِينَ إِذَا أَنفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا وَكَانَ بَيْنَ ذَٰلِكَ قِوَامًا
   Terjemahan: Dan orang-orang yang apabila membelanjakan (harta), mereka tidak berlebih-lebihan, dan tidak (pula) kikir, dan adalah (pembelanjaan itu) di tengah-tengah antara yang demikian.
   Stimulus: Rina, siswi kelas XII, ...
   Pertanyaan: Berdasarkan QS Al-Furqan (25): 67, analisislah sikap Rina dan kakaknya yang paling tepat!
   ```

   > **Cara cepat:** salin seluruh blok `SOAL N` dari file `.txt` ke judul pertanyaan. Google Form mendukung teks Arab (RTL) — pastikan font menampilkan Arab dengan benar. Jika Arab terbalik, tambahkan karakter tak terlihat? Tidak perlu — Google Form menampilkan Arab dengan benar secara otomatis.

4. **Opsi jawaban** — tambahkan 5 opsi, salin persis dari file:
   ```
   A. ...
   B. ...
   C. ...
   D. ...
   E. ...
   ```
   (Di Google Form, tulis isi opsi tanpa huruf `A.` — huruf sudah ditampilkan otomatis. Contoh opsi A: `Rina bersikap isrāf ...`.)

5. Aktifkan **Wajib**.

6. **Kunci & poin** — klik **⋮ → Kunci jawaban (Answer key)** di pertanyaan tersebut:
   - Tandai opsi yang benar sesuai `KUNCI: X` di file `.txt`.
   - Isi **Poin: 2**.
   - (Opsional) Tulis **Penjelasan** dari `Pembahasan:` di file `.txt` agar siswa bisa belajar setelah submit.

7. Ulangi untuk Soal 2–50.

> **Tips kecepatan:** kerjakan per Bab (Soal 1–10 = Bab 1, dst.). Minta bantuan rekan guru untuk membagi 50 soal menjadi 5 orang × 10 soal, lalu gabungkan dalam satu form. Selalu periksa kembali jumlah soal = 50 dan total poin = 100.

---

## 4. Hubungkan ke Google Sheets (rekap nilai)

1. Di editor form, klik tab **Respons (Responses)** → klik ikon **Google Sheets** (hijau) → **Buat spreadsheet baru**.
2. Spreadsheet akan otomatis berisi kolom: Timestamp, Nama, Kelas, No Absen, Skor, dan Jawaban 1–50.
3. (Opsional) Rapikan header agar sesuai `template-nilai-google-sheets.csv`:
   - Baris 1: `Timestamp | Nama Lengkap | Kelas | No Absen | Skor (0-100) | Benar (x/50) | Jawaban 1 | ... | Jawaban 50`
4. Untuk analisis: buat sheet baru `Analisis` dengan rumus `=COUNTIF(...)` atau pivot untuk melihat soal yang paling sering salah.

---

## 5. Uji coba sebelum dibagikan

1. Klik **Pratinjau (Preview)** → isi identitas contoh → jawab beberapa soal → **Kirim**.
2. Periksa: apakah skor dihitung benar (2 poin/soal)? Apakah kunci benar? Apakah teks Arab tampil utuh?
3. Jika ada salah kunci, perbaiki di **Kunci jawaban** pertanyaan tersebut.
4. Klik **Kirim (Send)** → salin tautan → atur akses **Siapa saja yang memiliki tautan dapat merespons** (atau batasi ke domain sekolah).
5. Bagikan tautan ke siswa (WhatsApp grup kelas, QR code, dll.).

---

## 6. Alternatif tanpa Google Form (langsung pakai repo)

Jika tidak ingin repot copy-paste 50 soal, gunakan **`index.html`** di repo ini:

- Publish repo ke **GitHub Pages** (lihat `README.md` → bagian *Publish ke GitHub Pages*).
- Bagikan tautan `https://<username>.github.io/<repo>/` ke siswa.
- Siswa mengisi Nama, Kelas, No Absen di halaman, mengerjakan 50 soal dengan timer 90 menit, dan langsung mendapat nilai + pembahasan.
- Kelebihan: tanpa akun Google, tanpa login, langsung bisa dicetak/diunduh jawabannya.

> **Catatan:** `index.html` dan Google Form memakai bank soal yang **sama** (`data/soal.json`). Jika soal diubah, ubah `data/soal.json` lalu buat ulang `index.html` (injeksi JSON) dan perbarui file Google Form.

---

## 7. Checklist akhir

- [ ] Judul & deskripsi form benar
- [ ] Identitas: Nama, Kelas, No Absen (semua Wajib)
- [ ] 50 soal, masing-masing: dalil Arab + terjemahan + stimulus + pertanyaan + opsi A–E
- [ ] Kunci & poin (2 poin/soal, total 100) sudah benar
- [ ] Google Sheets terhubung
- [ ] Uji coba pratinjau berhasil
- [ ] Tautan dibagikan ke siswa

Selamat mengajar! Semoga siswa semakin mencintai Al-Qur'an dan mengamalkannya. 📚
