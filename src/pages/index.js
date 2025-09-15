import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>Selamat datang di platform pembelajaran PBO! Jelajahi materi untuk menguasai pemrograman berorientasi objek.</p>
          <div className={styles.heroButtons}>
            <Link className="button button--secondary button--lg" to="/docs/pertemuan-1">
              🚀 Mulai Belajar Sekarang
            </Link>
            <Link className="button button--outline button--lg" to="/blog" style={{ marginLeft: "1rem" }}>
              📚 Lihat Blog
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title} - Platform Pembelajaran PBO Terbaik`} description="Platform pembelajaran Pemrograman Berorientasi Objek terbaik dengan materi interaktif, tutorial praktis, dan studi kasus nyata.">
      <HomepageHeader />
      <main>
        {/* Learning Path Section */}
        <section className={styles.pathSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Rencana Pembelajaran</h2>
              <p className={styles.sectionSubtitle}>Ikuti roadmap yang untuk menguasai PBO</p>
            </div>
            <div className={styles.pathSteps}>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Class, Object, Method, Package, Constructor, Variabel</h3>
                <p>Mempelajari dasar-dasar pemrograman berorientasi objek di Java melalui konsep kelas, objek, metode, paket, konstruktor, dan variabel.</p>
              </div>
              <div className={styles.pathArrow}>→</div>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Konstanta Primitive, Reference Types, Kondisional, Looping</h3>
                <p>Memahami tipe data primitif, tipe referensi, serta struktur kontrol seperti percabangan dan perulangan.</p>
              </div>
              <div className={styles.pathArrow}>→</div>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Exception, Assertion, Character, dan String</h3>
                <p>Mempelajari penanganan error menggunakan exception, penggunaan assertion, serta manipulasi data karakter dan string.</p>
              </div>
              <div className={styles.pathArrow}>→</div>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Array dan Collection</h3>
                <p>Mengenal struktur data array dan koleksi untuk mengelola data dengan lebih fleksibel.</p>
              </div>
              <div className={styles.pathArrow}>→</div>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>5</div>
                <h3>Input / Output</h3>
                <p>Mempelajari cara membaca dan menulis data menggunakan fitur I/O di Java.</p>
              </div>
              <div className={styles.pathArrow}>→</div>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>6</div>
                <h3>Enkapsulasi dan Inheritance</h3>
                <p>Memahami prinsip OOP berupa penyembunyian data (enkapsulasi) serta pewarisan (inheritance).</p>
              </div>
              <div className={styles.pathArrow}>→</div>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>7</div>
                <h3>Polimorfisme dan Abstract Class Interface</h3>
                <p>Mempelajari konsep polimorfisme dalam OOP serta penggunaan class abstrak dan interface.</p>
              </div>
              <div className={styles.pathArrow}>→</div>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>8</div>
                <h3>Multithreading</h3>
                <p>Mengenal cara membuat program yang dapat menjalankan beberapa proses secara bersamaan menggunakan thread.</p>
              </div>
              <div className={styles.pathArrow}>→</div>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>9</div>
                <h3>GUI Programming</h3>
                <p>Mempelajari pembuatan aplikasi dengan antarmuka grafis (Graphical User Interface).</p>
              </div>
              <div className={styles.pathArrow}>→</div>
              <div className={styles.pathStep}>
                <div className={styles.stepNumber}>10</div>
                <h3>Testing dan Dokumentasi</h3>
                <p>Mempelajari cara menguji program untuk memastikan kualitas serta menulis dokumentasi yang baik.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Siap Memulai Perjalanan Belajar PBO?</h2>
              <div className={styles.ctaButtons}>
                <Link className="button button--primary button--lg" to="/docs/pertemuan-1">
                  Mulai Sekarang
                </Link>
                <Link className="button button--outline button--lg" to="/blog">
                  Lihat Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
