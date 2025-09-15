---
sidebar_position: 3
---

# Kondisional

Kondisional (pernyataan percabangan) adalah dasar pemrograman: mereka membuat program **mengambil keputusan** berdasarkan kondisi tertentu. Di Java ada beberapa bentuk kondisional yang sering dipakai: `if`, `if-else`, `else if`, operator ternary `?:`, dan `switch`. Di bawah ini penjelasan terstruktur + contoh supaya kamu paham cara kerja dan kapan pakainya.

# Apa itu kondisi?

Kondisi adalah sebuah ekspresi boolean yang bernilai `true` atau `false`. Contoh kondisi: `x > 10`, `name.equals("Budi")`, `isReady && count > 0`.

---

# `if` — struktur dasar

Sintaks:

```java
if (kondisi) {
    // blok yang dieksekusi jika kondisi true
}
```

Contoh:

```java
int x = 5;
if (x > 0) {
    System.out.println("x positif");
}
```

> Catatan: kondisi **harus** menghasilkan `boolean`. Berbeda dengan beberapa bahasa lain, Java tidak mengizinkan `if (x)` jika `x` bukan boolean.

---

# `if-else`

Gunakan ketika ingin memilih antara dua cabang (true / false).

```java
int x = -3;
if (x >= 0) {
    System.out.println("x nol atau positif");
} else {
    System.out.println("x negatif");
}
```

---

# `else if` (rantai kondisi)

Untuk mengecek beberapa kondisi berurutan.

```java
int nilai = 75;
if (nilai >= 85) {
    System.out.println("A");
} else if (nilai >= 70) {
    System.out.println("B");
} else if (nilai >= 50) {
    System.out.println("C");
} else {
    System.out.println("D");
}
```

> Tip: urutkan dari kondisi paling spesifik/tinggi ke yang paling umum supaya logika tidak salah.

---

# Nested `if` (bersarang)

Boleh, tapi hati-hati: cepat membuat kode sulit dibaca. Lebih baik ekstrak ke method jika kompleks.

```java
if (user != null) {
    if (user.isActive()) {
        // lakukan sesuatu
    }
}
```

---

# Operator ternary `?:`

Sintaks singkat untuk kondisi sederhana yang mengembalikan nilai:

```java
tipe hasil = (kondisi) ? nilaiJikaTrue : nilaiJikaFalse;
```

Contoh:

```java
int score = 60;
String status = (score >= 60) ? "Lulus" : "Tidak Lulus";
System.out.println(status); // "Lulus"
```

> Gunakan untuk kondisi singkat. Jangan pakai ternary untuk logika kompleks atau banyak cabang — pakai `if-else` agar jelas.

---

# `switch` (pernyataan multi-cabang)

Cocok untuk memilih berdasarkan nilai diskrit (int, String, enum, dll). Ada dua gaya: *traditional switch* dan *switch expression* (modern — lebih ringkas).

## Traditional switch (biasa)

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Senin");
        break;
    case 2:
        System.out.println("Selasa");
        break;
    case 3:
        System.out.println("Rabu");
        break;
    default:
        System.out.println("Tidak diketahui");
}
```

* **PENTING**: tanpa `break`, eksekusi akan *fall-through* (lanjut ke case berikutnya) — ini kadang berguna tetapi sering menjadi sumber bug.

## Switch dengan String (sejak Java 7)

```java
String cmd = "start";
switch (cmd) {
    case "start": System.out.println("Starting"); break;
    case "stop":  System.out.println("Stopping"); break;
}
```

## Switch expression (Java 14+ — modern)

Lebih ringkas dan aman terhadap fall-through:

```java
int day = 3;
String name = switch (day) {
    case 1 -> "Senin";
    case 2 -> "Selasa";
    case 3 -> "Rabu";
    default -> "Tidak diketahui";
};
System.out.println(name);
```

Atau dengan blok dan `yield`:

```java
String result = switch (value) {
    case 1 -> {
        // beberapa baris kode
        yield "Satu";
    }
    default -> "Lainnya";
};
```

> Jika kamu menggunakan Java modern (14+), pelajari switch expression — lebih aman dan ekspresif.

---

# Operator perbandingan & logika penting

* Perbandingan numerik: `==`, `!=`, `<`, `>`, `<=`, `>=`
* Boolean logic: `!` (NOT), `&&` (AND pendek), `||` (OR pendek)
* Non-short-circuit operators: `&`, `|` (evaluasi kedua operand selalu)

  * Contoh perbedaan: `A && B` tidak akan mengevaluasi `B` bila `A` false (short-circuit). `A & B` akan selalu evaluasi keduanya.
* Precedence (ringkas): `!` > `&&` > `||`. Gunakan tanda kurung `()` untuk kejelasan.

Contoh short-circuit yang berguna:

```java
int a = 0;
if (a != 0 && 10 / a > 1) { // aman — bagian kanan TIDAK dievaluasi karena a != 0 false
    ...
}
```

---

# Perbandingan reference types (String / Object)

* Untuk tipe primitif: gunakan `==` (membandingkan nilai).
* Untuk object/reference (mis. `String`): gunakan `.equals()` untuk membandingkan isi.

```java
String s1 = new String("halo");
String s2 = new String("halo");
System.out.println(s1 == s2);      // false (identity)
System.out.println(s1.equals(s2)); // true  (isi sama)
```

Untuk menghindari `NullPointerException` pada perbandingan string:

```java
if ("ya".equalsIgnoreCase(input)) { ... }      // aman jika input null
// atau
if (Objects.equals(input, "ya")) { ... }       // aman, but requires import java.util.Objects
```

---

# Perbandingan floating-point

Hati-hati membandingkan `float`/`double` langsung karena presisi:

```java
double a = 0.1 + 0.2;
double b = 0.3;
boolean equal = Math.abs(a - b) < 1e-9; // membandingkan dengan epsilon
```

---

# Null check & defensif programming

Selalu cek `null` jika ada kemungkinan reference kosong:

```java
if (user != null && user.isActive()) { ... }
```

Gunakan `Optional<T>` jika ingin pola yang lebih eksplisit (sejak Java 8).

---

# Contoh program

```java
public class Grade {
    public static String gradeLetter(int score) {
        if (score >= 85) return "A";
        else if (score >= 70) return "B";
        else if (score >= 55) return "C";
        else if (score >= 40) return "D";
        else return "E";
    }

    public static void main(String[] args) {
        int[] scores = {90, 74, 58, 39};
        for (int s : scores) {
            System.out.printf("Score %d => Grade %s%n", s, gradeLetter(s));
        }

        // contoh switch expression (Java 14+)
        int day = 3;
        String dayName = switch (day) {
            case 1 -> "Senin";
            case 2 -> "Selasa";
            case 3 -> "Rabu";
            default -> "Tidak diketahui";
        };
        System.out.println("Day: " + dayName);
    }
}
```

---

# Ringkasan singkat

* Gunakan `if/else/else if` untuk percabangan berdasarkan kondisi boolean.
* Gunakan operator ternary untuk kondisi sederhana yang mengembalikan nilai.
* Gunakan `switch` (atau switch expression) untuk banyak cabang berdasarkan nilai diskrit.
* Perhatikan perbandingan objek (`.equals()`), short-circuit (`&&`, `||`), dan `null` checks.
* Selalu prioritaskan keterbacaan: kurung kurawal, method kecil.