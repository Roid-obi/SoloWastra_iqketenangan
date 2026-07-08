# Aturan Pengembangan AI (AGENTS.md)

Project: **SoloWastra** (Frontend Only, Astro 7, Tailwind v4, Three.js)

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

## 🧊 Elemen 3D (Three.js & React Three Fiber)
- Integrasikan komponen React (React Three Fiber) ke dalam Astro menggunakan direktif *client:load* atau *client:visible* (misalnya `<Canvas client:visible />`).
- Optimalkan model 3D (gunakan format `.glb`).
- Sediakan UI *loading state* saat model 3D sedang dimuat.

## 🧩 Struktur Komponen Astro
- Gunakan Astro component (`.astro`) sebisa mungkin untuk HTML statis guna meminimalkan JavaScript di sisi *client*.
- Hanya gunakan React komponen (`.tsx`/`.jsx`) jika butuh interaktif kompleks atau merender 3D (`Three.js`).
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
- React Three Fiber: [https://r3f.docs.pmnd.rs/](https://r3f.docs.pmnd.rs/)
