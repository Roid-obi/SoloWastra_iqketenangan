# Aturan Pengembangan AI (AGENTS.md)

Project: **SoloWastra** (Frontend Only, Astro 7, Tailwind v4)

## 📌 Development Server
- Gunakan command berikut untuk menjalankan server development:
  ```bash
  bun run dev
  ```
- Untuk proses background melalui agen:
  ```bash
  bun run dev --background
  ```
- Manage the background server with `bun run --bun astro dev stop`, `bun run --bun astro dev status`, dan `bun run --bun astro dev logs`.

## 🎨 Styling & Desain (Tailwind v4)
- Proyek ini menggunakan **Tailwind CSS v4**. Pastikan menggunakan sintaks yang sesuai dengan versi 4.
- Fokus pada desain yang **Premium, Modern, dan Elegan**.
- Gunakan warna-warna kultural khas (Batik Solo) yang disesuaikan dengan skema modern (*earth tones*, *gold*, elegan).
- Implementasikan animasi mikro yang *smooth* pada *hover* atau interaksi.
- TIDAK BOLEH terlihat seperti website dasar/MVP.

## 🎬 Animasi & Interaktivitas (GSAP, Motion & Lenis)
- Gunakan GSAP dipadukan dengan ScrollTrigger untuk elemen yang bereaksi terhadap *scroll*.
- Gunakan Lenis untuk efek *smooth scrolling* di seluruh halaman.
- Pastikan animasi berjalan lancar (60fps) dan tidak menyebabkan pergerakan mendadak yang tidak rapi.

## 🧩 Struktur Komponen Astro
- Gunakan Astro component (`.astro`) sebisa mungkin untuk HTML statis guna meminimalkan JavaScript di sisi *client*.
- Hanya gunakan React komponen (`.tsx`/`.jsx`) jika butuh interaktivitas kompleks.
- Gambar harus menggunakan format **AVIF** dan dirender menggunakan modul `astro:assets` (contoh: komponen `<Image />` atau `<Picture />`).

## ⚙️ Optimasi dan Code Quality (Biome)
- Project ini menggunakan **Biome** untuk linter & formatter.
- Halaman web **tidak menggunakan** Database, LocalStorage, atau SessionStorage sesuai arahan lomba. Semua data terstruktur (misalnya daftar motif batik) harus bersifat statis langsung di dalam file `.astro` atau dikelola melalui JSON lokal.

## 📚 Dokumentasi Referensi
- Astro: https://docs.astro.build
  - [Routing](https://docs.astro.build/en/guides/routing/)
  - [Astro components](https://docs.astro.build/en/basics/astro-components/)
  - [Framework components (React)](https://docs.astro.build/en/guides/framework-components/)
  - [Assets](https://docs.astro.build/en/guides/assets/)
- GSAP Documentation: [https://gsap.com/docs/v3/](https://gsap.com/docs/v3/)
- Tailwind CSS v4 Documentation: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🎯 Tema & Objektif Proyek
- **Tema:** Culture Verse: Preserving Heritage Through Design (SDG 11)
- **Topik Utama:** Batik Solo
- **Nama Brand:** SoloWastra
- **Judul Karya:** SoloWastra: Exploring the Legacy of Solo Batik
- **Tujuan Utama:** Merancang landing page yang mengangkat kekayaan budaya lokal dengan pendekatan visual modern, interaktif, edukatif, namun tetap mempertahankan nilai tradisi bagi generasi masa kini.
