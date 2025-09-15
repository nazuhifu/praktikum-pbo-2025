---
sidebar_position: 1
---

# Konstanta Primitif

Konstanta = nilai yang **tidak berubah** setelah didefinisikan.
Di Java, konstanta primitif biasanya dibuat dengan keyword `final` (dan sering digabung `static final` untuk konstanta kelas). Di bawah ini penjelasan bertahap lengkap dengan contoh kode.

---

## 1. Mengapa menggunakan konstanta?

* Membuat kode lebih **membaca** dan **mudah dipelihara** (`MAX_USER` jauh lebih jelas daripada `100` di banyak tempat).
* Menghindari **magic numbers** (angka/hardcode tanpa penjelasan).
* Memudahkan pengubahan nilai di satu tempat tanpa harus cari-ganti di banyak baris.

---

## 2. Tipe primitif Java (singkat)

Konstanta primitif berarti nilai bertipe salah satu primitif ini:

* `byte`, `short`, `int`, `long` — bilangan bulat
* `float`, `double` — bilangan desimal
* `char` — karakter (single quote)
* `boolean` — `true` atau `false`

---

## 3. Cara mendeklarasikan konstanta

* `final`: membuat variabel tidak bisa di-assign ulang setelah inisialisasi.
* `static final`: konstanta milik class (satu untuk seluruh objek).

```java
public class Constants {
    public static final int MAX_USERS = 100;       // konstanta kelas (umum)
    private final double pi = 3.14159;             // konstanta instance (per objek, jika diperlukan)
}
```

Akses:

```java
int m = Constants.MAX_USERS;
```

**Konvensi penamaan:** `UPPER_SNAKE_CASE` untuk konstanta (`MAX_USERS`, `DEFAULT_TIMEOUT`).

---

## 4. Literal dan notasi yang sering dipakai

Contoh literal primitif dan aturan penting:

### Bilangan bulat

* Default integer literal adalah `int`.
* Untuk `long` tambahkan suffix `L` atau `l` (disarankan `L` besar).

```java
int x = 100;
long big = 1_000_000_000L;
```

* Format lain: hex (`0x`), binary (`0b`), octal (`0` prefix, jarang dipakai).

```java
int hex = 0xFF;      // 255
int bin = 0b1010;    // 10
int oct = 077;       // octal
```

* Angka dapat diberi underscore untuk pembacaan: `1_000_000`

### Bilangan pecahan

* Default floating literal adalah `double`.
* Untuk `float` tambahkan `f` atau `F`.

```java
double d = 0.1;
float f = 0.1f;
```

### Char

* Single quote, dapat menggunakan escape dan unicode:

```java
char c = 'A';
char nl = '\n';
char heart = '\u2665';
```

### Boolean

```java
boolean FLAG = true;
```

---

## 5. Compile-time constant vs runtime constant

* **Compile-time constant** = `final` primitif (atau `String`) yang diinisialisasi dengan *konstanta ekspresi* pada waktu kompilasi. Contoh:

```java
public static final int A = 2 + 3; // compile-time constant
```

* Compile-time constants bisa dipakai di:

  * label `case` pada `switch`
  * nilai default annotation
  * dipakai oleh compiler untuk *constant folding* (diganti langsung nilai literal saat kompilasi).

* **Runtime constant** = `final` tapi nilainya ditentukan saat runtime (mis. hasil pemanggilan method atau dari constructor). Contoh:

```java
public static final int B = someMethod(); // bukan compile-time constant
private final int instanceConst;          // bisa di-set di constructor (blank final)
```

---

## 6. Blank `final` fields (konstanta diinisialisasi di constructor)

`final` tidak selalu harus diinisialisasi langsung; bisa juga diinisialisasi pada konstruktor — cocok bila setiap instance punya nilai final berbeda.

```java
public class Config {
    private final int timeout; // blank final

    public Config(int timeout) {
        this.timeout = timeout; // di-set sekali di constructor
    }
}
```

Setelah di-set, nilai tersebut **tidak bisa diubah**.

---

## 7. Final lokal & *effectively final*

* Local variable juga bisa `final`:

```java
final int x = 10;
```

* Sejak Java 8, variabel lokal yang **tidak diubah** setelah inisialisasi disebut *effectively final* dan dapat dipakai di lambda/inner class walaupun tidak diberi keyword `final`.

---

## 8. Contoh lengkap dan penggunaan

```java
package com.univ.app;

public final class AppConstants {
    private AppConstants() {} // mencegah instansiasi

    public static final int MAX_USERS = 100;
    public static final long TIMEOUT_MS = 30_000L;
    public static final double TAX_RATE = 0.11;
    public static final char NEWLINE = '\n';
    public static final boolean DEBUG = false;
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Maksimum user: " + AppConstants.MAX_USERS);

        // contoh compile-time constant di switch
        int mode = 2;
        switch (mode) {
            case 1 -> System.out.println("Mode 1");
            case 2 -> System.out.println("Mode 2");
            case AppConstants.MAX_USERS: // TIDAK BISA jika MAX_USERS bukan compile-time constant
                System.out.println("This won't compile unless it's compile-time constant");
        }
    }
}
```