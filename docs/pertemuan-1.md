---
sidebar_position: 1
---

# Pertemuan 1

Di pemrograman berorientasi objek (OOP) Java, ada beberapa konsep inti yang harus dipahami: **class**, **object**, **method**, **package**, **constructor**, dan **variabel**.

---

# 1. Class (Kelas)

**Definisi:** `class` adalah cetak-biru (blueprint) atau template yang mendefinisikan sifat (data) dan perilaku (fungsi) dari objek.
Komponen umum class: *fields* (variabel anggota), *methods*, *constructor*, *inner classes*, dsb.

**Sintaks dasar:**

```java
public class Person {
    // fields (atribut)
    private String name;
    private int age;

    // constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // method
    public void sayHello() {
        System.out.println("Halo, saya " + name);
    }
}
```

**Catatan:** Nama file harus sama dengan nama `public class`. Misal `Person.java`.

---

# 2. Object (Objek)

**Definisi:** `object` adalah instance nyata dari sebuah class. Class = blueprint, object = bangunan nyata yang dibuat dari blueprint itu.

**Contoh pembuatan object:**

```java
Person p = new Person("Ani", 20);
p.sayHello(); // memanggil method pada object
```

* `new Person(...)` = membuat instance baru (di heap).
* `p` adalah *reference variable* yang menunjuk ke objek.

**Visualisasi:**

```
Person class  <-- blueprint
   |
 new Person()  --> object instance (di heap)
   |
 reference p (di stack/frame)
```

---

# 3. Method (Metode)

**Definisi:** Method adalah fungsi yang didefinisikan di dalam class yang menggambarkan perilaku objek.

**Bagian method (signature):**

* Modifier (public/private)
* Return type (void jika tidak mengembalikan apa-apa)
* Nama method
* Parameter list

**Contoh:**

```java
public String getName() {     // return type String
    return name;
}

public void setAge(int age) { // void = tidak mengembalikan nilai
    this.age = age;
}

public static int add(int a, int b) { // static method milik class
    return a + b;
}
```

**Perbedaan penting:**

* *Instance method* (tanpa `static`) bekerja pada instance/objek.
* *Static method* dimiliki class, dipanggil tanpa membuat objek (`Math.max(...)`).

**Method overloading:** beberapa method dengan nama sama tapi parameter berbeda.

```java
public void setInfo(String name) { ... }
public void setInfo(String name, int age) { ... }
```

---

# 4. Constructor (Konstruktor)

**Definisi:** Constructor adalah method khusus yang dipanggil saat object dibuat. Nama constructor = nama class. **Tidak memiliki tipe kembalian** (tidak `void` juga).

**Tipe constructor:**

* **Default constructor**: jika tidak mendefinisikan constructor, Java menyediakan constructor tanpa parameter.
* **Parameterized constructor**: constructor dengan parameter.
* **Constructor chaining**: memanggil constructor lain menggunakan `this(...)`.
* **Memanggil constructor superclass**: `super(...)`.

**Contoh:**

```java
public class Person {
    private String name;
    private int age;

    // default constructor
    public Person() {
        this.name = "Unknown";
        this.age = 0;
    }

    // parameterized constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

**Catatan:** Jika Anda membuat constructor parameterized dan ingin juga constructor tanpa argumen, harus mendefinisikannya sendiri.

---

# 5. Variabel (Variables)

Jenis variabel di Java:

1. **Instance variables (fields)**

   * Milik setiap instance/object.
   * Dideklarasikan pada level class, tanpa `static`.
   * Contoh: `private String name;`

2. **Static variables (class variables)**

   * Milik class, dibagi oleh semua instance.
   * Dideklarasikan dengan `static`.
   * Contoh: `private static int counter;`

3. **Local variables**

   * Dideklarasikan di dalam method atau blok, hanya berlaku di sana.
   * Harus diinisialisasi sebelum digunakan.

4. **Parameters**

   * Variabel yang menerima nilai dari pemanggilan method/constructor.

**Default values (fields):**

* `int` → 0, `boolean` → false, reference (mis. String) → null
  Local variables **tidak** punya default — harus diinisialisasi.

**Contoh gabungan:**

```java
public class Counter {
    private static int total = 0; // static field
    private int value = 0;        // instance field

    public Counter() {
        total++;
    }

    public void increment() { // local variable example
        int delta = 1; // local variable
        value += delta;
    }
}
```

**`final`**: membuat variabel konstan (tidak bisa diubah setelah inisialisasi).

```java
public static final double PI = 3.14159;
```

---

# 6. Package

**Definisi:** `package` adalah cara mengelompokkan class-class ke dalam namespace/struktur folder untuk organisasi dan pengaturan akses.

**Mendeklarasikan package:**
Di baris pertama file Java:

```java
package com.univ.model;
```

Folder: file harus berada di `com/univ/model/Person.java`.

**Mengimpor class dari package lain:**

```java
import com.univ.model.Person;

public class Main {
    public static void main(String[] args) {
        Person p = new Person("Budi", 21);
    }
}
```

**Keuntungan package:**

* Mengorganisir kode
* Menghindari bentrokan nama class
* Kontrol akses (modifier `protected`/default package)

---

# 7. Contoh Lengkap (2 file sederhana)

**File: `com/univ/model/Person.java`**

```java
package com.univ.model;

public class Person {
    private String name;    // instance field
    private int age;        // instance field
    public static int count = 0; // static field

    // constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        count++;
    }

    // method
    public void sayHello() {
        System.out.println("Halo, saya " + name + ", umur " + age);
    }

    // getter
    public String getName() {
        return name;
    }

    // setter
    public void setAge(int age) {
        this.age = age;
    }
}
```

**File: `com/univ/app/Main.java`**

```java
package com.univ.app;

import com.univ.model.Person;

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("Sinta", 19);
        p1.sayHello();

        Person p2 = new Person("Rudi", 22);
        System.out.println("Jumlah object Person: " + Person.count);
    }
}
```

**Cara compile & run (dari root folder yang berisi folder `com`):**

```bash
javac com/univ/model/Person.java com/univ/app/Main.java
java com.univ.app.Main
```

---

# 8. Tips & Best Practices

* Gunakan **encapsulation**: buat field `private` dan akses lewat `get`/`set`.
* Ikuti **konvensi penamaan**:

  * Class: `PascalCase` (Contoh: `Person`, `StudentRecord`)
  * Method/variable: `camelCase` (Contoh: `sayHello`, `studentName`)
  * Constant (`static final`): UPPER\_SNAKE\_CASE
* Hindari `static` kecuali diperlukan (untuk konstanta atau utilitas).
* Bagi kode ke package sesuai domain fungsional (model, service, util).
* Gunakan constructor untuk memastikan object selalu valid setelah dibuat.
* Beri nama method yang jelas (mis. `calculateTotal()`, `isEmpty()`).

---

# Ringkasan Singkat

* **Class** = blueprint; **object** = instance nyata.
* **Method** = fungsi/aksi dari class; **constructor** = method khusus untuk inisialisasi object.
* **Variabel** ada beberapa jenis: instance, static, local, parameter.
* **Package** = pengelompokan class dan struktur folder; memudahkan organisasi & akses.

---