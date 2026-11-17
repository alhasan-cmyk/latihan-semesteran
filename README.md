# Latihan Tes Semesteran — Al-Qur'an Hadis MA Kelas XII (Bab 1–5)

**50 Soal HOTS dengan Dalil Al-Qur'an (Teks Arab + Terjemahan) — siap dikerjakan siswa.**

Sumber materi: Buku *Al-Qur'an Hadis MA Kelas XII*, Direktorat KSKK Madrasah, Kementerian Agama RI (2020).

| Bab | Judul | Soal |
|---|---|---|
| Bab 1 | Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa | 1–10 |
| Bab 2 | Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan | 11–20 |
| Bab 3 | Menjaga Kelestarian Lingkungan | 21–30 |
| Bab 4 | Mengembangkan Ilmu Pengetahuan dan Teknologi | 31–40 |
| Bab 5 | Mendakwahkan Keramahan Islam | 41–50 |

Setiap soal memuat **dalil Al-Qur'an teks Arab + terjemahan** sebagai bahan belajar dan mengingat kembali, stimulus kasus nyata, dan pertanyaan HOTS (C4 Analisis, C5 Evaluasi, C6 Mencipta) dengan 5 opsi (A–E). Kunci jawaban terdistribusi seimbang (10 soal per huruf).

---

## 🚀 Cara Pakai (untuk Siswa)

### Opsi A — Langsung di browser (paling cepat, tanpa akun)

1. Buka tautan GitHub Pages repo ini (setelah publish, lihat bawah) **atau** buka file `index.html` langsung di browser.
2. Isi **Nama Lengkap, Kelas, dan Nomor Absen** (wajib).
3. Klik **▶ Mulai Mengerjakan** — timer 90 menit berjalan.
4. Jawab 50 soal. Gunakan navigasi nomor untuk berpindah soal.
5. Klik **✅ Submit Jawaban** — nilai (0–100) dan pembahasan langsung tampil.
6. **🖨️ Cetak / Simpan PDF** atau **⬇️ Unduh Jawaban (TXT)** sebagai bukti pengerjaan.

### Opsi B — Google Form (resmi, nilai otomatis ke Sheets)

Ada dua cara (lihat panduan lengkap di [`google-form/panduan-membuat-google-form.md`](google-form/panduan-membuat-google-form.md)):

1. **Otomatis 1–2 menit (disarankan):** salin [`google-form/buat-google-form.gs`](google-form/buat-google-form.gs) ke [script.google.com](https://script.google.com/) lalu klik **Run** — Google Form berisi Nama, Kelas, No Absen + 50 soal HOTS + kunci + poin + pembahasan + Google Sheets rekap nilai langsung jadi otomatis.
2. **Manual / Tabel:** gunakan:
   - File copy-paste: [`google-form/daftar-pertanyaan.txt`](google-form/daftar-pertanyaan.txt)
   - Bank soal tabel: [`google-form/bank-soal-google-form.csv`](google-form/bank-soal-google-form.csv)
   - Template rekap nilai: [`google-form/template-nilai-google-sheets.csv`](google-form/template-nilai-google-sheets.csv)

---

## 📂 Struktur Repo

```
.
├── index.html                              ← Kuis interaktif (GitHub Pages). Siswa mengisi Nama, Kelas, No Absen.
├── data/
│   └── soal.json                           ← Bank soal terstruktur (50 soal + kunci + pembahasan).
├── google-form/
│   ├── buat-google-form.gs                 ← Script otomatis 1-klik membuat Google Form + Sheets.
│   ├── panduan-membuat-google-form.md      ← Panduan otomatis (Apps Script) & manual membuat Google Form.
│   ├── daftar-pertanyaan.txt               ← 50 soal siap copy-paste ke Google Form.
│   ├── bank-soal-google-form.csv           ← Bank soal tabel (Excel/Sheets).
│   └── template-nilai-google-sheets.csv    ← Template kolom rekap nilai.
├── kunci-jawaban-dan-pembahasan.md         ← DOKUMEN GURU (jangan dibagikan ke siswa).
├── kunci-jawaban-dan-pembahasan.html       ← Versi HTML siap cetak untuk guru.
└── README.md
```

---

## 🌐 Publish ke GitHub Pages (agar bisa diakses publik)

1. Push repo ini ke GitHub (branch `main`).
2. Di GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
3. Tunggu 1–2 menit, lalu buka:
   ```
   https://<username>.github.io/<nama-repo>/
   ```
   Contoh: `https://alhasan-cmyk.github.io/latihan-semesteran/`
4. Bagikan tautan tersebut ke siswa (WhatsApp, QR code, dll.). Tidak perlu login Google.

> `index.html` adalah file tunggal tanpa build — langsung jalan di GitHub Pages, Netlify, Vercel, atau dibuka offline dari laptop.

---

## 👨‍🏫 Untuk Guru

- **Kunci & pembahasan:** [`kunci-jawaban-dan-pembahasan.md`](kunci-jawaban-dan-pembahasan.md) atau versi cetak [`kunci-jawaban-dan-pembahasan.html`](kunci-jawaban-dan-pembahasan.html). **Jangan dibagikan ke siswa sebelum ujian.**
- **Penilaian:** 50 soal × 2 poin = 100. Kunci terdistribusi 10 soal per huruf (A–E) untuk keadilan.
- **Mengubah soal:** edit `data/soal.json`, lalu buat ulang `index.html` (injeksi JSON ke `const DATA = ...;`) dan perbarui file di `google-form/`.
- **Google Form:** ikuti `google-form/panduan-membuat-google-form.md`. Hubungkan ke Google Sheets untuk rekap otomatis.

---

## 📚 Catatan Materi

- Teks Arab mengikuti mushaf standar; terjemahan mengikuti Kemenag (sesuai buku KSKK 2020).
- Soal disusun sebagai **latihan** (bukan pengganti penilaian resmi). Guru dapat memilih subset soal atau mengacak urutan sesuai kebutuhan.
- Ayat yang dipakai sesuai KD Bab 1–5 buku, antara lain:
  - Bab 1: QS Al-Furqan 25:67; QS Al-Isra' 17:26–30; QS Al-Qashash 28:79–82; QS Al-Baqarah 2:177; QS Al-Ma'un 107:1–7; HR Ibnu Majah/Ahmad, HR Bukhari, HR Tirmidzi/Muslim.
  - Bab 2: QS Al-Baqarah 2:155–157; QS Ali Imran 3:186; HR Muslim (Suhaib); HR Tirmidzi (Mus'ab bin Sa'd).
  - Bab 3: QS Ar-Rum 30:41–42; QS Al-A'raf 7:56–58; QS Shad 38:27; QS Al-Furqan 25:45–50; QS Al-Baqarah 2:204–206; HR Bukhari-Muslim (Anas bin Malik).
  - Bab 4: QS Al-Alaq 96:1–5; QS Yunus 10:101; QS Al-Baqarah 2:164; QS Al-Hujurat 49:6; HR Abu Dawud (Abu Darda').
  - Bab 5: QS An-Nahl 16:125; QS Asy-Syu'ara 26:214–216; QS Al-Hijr 15:94–96; HR Muslim (Abu Hurairah).

Selamat belajar dan mengajar! 📚
