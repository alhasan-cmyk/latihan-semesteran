/**
 * GOOGLE APPS SCRIPT — Generator Otomatis Google Form
 * Latihan Tes Semesteran Al-Qur'an Hadis MA Kelas XII (Bab 1–5)
 *
 * CARA PAKAI (1–2 menit):
 * 1. Buka https://script.google.com/ -> klik "Project baru" (New project).
 * 2. Hapus kode bawaan (function myFunction() {}), lalu TEMPEL seluruh isi file ini.
 * 3. Klik ikon Simpan (Ctrl+S), lalu klik "Jalankan" (Run) pada fungsi buatGoogleFormLatihan.
 * 4. Saat diminta otorisasi, klik "Tinjau izin" -> pilih akun Google Anda -> "Lanjutan" -> "Buka ... (tidak aman)" -> "Izinkan".
 * 5. Tunggu ~15 detik sampai selesai. Lihat link Google Form Siswa, Link Edit Guru, dan Google Sheets Rekap Nilai di "Log Eksekusi" di bagian bawah!
 */

function buatGoogleFormLatihan() {
  var form = FormApp.create("Latihan Tes Semesteran Al-Qur'an Hadis MA Kelas XII (Bab 1–5)");
  form.setDescription(
    "Isi Nama Lengkap, Kelas, dan Nomor Absen terlebih dahulu, lalu kerjakan 50 soal HOTS.\n" +
    "Setiap soal memuat dalil Al-Qur'an/Hadis dalam bahasa Arab dan terjemahannya sebagai bahan belajar.\n" +
    "Jumlah: 50 soal pilihan ganda (2 poin per soal, skor maksimal 100).\n" +
    "Sumber materi: Buku Al-Qur'an Hadis MA Kelas XII, KSKK Kemenag RI (2020), Bab 1–5."
  );
  form.setIsQuiz(true);
  form.setShowLinkToRespondAgain(false);
  form.setProgressBar(true);

  // Hubungkan otomatis ke Google Sheets untuk rekap nilai
  var ss = SpreadsheetApp.create("Rekap Nilai - Latihan Semesteran Al-Qur'an Hadis XII (Bab 1-5)");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // BAGIAN 1: IDENTITAS WAJIB
  form.addSectionHeaderItem().setTitle("Bagian 1 — Identitas Peserta (Wajib Diisi)");

  form.addTextItem()
    .setTitle("Nama Lengkap")
    .setHelpText("Tulis nama lengkap sesuai daftar hadir kelas.")
    .setRequired(true);

  var kelasItem = form.addListItem()
    .setTitle("Kelas")
    .setHelpText("Pilih kelas Anda.")
    .setRequired(true);
  kelasItem.setChoiceValues([
    "XII-1", "XII-2", "XII-3", "XII-4", "XII-5",
    "XII-6", "XII-7", "XII-8", "XII-9", "XII-10",
    "XII-11", "XII-12", "XII-13", "XII-14", "XII-15"
  ]);

  var absenValidation = FormApp.createTextValidation()
    .setHelpText("Masukkan nomor absen berupa angka 1 sampai 99.")
    .requireNumberBetween(1, 99)
    .build();
  form.addTextItem()
    .setTitle("Nomor Absen")
    .setHelpText("Contoh: 7 atau 15")
    .setValidation(absenValidation)
    .setRequired(true);

  // BAGIAN 2: 50 SOAL HOTS
  form.addPageBreakItem().setTitle("Bagian 2 — Soal Latihan HOTS (50 Soal)");

  var soalList = [
  {
    "nomor": 1,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Furqan (25): 67",
    "dalilArab": "وَالَّذِينَ إِذَا أَنفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا وَكَانَ بَيْنَ ذَٰلِكَ قِوَامًا",
    "dalilTerjemah": "Dan orang-orang yang apabila membelanjakan (harta), mereka tidak berlebih-lebihan, dan tidak (pula) kikir, dan adalah (pembelanjaan itu) di tengah-tengah antara yang demikian.",
    "stimulus": "Rina, siswi kelas XII, setiap minggu menghabiskan uang saku untuk membeli 3–4 kaus dan sepatu bermerek demi mengikuti tren media sosial, padahal buku dan fotokopi tugasnya belum terbeli. Sebaliknya, kakaknya yang sudah bekerja menahan hartanya rapat-rapat: enggan membayar zakat dan enggan membantu orang tua karena takut hartanya berkurang.",
    "pertanyaan": "Berdasarkan QS Al-Furqan (25): 67, analisislah sikap Rina dan kakaknya yang paling tepat!",
    "opsi": [
      "Rina dan kakaknya sama-sama bersikap qiwām karena keduanya membelanjakan harta sesuai keinginan masing-masing.",
      "Rina bersikap isrāf yang dibenarkan karena membelanjakan harta untuk kebahagiaan diri, sedangkan kakaknya bersikap qatr yang dibenarkan karena menahan harta untuk masa depan.",
      "Rina bersikap isrāf (berlebih-lebihan) dan kakaknya bersikap qatr (kikir); keduanya menyalahi sifat i'bād al-Rahmān yang qiwām (di tengah-tengah).",
      "Keduanya tidak terkait dengan ayat tersebut karena ayat hanya mengatur infak di jalan Allah, bukan belanja pribadi.",
      "Rina bersikap qatr dan kakaknya bersikap isrāf; keduanya telah memenuhi perintah Allah tentang infak."
    ],
    "kunciIdx": 2,
    "pembahasan": "Isrāf artinya melampaui batas (tajāwaz al-hadd), termasuk membelanjakan harta untuk hal yang tidak perlu/maksiat. Qatr artinya meminimkan nafkah/menahan diri dari membelanjakan harta dalam ketaatan (termasuk zakat). QS Al-Furqan 25:67 memuji hamba Allah yang infaknya qiwām: tidak boros dan tidak kikir."
  },
  {
    "nomor": 2,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Al-Furqan (25): 67",
    "dalilArab": "وَالَّذِينَ إِذَا أَنفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا وَكَانَ بَيْنَ ذَٰلِكَ قِوَامًا",
    "dalilTerjemah": "Dan orang-orang yang apabila membelanjakan (harta), mereka tidak berlebih-lebihan, dan tidak (pula) kikir, dan adalah (pembelanjaan itu) di tengah-tengah antara yang demikian.",
    "stimulus": "Di era digital, banyak remaja terjebak gaya hidup hedon: cicilan gawai terbaru, nongkrong mahal, dan pamer barang mewah di media sosial. Di sisi lain, ada pula yang pelit berbagi padahal mampu. Keduanya mengklaim sedang 'menghargai diri sendiri'.",
    "pertanyaan": "Evaluasi klaim tersebut dengan menggunakan prinsip qiwām dalam QS Al-Furqan (25): 67. Sikap yang paling sesuai dengan ayat adalah…",
    "opsi": [
      "Qiwām berarti membelanjakan harta sebanyak-banyaknya untuk diri sendiri dan sesedikit-dikitnya untuk orang lain.",
      "Qiwām berarti tidak membelanjakan harta sama sekali karena harta adalah amanah yang harus disimpan utuh.",
      "Menghargai diri berarti menuruti semua keinginan konsumtif dan menahan semua pengeluaran sosial agar tidak 'rugi'.",
      "Qiwām berarti membelanjakan harta sesuai kebutuhan dan kemampuan, tidak boros untuk kemaksiatan, tidak kikir untuk ketaatan, serta tetap memperhatikan kebutuhan diri dan keluarga.",
      "Qiwām hanya berlaku untuk infak, sehingga belanja pribadi bebas dari batas syariat."
    ],
    "kunciIdx": 3,
    "pembahasan": "Batasan isrāf dan qatr adalah syariat, bukan sekadar adat atau standar hidup. Qiwām adalah moderasi: belanja sesuai keperluan, sedekah tidak sampai melupakan kebutuhan diri, dan zakat tetap dikeluarkan. Hedonisme adalah isrāf; pelit berbagi adalah qatr."
  },
  {
    "nomor": 3,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Isra' (17): 26–27",
    "dalilArab": "وَآتِ ذَا الْقُرْبَىٰ حَقَّهُ وَالْمِسْكِينَ وَابْنَ السَّبِيلِ وَلَا تُبَذِّرْ تَبْذِيرًا ۝ إِنَّ الْمُبَذِّرِينَ إِخْوَانُ الشَّيَاطِينِ ۖ وَكَانَ الشَّيْطَانُ لِرَبِّهِ كَفُورًا",
    "dalilTerjemah": "Dan berikanlah kepada keluarga-keluarga yang dekat akan haknya, kepada orang miskin dan orang yang dalam perjalanan; dan janganlah kamu menghambur-hamburkan (hartamu) secara boros. Sesungguhnya pemboros-pemboros itu adalah saudara-saudara setan dan setan itu adalah sangat ingkar kepada Tuhannya.",
    "stimulus": "Seorang pengusaha merayakan ulang tahun anaknya dengan pesta mewah: sewa gedung megah, artis ibukota, dan membuang makanan sisa dalam jumlah besar, sementara di sekitar rumahnya ada tetangga miskin yang kekurangan. Ia berdalih 'ini rezeki anak, harus dirayakan besar-besaran'.",
    "pertanyaan": "Analisislah perilaku pengusaha tersebut berdasarkan QS Al-Isra' (17): 26–27!",
    "opsi": [
      "Perilaku tersebut adalah infak yang dianjurkan karena menyenangkan anak dan kerabat.",
      "Perilaku tersebut tidak melanggar ayat karena ayat hanya melarang memberi kepada orang jauh.",
      "Perilaku tersebut termasuk qatr (kikir) karena tidak memberikan sisa makanan kepada tetangga.",
      "Perilaku tersebut dibenarkan karena rezeki yang banyak memang harus dibelanjakan sebanyak-banyaknya.",
      "Perilaku tersebut termasuk tabdzīr (pemborosan) yang disamakan dengan saudara setan, karena menghamburkan harta tanpa memberikan hak kerabat, miskin, dan ibnu sabīl."
    ],
    "kunciIdx": 4,
    "pembahasan": "Ayat memerintahkan memberikan hak kepada kerabat dekat, miskin, dan ibnu sabīl, serta melarang tabdzīr. Pemboros disamakan dengan saudara setan karena setan ingkar kepada Tuhannya (kufūr). Pesta mewah yang membuang makanan dan mengabaikan duafa adalah tabdzīr."
  },
  {
    "nomor": 4,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Isra' (17): 29",
    "dalilArab": "وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَىٰ عُنُقِكَ وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ فَتَقْعُدَ مَذْمُومًا مَّحْسُورًا",
    "dalilTerjemah": "Dan janganlah kamu jadikan tanganmu terbelenggu pada lehermu dan janganlah kamu terlalu mengulurkannya karena itu kamu menjadi tercela dan menyesal.",
    "stimulus": "Pak Haji kaya raya enggan mengeluarkan zakat dan infak dengan alasan 'harta saya hasil kerja keras, tidak wajib dibagi'. Ia juga enggan membantu kerabat yang sakit. Sebaliknya, ada orang yang mengulurkan tangan terlalu jauh: berutang untuk bersedekah besar-besaran hingga keluarganya terlantar.",
    "pertanyaan": "Berdasarkan QS Al-Isra' (17): 29, analisislah kedua sikap tersebut!",
    "opsi": [
      "Pak Haji bersikap benar karena zakat tidak wajib bagi orang kaya; orang kedua bersikap salah karena berutang.",
      "Keduanya tidak terkait dengan ayat karena ayat hanya tentang rezeki dari Allah.",
      "Keduanya adalah sikap yang dianjurkan karena menunjukkan kedermawanan dan kehati-hatian.",
      "Pak Haji termasuk mubadzīr dan orang kedua termasuk qatr.",
      "Pak Haji menggambarkan tangan terbelenggu (kikir) yang berakibat tercela; orang kedua menggambarkan tangan terulur penuh (boros) yang berakibat menyesal. Keduanya dilarang."
    ],
    "kunciIdx": 4,
    "pembahasan": "Tangan terbelenggu di leher adalah perumpamaan kikir (menahan harta); tangan terulur penuh adalah perumpamaan boros. Kikir berakibat tercela (madzmūm), boros berakibat menyesal (mahsūr). Islam memerintahkan moderasi."
  },
  {
    "nomor": 5,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Qashash (28): 79–82",
    "dalilArab": "فَخَرَجَ عَلَىٰ قَوْمِهِ فِي زِينَتِهِ ۖ قَالَ الَّذِينَ يُرِيدُونَ الْحَيَاةَ الدُّنْيَا يَا لَيْتَ لَنَا مِثْلَ مَا أُوتِيَ قَارُونُ ۖ إِنَّهُ لَذُو حَظٍّ عَظِيمٍ ۝ وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ وَيْلَكُمْ ثَوَابُ اللَّهِ خَيْرٌ لِّمَنْ آمَنَ وَعَمِلَ صَالِحًا وَلَا يُلَقَّاهَا إِلَّا الصَّابِرُونَ ۝ فَخَسَفْنَا بِهِ وَبِدَارِهِ الْأَرْضَ فَمَا كَانَ لَهُ مِن فِئَةٍ يَنصُرُونَهُ مِن دُونِ اللَّهِ وَمَا كَانَ مِنَ الْمُنتَصِرِينَ",
    "dalilTerjemah": "Maka keluarlah Qarun kepada kaumnya dalam kemegahannya. Berkatalah orang-orang yang menghendaki kehidupan dunia: 'Moga-moga kiranya kita mempunyai seperti apa yang telah diberikan kepada Qarun; sesungguhnya ia benar-benar mempunyai keberuntungan yang besar'. Berkatalah orang-orang yang dianugerahi ilmu: 'Kecelakaan yang besarlah bagimu, pahala Allah adalah lebih baik bagi orang-orang yang beriman dan beramal saleh, dan tidak diperoleh pahala itu kecuali oleh orang-orang yang sabar'. Maka Kami benamkanlah Qarun beserta rumahnya ke dalam bumi. Maka tidak ada baginya suatu golongan pun yang menolongnya terhadap azab Allah dan tiadalah ia termasuk orang-orang (yang dapat) membela (dirinya).",
    "stimulus": "Seorang pejabat korup menumpuk kekayaan, sombong dengan harta dan jabatannya, serta meremehkan nasihat ulama. Ia menganggap hartanya hasil kepintaran sendiri. Ketika tersandung kasus, tidak ada yang menolongnya dan hartanya hilang begitu cepat.",
    "pertanyaan": "Analisislah keterkaitan kisah Qarun dalam QS Al-Qashash (28): 79–82 dengan perilaku pejabat tersebut. Pelajaran yang paling tepat adalah…",
    "opsi": [
      "Kekayaan yang besar selalu menjadi tanda ridha Allah, sehingga pejabat tersebut pasti selamat.",
      "Kisah Qarun tidak relevan dengan pejabat modern karena Qarun hidup di zaman Nabi Musa.",
      "Kesombongan dan mengingkari karunia Allah dengan harta menyebabkan kehancuran; harta tidak dapat menolong pemiliknya dari azab Allah, sedangkan ilmu dan kesabaran menuntun pada pahala yang lebih baik.",
      "Qarun hancur karena terlalu banyak bersedekah, sehingga pelajaran bagi pejabat adalah jangan bersedekah.",
      "Orang-orang yang berilmu salah karena iri kepada Qarun; seharusnya mereka juga menginginkan harta Qarun."
    ],
    "kunciIdx": 2,
    "pembahasan": "Qarun keluar dalam kemegahan (zīnah), mengklaim harta karena ilmunya, lalu dibenamkan ke bumi dan tidak ada penolong. Orang berilmu mengingatkan bahwa pahala Allah lebih baik bagi yang beriman dan beramal saleh dengan sabar. Pelajarannya: harta adalah ujian; kesombongan dan kufur nikmat berakibat kehancuran."
  },
  {
    "nomor": 6,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Al-Baqarah (2): 177",
    "dalilArab": "لَّيْسَ الْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَالْمَلَائِكَةِ وَالْكِتَابِ وَالنَّبِيِّينَ وَآتَى الْمَالَ عَلَىٰ حُبِّهِ ذَوِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينَ وَابْنَ السَّبِيلِ وَالسَّائِلِينَ وَفِي الرِّقَابِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ وَالْمُوفُونَ بِعَهْدِهِمْ إِذَا عَاهَدُوا ۖ وَالصَّابِرِينَ فِي الْبَأْسَاءِ وَالضَّرَّاءِ وَحِينَ الْبَأْسِ ۗ أُولَٰئِكَ الَّذِينَ صَدَقُوا ۖ وَأُولَٰئِكَ هُمُ الْمُتَّقُونَ",
    "dalilTerjemah": "Bukanlah menghadapkan wajahmu ke timur dan ke barat itu kebajikan, akan tetapi kebajikan itu ialah beriman kepada Allah, hari kemudian, malaikat-malaikat, kitab-kitab, dan nabi-nabi dan memberikan harta yang dicintainya kepada kerabat, anak-anak yatim, orang-orang miskin, orang-orang yang dalam perjalanan (ibnu sabil), orang-orang yang meminta-minta, dan untuk memerdekakan hamba sahaya, dan mendirikan salat dan menunaikan zakat, dan orang-orang yang menepati janjinya apabila ia berjanji, dan orang-orang yang sabar dalam kesempitan, penderitaan, dan dalam peperangan. Mereka itulah orang-orang yang benar (imannya) dan mereka itulah orang-orang yang bertakwa.",
    "stimulus": "Seorang rajin salat dan puasa, tetapi enggan memberi kepada kerabat miskin dan anak yatim dengan alasan 'yang penting salat saya rajin'. Seorang lain rajin bersedekah, tetapi salatnya berantakan dan janjinya sering diingkari.",
    "pertanyaan": "Evaluasi kedua orang tersebut berdasarkan QS Al-Baqarah (2): 177 tentang hakikat kebajikan (al-birr)!",
    "opsi": [
      "Al-birr hanya berarti menghadap ke timur dan barat, sehingga keduanya tidak relevan.",
      "Keduanya telah menjadi muttaqūn karena masing-masing melakukan satu kebaikan.",
      "Orang pertama sudah sempurna karena salat adalah inti kebajikan; orang kedua juga sempurna karena sedekah adalah inti kebajikan.",
      "Keduanya belum mencapai al-birr yang sempurna, karena al-birr meliputi iman, memberi harta yang dicintai kepada kerabat, yatim, miskin, ibnu sabīl, peminta, mendirikan salat, menunaikan zakat, menepati janji, dan sabar.",
      "Orang pertama lebih baik karena ibadah ritual lebih penting daripada harta; orang kedua tidak perlu salat jika sudah bersedekah."
    ],
    "kunciIdx": 3,
    "pembahasan": "QS Al-Baqarah 2:177 menegaskan al-birr bukan sekadar arah kiblat, melainkan paket utuh: iman, infak kepada kerabat/yatim/miskin/ibnu sabīl/peminta, salat, zakat, menepati janji, dan sabar. Orang yang hanya menekankan satu sisi belum utuh."
  },
  {
    "nomor": 7,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Ma'un (107): 1–7",
    "dalilArab": "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ ۝ فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ ۝ وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ ۝ فَوَيْلٌ لِّلْمُصَلِّينَ ۝ الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ ۝ الَّذِينَ هُمْ يُرَاءُونَ ۝ وَيَمْنَعُونَ الْمَاعُونَ",
    "dalilTerjemah": "Tahukah kamu (orang) yang mendustakan agama? Itulah orang yang menghardik anak yatim, dan tidak menganjurkan memberi makan orang miskin. Maka kecelakaanlah bagi orang-orang yang salat, (yaitu) orang-orang yang lalai dari salatnya, orang-orang yang berbuat riya, dan enggan menolong dengan barang berguna.",
    "stimulus": "Seorang dermawan rajin salat, tetapi salatnya sering terlambat dan dikerjakan sekadarnya. Ia juga suka memamerkan sedekahnya di media sosial agar dipuji, namun enggan meminjamkan barang sederhana kepada tetangga yang membutuhkan.",
    "pertanyaan": "Analisislah perilaku dermawan tersebut berdasarkan QS Al-Ma'un (107): 1–7!",
    "opsi": [
      "Ia termasuk pendusta agama karena tidak menghardik anak yatim.",
      "Ia termasuk orang yang lalai dari salatnya, berbuat riya, dan enggan menolong (yamna'ūna al-mā'ūn), sehingga mendapat ancaman wail (kecelakaan) meskipun rajin salat.",
      "Ia sudah sempurna karena sedekah di media sosial adalah dakwah yang dianjurkan.",
      "Ia tidak terkait dengan surat Al-Ma'un karena surat itu hanya untuk orang yang tidak salat sama sekali.",
      "Ia termasuk orang yang bertakwa karena rajin salat dan bersedekah, tanpa perlu memperhatikan riya dan mā'ūn."
    ],
    "kunciIdx": 1,
    "pembahasan": "Al-Ma'un mengecam pendusta agama yang menghardik yatim dan enggan memberi makan miskin, serta orang yang salatnya lalai (sāhūn), riya (yurā'ūn), dan enggan menolong dengan barang berguna (yamna'ūna al-mā'ūn). Ancaman wail bagi musallīn yang demikian."
  },
  {
    "nomor": 8,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C4 Analisis",
    "dalilSumber": "HR Ibnu Majah dan Ahmad dari Abdullah bin Amr",
    "dalilArab": "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ",
    "dalilTerjemah": "Sesungguhnya Allah mencintai apabila salah seorang dari kalian mengerjakan suatu pekerjaan, maka hendaklah ia mengerjakannya dengan sebaik-baiknya. (HR Ibnu Majah dan Ahmad). Dalam konteks bab ini, hadis ini dikutip untuk larangan berlebih-lebihan (isrāf) bahkan dalam wudu: Rasulullah saw. bersabda kepada Sa'd yang berwudu berlebihan, 'Janganlah berlebih-lebihan. Sesungguhnya itu termasuk perbuatan setan.' Sa'd berkata, 'Apakah dalam berwudu ada yang dianggap berlebih-lebihan?' Beliau menjawab, 'Ya, meskipun kamu berada di atas sungai yang mengalir.' (HR Ibnu Majah)",
    "stimulus": "Seorang siswa berwudu dengan air mengalir deras hingga terbuang banyak, dan di rumahnya juga membiarkan keran terbuka saat menyikat gigi. Ia berdalih 'air banyak, tidak apa-apa boros sedikit'.",
    "pertanyaan": "Analisislah perilaku siswa tersebut berdasarkan hadis larangan berlebih-lebihan (isrāf) dalam wudu!",
    "opsi": [
      "Perilaku tersebut termasuk qatr karena terlalu hemat air.",
      "Perilaku tersebut dibenarkan karena wudu yang banyak airnya lebih suci.",
      "Perilaku tersebut termasuk isrāf yang dilarang, karena isrāf haram bahkan dalam ibadah wudu, apalagi dalam hal mubah seperti menyikat gigi; kesederhanaan harus ditegakkan dalam semua amal.",
      "Larangan isrāf hanya berlaku untuk makanan, tidak untuk air.",
      "Hadis tersebut tidak relevan karena wudu tidak berkaitan dengan pola hidup sederhana."
    ],
    "kunciIdx": 2,
    "pembahasan": "Hadis menegaskan isrāf dilarang bahkan dalam wudu, meskipun di atas sungai yang mengalir. Jika dalam ibadah saja tidak boleh boros, apalagi dalam hal mubah. Ini menunjukkan kesederhanaan adalah prinsip menyeluruh."
  },
  {
    "nomor": 9,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C5 Evaluasi",
    "dalilSumber": "HR Bukhari dari Hakim bin Hizam",
    "dalilArab": "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَىٰ فَابْدَأْ بِمَنْ تَعُولُ وَخَيْرُ الصَّدَقَةِ مَا كَانَ عَنْ ظَهْرِ غِنًى وَمَنْ يَسْتَعْفِفْ يُعِفُّهُ اللَّهُ وَمَنْ يَسْتَغْنِ يُغْنِهِ اللَّهُ",
    "dalilTerjemah": "Tangan yang di atas lebih baik dari tangan yang di bawah, maka mulailah dengan orang-orang yang menjadi tanggunganmu. Sebaik-baik sedekah adalah dari orang yang sudah cukup (untuk kebutuhan dirinya). Maka siapa yang berusaha menjaga dirinya, Allah akan menjaganya dan siapa yang merasa cukup untuk dirinya maka Allah akan mencukupkannya. (HR Bukhari)",
    "stimulus": "Di sebuah kota, banyak pengemis menjadikan mengemis sebagai profesi karena penghasilannya lebih besar dari PNS. Pemerintah daerah menerbitkan perda melarang memberi kepada pengemis untuk memutus budaya malas. Sebagian warga protes karena merasa dilarang beramal.",
    "pertanyaan": "Evaluasi perdebatan perda tersebut berdasarkan HR Bukhari tentang keutamaan memberi daripada menerima!",
    "opsi": [
      "Hadis memuliakan tangan di atas (pemberi) dan menganjurkan 'iffah (menjaga diri dari meminta) serta qana'ah (merasa cukup); perda dapat dipahami sebagai upaya mencegah budaya meminta, tetapi larangan memberi harus dibarengi solusi menyantuni duafa yang benar-benar membutuhkan agar tidak menzalimi mereka.",
      "Hadis tidak relevan dengan pengemis karena hanya tentang keluarga.",
      "Orang yang meminta-minta lebih mulia daripada orang yang memberi karena tangan di bawah lebih baik.",
      "Hadis memerintahkan semua orang menjadi pengemis agar pahala pemberi bertambah.",
      "Perda melanggar hadis karena hadis memerintahkan memberi kepada siapa pun tanpa syarat."
    ],
    "kunciIdx": 0,
    "pembahasan": "Hadis memuliakan pemberi, memerintahkan mendahulukan tanggungan, dan menjanjikan kecukupan bagi yang menjaga diri ('iffah) dan merasa cukup (qana'ah). Budaya mengemis sebagai profesi bertentangan dengan semangat hadis. Perda perlu dievaluasi: mencegah kemalasan tanpa menutup pintu sedekah bagi yang benar-benar berhak."
  },
  {
    "nomor": 10,
    "bab": 1,
    "babJudul": "Membudayakan Pola Hidup Sederhana dan Menyantuni Duafa",
    "level": "C4 Analisis",
    "dalilSumber": "HR Tirmidzi, Ibnu Majah, dan Muslim dari Miqdad bin Ma'dikarib",
    "dalilArab": "بِحَسْبِ ابْنِ آدَمَ أُكَيْلَاتٌ يُقِمْنَ صُلْبَهُ فَإِنْ كَانَ لَا مَحَالَةَ فَثُلُثٌ لِطَعَامِهِ وَثُلُثٌ لِشَرَابِهِ وَثُلُثٌ لِنَفَسِهِ",
    "dalilTerjemah": "Cukuplah bagi anak Adam beberapa suap makanan yang dapat menegakkan tulang punggungnya. Dan seandainya ia tidak mampu berbuat seperti itu, maka sepertiga untuk makanan, sepertiga untuk minuman dan sepertiganya lagi untuk napasnya. (HR Tirmidzi, Ibnu Majah, dan Muslim)",
    "stimulus": "Seorang siswa setiap hari makan melebihi porsi, minum es teh berlebih, dan sering sakit maag serta mengantuk di kelas. Ia juga membuang makanan sisa. Di sisi lain, temannya makan secukupnya, sehat, dan fokus belajar.",
    "pertanyaan": "Analisislah kebiasaan makan siswa tersebut berdasarkan hadis proporsi sepertiga (makanan, minuman, napas)!",
    "opsi": [
      "Hadis tersebut tidak berkaitan dengan kesehatan, hanya tentang ibadah.",
      "Kebiasaan tersebut dibenarkan karena makan banyak memberi tenaga lebih.",
      "Kebiasaan tersebut termasuk qatr karena terlalu banyak makan.",
      "Hadis hanya berlaku untuk orang dewasa, tidak untuk siswa.",
      "Kebiasaan siswa tersebut melanggar prinsip kesederhanaan dan keseimbangan: perut yang penuh melebihi sepertiga merugikan kesehatan dan menyebabkan pemborosan; pola sepertiga menjaga tubuh sehat untuk ibadah dan belajar."
    ],
    "kunciIdx": 4,
    "pembahasan": "Hadis mengajarkan proporsi sepertiga: makanan, minuman, napas. Kelebihan makan berbahaya bagi tubuh dan merupakan bentuk isrāf. Kesederhanaan dalam makan menjaga kesehatan, konsentrasi belajar, dan menghindari pemborosan."
  },
  {
    "nomor": 11,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Baqarah (2): 155–157",
    "dalilArab": "وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ ۝ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ ۝ أُولَٰئِكَ عَلَيْهِمْ صَلَوَاتٌ مِّن رَّبِّهِمْ وَرَحْمَةٌ ۖ وَأُولَٰئِكَ هُمُ الْمُهْتَدُونَ",
    "dalilTerjemah": "Dan sungguh akan Kami berikan cobaan kepadamu, dengan sedikit ketakutan, kelaparan, kekurangan harta, jiwa dan buah-buahan. Dan berikanlah berita gembira kepada orang-orang yang sabar. (yaitu) orang-orang yang apabila ditimpa musibah, mereka mengucapkan, 'Innaa lillaahi wa innaa ilaihi raaji'uun'. Mereka itulah yang mendapat keberkatan yang sempurna dan rahmat dari Tuhan mereka, dan mereka itulah orang-orang yang mendapat petunjuk.",
    "stimulus": "Sebuah desa dilanda gagal panen, kenaikan harga, dan ketakutan karena konflik. Sebagian warga mengeluh dan menyalahkan Tuhan, sebagian lain tetap tenang, beristirja', dan bahu-membahu membantu tetangga.",
    "pertanyaan": "Analisislah respons kedua kelompok warga tersebut berdasarkan QS Al-Baqarah (2): 155–157 tentang macam-macam ujian!",
    "opsi": [
      "Keduanya tidak terkait dengan ayat karena ayat hanya untuk orang yang ditimpa musibah besar.",
      "Kelompok pertama benar karena mengeluh adalah cara terbaik menghadapi ujian.",
      "Kelompok pertama gagal menyikapi ujian (khawf, jū', naqsh al-amwāl, al-anfus, al-tsamarāt); kelompok kedua menunjukkan kesabaran dengan istirja' sehingga mendapat salawat, rahmat, dan petunjuk dari Allah.",
      "Kelompok kedua salah karena istirja' berarti pasrah tanpa usaha.",
      "Ujian dalam ayat hanya berupa kelaparan, sehingga gagal panen tidak termasuk ujian."
    ],
    "kunciIdx": 2,
    "pembahasan": "Ayat menyebut lima ujian: ketakutan, kelaparan, kekurangan harta, jiwa, dan buah-buahan. Orang sabar mengucapkan istirja' dan mendapat keberkatan, rahmat, dan petunjuk. Berpikir positif berarti meyakini ujian adalah sunnatullah untuk menguatkan mental dan keyakinan."
  },
  {
    "nomor": 12,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Baqarah (2): 156",
    "dalilArab": "الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    "dalilTerjemah": "(yaitu) orang-orang yang apabila ditimpa musibah, mereka mengucapkan, 'Innaa lillaahi wa innaa ilaihi raaji'uun' (Sesungguhnya kami adalah milik Allah dan sesungguhnya kami akan kembali kepada-Nya).",
    "stimulus": "Ketika mendengar kabar gempa yang menewaskan kerabatnya, Dina langsung mengucapkan istirja', lalu segera menghubungi keluarga, membantu evakuasi, dan mendoakan para korban. Temannya, Sari, langsung histeris, menyalahkan takdir, dan mengurung diri tanpa membantu siapa pun.",
    "pertanyaan": "Analisislah perbedaan respons Dina dan Sari berdasarkan QS Al-Baqarah (2): 156!",
    "opsi": [
      "Dina salah karena istirja' berarti menyerah tanpa usaha.",
      "Istirja' hanya diucapkan untuk musibah kecil, bukan untuk kematian.",
      "Sari lebih benar karena istirja' tidak boleh diucapkan saat berduka.",
      "Keduanya sama-sama sabar karena sama-sama merasakan duka.",
      "Dina menunjukkan sikap sabar yang benar: istirja' sebagai pengakuan milik Allah dan kembali kepada-Nya, disertai tindakan nyata; Sari menunjukkan sikap putus asa yang bertentangan dengan kesabaran."
    ],
    "kunciIdx": 4,
    "pembahasan": "Istirja' adalah kalimat thayyibah orang sabar saat musibah: pengakuan bahwa semua milik Allah dan akan kembali kepada-Nya. Kesabaran bukan pasif, melainkan tetap beramal dan membantu. Putus asa dan menyalahkan takdir adalah lawan kesabaran."
  },
  {
    "nomor": 13,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C4 Analisis",
    "dalilSumber": "QS Ali Imran (3): 186",
    "dalilArab": "لَتُبْلَوُنَّ فِي أَمْوَالِكُمْ وَأَنفُسِكُمْ ۖ وَلَتَسْمَعُنَّ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ مِن قَبْلِكُمْ وَمِنَ الَّذِينَ أَشْرَكُوا أَذًى كَثِيرًا ۚ وَإِن تَصْبِرُوا وَتَتَّقُوا فَإِنَّ ذَٰلِكَ مِنْ عَزْمِ الْأُمُورِ",
    "dalilTerjemah": "Kamu sungguh-sungguh akan diuji terhadap hartamu dan dirimu. Dan (juga) kamu sungguh-sungguh akan mendengar dari orang-orang yang diberi Kitab sebelum kamu dan dari orang-orang yang mempersekutukan Allah, gangguan yang banyak yang menyakitkan hati. Jika kamu bersabar dan bertakwa, maka sesungguhnya yang demikian itu termasuk urusan yang patut diutamakan.",
    "stimulus": "Seorang santri hafiz Al-Qur'an diejek dan difitnah di media sosial oleh kelompok yang membenci Islam. Hartanya juga diuji: orang tuanya kehilangan pekerjaan. Ia memilih sabar, tetap belajar, dan tidak membalas fitnah dengan fitnah.",
    "pertanyaan": "Analisislah ujian yang dialami santri tersebut berdasarkan QS Ali Imran (3): 186!",
    "opsi": [
      "Ujian harta tidak termasuk dalam ayat karena ayat hanya tentang ejekan.",
      "Santri tersebut mengalami ujian harta (kehilangan pekerjaan orang tua) dan ujian diri (ejekan/fitnah yang menyakitkan hati); kesabarannya adalah 'azm al-umūr (urusan yang patut diutamakan) yang dijanjikan pahala.",
      "Santri tersebut tidak diuji karena ujian hanya berupa perang fisik.",
      "Santri tersebut harus membalas fitnah dengan fitnah agar setimpal.",
      "Kesabaran santri tersebut adalah kelemahan yang harus ditinggalkan."
    ],
    "kunciIdx": 1,
    "pembahasan": "Ayat menegaskan keniscayaan ujian pada harta dan diri, termasuk gangguan menyakitkan dari Ahlul Kitab dan musyrik. Sabar dan takwa adalah 'azm al-umūr. Balasan bagi yang sabar adalah martabat tinggi di surga (QS Al-Furqan 25:75–76)."
  },
  {
    "nomor": 14,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Ali Imran (3): 186",
    "dalilArab": "لَتُبْلَوُنَّ فِي أَمْوَالِكُمْ وَأَنفُسِكُمْ ۖ وَلَتَسْمَعُنَّ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ مِن قَبْلِكُمْ وَمِنَ الَّذِينَ أَشْرَكُوا أَذًى كَثِيرًا ۚ وَإِن تَصْبِرُوا وَتَتَّقُوا فَإِنَّ ذَٰلِكَ مِنْ عَزْمِ الْأُمُورِ",
    "dalilTerjemah": "Kamu sungguh-sungguh akan diuji terhadap hartamu dan dirimu. Dan (juga) kamu sungguh-sungguh akan mendengar dari orang-orang yang diberi Kitab sebelum kamu dan dari orang-orang yang mempersekutukan Allah, gangguan yang banyak yang menyakitkan hati. Jika kamu bersabar dan bertakwa, maka sesungguhnya yang demikian itu termasuk urusan yang patut diutamakan.",
    "stimulus": "Dua siswa diejek karena keteguhan agamanya. Andi membalas dengan makian dan perkelahian. Budi memilih diam, berdoa, melaporkan perundungan kepada guru, dan tetap berprestasi. Keduanya mengklaim sedang 'membela agama'.",
    "pertanyaan": "Evaluasi klaim keduanya berdasarkan QS Ali Imran (3): 186!",
    "opsi": [
      "Keduanya salah karena seharusnya tidak melaporkan kepada guru.",
      "Budi lebih sesuai dengan ayat: sabar dan takwa adalah cara menghadapi adzan (gangguan) yang patut diutamakan; Andi bertentangan karena membalas gangguan dengan perkelahian yang melanggar takwa.",
      "Keduanya sama-sama benar karena membela agama adalah kewajiban mutlak.",
      "Ayat tidak mengatur cara menghadapi ejekan, sehingga bebas memilih.",
      "Andi lebih sesuai karena membela agama harus dengan kekerasan."
    ],
    "kunciIdx": 1,
    "pembahasan": "Ayat memerintahkan sabar dan takwa saat mendengar gangguan menyakitkan. Sabar bukan berarti diam tanpa usaha: melaporkan perundungan adalah ikhtiar yang sah. Membalas dengan perkelahian melanggar takwa dan merusak akhlak."
  },
  {
    "nomor": 15,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C4 Analisis",
    "dalilSumber": "HR Muslim dari Suhaib",
    "dalilArab": "عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ",
    "dalilTerjemah": "Perkara orang mukmin mengagumkan, sesungguhnya semua perihalnya baik dan itu tidak dimiliki seorang pun selain orang mukmin, bila tertimpa kesenangan, ia bersyukur dan syukur itu baik baginya dan bila tertimpa musibah, ia bersabar dan sabar itu baik baginya. (HR Muslim)",
    "stimulus": "Lulus ujian dengan nilai tertinggi, Maya bersyukur dengan sujud syukur, berbagi kebahagiaan dengan teman, dan semakin rajin belajar. Ia tidak sombong dan tidak meremehkan teman yang belum lulus.",
    "pertanyaan": "Analisislah sikap Maya berdasarkan HR Muslim tentang sikap mukmin saat mendapat kesenangan (sarrā')!",
    "opsi": [
      "Hadis tersebut tidak berlaku untuk prestasi belajar.",
      "Syukur hanya berupa ucapan lisan, tidak perlu berbagi.",
      "Maya menunjukkan syukur yang benar: pujian kepada Allah, rida dengan kebaikan, dan berbagi kesenangan dengan orang lain; syukur tersebut menjadi kebaikan baginya.",
      "Maya salah karena seharusnya menyembunyikan kebahagiaan dari teman.",
      "Maya menunjukkan kesombongan karena merayakan kelulusan."
    ],
    "kunciIdx": 2,
    "pembahasan": "Hadis menegaskan semua urusan mukmin adalah baik: saat senang bersyukur, saat susah bersabar. Syukur meliputi pujian, rida, dan berbagi. Keistimewaan ini hanya dimiliki mukmin."
  },
  {
    "nomor": 16,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C4 Analisis",
    "dalilSumber": "HR Muslim dari Suhaib",
    "dalilArab": "عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ",
    "dalilTerjemah": "Perkara orang mukmin mengagumkan, sesungguhnya semua perihalnya baik dan itu tidak dimiliki seorang pun selain orang mukmin, bila tertimpa kesenangan, ia bersyukur dan syukur itu baik baginya dan bila tertimpa musibah, ia bersabar dan sabar itu baik baginya. (HR Muslim)",
    "stimulus": "Dua siswa tidak lulus ujian. Fajar tetap belajar, berdoa, dan meyakini ujian adalah bagian dari takdir yang masih dalam batas kemampuan. Rizki berhenti belajar, menyalahkan guru, dan berputus asa hingga mengingkari Tuhan.",
    "pertanyaan": "Analisislah perbedaan sikap Fajar dan Rizki berdasarkan HR Muslim tentang sikap mukmin saat tertimpa kesusahan (darrā')!",
    "opsi": [
      "Rizki lebih benar karena menyalahkan guru adalah cara meluapkan emosi yang sehat.",
      "Fajar salah karena sabar berarti pasrah tanpa belajar lagi.",
      "Fajar menunjukkan sabar yang menjadikan musibah sebagai kebaikan; Rizki menunjukkan putus asa dan ingkar yang bertentangan dengan keistimewaan mukmin.",
      "Hadis tersebut tidak mengatur sikap saat gagal ujian.",
      "Keduanya sama-sama baik karena sama-sama merasakan kecewa."
    ],
    "kunciIdx": 2,
    "pembahasan": "Allah tidak menguji melebihi kemampuan manusia. Mukmin yang sabar menjadikan musibah sebagai kebaikan (penggugur dosa, peninggi derajat). Putus asa dan ingkar adalah lawan sabar."
  },
  {
    "nomor": 17,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C4 Analisis",
    "dalilSumber": "HR Tirmidzi dari Mus'ab bin Sa'd",
    "dalilArab": "يُبْتَلَى الْمَرْءُ عَلَى حَسَبِ دِينِهِ فَإِنْ كَانَ فِي دِينِهِ صُلْبًا اشْتَدَّ بَلَاؤُهُ وَإِنْ كَانَ فِي دِينِهِ رِقَّةٌ هَانَ عَلَيْهِ الْبَلَاءُ وَمَا يَبْرَحُ الْبَلَاءُ بِالْعَبْدِ حَتَّى يَتْرُكَهُ يَمْشِي عَلَى الْأَرْضِ مَا عَلَيْهِ خَطِيئَةٌ",
    "dalilTerjemah": "Seseorang akan diuji sesuai dengan kondisi agamanya. Apabila agamanya begitu kuat (kokoh), maka semakin berat pula ujiannya. Apabila agamanya lemah, maka ia akan diuji sesuai dengan kualitas agamanya. Seorang hamba senantiasa akan mendapat cobaan hingga ia berjalan di atas bumi tanpa dosa. (HR Tirmidzi)",
    "stimulus": "Seorang ustazah yang sangat taat dan sabar justru diuji dengan penyakit berat dan fitnah berat. Seorang lain yang ibadahnya longgar hanya diuji dengan hal ringan. Keduanya bertanya: 'Mengapa yang taat justru diuji lebih berat?'",
    "pertanyaan": "Analisislah fenomena tersebut berdasarkan HR Tirmidzi tentang cobaan bagi mukmin!",
    "opsi": [
      "Fenomena tersebut membuktikan Allah tidak adil kepada orang taat.",
      "Fenomena tersebut membuktikan orang taat lebih banyak dosanya sehingga diuji berat.",
      "Ujian tidak berkaitan dengan kekuatan agama, melainkan kebetulan.",
      "Fenomena tersebut sesuai hadis: semakin kokoh agama seseorang, semakin berat ujiannya; ujian berat adalah cara Allah menyucikan jiwa, mengampuni dosa, dan meninggikan derajat hingga berjalan tanpa dosa.",
      "Orang yang ibadahnya longgar pasti tidak diuji sama sekali."
    ],
    "kunciIdx": 3,
    "pembahasan": "Hadis menegaskan ujian sebanding dengan kualitas agama; para Nabi adalah yang paling berat ujiannya. Bala' dapat menjadi pengampun dosa dan peninggi derajat (QS Ali Imran 3:154). Ujian berat bukan tanda murka, melainkan kasih sayang yang menyucikan."
  },
  {
    "nomor": 18,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Al-Baqarah (2): 155",
    "dalilArab": "وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ",
    "dalilTerjemah": "Dan sungguh akan Kami berikan cobaan kepadamu, dengan sedikit ketakutan, kelaparan, kekurangan harta, jiwa dan buah-buahan. Dan berikanlah berita gembira kepada orang-orang yang sabar.",
    "stimulus": "Seorang siswa menganggap semua musibah adalah azab karena dosa, semua kesenangan adalah bukti kasih Allah, dan semua bencana yang menimpa orang lain adalah fitnah yang tidak perlu dipedulikan. Ia tidak pernah beristirja' dan tidak pernah bersyukur.",
    "pertanyaan": "Evaluasi pemahaman siswa tersebut berdasarkan penjelasan istilah musibah, balā', dan fitnah dalam materi Bab 2!",
    "opsi": [
      "Pemahamannya benar karena semua musibah pasti azab dan semua kesenangan pasti kasih Allah.",
      "Pemahamannya benar karena bencana orang lain tidak perlu dipedulikan.",
      "Istilah musibah, balā', dan fitnah tidak ada dalam Al-Qur'an.",
      "Pemahamannya keliru: musibah tidak selalu karena dosa (bisa karena izin Allah dan ulah manusia), balā' bisa berupa nikmat maupun derita sebagai ujian, dan fitnah adalah ujian/siksaan yang dampaknya bisa mengenai orang tidak bersalah sehingga harus disikapi dengan sabar dan syukur.",
      "Pemahamannya benar karena istirja' dan syukur tidak wajib."
    ],
    "kunciIdx": 3,
    "pembahasan": "Musibah: sesuatu tidak menyenangkan yang menimpa (bisa karena ulah sendiri QS Asy-Syura 42:30, tetapi terjadi atas izin Allah). Balā': ujian langsung dari Allah yang bisa menyenangkan (QS Al-Anbiya 21:35) atau tidak menyenangkan; nikmat bukan bukti kasih dan derita bukan bukti murka (QS Al-Fajr 89:15–17). Fitnah: ujian/siksaan, bisa berdampak pada orang tidak bersalah."
  },
  {
    "nomor": 19,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C6 Mencipta",
    "dalilSumber": "QS Al-Baqarah (2): 155–157",
    "dalilArab": "وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ ۝ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    "dalilTerjemah": "Dan sungguh akan Kami berikan cobaan kepadamu, dengan sedikit ketakutan, kelaparan, kekurangan harta, jiwa dan buah-buahan. Dan berikanlah berita gembira kepada orang-orang yang sabar. (yaitu) orang-orang yang apabila ditimpa musibah, mereka mengucapkan, 'Innaa lillaahi wa innaa ilaihi raaji'uun'.",
    "stimulus": "Setelah banjir melanda, banyak warga trauma dan putus asa. OSIS kelas XII ingin membuat program 'Sekolah Tangguh' untuk menumbuhkan berpikir positif dan sabar di kalangan siswa terdampak.",
    "pertanyaan": "Sebagai ketua OSIS, rancangan program yang paling sesuai dengan QS Al-Baqarah (2): 155–157 adalah…",
    "opsi": [
      "Program mengajak siswa mengingkari Tuhan karena ujian tidak adil.",
      "Program pendampingan psikologis, pembiasaan istirja' dan doa, gotong royong pemulihan, serta motivasi optimis bahwa ujian menguatkan mental dan keyakinan, disertai ikhtiar mitigasi bencana.",
      "Program hanya berupa lomba kemewahan tanpa nilai sabar.",
      "Program mengajak siswa mengurung diri dan tidak belajar.",
      "Program menyalahkan pemerintah dan menyebarkan hoaks agar warga marah."
    ],
    "kunciIdx": 1,
    "pembahasan": "Berpikir positif dan sabar meliputi istirja', doa, gotong royong, optimisme, dan ikhtiar nyata. Ujian bertujuan membentuk umat yang kuat mentalnya, kokoh keyakinannya, dan tabah. Program harus mengamalkan optimis dan sabar dalam kehidupan sehari-hari."
  },
  {
    "nomor": 20,
    "bab": 2,
    "babJudul": "Berpikir Positif dan Sabar dalam Menghadapi Ujian dan Cobaan",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Ali Imran (3): 186",
    "dalilArab": "لَتُبْلَوُنَّ فِي أَمْوَالِكُمْ وَأَنفُسِكُمْ ۖ وَلَتَسْمَعُنَّ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ مِن قَبْلِكُمْ وَمِنَ الَّذِينَ أَشْرَكُوا أَذًى كَثِيرًا ۚ وَإِن تَصْبِرُوا وَتَتَّقُوا فَإِنَّ ذَٰلِكَ مِنْ عَزْمِ الْأُمُورِ",
    "dalilTerjemah": "Kamu sungguh-sungguh akan diuji terhadap hartamu dan dirimu. Dan (juga) kamu sungguh-sungguh akan mendengar dari orang-orang yang diberi Kitab sebelum kamu dan dari orang-orang yang mempersekutukan Allah, gangguan yang banyak yang menyakitkan hati. Jika kamu bersabar dan bertakwa, maka sesungguhnya yang demikian itu termasuk urusan yang patut diutamakan.",
    "stimulus": "Seorang siswa menderita penyakit kronis yang mengharuskannya bolak-balik rumah sakit. Ia tetap salat, tetap belajar dari tempat tidur, dan menguatkan teman yang juga sakit. Ia berkata, 'Allah tidak akan menguji melebihi kemampuan.'",
    "pertanyaan": "Evaluasi sikap siswa tersebut berdasarkan QS Ali Imran (3): 186 dan hadis tentang ujian!",
    "opsi": [
      "Sikap tersebut membuktikan penyakit adalah azab yang tidak bisa dihindari.",
      "Sikap tersebut salah karena orang sakit tidak wajib salat dan belajar.",
      "Sikap tersebut tidak terkait dengan ayat karena ayat hanya tentang ejekan.",
      "Sikap tersebut adalah sabar dan takwa yang patut diutamakan: meyakini ujian sesuai kemampuan, tetap beramal dan menguatkan sesama, sehingga ujian menjadi kebaikan dan peninggi derajat.",
      "Sikap tersebut adalah putus asa karena tidak mengeluh."
    ],
    "kunciIdx": 3,
    "pembahasan": "Ujian pada diri bisa berupa sakit fisik. Sabar dan takwa adalah 'azm al-umūr. Mukmin yang sabar menjadikan musibah sebagai kebaikan (HR Muslim). Keyakinan bahwa Allah tidak menguji melebihi kemampuan adalah inti berpikir positif."
  },
  {
    "nomor": 21,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C4 Analisis",
    "dalilSumber": "QS Ar-Rum (30): 41–42",
    "dalilArab": "ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ لِيُذِيقَهُم بَعْضَ الَّذِي عَمِلُوا لَعَلَّهُمْ يَرْجِعُونَ ۝ قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِن قَبْلُ ۚ كَانَ أَكْثَرَهُم مُّشْرِكِينَ",
    "dalilTerjemah": "Telah tampak kerusakan di darat dan di laut disebabkan karena perbuatan tangan manusia; Allah menghendaki agar mereka merasakan sebagian dari (akibat) perbuatan mereka, agar mereka kembali (ke jalan yang benar). Katakanlah: 'Berjalanlah di muka bumi dan perhatikanlah bagaimana kesudahan orang-orang yang sebelum kita. Kebanyakan mereka adalah orang-orang yang mempersekutukan (Allah).'",
    "stimulus": "Sungai di sebuah kota tercemar limbah pabrik, ikan mati, dan banjir sering terjadi karena sampah menumpuk. Warga mengeluh air keruh dan penyakit kulit, tetapi pabrik tetap membuang limbah dan warga tetap membuang sampah ke sungai.",
    "pertanyaan": "Analisislah kerusakan tersebut berdasarkan QS Ar-Rum (30): 41–42!",
    "opsi": [
      "Kerusakan tersebut harus dibiarkan karena merupakan sunnatullah yang tidak bisa diubah.",
      "Kerusakan tersebut murni takdir tanpa keterlibatan manusia.",
      "Kerusakan (fasād) di darat dan laut disebabkan perbuatan tangan manusia (bimā kasabat aydī al-nās); Allah menimpakan sebagian akibat agar manusia kembali ke jalan benar.",
      "Ayat tersebut tidak berkaitan dengan lingkungan karena hanya tentang kemusyrikan.",
      "Kerusakan tersebut adalah azab bagi orang yang tidak bersalah saja."
    ],
    "kunciIdx": 2,
    "pembahasan": "QS Ar-Rum 41 menegaskan fasād di darat dan laut adalah akibat perbuatan manusia. Tujuan peringatan adalah agar manusia kembali (yarji'ūn). Kerusakan alam adalah cermin kerusakan moral (kemusyrikan dan maksiat)."
  },
  {
    "nomor": 22,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C6 Mencipta",
    "dalilSumber": "QS Ar-Rum (30): 41",
    "dalilArab": "ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ لِيُذِيقَهُم بَعْضَ الَّذِي عَمِلُوا لَعَلَّهُمْ يَرْجِعُونَ",
    "dalilTerjemah": "Telah tampak kerusakan di darat dan di laut disebabkan karena perbuatan tangan manusia; Allah menghendaki agar mereka merasakan sebagian dari (akibat) perbuatan mereka, agar mereka kembali (ke jalan yang benar).",
    "stimulus": "Kelas XII ingin membuat proyek 'Kembali Hijau' untuk memulihkan sungai tercemar: menanam pohon, mengolah sampah, dan mengedukasi warga agar berhenti membuang limbah.",
    "pertanyaan": "Rancangan proyek yang paling sesuai dengan QS Ar-Rum (30): 41 adalah…",
    "opsi": [
      "Proyek membiarkan sungai tercemar dan hanya mengeluh di media sosial.",
      "Proyek menyalahkan sungai karena banjir tanpa memperbaiki perilaku.",
      "Proyek mengadakan pesta mewah di tepi sungai tercemar.",
      "Proyek menebang pohon untuk membangun fasilitas mewah.",
      "Proyek taubat ekologis: menghentikan perbuatan merusak (limbah dan sampah), memulihkan alam (reboisasi dan bersih sungai), dan mengajak warga kembali ke perilaku bertanggung jawab agar fasād tidak berlanjut."
    ],
    "kunciIdx": 4,
    "pembahasan": "Ayat mengajak manusia kembali (yarji'ūn) setelah merasakan akibat perbuatan mereka. Taubat ekologis meliputi berhenti merusak, memulihkan, dan mengedukasi. Ini adalah pengamalan peduli lingkungan."
  },
  {
    "nomor": 23,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-A'raf (7): 56–58",
    "dalilArab": "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا وَادْعُوهُ خَوْفًا وَطَمَعًا ۚ إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ ۝ وَهُوَ الَّذِي يُرْسِلُ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ ۖ حَتَّىٰ إِذَا أَقَلَّتْ سَحَابًا ثِقَالًا سُقْنَاهُ لِبَلَدٍ مَّيِّتٍ فَأَحْيَيْنَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا ۚ كَذَٰلِكَ تُخْرَجُونَ ۝ وَالْبَلَدُ الطَّيِّبُ يَخْرُجُ نَبَاتُهُ بِإِذْنِ رَبِّهِ ۖ وَالَّذِي خَبُثَ لَا يُخْرِجُ إِلَّا نَكِدًا ۚ كَذَٰلِكَ نُصَرِّفُ الْآيَاتِ لِقَوْمٍ يَشْكُرُونَ",
    "dalilTerjemah": "Dan janganlah kamu membuat kerusakan di muka bumi, sesudah (Allah) memperbaikinya dan berdoalah kepada-Nya dengan rasa takut (tidak akan diterima) dan harapan (akan dikabulkan). Sesungguhnya rahmat Allah amat dekat kepada orang-orang yang berbuat baik. Dan Dialah yang meniupkan angin sebagai pembawa berita gembira sebelum kedatangan rahmat-Nya (hujan), hingga apabila angin itu telah membawa awan mendung, Kami halau awan itu ke suatu daerah yang tandus, lalu Kami turunkanlah hujan di daerah itu, maka Kami hidupkanlah dengan hujan itu bumi sesudah matinya; demikianlah kamu dibangkitkan. Dan tanah yang baik, tanaman-tanamannya keluar dengan izin Tuhannya; dan tanah yang tidak subur, tanaman-tanamannya hanya keluar dalam keadaan yang tidak subur. Demikianlah Kami mengemukakan tanda-tanda kebesaran Kami kepada orang-orang yang bersyukur.",
    "stimulus": "Sebuah perusahaan melakukan illegal logging (penebangan liar) di hutan, membakar lahan, dan menggunakan pupuk kimia berlebihan. Akibatnya tanah menjadi tandus, air keruh, dan hasil panen menurun. Perusahaan berdalih 'demi keuntungan dan lapangan kerja'.",
    "pertanyaan": "Analisislah perbuatan perusahaan tersebut berdasarkan QS Al-A'raf (7): 56–58!",
    "opsi": [
      "Perbuatan tersebut adalah fasād (kerusakan) yang dilarang setelah Allah memperbaikinya; tanah yang dirusak (khabuts) hanya menghasilkan tanaman tidak subur (nakid), sesuai sunnatullah dalam ayat.",
      "Perbuatan tersebut dibenarkan karena keuntungan perusahaan adalah rahmat Allah.",
      "Perbuatan tersebut tidak melanggar ayat karena ayat hanya tentang doa.",
      "Perbuatan tersebut termasuk ihsān karena membuka lapangan kerja.",
      "Tanah tandus tidak berkaitan dengan perbuatan manusia."
    ],
    "kunciIdx": 0,
    "pembahasan": "Ayat melarang fasād setelah islāh (perbaikan) Allah. Angin, awan, hujan menghidupkan bumi mati; tanah baik menghasilkan tanaman baik dengan izin Allah, tanah buruk hanya menghasilkan yang tidak subur. Illegal logging, pembakaran, dan pupuk berlebihan adalah fasād."
  },
  {
    "nomor": 24,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-A'raf (7): 57–58",
    "dalilArab": "وَهُوَ الَّذِي يُرْسِلُ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ ۖ حَتَّىٰ إِذَا أَقَلَّتْ سَحَابًا ثِقَالًا سُقْنَاهُ لِبَلَدٍ مَّيِّتٍ فَأَحْيَيْنَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا ۚ كَذَٰلِكَ تُخْرَجُونَ ۝ وَالْبَلَدُ الطَّيِّبُ يَخْرُجُ نَبَاتُهُ بِإِذْنِ رَبِّهِ ۖ وَالَّذِي خَبُثَ لَا يُخْرِجُ إِلَّا نَكِدًا",
    "dalilTerjemah": "Dan Dialah yang meniupkan angin sebagai pembawa berita gembira sebelum kedatangan rahmat-Nya (hujan), hingga apabila angin itu telah membawa awan mendung, Kami halau awan itu ke suatu daerah yang tandus, lalu Kami turunkanlah hujan di daerah itu, maka Kami hidupkanlah dengan hujan itu bumi sesudah matinya; demikianlah kamu dibangkitkan. Dan tanah yang baik, tanaman-tanamannya keluar dengan izin Tuhannya; dan tanah yang tidak subur, tanaman-tanamannya hanya keluar dalam keadaan yang tidak subur.",
    "stimulus": "Dua lahan pertanian: Lahan A dikelola dengan kompos, rotasi tanaman, dan menjaga mata air; hasilnya subur dan melimpah. Lahan B dipaksa dengan pupuk kimia berlebihan dan dibakar; hasilnya kerdil dan tanah mengeras.",
    "pertanyaan": "Analisislah perbedaan kedua lahan tersebut berdasarkan QS Al-A'raf (7): 57–58!",
    "opsi": [
      "Lahan A adalah balad tayyib yang menghasilkan tanaman baik dengan izin Allah; Lahan B adalah balad khabuts yang hanya menghasilkan tanaman tidak subur karena dirusak manusia.",
      "Lahan A subur karena kebetulan, bukan karena izin Allah.",
      "Ayat tersebut tidak berkaitan dengan pertanian.",
      "Lahan B lebih baik karena pupuk kimia selalu menyuburkan.",
      "Keduanya sama karena kesuburan tidak bergantung pada pengelolaan."
    ],
    "kunciIdx": 0,
    "pembahasan": "Ayat membedakan tanah baik (tayyib) dan tanah buruk (khabuts). Pengelolaan yang menjaga keseimbangan adalah ihsān; perusakan adalah fasād. Syukur kepada Allah diwujudkan dengan menjaga amanah bumi."
  },
  {
    "nomor": 25,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Shad (38): 27",
    "dalilArab": "وَمَا خَلَقْنَا السَّمَاءَ وَالْأَرْضَ وَمَا بَيْنَهُمَا بَاطِلًا ۚ ذَٰلِكَ ظَنُّ الَّذِينَ كَفَرُوا ۖ فَوَيْلٌ لِّلَّذِينَ كَفَرُوا مِنَ النَّارِ",
    "dalilTerjemah": "Dan Kami tidak menciptakan langit dan bumi dan apa yang ada di antara keduanya tanpa hikmah. Yang demikian itu adalah anggapan orang-orang kafir, maka kecelakaanlah bagi orang-orang kafir itu karena api neraka.",
    "stimulus": "Sebagian orang menganggap alam hanya untuk dieksploitasi sepuasnya: menambang tanpa reklamasi, membuang limbah tanpa olah, dan menganggap kerusakan alam tidak ada hubungannya dengan Tuhan. Mereka menganggap alam diciptakan sia-sia.",
    "pertanyaan": "Evaluasi anggapan tersebut berdasarkan QS Shad (38): 27!",
    "opsi": [
      "Anggapan tersebut adalah iman yang sempurna.",
      "Ayat tersebut tidak berkaitan dengan eksploitasi alam.",
      "Anggapan tersebut benar karena alam memang diciptakan tanpa hikmah.",
      "Anggapan tersebut benar karena alam boleh dieksploitasi tanpa batas.",
      "Anggapan tersebut adalah zann al-ladzīna kafarū (prasangka orang kafir) yang keliru; alam diciptakan dengan hikmah (haqq, bukan bātil), sehingga eksploitasi merusak adalah pengingkaran terhadap hikmah penciptaan dan berakibat kecelakaan."
    ],
    "kunciIdx": 4,
    "pembahasan": "QS Shad 27 menegaskan penciptaan langit, bumi, dan isinya adalah dengan hikmah, bukan bātil (sia-sia). Menganggap alam sia-sia adalah prasangka orang kafir. Konsekuensinya adalah wail (kecelakaan). Menjaga alam adalah pengakuan hikmah."
  },
  {
    "nomor": 26,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Furqan (25): 48–49",
    "dalilArab": "وَهُوَ الَّذِي أَرْسَلَ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ ۚ وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا ۝ لِّنُحْيِيَ بِهِ بَلْدَةً مَّيْتًا وَنُسْقِيَهُ مِمَّا خَلَقْنَا أَنْعَامًا وَأَنَاسِيَّ كَثِيرًا",
    "dalilTerjemah": "Dan Dialah yang meniupkan angin sebagai pembawa berita gembira sebelum kedatangan rahmat-Nya (hujan) dan Kami turunkan dari langit air yang menyucikan, agar Kami menghidupkan dengan air itu negeri (tanah) yang mati, dan agar Kami memberi minum dengan air itu sebagian besar dari makhluk Kami, binatang-binatang ternak dan manusia.",
    "stimulus": "Sebuah kota mengalami krisis air bersih karena hutan gundul dan sungai tercemar. Warga harus mengantre air, sementara di daerah lain air terbuang sia-sia untuk mencuci kendaraan mewah dan menyiram halaman berlebihan.",
    "pertanyaan": "Analisislah krisis air tersebut berdasarkan QS Al-Furqan (25): 48–49 tentang ciptaan Allah untuk manusia!",
    "opsi": [
      "Krisis air hanya dialami orang miskin, sehingga orang kaya bebas memboroskan.",
      "Air adalah rahmat Allah (mā'an tahūrā) untuk menghidupkan bumi mati dan memberi minum manusia dan ternak; krisis terjadi karena manusia merusak siklus air (gundul, tercemar) dan memboroskan air, sehingga harus dijaga dan dimanfaatkan dengan bijak.",
      "Ayat tersebut tidak berkaitan dengan air bersih.",
      "Air boleh diboroskan karena jumlahnya tidak terbatas.",
      "Krisis air adalah takdir yang tidak berkaitan dengan perilaku manusia."
    ],
    "kunciIdx": 1,
    "pembahasan": "QS Al-Furqan 48–49 menyebut air yang menyucikan sebagai rahmat untuk menghidupkan bumi dan memberi minum manusia dan ternak. Menjaga hutan dan sungai serta hemat air adalah syukur atas nikmat."
  },
  {
    "nomor": 27,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Baqarah (2): 204–206",
    "dalilArab": "وَمِنَ النَّاسِ مَن يُعْجِبُكَ قَوْلُهُ فِي الْحَيَاةِ الدُّنْيَا وَيُشْهِدُ اللَّهَ عَلَىٰ مَا فِي قَلْبِهِ وَهُوَ أَلَدُّ الْخِصَامِ ۝ وَإِذَا تَوَلَّىٰ سَعَىٰ فِي الْأَرْضِ لِيُفْسِدَ فِيهَا وَيُهْلِكَ الْحَرْثَ وَالنَّسْلَ ۗ وَاللَّهُ لَا يُحِبُّ الْفَسَادَ",
    "dalilTerjemah": "Dan di antara manusia ada orang yang ucapannya tentang kehidupan dunia menarik hatimu (pendengarnya), dan ia mempersaksikan Allah atas apa yang ada di hatinya, padahal ia adalah penentang yang paling keras. Dan apabila ia berpaling (dari engkau) atau berkuasa, maka ia berusaha untuk membuat kerusakan di muka bumi dan merusak tanam-tanaman dan binatang ternak, dan Allah tidak menyukai kerusakan.",
    "stimulus": "Seorang pejabat pandai berbicara tentang cinta lingkungan di panggung, tetapi di belakang layar ia menyetujui penebangan hutan dan pembakaran lahan untuk proyeknya. Ia juga mempersaksikan Allah atas kebohongannya.",
    "pertanyaan": "Analisislah perilaku pejabat tersebut berdasarkan QS Al-Baqarah (2): 204–206 tentang perilaku munafik terhadap kelestarian alam!",
    "opsi": [
      "Perilaku tersebut dibenarkan karena proyek lebih penting daripada lingkungan.",
      "Ayat tersebut tidak berkaitan dengan pejabat.",
      "Merusak tanaman tidak termasuk fasād.",
      "Pejabat tersebut adalah aladd al-khisām (penentang keras) yang lisannya manis tetapi hatinya dusta; ia sa'ā fī al-ard li yufsida fīhā wa yuhlika al-harts wa al-nasl (berusaha merusak bumi, tanaman, dan keturunan), dan Allah tidak menyukai fasād.",
      "Pejabat tersebut adalah mukmin sejati karena pandai berbicara."
    ],
    "kunciIdx": 3,
    "pembahasan": "Ayat menggambarkan munafik: ucapan menarik tetapi hati dusta, dan jika berkuasa ia merusak bumi, tanaman (harts), dan keturunan (nasl). Allah tidak menyukai fasād. Merusak tanaman bisa berupa illegal logging, pupuk berlebihan, dan pembakaran hutan."
  },
  {
    "nomor": 28,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C4 Analisis",
    "dalilSumber": "HR Bukhari dan Muslim dari Anas bin Malik",
    "dalilArab": "مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا أَوْ يَزْرَعُ زَرْعًا فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ أَوْ بَهِيمَةٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ",
    "dalilTerjemah": "Tidaklah seorang muslim menanam suatu tanaman atau menabur benih, lalu ada burung, manusia, atau binatang yang memakannya, kecuali itu menjadi sedekah baginya. (HR Bukhari dan Muslim)",
    "stimulus": "Seorang siswa menanam pohon di halaman sekolah dan merawatnya hingga berbuah. Buahnya dimakan burung, siswa, dan kucing. Ia juga mengajak teman-temannya menanam. Ia bertanya: 'Apakah menanam pohon bisa menjadi ibadah?'",
    "pertanyaan": "Analisislah kegiatan siswa tersebut berdasarkan HR Bukhari dan Muslim tentang menanam tanaman!",
    "opsi": [
      "Kegiatan tersebut tidak berpahala karena menanam bukan ibadah.",
      "Kegiatan tersebut hanya berpahala jika buahnya dimakan manusia saja.",
      "Kegiatan tersebut adalah fasād karena menanam pohon merusak tanah.",
      "Kegiatan tersebut adalah sedekah yang berpahala: setiap yang dimakan burung, manusia, atau binatang dari tanaman yang ditanam muslim menjadi sadakah; pohon juga menghasilkan oksigen, buah, dan menjaga air tanah.",
      "Hadis tersebut tidak berlaku untuk siswa."
    ],
    "kunciIdx": 3,
    "pembahasan": "Hadis menegaskan menanam dan menabur benih yang hasilnya dimakan makhluk adalah sedekah. Pohon dewasa menghasilkan oksigen, buah, dan akar penampung air. Melestarikan lingkungan adalah ibadah."
  },
  {
    "nomor": 29,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Ar-Rum (30): 41",
    "dalilArab": "ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ لِيُذِيقَهُم بَعْضَ الَّذِي عَمِلُوا لَعَلَّهُمْ يَرْجِعُونَ",
    "dalilTerjemah": "Telah tampak kerusakan di darat dan di laut disebabkan karena perbuatan tangan manusia; Allah menghendaki agar mereka merasakan sebagian dari (akibat) perbuatan mereka, agar mereka kembali (ke jalan yang benar).",
    "stimulus": "Banjir dan longsor di pegunungan semakin sering. Sebagian orang menyalahkan hujan dan takdir, sebagian menyalahkan penebangan liar dan sampah, sebagian lagi menyalahkan orang yang tidak bersalah. Pemerintah mengadakan musyawarah untuk mencari akar masalah.",
    "pertanyaan": "Evaluasi berbagai pandangan tersebut berdasarkan QS Ar-Rum (30): 41 dan materi kelestarian lingkungan!",
    "opsi": [
      "Pandangan yang paling tepat adalah menyalahkan orang tidak bersalah agar musibah ada yang disalahkan.",
      "Pandangan yang paling tepat adalah menyalahkan hujan karena hujan adalah penyebab banjir.",
      "Semua pandangan sama-sama benar.",
      "Pandangan yang paling tepat adalah menyalahkan perbuatan manusia (penebangan liar, sampah, pembakaran) sebagai penyebab fasād, karena ayat menegaskan fasād disebabkan tangan manusia; menyalahkan hujan/takdir atau orang tidak bersalah adalah keliru.",
      "Banjir dan longsor tidak berkaitan dengan perilaku manusia."
    ],
    "kunciIdx": 3,
    "pembahasan": "Penyebab banjir dan longsor adalah fasād manusia: gundulnya hutan, sampah, dan pembakaran. Ayat mengajak manusia kembali (yarji'ūn) dengan memperbaiki perilaku. Menyalahkan takdir atau orang tidak bersalah adalah penghindaran tanggung jawab."
  },
  {
    "nomor": 30,
    "bab": 3,
    "babJudul": "Menjaga Kelestarian Lingkungan",
    "level": "C6 Mencipta",
    "dalilSumber": "QS Al-A'raf (7): 56",
    "dalilArab": "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا وَادْعُوهُ خَوْفًا وَطَمَعًا ۚ إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ",
    "dalilTerjemah": "Dan janganlah kamu membuat kerusakan di muka bumi, sesudah (Allah) memperbaikinya dan berdoalah kepada-Nya dengan rasa takut (tidak akan diterima) dan harapan (akan dikabulkan). Sesungguhnya rahmat Allah amat dekat kepada orang-orang yang berbuat baik.",
    "stimulus": "Sebagai siswa kelas XII, kamu ingin mengamalkan peduli lingkungan di sekolah dan masyarakat, tetapi waktu dan dana terbatas.",
    "pertanyaan": "Rancangan tindakan yang paling kreatif dan sesuai dengan QS Al-A'raf (7): 56 adalah…",
    "opsi": [
      "Membuat bank sampah, gerakan tanam dan rawat pohon, hemat air dan listrik, serta kampanye anti-fasād di media sosial, disertai doa khawfan wa tama'an agar rahmat Allah dekat kepada muhsinīn.",
      "Membakar sampah di halaman sekolah.",
      "Mengabaikan lingkungan karena fokus hanya pada ujian.",
      "Hanya mengeluh tentang kerusakan tanpa tindakan.",
      "Membuang sampah sembarangan dan menebang pohon untuk kesenangan."
    ],
    "kunciIdx": 0,
    "pembahasan": "Larangan fasād setelah islāh menuntut tindakan nyata: bank sampah, tanam pohon, hemat sumber daya, dan kampanye. Doa dengan takut dan harap disertai ihsān mendekatkan rahmat Allah. Ini adalah pengamalan peduli lingkungan."
  },
  {
    "nomor": 31,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Alaq (96): 1–5",
    "dalilArab": "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
    "dalilTerjemah": "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan. Dia telah menciptakan manusia dari segumpal darah. Bacalah, dan Tuhanmulah Yang Mahamulia. Yang mengajar (manusia) dengan pena. Dia mengajarkan manusia apa yang tidak diketahuinya.",
    "stimulus": "Dua siswa: Andi menghabiskan waktu dengan membaca buku, jurnal, dan Al-Qur'an; ia menemukan banyak ilmu dan semakin dekat kepada Allah. Budi menghabiskan waktu dengan gim dan konten tanpa manfaat; ia semakin jauh dari ilmu dan akhlak.",
    "pertanyaan": "Analisislah perbedaan kedua siswa tersebut berdasarkan QS Al-Alaq (96): 1–5 tentang perintah membaca!",
    "opsi": [
      "Andi salah karena membaca buku selain Al-Qur'an dilarang.",
      "Iqra' hanya berarti membaca Al-Qur'an, tidak perlu membaca ilmu lain.",
      "Perintah iqra' tidak berkaitan dengan pengembangan ilmu.",
      "Keduanya sama-sama mengamalkan iqra' karena sama-sama melihat layar.",
      "Andi mengamalkan iqra' (bacalah) yang membuka pintu pengetahuan dan menjadikan manusia khalifah; Budi menyia-nyiakan perintah iqra' yang mencakup ayat qur'āniyah dan kauniyah, sehingga jauh dari ilmu."
    ],
    "kunciIdx": 4,
    "pembahasan": "QS Al-Alaq 1–5 adalah wahyu pertama: perintah iqra' dengan nama Tuhan, Tuhan Mahamulia yang mengajar dengan qalam dan mengajarkan apa yang tidak diketahui. Iqra' mencakup ayat tersurat (qur'āniyah) dan tersirat (kauniyah). Budaya membaca menyingkap ilmu dan menempatkan manusia sebagai khalifah."
  },
  {
    "nomor": 32,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Alaq (96): 4–5",
    "dalilArab": "الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
    "dalilTerjemah": "Yang mengajar (manusia) dengan pena. Dia mengajarkan manusia apa yang tidak diketahuinya.",
    "stimulus": "Seorang ilmuwan muslim menulis buku, meneliti, dan mengembangkan aplikasi edukasi yang bermanfaat bagi ribuan siswa. Ia juga mengajarkan ilmunya tanpa pamrih. Sebaliknya, ada orang berilmu yang menyembunyikan ilmunya dan tidak mau mengajarkan.",
    "pertanyaan": "Analisislah kedua orang tersebut berdasarkan QS Al-Alaq (96): 4–5 tentang qalam dan pengajaran!",
    "opsi": [
      "Keduanya sama-sama mengamalkan ayat karena sama-sama berilmu.",
      "Qalam hanya berarti pena fisik, tidak berkaitan dengan menulis dan meneliti.",
      "Menyembunyikan ilmu adalah sikap yang dianjurkan.",
      "Ayat tersebut tidak berkaitan dengan teknologi.",
      "Ilmuwan tersebut mengamalkan 'allama bi al-qalam (mengajar dengan pena/tulis) dan mengajarkan apa yang tidak diketahui; orang kedua menyia-nyiakan amanah ilmu karena ilmu harus diajarkan dan dikembangkan."
    ],
    "kunciIdx": 4,
    "pembahasan": "Qalam adalah simbol ilmu, tulisan, dan pengajaran. Allah mengajarkan manusia apa yang tidak diketahuinya. Ilmuwan muslim yang menulis, meneliti, dan mengajarkan adalah pewaris Nabi dalam menyebarkan ilmu. Menyembunyikan ilmu adalah khianat."
  },
  {
    "nomor": 33,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C4 Analisis",
    "dalilSumber": "QS Yunus (10): 101",
    "dalilArab": "قُلِ انظُرُوا مَاذَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۚ وَمَا تُغْنِي الْآيَاتُ وَالنُّذُرُ عَن قَوْمٍ لَّا يُؤْمِنُونَ",
    "dalilTerjemah": "Katakanlah: 'Perhatikanlah apa yang ada di langit dan di bumi!'. Tidaklah bermanfaat tanda-tanda (kebesaran Allah) dan rasul-rasul yang memberi peringatan bagi orang-orang yang tidak beriman.",
    "stimulus": "Seorang astronom muslim mengamati planet, bintang, dan orbitnya; ia semakin yakin akan kebesaran Allah dan menemukan ilmu astronomi. Seorang lain melihat langit yang sama tetapi tidak pernah merenungkan dan tetap mengingkari Allah.",
    "pertanyaan": "Analisislah perbedaan kedua orang tersebut berdasarkan QS Yunus (10): 101 tentang perintah memperhatikan gejala alam!",
    "opsi": [
      "Astronom tersebut mengamalkan unzurū (perhatikanlah) apa yang ada di langit dan bumi sehingga menemukan ayat kauniyah dan beriman; orang kedua mengabaikan perintah tersebut sehingga ayat tidak bermanfaat baginya.",
      "Keduanya sama-sama beriman karena sama-sama melihat langit.",
      "Astronom tersebut salah karena mengamati alam adalah syirik.",
      "Mengamati alam tidak berkaitan dengan ilmu pengetahuan.",
      "Perintah unzurū hanya untuk orang yang tidak beriman."
    ],
    "kunciIdx": 0,
    "pembahasan": "QS Yunus 101 memerintahkan memperhatikan (unzuru) apa yang ada di langit dan bumi. Dalam diri manusia ada tarikan iman dan kufur; Allah menggelar kekuasaan-Nya di alam dan mengutus rasul. Yang hatinya tertutup tidak mendapat manfaat dari ayat dan rasul."
  },
  {
    "nomor": 34,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Baqarah (2): 164",
    "dalilArab": "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَالْفُلْكِ الَّتِي تَجْرِي فِي الْبَحْرِ بِمَا يَنفَعُ النَّاسَ وَمَا أَنزَلَ اللَّهُ مِنَ السَّمَاءِ مِن مَّاءٍ فَأَحْيَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا وَبَثَّ فِيهَا مِن كُلِّ دَابَّةٍ وَتَصْرِيفِ الرِّيَاحِ وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاءِ وَالْأَرْضِ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ",
    "dalilTerjemah": "Sesungguhnya pada penciptaan langit dan bumi, pergantian malam dan siang, kapal yang berlayar di laut dengan (muatan) yang bermanfaat bagi manusia, apa yang diturunkan Allah dari langit berupa air, lalu dengan itu dihidupkan-Nya bumi setelah mati (kering), dan Dia tebarkan di dalamnya bermacam-macam binatang, dan perkisaran angin dan awan yang dikendalikan antara langit dan bumi. (Semua itu) sungguh, merupakan tanda-tanda (kebesaran Allah) bagi orang-orang yang mengerti.",
    "stimulus": "Seorang insinyur perkapalan mempelajari arus laut, angin, dan desain kapal; ia mengembangkan kapal yang aman dan bermanfaat. Seorang lain menganggap kapal hanya kebetulan tanpa hikmah dan tidak mau mempelajari ilmu di baliknya.",
    "pertanyaan": "Analisislah sikap kedua orang tersebut berdasarkan QS Al-Baqarah (2): 164 tentang fenomena alam sebagai sumber ilmu!",
    "opsi": [
      "Insinyur tersebut menemukan ayat kauniyah (al-fulk, angin, awan) sebagai inspirasi oseanografi dan perkapalan bagi orang yang mengerti ('aqilūn); orang kedua mengabaikan isyarat ilmu tersebut.",
      "Ayat tersebut tidak berkaitan dengan ilmu perkapalan.",
      "Insinyur tersebut salah karena kapal adalah ciptaan manusia, bukan Allah.",
      "Mempelajari kapal adalah bid'ah yang dilarang.",
      "Keduanya sama-sama mengerti karena sama-sama melihat kapal."
    ],
    "kunciIdx": 0,
    "pembahasan": "QS Al-Baqarah 164 menyebut penciptaan langit-bumi, pergantian malam-siang, kapal berlayar, air hujan, binatang, angin, dan awan sebagai āyāt bagi yang mengerti. Gejala ini menjadi dasar astronomi, oseanografi, perkapalan, hidrologi, dan biologi. Hanya yang berpikir dan merenung yang menemukan isyaratnya."
  },
  {
    "nomor": 35,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Baqarah (2): 164",
    "dalilArab": "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَالْفُلْكِ الَّتِي تَجْرِي فِي الْبَحْرِ بِمَا يَنفَعُ النَّاسَ وَمَا أَنزَلَ اللَّهُ مِنَ السَّمَاءِ مِن مَّاءٍ فَأَحْيَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا وَبَثَّ فِيهَا مِن كُلِّ دَابَّةٍ وَتَصْرِيفِ الرِّيَاحِ وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاءِ وَالْأَرْضِ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ",
    "dalilTerjemah": "Sesungguhnya pada penciptaan langit dan bumi, pergantian malam dan siang, kapal yang berlayar di laut dengan (muatan) yang bermanfaat bagi manusia, apa yang diturunkan Allah dari langit berupa air, lalu dengan itu dihidupkan-Nya bumi setelah mati (kering), dan Dia tebarkan di dalamnya bermacam-macam binatang, dan perkisaran angin dan awan yang dikendalikan antara langit dan bumi. (Semua itu) sungguh, merupakan tanda-tanda (kebesaran Allah) bagi orang-orang yang mengerti.",
    "stimulus": "Seorang peneliti hidrologi mempelajari siklus air: penguapan, awan, hujan, dan aliran sungai; ia mengembangkan sistem pengelolaan air yang mencegah banjir dan kekeringan. Ia juga semakin yakin akan kemahakuasaan Allah.",
    "pertanyaan": "Analisislah kegiatan peneliti tersebut berdasarkan QS Al-Baqarah (2): 164!",
    "opsi": [
      "Peneliti tersebut menggali ayat kauniyah tentang air, awan, dan angin sebagai dasar hidrologi dan kebumian, sehingga menemukan ilmu sekaligus keyakinan akan kemahakuasaan Allah.",
      "Peneliti tersebut salah karena air adalah ciptaan manusia.",
      "Ayat tersebut tidak berkaitan dengan siklus air.",
      "Peneliti tersebut menyimpang karena mempelajari siklus air adalah syirik.",
      "Kegiatan tersebut tidak bermanfaat bagi manusia."
    ],
    "kunciIdx": 0,
    "pembahasan": "Siklus air, awan yang dikendalikan, dan penghidupan bumi setelah mati adalah ayat kauniyah yang menjadi inspirasi hidrologi. Orang yang berpikir menemukan isyarat ilmu dan keyakinan. Ilmu dan iman saling menguatkan."
  },
  {
    "nomor": 36,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Hujurat (49): 6",
    "dalilArab": "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَن تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُم نَادِمِينَ",
    "dalilTerjemah": "Wahai orang-orang yang beriman! jika seseorang yang fasik datang kepadamu membawa suatu berita, maka telitilah kebenarannya, agar kamu tidak mencelakakan suatu kaum karena kebodohan (kecerobohan), yang akhirnya kamu menyesali perbuatanmu itu.",
    "stimulus": "Beredar video hoaks di grup WhatsApp yang menuduh sebuah kelompok melakukan kejahatan. Seorang siswa langsung menyebarkan dan menghasut, tanpa memeriksa sumbernya. Akibatnya, terjadi keributan dan nama baik kelompok tersebut tercemar.",
    "pertanyaan": "Analisislah perilaku siswa tersebut berdasarkan QS Al-Hujurat (49): 6 tentang sikap selektif terhadap informasi!",
    "opsi": [
      "Perilaku tersebut tidak melanggar ayat karena ayat hanya untuk orang fasik.",
      "Perilaku tersebut dibenarkan karena menyebarkan berita adalah dakwah.",
      "Perilaku tersebut termasuk qatr karena terlalu hemat memeriksa.",
      "Perilaku tersebut melanggar tabayyun (telitilah kebenarannya): menyebarkan berita dari sumber tidak jelas tanpa cek dan ricek menyebabkan mencelakakan kaum karena jahālah (kecerobohan) dan penyesalan.",
      "Ayat tersebut tidak berkaitan dengan media sosial."
    ],
    "kunciIdx": 3,
    "pembahasan": "QS Al-Hujurat 6 memerintahkan tabayyun terhadap berita dari fasik agar tidak mencelakakan kaum karena jahālah dan menyesal. Dalam tradisi ilmu Islam, pembawa ilmu harus memenuhi kompetensi moral dan intelektual serta sanad yang logis. Ilmu yang salah menyebabkan kecelakaan."
  },
  {
    "nomor": 37,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Al-Hujurat (49): 6",
    "dalilArab": "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَن تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُم نَادِمِينَ",
    "dalilTerjemah": "Wahai orang-orang yang beriman! jika seseorang yang fasik datang kepadamu membawa suatu berita, maka telitilah kebenarannya, agar kamu tidak mencelakakan suatu kaum karena kebodohan (kecerobohan), yang akhirnya kamu menyesali perbuatanmu itu.",
    "stimulus": "Dua siswa menerima informasi kesehatan dari media sosial. Raka langsung percaya dan menyebarkan tanpa memeriksa. Sinta memeriksa sumbernya (jurnal, dokter), membandingkan dengan literatur, lalu menyebarkan dengan hati-hati dan menambahkan rujukan.",
    "pertanyaan": "Evaluasi kedua siswa tersebut berdasarkan QS Al-Hujurat (49): 6!",
    "opsi": [
      "Ayat tersebut tidak mengatur informasi kesehatan.",
      "Sinta lebih sesuai dengan tabayyun: memeriksa kebenaran, menjaga kompetensi moral dan intelektual sumber, serta presisi dalam pengembangan ilmu; Raka melanggar karena menyebarkan tanpa teliti sehingga berisiko mencelakakan.",
      "Sinta salah karena memeriksa informasi adalah prasangka buruk.",
      "Keduanya sama-sama benar karena semua informasi harus disebarkan.",
      "Raka lebih sesuai karena kecepatan menyebar adalah keutamaan."
    ],
    "kunciIdx": 1,
    "pembahasan": "Tabayyun adalah ketelitian dan presisi dalam ilmu pengetahuan dan teknologi. Pembawa ilmu harus memenuhi kompetensi moral dan intelektual serta sanad logis. Menyebarkan tanpa teliti adalah jahālah yang berakibat penyesalan."
  },
  {
    "nomor": 38,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C4 Analisis",
    "dalilSumber": "HR Abu Dawud dari Abu Darda'",
    "dalilArab": "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ وَإِنَّ الْمَلَائِكَةَ لَتَضَعُ أَجْنِحَتَهَا رِضًا لِطَالِبِ الْعِلْمِ وَإِنَّ طَالِبَ الْعِلْمِ يَسْتَغْفِرُ لَهُ مَنْ فِي السَّمَاءِ وَالْأَرْضِ حَتَّى الْحِيتَانِ فِي الْمَاءِ وَإِنَّ فَضْلَ الْعَالِمِ عَلَى الْعَابِدِ كَفَضْلِ الْقَمَرِ عَلَى سَائِرِ الْكَوَاكِبِ إِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ إِنَّ الْأَنْبِيَاءَ لَمْ يُوَرِّثُوا دِينَارًا وَلَا دِرْهَمًا إِنَّمَا وَرَّثُوا الْعِلْمَ فَمَنْ أَخَذَهُ أَخَذَ بِحَظٍّ وَافِرٍ",
    "dalilTerjemah": "Barangsiapa meniti jalan untuk mencari ilmu, Allah akan permudah baginya jalan menuju surga. Para Malaikat akan membentangkan sayapnya karena rida kepada penuntut ilmu. Dan seorang penuntut ilmu akan dimintakan ampunan oleh penghuni langit dan bumi hingga ikan yang ada di air. Sungguh, keutamaan seorang alim dibanding seorang ahli ibadah adalah ibarat bulan purnama atas semua bintang. Sesungguhnya para ulama adalah pewaris para Nabi, dan para Nabi tidak mewariskan dinar maupun dirham, akan tetapi mereka mewariskan ilmu. Barangsiapa mengambilnya, maka ia telah mengambil bagian yang sangat besar. (HR Abu Dawud)",
    "stimulus": "Seorang siswa berjalan kaki jauh ke perpustakaan setiap hari untuk membaca dan berdiskusi, meskipun lelah. Ia tekun, ikhlas karena Allah, dan ilmunya bermanfaat bagi teman-temannya. Temannya malas belajar dan hanya mengejar nilai dengan mencontek.",
    "pertanyaan": "Analisislah ketekunan siswa tersebut berdasarkan HR Abu Dawud tentang keutamaan mencari ilmu!",
    "opsi": [
      "Ketekunan siswa tersebut adalah salaka tarīqan yaltamisu fīhi 'ilman (menempuh jalan mencari ilmu) yang dijanjikan kemudahan jalan ke surga, keridaan malaikat, dan doa penghuni langit-bumi; ilmu yang ikhlas dan bermanfaat adalah warisan Nabi.",
      "Mencari ilmu hanya untuk dunia, bukan untuk surga.",
      "Mencontek lebih utama karena mendapat nilai tinggi.",
      "Hadis tersebut tidak berlaku untuk siswa.",
      "Ketekunan tersebut tidak berpahala karena belajar bukan ibadah."
    ],
    "kunciIdx": 0,
    "pembahasan": "Hadis menegaskan keutamaan pencari ilmu: jalan ke surga dimudahkan, malaikat membentangkan sayap, penghuni langit-bumi dan ikan mendoakan, keutamaan alim atas abid seperti bulan purnama atas bintang, dan ulama adalah pewaris Nabi dengan warisan ilmu (bukan dinar/dirham). Mencari ilmu harus ikhlas karena Allah, bukan duniawi."
  },
  {
    "nomor": 39,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C5 Evaluasi",
    "dalilSumber": "HR Abu Dawud dari Abu Darda'",
    "dalilArab": "إِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ إِنَّ الْأَنْبِيَاءَ لَمْ يُوَرِّثُوا دِينَارًا وَلَا دِرْهَمًا إِنَّمَا وَرَّثُوا الْعِلْمَ فَمَنْ أَخَذَهُ أَخَذَ بِحَظٍّ وَافِرٍ",
    "dalilTerjemah": "Sesungguhnya para ulama adalah pewaris para Nabi, dan para Nabi tidak mewariskan dinar maupun dirham, akan tetapi mereka mewariskan ilmu. Barangsiapa mengambilnya, maka ia telah mengambil bagian yang sangat besar. (HR Abu Dawud)",
    "stimulus": "Seorang ilmuwan muslim mengembangkan teknologi yang bermanfaat bagi peradaban, tetapi ia juga menjaga akhlak, tidak sombong, dan mengajarkan ilmunya. Seorang lain mengembangkan teknologi untuk merusak dan menipu, serta menyembunyikan ilmunya untuk keuntungan pribadi.",
    "pertanyaan": "Evaluasi kedua ilmuwan tersebut berdasarkan HR Abu Dawud tentang ulama sebagai pewaris Nabi!",
    "opsi": [
      "Ilmuwan pertama salah karena mengajarkan ilmu tanpa pamrih.",
      "Ilmuwan pertama adalah pewaris Nabi yang benar: mewariskan ilmu yang bermanfaat bagi peradaban dan pengembangan teknologi dengan akhlak; ilmuwan kedua menyalahi warisan karena ilmu digunakan untuk kerusakan dan disembunyikan.",
      "Teknologi tidak berkaitan dengan warisan Nabi.",
      "Keduanya sama-sama pewaris Nabi karena sama-sama berilmu.",
      "Ilmuwan kedua lebih baik karena menyembunyikan ilmu adalah bijak."
    ],
    "kunciIdx": 1,
    "pembahasan": "Ulama adalah pewaris Nabi dengan warisan ilmu, bukan harta. Ilmu yang bermanfaat bagi peradaban dan diajarkan dengan akhlak adalah warisan yang benar. Ilmu untuk kerusakan dan disembunyikan adalah khianat terhadap warisan."
  },
  {
    "nomor": 40,
    "bab": 4,
    "babJudul": "Mengembangkan Ilmu Pengetahuan dan Teknologi",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Al-Alaq (96): 1–5",
    "dalilArab": "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
    "dalilTerjemah": "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan. Dia telah menciptakan manusia dari segumpal darah. Bacalah, dan Tuhanmulah Yang Mahamulia. Yang mengajar (manusia) dengan pena. Dia mengajarkan manusia apa yang tidak diketahuinya.",
    "stimulus": "Teknologi berkembang pesat: kecerdasan buatan, media sosial, dan gawai. Sebagian pengguna menjadi korban kecanduan, hoaks, dan degradasi akhlak. Sebagian lain memanfaatkannya untuk belajar, berdakwah, dan berkarya. Keduanya mengklaim 'mengikuti perkembangan zaman'.",
    "pertanyaan": "Evaluasi pemanfaatan teknologi tersebut berdasarkan QS Al-Alaq (96): 1–5 dan rangkuman Bab 4!",
    "opsi": [
      "Teknologi harus ditolak total karena bertentangan dengan Islam.",
      "Pemanfaatan yang sesuai adalah yang dimulai dengan iqra' bi ismi rabbik (membaca dengan nama Tuhan), diimbangi penyiapan mental dan penguatan karakter, sehingga teknologi menjadi sarana ilmu dan ibadah, bukan perbudakan.",
      "Iqra' tidak berkaitan dengan teknologi.",
      "Keduanya sama-sama benar karena mengikuti zaman berarti menuruti teknologi.",
      "Teknologi bebas nilai, sehingga tidak perlu karakter."
    ],
    "kunciIdx": 1,
    "pembahasan": "Islam menghargai ilmu; orang berilmu mulia di sisi Allah. Menuntut ilmu adalah fardu 'ain tanpa batas waktu-ruang. Perkembangan IPTEK harus diimbangi penyiapan mental dan karakter agar pengguna tidak menjadi korban. Ulul albab menjaga harmoni akal dan hati: berdzikir, berpikir, dan takut kepada Allah."
  },
  {
    "nomor": 41,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C4 Analisis",
    "dalilSumber": "QS An-Nahl (16): 125",
    "dalilArab": "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ ۚ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِ ۖ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ",
    "dalilTerjemah": "Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pengajaran yang baik, dan berdebatlah dengan mereka dengan cara yang baik. Sesungguhnya Tuhanmu, Dialah yang lebih mengetahui siapa yang sesat dari jalanNya dan Dialah yang lebih mengetahui siapa yang mendapat petunjuk.",
    "stimulus": "Seorang siswa ingin mengajak temannya yang belum salat. Ia memilih pendekatan bijaksana: memahami latar belakang teman, memilih waktu yang tepat, dan menyampaikan dengan lembut tanpa menghakimi.",
    "pertanyaan": "Analisislah pendekatan siswa tersebut berdasarkan QS An-Nahl (16): 125 tentang metode al-hikmah!",
    "opsi": [
      "Pendekatan tersebut adalah dakwah bi al-hikmah (dengan kebijaksanaan): memahami kondisi mad'u, memilih cara tepat, dan menyampaikan dengan etika; Allah yang paling mengetahui siapa sesat dan siapa mendapat petunjuk.",
      "Ayat tersebut tidak mengatur metode dakwah.",
      "Dakwah harus dilakukan dengan kekerasan agar berhasil.",
      "Pendekatan tersebut adalah dakwah yang salah karena terlalu lembut.",
      "Siswa tersebut tidak wajib berdakwah karena bukan ulama."
    ],
    "kunciIdx": 0,
    "pembahasan": "QS An-Nahl 125 memerintahkan dakwah dengan hikmah, mauizah hasanah, dan mujadalah ahsan. Hikmah adalah kebijaksanaan: memahami mad'u, memilih waktu dan cara tepat. Dakwah adalah kewajiban setiap muslim sesuai kemampuan (HR Muslim: ubah dengan tangan, lisan, atau hati)."
  },
  {
    "nomor": 42,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C4 Analisis",
    "dalilSumber": "QS An-Nahl (16): 125",
    "dalilArab": "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ ۚ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِ ۖ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ",
    "dalilTerjemah": "Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pengajaran yang baik, dan berdebatlah dengan mereka dengan cara yang baik. Sesungguhnya Tuhanmu, Dialah yang lebih mengetahui siapa yang sesat dari jalanNya dan Dialah yang lebih mengetahui siapa yang mendapat petunjuk.",
    "stimulus": "Seorang ustazah memberikan nasihat kepada siswa yang berpacaran dengan cara yang baik: mendengarkan cerita siswa, memberikan dalil dengan bahasa mudah, dan mendoakan tanpa memaki. Siswa tersebut tersentuh dan berubah.",
    "pertanyaan": "Analisislah nasihat ustazah tersebut berdasarkan QS An-Nahl (16): 125 tentang metode al-mau'izah al-hasanah!",
    "opsi": [
      "Ayat tersebut tidak mengatur nasihat.",
      "Ustazah tersebut tidak wajib berdakwah.",
      "Nasihat tersebut salah karena dakwah harus memaki agar jera.",
      "Nasihat tersebut tidak perlu dalil, cukup emosi.",
      "Nasihat tersebut adalah mau'izah hasanah (pengajaran/nasihat yang baik): mendengarkan, berbahasa mudah, beretika, dan mendoakan; metode ini efektif untuk menyentuh hati."
    ],
    "kunciIdx": 4,
    "pembahasan": "Mau'izah hasanah adalah nasihat yang baik: mendengarkan, bahasa mudah, etika, dan doa. Dakwah dengan cara baik saling menghargai dan beretika. Penerimaan adalah urusan Allah."
  },
  {
    "nomor": 43,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C4 Analisis",
    "dalilSumber": "QS An-Nahl (16): 125",
    "dalilArab": "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ ۚ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِ ۖ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ",
    "dalilTerjemah": "Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pengajaran yang baik, dan berdebatlah dengan mereka dengan cara yang baik. Sesungguhnya Tuhanmu, Dialah yang lebih mengetahui siapa yang sesat dari jalanNya dan Dialah yang lebih mengetahui siapa yang mendapat petunjuk.",
    "stimulus": "Dua siswa berdebat tentang isu agama di kelas. Fikri berdebat dengan data, adab, dan menghargai lawan. Dimas berdebat dengan emosi, memotong pembicaraan, dan merendahkan lawan. Keduanya mengklaim sedang 'berjihad dengan lisan'.",
    "pertanyaan": "Analisislah perbedaan debat keduanya berdasarkan QS An-Nahl (16): 125 tentang metode al-mujādalah!",
    "opsi": [
      "Dimas lebih benar karena debat harus dengan emosi agar menang.",
      "Debat tidak berkaitan dengan dakwah.",
      "Keduanya sama-sama benar karena debat bebas adab.",
      "Fikri mengamalkan mujādalah bi allatī hiya ahsan (berdebat dengan cara yang baik, saling menghargai dan beretika); Dimas melanggar karena debat dengan emosi dan merendahkan lawan.",
      "Ayat tersebut melarang debat sama sekali."
    ],
    "kunciIdx": 3,
    "pembahasan": "Mujādalah adalah perdebatan dengan cara yang baik, saling menghargai dan beretika. Dakwah dengan debat yang buruk merusak pesan. Allah yang mengetahui siapa sesat dan siapa mendapat petunjuk."
  },
  {
    "nomor": 44,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C4 Analisis",
    "dalilSumber": "QS Asy-Syu'ara (26): 214–216",
    "dalilArab": "وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ ۝ وَاخْفِضْ جَنَاحَكَ لِمَنِ اتَّبَعَكَ مِنَ الْمُؤْمِنِينَ ۝ فَإِنْ عَصَوْكَ فَقُلْ إِنِّي بَرِيءٌ مِّمَّا تَعْمَلُونَ",
    "dalilTerjemah": "Dan berilah peringatan kepada kerabat-kerabatmu (Muhammad) yang terdekat. Dan rendahkanlah dirimu terhadap orang-orang yang beriman yang mengikutimu. Kemudian jika mereka mendurhakaimu maka katakanlah (Muhammad), 'Sesungguhnya aku tidak bertanggung jawab terhadap apa yang kamu kerjakan'.",
    "stimulus": "Seorang siswa baru masuk Islam di lingkungan yang belum kondusif untuk dakwah terbuka. Ia memulai dakwah dari keluarga terdekat: orang tua, saudara, dan tetangga dekat, dengan risiko penolakan kecil tetapi berdampak besar kemudian hari.",
    "pertanyaan": "Analisislah strategi siswa tersebut berdasarkan QS Asy-Syu'ara (26): 214–216 tentang fase dakwah sembunyi-sembunyi!",
    "opsi": [
      "Strategi tersebut salah karena dakwah harus langsung terbuka.",
      "Ayat tersebut tidak berkaitan dengan dakwah.",
      "Siswa tersebut tidak wajib berdakwah.",
      "Dakwah kepada keluarga tidak perlu karena keluarga pasti menolak.",
      "Strategi tersebut sesuai dengan fase sirriyah: mendakwahi kerabat terdekat ('asyīrataka al-aqrabīn) secara sembunyi-sembunyi karena kondisi belum memungkinkan dakwah terbuka, seperti Rasulullah yang mendakwahi Khadijah, Abu Bakar, dan Ali."
    ],
    "kunciIdx": 4,
    "pembahasan": "QS Asy-Syu'ara 214–216 menjelaskan tahapan dakwah sesuai kondisi: fase sembunyi-sembunyi kepada kerabat terdekat karena belum memungkinkan terbuka. Generasi pertama (as-sābiqūna al-awwalūn) masuk Islam dan menjadi fondasi perkembangan Islam. Keberhasilan dakwah bukan diukur dengan banyaknya pengikut, tetapi pesan tetap disampaikan."
  },
  {
    "nomor": 45,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C4 Analisis",
    "dalilSumber": "QS Asy-Syu'ara (26): 215",
    "dalilArab": "وَاخْفِضْ جَنَاحَكَ لِمَنِ اتَّبَعَكَ مِنَ الْمُؤْمِنِينَ",
    "dalilTerjemah": "Dan rendahkanlah dirimu terhadap orang-orang yang beriman yang mengikutimu.",
    "stimulus": "Seorang ketua kelompok belajar yang sudah diikuti banyak teman menjadi sombong, meremehkan anggota yang lambat, dan enggan mendengarkan. Kelompoknya pecah. Sebaliknya, ketua lain rendah hati, mendengarkan, dan membimbing dengan lembut; kelompoknya solid.",
    "pertanyaan": "Analisislah kepemimpinan kedua ketua tersebut berdasarkan QS Asy-Syu'ara (26): 215!",
    "opsi": [
      "Tawadhu adalah kelemahan yang harus ditinggalkan.",
      "Ketua kedua mengamalkan ikhfid janāhaka (rendahkanlah dirimu) kepada pengikut yang beriman: tawadhu, mendengarkan, dan membimbing; ketua pertama melanggar karena sombong dan meremehkan.",
      "Keduanya sama-sama benar karena kepemimpinan bebas akhlak.",
      "Ayat tersebut tidak berkaitan dengan kepemimpinan.",
      "Ketua pertama lebih benar karena pemimpin harus sombong agar ditakuti."
    ],
    "kunciIdx": 1,
    "pembahasan": "QS Asy-Syu'ara 215 memerintahkan merendahkan diri (tawadhu) kepada pengikut yang beriman. Dakwah kepada keluarga dan pengikut harus dengan tawadhu. Kesombongan memecah, tawadhu menyatukan."
  },
  {
    "nomor": 46,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C4 Analisis",
    "dalilSumber": "QS Al-Hijr (15): 94–96",
    "dalilArab": "فَاصْدَعْ بِمَا تُؤْمَرُ وَأَعْرِضْ عَنِ الْمُشْرِكِينَ ۝ إِنَّا كَفَيْنَاكَ الْمُسْتَهْزِئِينَ ۝ الَّذِينَ يَجْعَلُونَ مَعَ اللَّهِ إِلَٰهًا آخَرَ ۚ فَسَوْفَ يَعْلَمُونَ",
    "dalilTerjemah": "Maka sampaikanlah (Muhammad) secara terang-terangan segala apa yang diperintahkan (kepadamu) dan berpalinglah dari orang yang musyrik. Sesungguhnya Kami memelihara kamu dari (kejahatan) orang yang memperolok-olokkan (engkau). (yaitu) orang-orang yang menganggap adanya tuhan selain Allah; mereka kelak akan mengetahui (akibatnya).",
    "stimulus": "Setelah bertahun-tahun berdakwah diam-diam dan umat Islam sudah kuat, seorang dai mulai menyampaikan ajaran Islam secara terbuka di media sosial dan majelis umum, meskipun ada ancaman dan ejekan dari pihak yang tidak suka.",
    "pertanyaan": "Analisislah tindakan dai tersebut berdasarkan QS Al-Hijr (15): 94–96 tentang fase dakwah terang-terangan!",
    "opsi": [
      "Tindakan tersebut salah karena dakwah harus selalu sembunyi-sembunyi.",
      "Tindakan tersebut sesuai dengan fase jahriyah: fasda' bimā tu'mar (sampaikanlah secara terang-terangan) setelah eksistensi umat memadai, dengan berpaling dari musyrik dan yakin Allah memelihara dari ejekan.",
      "Dai tersebut harus berhenti karena ancaman adalah tanda dakwah gagal.",
      "Ayat tersebut tidak berkaitan dengan dakwah terbuka.",
      "Dakwah terbuka tidak perlu karena sudah cukup dakwah diam-diam."
    ],
    "kunciIdx": 1,
    "pembahasan": "QS Al-Hijr 94–96 memerintahkan dakwah terang-terangan setelah fase sembunyi-sembunyi cukup lama dan eksistensi umat memadai. Allah menjamin keselamatan dai dari ejekan (innā kafaynāka al-mustahzi'īn). Tugas dai hanya menyampaikan; penerimaan urusan Allah. Terbukti dengan masuknya Khalid bin Walid dan Amr bin Ash."
  },
  {
    "nomor": 47,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C5 Evaluasi",
    "dalilSumber": "QS Al-Hijr (15): 95",
    "dalilArab": "إِنَّا كَفَيْنَاكَ الْمُسْتَهْزِئِينَ",
    "dalilTerjemah": "Sesungguhnya Kami memelihara kamu dari (kejahatan) orang yang memperolok-olokkan (engkau).",
    "stimulus": "Seorang siswa berdakwah di sekolah diejek dan diremehkan oleh teman-temannya. Ia berhenti berdakwah dan berkata, 'Dakwah tidak ada gunanya, hanya mengundang ejekan.' Temannya melanjutkan dakwah dengan sabar dan istiqamah.",
    "pertanyaan": "Evaluasi sikap kedua siswa tersebut berdasarkan QS Al-Hijr (15): 95!",
    "opsi": [
      "Ejakan adalah tanda dakwah harus dihentikan.",
      "Ayat tersebut tidak menjamin keselamatan dai.",
      "Teman yang melanjutkan lebih sesuai dengan ayat: Allah memelihara dai dari ejekan (kafaynāka al-mustahzi'īn), sehingga ejekan tidak boleh menghentikan dakwah; siswa yang berhenti menyerah pada ejekan.",
      "Keduanya sama-sama benar karena dakwah bebas dihentikan.",
      "Siswa yang berhenti lebih benar karena menghindari ejekan adalah bijak."
    ],
    "kunciIdx": 2,
    "pembahasan": "QS Al-Hijr 95 menegaskan Allah memelihara dai dari orang yang memperolok-olokkan. Dakwah harus istiqamah meskipun ada respon negatif, penolakan, dan ancaman. Jaminan Allah adalah penguat."
  },
  {
    "nomor": 48,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C4 Analisis",
    "dalilSumber": "HR Muslim dari Abu Hurairah",
    "dalilArab": "مَنْ دَعَا إِلَى هُدًى كَانَ لَهُ مِنَ الْأَجْرِ مِثْلُ أُجُورِ مَنْ تَبِعَهُ لَا يَنْقُصُ ذَلِكَ مِنْ أُجُورِهِمْ شَيْئًا وَمَنْ دَعَا إِلَى ضَلَالَةٍ كَانَ عَلَيْهِ مِنَ الْإِثْمِ مِثْلُ آثَامِ مَنْ تَبِعَهُ لَا يَنْقُصُ ذَلِكَ مِنْ آثَامِهِمْ شَيْئًا",
    "dalilTerjemah": "Barangsiapa yang mengajak kepada petunjuk, maka baginya pahala seperti pahala orang-orang yang mengikutinya tanpa mengurangi pahala mereka sedikit pun. Dan barangsiapa yang mengajak kepada kesesatan, maka ia mendapat dosa seperti dosa orang-orang yang mengikutinya, tanpa mengurangi dosa mereka sedikit pun. (HR Muslim)",
    "stimulus": "Seorang siswa mengajak teman-temannya salat berjamaah dan rajin belajar. Lima temannya mengikuti dan menjadi rajin. Ia juga mengajak temannya yang lain untuk tawuran, tetapi temannya menolak.",
    "pertanyaan": "Analisislah ajakan siswa tersebut berdasarkan HR Muslim tentang keutamaan berdakwah!",
    "opsi": [
      "Dakwah tidak memberikan pahala yang mengalir.",
      "Ajakan kepada kebaikan tidak berpahala karena pahala hanya untuk yang beramal.",
      "Ajakan kepada salat dan belajar adalah da'ā ilā hudan (mengajak kepada petunjuk) yang berpahala seperti pahala pengikutnya tanpa mengurangi pahala mereka; ajakan kepada tawuran adalah da'ā ilā dalālah (mengajak kepada kesesatan) yang berdosa seperti dosa pengikutnya.",
      "Ajakan kepada keburukan tidak berdosa karena yang beramal adalah pengikutnya.",
      "Hadis tersebut tidak berkaitan dengan siswa."
    ],
    "kunciIdx": 2,
    "pembahasan": "Hadis menegaskan dakwah adalah 'peternakan' pahala: pengajak kebaikan mendapat pahala seperti pengikutnya tanpa mengurangi pahala mereka; pengajak keburukan mendapat dosa seperti pengikutnya. Pahala mengalir hingga hari kiamat."
  },
  {
    "nomor": 49,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C5 Evaluasi",
    "dalilSumber": "HR Muslim dari Abu Hurairah",
    "dalilArab": "مَنْ دَعَا إِلَى هُدًى كَانَ لَهُ مِنَ الْأَجْرِ مِثْلُ أُجُورِ مَنْ تَبِعَهُ لَا يَنْقُصُ ذَلِكَ مِنْ أُجُورِهِمْ شَيْئًا وَمَنْ دَعَا إِلَى ضَلَالَةٍ كَانَ عَلَيْهِ مِنَ الْإِثْمِ مِثْلُ آثَامِ مَنْ تَبِعَهُ لَا يَنْقُصُ ذَلِكَ مِنْ آثَامِهِمْ شَيْئًا",
    "dalilTerjemah": "Barangsiapa yang mengajak kepada petunjuk, maka baginya pahala seperti pahala orang-orang yang mengikutinya tanpa mengurangi pahala mereka sedikit pun. Dan barangsiapa yang mengajak kepada kesesatan, maka ia mendapat dosa seperti dosa orang-orang yang mengikutinya, tanpa mengurangi dosa mereka sedikit pun. (HR Muslim)",
    "stimulus": "Seorang influencer menyebarkan konten maksiat dan hoaks yang diikuti ribuan remaja. Ia berdalih 'saya hanya bercanda, yang berbuat adalah pengikutnya'. Seorang influencer lain menyebarkan konten edukasi dan dakwah yang diikuti banyak remaja.",
    "pertanyaan": "Evaluasi kedua influencer tersebut berdasarkan HR Muslim!",
    "opsi": [
      "Influencer pertama berdosa seperti dosa pengikutnya karena da'ā ilā dalālah (mengajak kepada kesesatan) di media sosial; influencer kedua berpahala seperti pahala pengikutnya karena da'ā ilā hudan. Alasan 'bercanda' tidak menghapus dosa.",
      "Influencer kedua tidak berpahala karena dakwah di media sosial tidak sah.",
      "Keduanya sama-sama tidak bertanggung jawab.",
      "Influencer pertama tidak berdosa karena hanya bercanda.",
      "Hadis tersebut tidak berlaku untuk media sosial."
    ],
    "kunciIdx": 0,
    "pembahasan": "Hadis berlaku untuk semua ajakan, termasuk media sosial. Pengajak kesesatan mendapat dosa seperti pengikutnya; pengajak petunjuk mendapat pahala seperti pengikutnya. Dakwah digital adalah ladang pahala dan dosa yang besar."
  },
  {
    "nomor": 50,
    "bab": 5,
    "babJudul": "Mendakwahkan Keramahan Islam",
    "level": "C6 Mencipta",
    "dalilSumber": "QS An-Nahl (16): 125",
    "dalilArab": "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ ۚ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِ ۖ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ",
    "dalilTerjemah": "Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pengajaran yang baik, dan berdebatlah dengan mereka dengan cara yang baik. Sesungguhnya Tuhanmu, Dialah yang lebih mengetahui siapa yang sesat dari jalanNya dan Dialah yang lebih mengetahui siapa yang mendapat petunjuk.",
    "stimulus": "Sebagai siswa kelas XII di era informasi, kamu ingin berdakwah secara lisan dan tulisan melalui media digital, tetapi harus menghadapi hoaks, ujaran kebencian, dan perbedaan pemahaman.",
    "pertanyaan": "Rancangan dakwah digital yang paling sesuai dengan QS An-Nahl (16): 125 dan materi Bab 5 adalah…",
    "opsi": [
      "Dakwah digital dengan makian, hoaks, dan ujaran kebencian agar viral.",
      "Dakwah digital dengan menyembunyikan ajaran Islam dan tidak menyampaikan kebaikan.",
      "Dakwah digital dengan hikmah (memahami audiens dan memilih waktu/cara tepat), mau'izah hasanah (bahasa mudah, etika, dan doa), dan mujādalah ahsan (debat santun dengan data), dimulai dari diri dan keluarga, tanpa menunggu menjadi ulama, serta istiqamah meskipun diejek.",
      "Dakwah digital dengan berhenti saat diejek dan tidak istiqamah.",
      "Dakwah digital hanya untuk ulama, siswa tidak wajib berdakwah."
    ],
    "kunciIdx": 2,
    "pembahasan": "Dakwah adalah mengajak kepada jalan Allah dan kebaikan serta meninggalkan kemungkaran; tugas paling mulia para Nabi dan Rasul. Tiga metode: hikmah, mau'izah hasanah, mujādalah. Dakwah dimulai dari diri dan keluarga terdekat. Tidak harus menunggu menjadi ulama; setiap muslim wajib sesuai kemampuan. Dakwah digital harus dengan keramahan Islam."
  }
];

  for (var i = 0; i < soalList.length; i++) {
    var s = soalList[i];
    var judul = "Soal " + s.nomor + " | Bab " + s.bab + " (" + s.level + ")\n" +
      "Dalil (" + s.dalilSumber + "):\n" +
      s.dalilArab + "\n\n" +
      "Terjemahan: " + s.dalilTerjemah + "\n\n" +
      "Stimulus: " + s.stimulus + "\n\n" +
      "Pertanyaan: " + s.pertanyaan;

    var item = form.addMultipleChoiceItem();
    item.setTitle(judul);
    item.setRequired(true);
    item.setPoints(2);

    var huruf = ["A", "B", "C", "D", "E"];
    var choices = [];
    for (var j = 0; j < 5; j++) {
      var teksOpsi = huruf[j] + ". " + s.opsi[j];
      choices.push(item.createChoice(teksOpsi, j === s.kunciIdx));
    }
    item.setChoices(choices);

    var fbCorrect = FormApp.createFeedback()
      .setText("Tepat! " + s.pembahasan)
      .build();
    var fbIncorrect = FormApp.createFeedback()
      .setText("Jawaban benar: " + huruf[s.kunciIdx] + ". Pembahasan: " + s.pembahasan)
      .build();
    item.setFeedbackForCorrect(fbCorrect);
    item.setFeedbackForIncorrect(fbIncorrect);
  }

  Logger.log("=== BERHASIL DIBUAT ===");
  Logger.log("Link untuk SISWA (kerjakan): " + form.getPublishedUrl());
  Logger.log("Link untuk GURU (edit form): " + form.getEditUrl());
  Logger.log("Link Google Sheets (rekap nilai): " + ss.getUrl());
}
