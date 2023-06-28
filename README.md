Aplikasi ini merupakan implementasi Front-End CRUD dari public API [Go REST](https://gorest.co.in/) yang dibangun dengan [Next.js](https://nextjs.org/).

### Fitur yang tersedia
- Halaman blog (Daftar postingan)
- Halaman detail postingan dengan komentar
- Halaman daftar user (Create, Read, Update, Delete)
- Pagination

## Cara Menjalankan Aplikasi
---
- Clone respository
```bash
git clone https://github.com/irmankurniawan11/fe-challenge.git
```

- Login ke [Go REST](https://gorest.co.in/) untuk mendapatkan **API Token**

- Buat file `.env` di project root, isikan dengan
```
GOREST_TOKEN = e82xxxdaa2975xxxxxa1xxxxxbab7e8bbxxx2xx58
```
- Instal dependency
```bash
npm i
```

- Jalankan di browser
```bash
npm run dev
```

- Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.