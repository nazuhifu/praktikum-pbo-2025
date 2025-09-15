import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Konsep Dasar OOP",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Pelajari prinsip-prinsip fundamental pemrograman berorientasi objek seperti encapsulation, inheritance, polymorphism, dan abstraction dengan pendekatan yang mudah dipahami.</>,
  },
  {
    title: "Implementasi Praktis",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Praktikkan konsep PBO melalui contoh-contoh nyata dan studi kasus yang relevan dengan pengembangan aplikasi modern menggunakan Java.</>,
  },
  {
    title: "Proyek Real-World",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Bangun aplikasi lengkap menggunakan konsep PBO yang telah dipelajari, dari perencanaan hingga implementasi dan testing.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            Fitur Pembelajaran Unggulan
          </Heading>
          <p className={styles.featuresSubtitle}>Platform pembelajaran PBO yang dirancang khusus untuk membantu Anda menguasai pemrograman berorientasi objek</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
