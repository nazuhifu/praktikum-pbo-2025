---
sidebar_position: 4
---

# Looping

Looping adalah salah satu konsep dasar dalam pemrograman. Loop memungkinkan kita **mengulang eksekusi kode** beberapa kali tanpa menulis kode berulang-ulang. Di Java, ada beberapa jenis loop yang sering digunakan: `for`, `while`, `do-while`, dan loop modern seperti *enhanced for* (for-each).

---

## 1. Mengapa looping penting?

* Menghemat penulisan kode (tidak perlu menulis ulang baris yang sama).
* Memudahkan iterasi pada array, list, atau koleksi lainnya.
* Membantu dalam berbagai algoritma seperti perhitungan, pencarian, atau simulasi.

---

## 2. `for` loop (loop klasik)

Sintaks:

```java
for (inisialisasi; kondisi; update) {
    // blok kode yang akan diulang
}
```

* **inisialisasi**: dijalankan sekali di awal, biasanya mendeklarasikan counter.
* **kondisi**: dicek sebelum setiap iterasi; jika `true`, blok dijalankan, jika `false`, loop berhenti.
* **update**: dieksekusi di akhir setiap iterasi, biasanya increment/decrement counter.

Contoh:

```java
for (int i = 0; i < 5; i++) {
    System.out.println("Iterasi ke-" + i);
}
```

Output:

```
Iterasi ke-0
Iterasi ke-1
Iterasi ke-2
Iterasi ke-3
Iterasi ke-4
```

---

## 3. `while` loop

* Loop yang dijalankan **selama kondisi bernilai true**.
* Cocok ketika jumlah iterasi **tidak diketahui sebelumnya**.

Sintaks:

```java
while (kondisi) {
    // blok kode
}
```

Contoh:

```java
int i = 0;
while (i < 5) {
    System.out.println("Iterasi ke-" + i);
    i++;
}
```

---

## 4. `do-while` loop

* Mirip `while`, tetapi **blok kode dijalankan minimal satu kali**, karena kondisi dicek **setelah eksekusi**.

Sintaks:

```java
do {
    // blok kode
} while (kondisi);
```

Contoh:

```java
int i = 0;
do {
    System.out.println("Iterasi ke-" + i);
    i++;
} while (i < 5);
```

> Gunakan `do-while` ketika setidaknya satu eksekusi dibutuhkan, misal meminta input pengguna dan validasi.

---

## 5. Enhanced `for` loop (for-each)

* Digunakan untuk iterasi **array atau koleksi**.
* Lebih ringkas daripada `for` klasik.

Sintaks:

```java
for (tipe elemen : arrayAtauList) {
    // blok kode
}
```

Contoh:

```java
int[] angka = {1, 2, 3, 4, 5};
for (int n : angka) {
    System.out.println(n);
}
```

> Catatan: loop ini **tidak bisa mengubah ukuran koleksi** atau mengakses indeks secara langsung.

---

## 6. Break dan Continue

* **break**: keluar dari loop langsung.
* **continue**: melewati iterasi saat ini dan lanjut ke iterasi berikutnya.

Contoh `break`:

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) break; // keluar dari loop
    System.out.println(i);
}
// Output: 0 1 2 3 4
```

Contoh `continue`:

```java
for (int i = 0; i < 5; i++) {
    if (i == 2) continue; // lewati iterasi i=2
    System.out.println(i);
}
// Output: 0 1 3 4
```

---

## 7. Nested loop (loop bersarang)

* Loop di dalam loop.
* Umum digunakan untuk **array 2D**, **matriks**, atau tabel.

Contoh:

```java
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        System.out.println("i=" + i + ", j=" + j);
    }
}
```

Output:

```
i=1, j=1
i=1, j=2
i=2, j=1
i=2, j=2
i=3, j=1
i=3, j=2
```

---

## 8. Infinite loop (loop tak terbatas)

* Kadang sengaja dibuat, misal untuk program server, tapi **harus hati-hati**.

```java
while (true) {
    System.out.println("Looping terus...");
    // harus ada break di suatu kondisi agar tidak infinite
}
```

---

## 9. Tips penggunaan looping

* Pilih `for` ketika jumlah iterasi diketahui (mis. iterasi array dengan indeks).
* Pilih `while` ketika jumlah iterasi **tidak pasti**.
* Gunakan **enhanced for** untuk membaca array/list tanpa mengubah ukuran atau indeks.
* Hati-hati nested loop, bisa menyebabkan **O(n²) / O(n³)** jika data besar.
* Gunakan `break`/`continue` untuk kendali alur, tapi jangan terlalu banyak agar kode tetap jelas.

---

## 10. Contoh lengkap program

```java
public class LoopExample {
    public static void main(String[] args) {
        // For loop klasik
        for (int i = 1; i <= 5; i++) {
            System.out.println("For loop ke-" + i);
        }

        // While loop
        int j = 1;
        while (j <= 5) {
            System.out.println("While loop ke-" + j);
            j++;
        }

        // Do-while loop
        int k = 1;
        do {
            System.out.println("Do-while loop ke-" + k);
            k++;
        } while (k <= 5);

        // Enhanced for loop
        int[] angka = {10, 20, 30};
        for (int n : angka) {
            System.out.println("For-each: " + n);
        }

        // Nested loop
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 2; col++) {
                System.out.println("row=" + row + ", col=" + col);
            }
        }

        // Break & Continue
        for (int i = 1; i <= 5; i++) {
            if (i == 3) continue; // lewati 3
            if (i == 5) break;    // keluar loop di 5
            System.out.println("Break/Continue: " + i);
        }
    }
}
```
