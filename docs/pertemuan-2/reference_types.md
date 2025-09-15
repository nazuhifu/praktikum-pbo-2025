---
sidebar_position: 2
---

# Reference Types

Di Java ada dua kategori tipe data: **primitive types** (mis. `int`, `boolean`) dan **reference types**. Di sini kita fokus pada **reference types** — apa itu, bagaimana perilakunya, dan hal-hal penting yang sering bikin bingung.

---

## Pengantar singkat

**Reference type** bukan menyimpan nilai langsung. Sebaliknya, variabel reference **menyimpan alamat/rujukan** ke objek yang berada di *heap*. Contoh reference type: semua `class` (mis. `String`, `Person`), `array`, `interface`, `enum`, dan `annotation`.

---

## Perbedaan utama: primitive vs reference

* **Primitive**: variabel menyimpan nilai langsung. (`int x = 5;`)
* **Reference**: variabel menyimpan alamat objek. (`Person p = new Person("Ani");`)
  `p` **tidak** berisi data person, melainkan menunjuk ke objek `Person` di heap.

---

## Contoh sederhana

```java
class Person {
    String name;
    Person(String name) { this.name = name; }
}

public class Main {
    public static void main(String[] args) {
        Person a = new Person("Ani"); // buat objek di heap
        Person b = a;                 // b merujuk ke objek yang sama
        b.name = "Budi";              // mengubah field melalui b
        System.out.println(a.name);   // menampilkan "Budi"
    }
}
```

> Karena `a` dan `b` menunjuk objek yang sama, perubahan lewat salah satu terlihat di yang lain — ini disebut **aliasing**.

---

## Memory: stack vs heap (sederhana)

* **Heap**: tempat objek (reference types) disimpan. Dikelola oleh *garbage collector*.
* **Stack / frame method**: menyimpan reference variables (alamat) dan local primitives. Ketika method selesai, frame di-stack dihapus — tetapi objek di heap tetap ada bila masih direferensikan.

---

## `null` dan `NullPointerException`

* Reference bisa bernilai `null` (tidak menunjuk ke objek apa pun).
* Mengakses method/field dari `null` → `NullPointerException` (NPE).

```java
String s = null;
s.length(); // NPE
```

Cara mencegah: cek `null` sebelum akses; gunakan `Optional<T>` (Java 8+) untuk beberapa kasus.

---

## `==` vs `.equals()`

* `==` untuk membandingkan **reference identity** (apakah dua reference menunjuk objek yang sama).
* `.equals()` (didefinisikan di `Object`) biasanya dipakai untuk membandingkan **kesetaraan logis** — banyak class (mis. `String`, `Integer`) override `.equals()`.

Contoh:

```java
String s1 = new String("halo");
String s2 = new String("halo");

System.out.println(s1 == s2);       // false (dua objek berbeda)
System.out.println(s1.equals(s2));  // true  (isi sama)
```

Jika Anda membuat class sendiri dan ingin membandingkan berdasarkan isi, override `equals()` (dan `hashCode()`).

---

## Mutability vs Immutability

* **Mutable**: isi objek bisa diubah setelah dibuat (mis. `StringBuilder`, banyak class buatan sendiri).
* **Immutable**: isi tidak bisa diubah (mis. `String`, `Integer`). Untuk `String`, operasi seperti `s = s.replace(...)` membuat objek baru.
  Penting saat memikirkan aliasing — objek immutable aman bila dibagi ke banyak tempat.

---

## Passing references ke method: Java *pass-by-value*

Java **selalu** pass-by-value. Untuk reference types, nilai yang dipass adalah **copy dari reference** (alamat), bukan objeknya sendiri.

Contoh yang sering bikin bingung:

```java
class Person { String name; Person(String n){name=n;} }

public static void reassign(Person p) {
    p = new Person("Reassigned"); // hanya mengubah copy reference lokal
}

public static void mutate(Person p) {
    p.name = "Mutated"; // mengubah isi objek yang direferensikan
}

public static void main(String[] args) {
    Person x = new Person("Original");
    reassign(x);
    System.out.println(x.name); // tetap "Original"

    mutate(x);
    System.out.println(x.name); // menjadi "Mutated"
}
```

* Reassign param (`p = new ...`) **tidak** mengubah reference di pemanggil.
* Mengubah field objek (`p.name = ...`) **mengubah** objek di heap — terlihat di pemanggil.

---

## `final` pada reference

`final Person p = new Person("A");`

* `final` mencegah reassign `p = anotherPerson;` — **reference** tidak bisa diarahkan ulang.
* Namun Anda tetap bisa mengubah isi objek: `p.name = "B";` (kecuali field juga immutable).

---

## `instanceof` dan casting

* `instanceof` memeriksa apakah objek merupakan instance dari tipe tertentu.
* Casting diperlukan saat referensi bersifat general (polimorfisme).

```java
Object o = "halo";
if (o instanceof String) {
    String s = (String) o; // cast aman karena instanceof true
}
```

---

## Garbage Collection (GC) — singkat

Objek di heap akan diambil (dibuang) oleh GC bila tidak ada reference yang merujuk kepadanya (unreachable). Programmer **tidak** mengontrol penghapusan memori langsung (kecuali `System.gc()` hanyalah saran).

---

## Contoh lengkap — file `Main.java`

```java
class Person {
    String name;
    Person(String name) { this.name = name; }
    @Override
    public String toString() { return "Person("+name+")"; }
}

public class Main {
    static void reassign(Person p) {
        p = new Person("Reassigned");
    }
    static void mutate(Person p) {
        p.name = "Mutated";
    }
    public static void main(String[] args) {
        Person a = new Person("Alice");
        Person b = a; // aliasing
        System.out.println(a == b);       // true
        System.out.println(a.equals(b));  // true (Object.equals default -> same reference)

        mutate(a);
        System.out.println(a.name); // "Mutated"

        reassign(a);
        System.out.println(a.name); // masih "Mutated"

        // null example
        a = null;
        // System.out.println(a.name); // -> NullPointerException jika diuncomment
    }
}
```