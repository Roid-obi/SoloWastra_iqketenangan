# 🌟 SoloWastra: Exploring the Legacy of Solo Batik 🌟

**Preserving Heritage Through Design**

![Static Badge](https://img.shields.io/badge/Astro-7.0-orange) ![Static Badge](https://img.shields.io/badge/Tailwind-CSS_v4-blue) ![Static Badge](https://img.shields.io/badge/Competition-BYTESFEST_2026-green)

---

<!-- Penjelasan Singkat Project -->
## 📖 2. Deskripsi Project
**SoloWastra** merupakan website landing page interaktif yang mengangkat kekayaan budaya Batik Solo melalui pendekatan visual modern. Website ini bertujuan memperkenalkan sejarah, filosofi, motif, proses pembuatan, hingga nilai budaya Batik Solo kepada generasi muda dan masyarakat luas dalam bentuk pengalaman digital yang menarik.

<!-- Konteks SDGs dan Latar Belakang -->
## 🎯 3. Latar Belakang
Di era digital, pelestarian warisan budaya sering kali tertinggal oleh cepatnya arus informasi modern. SoloWastra dibuat untuk menjembatani kesenjangan ini dengan menghadirkan budaya Batik Solo ke dalam format digital yang interaktif dan *engaging*. 

Project ini secara langsung mendukung pencapaian **SDG 11 (Sustainable Cities and Communities)**, khususnya pada target perlindungan dan pelestarian warisan budaya dan alam dunia. Melalui SoloWastra, diharapkan generasi muda dapat lebih mengenal, mengapresiasi, dan bangga terhadap identitas budaya lokal Indonesia.

<!-- Tujuan Utama Website -->
## 🚀 4. Tujuan Project
- Memperkenalkan Batik Solo sebagai warisan budaya Indonesia yang bernilai tinggi.
- Meningkatkan apresiasi masyarakat terhadap budaya lokal melalui pengalaman digital interaktif.
- Mendukung SDG 11 (Sustainable Cities and Communities), khususnya pelestarian warisan budaya.

<!-- Daftar Fitur Kunci -->
## ✨ 5. Fitur Utama
- **Landing Page Interaktif**: Pengalaman *scroll* yang mulus dan imersif.
- **Storytelling Budaya**: Narasi menarik tentang sejarah dan perkembangan Batik Solo.
- **Eksplorasi Motif Batik Solo**: Penjelasan mendalam mengenai berbagai motif klasik (Parang, Kawung, dll).
- **Filosofi Batik**: Mengungkap makna dan harapan di balik setiap goresan motif.
- **Proses Pembuatan Batik**: Visualisasi tahap demi tahap pembuatan batik tradisional.
- **Responsive Design**: Tampilan optimal di berbagai perangkat (Desktop, Tablet, Mobile).
- **Smooth Scrolling & Scroll Animation**: Animasi dinamis menggunakan GSAP, Motion, dan Lenis.
- **3D Experience**: Elemen 3D interaktif menggunakan Three.js dan React Three Fiber.
- **Optimized Images**: Pemuatan aset sangat cepat menggunakan format AVIF modern.

<!-- Tabel Teknologi yang Digunakan -->
## 🛠️ 6. Tech Stack
| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework** | Astro 7 | Static Site Generator yang super cepat |
| **Bahasa** | TypeScript | Type-safe JavaScript untuk penulisan kode yang lebih aman |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework untuk *styling* cepat dan responsif |
| **Animasi** | Motion, GSAP, ScrollTrigger, Lenis | Library pendukung animasi interaktif dan *smooth scrolling* |
| **3D** | Three.js, React Three Fiber, Drei | Merender grafis 3D interaktif yang ringan di browser |
| **Optimasi** | `astro:assets` | Fitur optimasi gambar otomatis bawaan Astro |
| **Format Asset** | AVIF, SVG, GLB | Format aset modern, *vector*, dan model 3D |
| **Code Quality**| Biome | Linter dan formatter JavaScript/TypeScript masa depan |
| **Runtime** | Bun | JavaScript runtime yang sangat cepat sebagai pengganti Node/npm |
| **Version Control**| Git, GitHub | Sistem kontrol versi kode sumber |
| **Deployment** | Netlify | Platform *hosting* andal untuk *static site* |

<!-- Penjelasan Struktur Folder -->
## 📁 7. Struktur Folder
Berikut adalah struktur folder utama dari project ini:

```text
src/
├── assets/      # Aset statis seperti gambar (AVIF, SVG), model 3D (GLB)
├── components/  # Komponen UI yang dapat digunakan kembali (Header, Footer, Card, dll.)
├── layouts/     # Layout utama halaman website (misal: struktur global HTML/Head)
├── pages/       # File routing Astro (setiap file .astro di sini menjadi halaman website)
└── styles/      # File CSS global, termasuk konfigurasi root Tailwind CSS
public/          # Aset publik yang tidak diproses oleh bundler (favicon, dll)
```
- **`src/assets/`**: Digunakan bersama `astro:assets` agar gambar dapat dioptimasi ukurannya saat *build*.
- **`src/components/`**: Berisi file `.astro` atau `.tsx` untuk memecah UI menjadi bagian-bagian kecil.
- **`src/pages/`**: File di sini otomatis menjadi *route* URL pada website statis.

<!-- Panduan Instalasi dan Menjalankan Project -->
## ⚙️ 8. Cara Menjalankan Project
Project ini dikonfigurasi menggunakan [Bun](https://bun.sh/) sebagai runtime dan *package manager*. Pastikan Bun sudah terinstall di sistem operasi Anda.

1. **Install Dependencies**
   Mengunduh dan menginstal semua library yang dibutuhkan.
   ```bash
   bun install
   ```
2. **Jalankan Development Server**
   Menjalankan server lokal. Buka browser pada alamat `http://localhost:4321`.
   ```bash
   bun run dev
   ```
3. **Build Project**
   Membangun project untuk environment produksi. Hasil *build* siap rilis akan masuk ke folder `dist/`.
   ```bash
   bun run build
   ```
4. **Preview Build**
   Melihat pratinjau hasil *build* produksi secara lokal.
   ```bash
   bun run preview
   ```

<!-- Penjelasan Proses Build -->
## 📦 9. Build Production
Website ini bersifat **Static Website (Frontend Only)**. Proses *build* (`bun run build`) akan mengonversi semua komponen `.astro` menjadi file HTML statis murni, CSS yang sudah di-minify, dan memecah file JavaScript. File keluaran di folder `dist/` ini sangat ringan dan siap di-*host* pada server statis mana pun tanpa perlu server backend.

<!-- Info Deployment -->
## 🌐 10. Deployment
Project ini menggunakan proses *Continuous Integration/Continuous Deployment* (CI/CD) yang di-*deploy* melalui **Netlify**. Setiap kali ada *push* atau *merge* ke branch utama (misal `main`) di GitHub, Netlify akan menjalankan proses instalasi otomatis dan menyajikan hasil *build* terbaru.

<!-- Detail Teknik Optimasi -->
## ⚡ 11. Optimasi yang Digunakan
- **`astro:assets`**: Digunakan untuk meresize dan mengonversi format gambar secara otomatis saat proses *build*.
- **AVIF**: Format gambar yang jauh lebih kecil dari JPEG/PNG dengan kualitas visual yang sama.
- **SVG**: Grafik vektor digunakan untuk ilustrasi dan ikon agar gambar tetap tajam pada resolusi layar apa pun.
- **Lazy Loading**: Aset hanya dimuat (*download*) jika masuk ke dalam area layar pengguna.
- **Code Splitting (Island Architecture Astro)**: Hanya JavaScript interaktif (seperti animasi atau Three.js) yang dikirimkan ke *client*, membuat halaman memuat dengan sangat cepat.
- **Static Site Generation (SSG)**: Tidak perlu *rendering* di sisi server saat pengguna mengakses situs, karena HTML sudah dibuat di awal.
- **Tree Shaking**: Menghilangkan kode *library* yang tidak digunakan (oleh bundler) sehingga *bundle size* tetap minimal.

<!-- Kompatibilitas Perangkat -->
## 📱 12. Responsiveness
Antarmuka website (*UI*) didesain fleksibel dan akan beradaptasi secara optimal pada berbagai ukuran layar:
- 🖥️ Desktop & Monitor Ekstra Lebar
- 💻 Laptop
- 📱 Tablet (Portrait & Landscape)
- 📱 Smartphone

<!-- Kompatibilitas Browser -->
## 🌐 13. Browser Support
Website mendukung penuh *modern browsers* yang mendukung ES Module:
- Google Chrome (Versi Terbaru)
- Mozilla Firefox (Versi Terbaru)
- Apple Safari (Versi Terbaru)
- Microsoft Edge (Versi Terbaru)

<!-- Peraturan Kontribusi -->
## 🤝 14. Kontribusi
**Perhatian:** Mengingat repository ini adalah karya khusus untuk mengikuti **SDGs Creative Web Competition - BYTESFEST 2026**, **project ini tidak menerima kontribusi eksternal (Pull Request)** dari pihak luar untuk menjaga integritas penilaian lomba.

<!-- Lisensi dan Hak Cipta -->
## 📄 15. Lisensi
Hak cipta © 2026 oleh Tim Pengembang SoloWastra.
Seluruh *source code*, konsep desain, aset yang dikustomisasi dalam project ini dibuat khusus untuk keperluan lomba SDGs Creative Web Competition BYTESFEST 2026. Dilarang menduplikasi, menyebarkan, atau menggunakan ulang bagian manapun dari kode ini untuk keperluan komersial tanpa izin tertulis.

<!-- Info Anggota Tim -->
## 👥 16. Tim Pengembang
| Nama | Peran |
| :--- | :--- |
|  |  |
|  |  |
|  |  |

<!-- Referensi dan Atribusi -->
## 🌟 17. Credit
Terima kasih kepada berbagai pihak yang telah menjadi sumber inspirasi dan referensi:
- **Sumber Gambar:** [Kosong]
- **Sumber Ikon:** [Kosong]
- **Font:** [Kosong]
- **Referensi Artikel:** [Kosong]
- **Referensi Sejarah Batik Solo:** [Kosong]

<!-- Catatan Penting -->
## ⚠️ 18. Catatan
- Website ini murni merupakan **karya orisinal**.
- **Tidak** menggunakan template siap pakai dari pihak ketiga.
- **Tidak** menggunakan *Content Management System* (CMS) apa pun.
- **Tidak** menggunakan database eksternal, LocalStorage, maupun SessionStorage.
- Seluruh struktur, interaksi visual, dan pengisian konten dibuat secara spesifik dalam rangka mengikuti kompetisi.
