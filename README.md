# Portfolio — Gede Wisnu Agus Purnawan

Personal portfolio mahasiswa Program Studi Sistem Informasi, Fakultas Teknik dan Kejuruan, Universitas Pendidikan Ganesha (2026). Dibangun dengan HTML5, CSS3, dan JavaScript vanilla, mengikuti desain Google Stitch sebagai source of truth.

## Struktur Proyek

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   └── gallery-3.jpg
│   └── icons/
│       └── favicon.svg
└── README.md
```

## Cara Menjalankan Secara Lokal

Website ini murni HTML/CSS/JS statis — tidak butuh build tool atau instalasi apa pun.

**Opsi 1 — Buka langsung**
Klik dua kali (atau buka) file `index.html` di browser.

**Opsi 2 — Local server (disarankan, agar semua fitur berjalan konsisten)**

Menggunakan Python:
```bash
cd portfolio
python3 -m http.server 8000
```
Lalu buka `http://localhost:8000` di browser.

Menggunakan VS Code:
Install ekstensi **Live Server**, klik kanan pada `index.html` → **Open with Live Server**.

## Mengganti Data Pribadi

Beberapa data masih berupa placeholder karena belum diberikan. Cari dan ganti langsung di `index.html`:

- `[ALAMAT ASAL]`
- `[ASAL SEKOLAH]` (muncul di 2 tempat: Biodata & Education Timeline)
- `[HOBI 1]` s.d. `[HOBI 4]`
- `[CITA-CITA]`
- `[EMAIL]` (pada atribut `href="mailto:[EMAIL]"`)
- `[INSTAGRAM]`, `[LINKEDIN]`, `[GITHUB]` (pada atribut `href`, muncul di section Contact & Footer)

## Mengganti Foto

Ganti file berikut di `assets/images/` dengan foto asli (gunakan nama file yang sama agar tidak perlu mengubah kode):

- `profile.jpg` — foto hero/profil
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` — foto galeri (bisa ditambah lebih banyak dengan menyalin pola `<button class="gallery-item" data-lightbox-trigger data-full="...">` di `index.html`)

## Fitur

- Navbar sticky dengan highlight menu aktif sesuai scroll
- Smooth scroll ke setiap section
- Hamburger menu di mobile (otomatis tertutup setelah memilih menu)
- Galeri dengan lightbox (klik foto untuk memperbesar, `Esc` untuk menutup)
- Animasi fade-in saat section muncul di layar (IntersectionObserver)
- Fully responsive: desktop, tablet, dan mobile (termasuk 375px–430px)
- Semantic HTML + alt text + focus state untuk aksesibilitas
