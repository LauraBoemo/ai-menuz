import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return ( 
    <div className={styles.page}>
      <header>
        <Image
          className={styles.image01}
          src="/static/garlic.svg"
          alt="Garlic"
          width={180}
          height={80}
        /> 
        <Image
          className={styles.image02}
          src="/static/onion.svg"
          alt="Onion"
          width={220}
          height={120}
        /> 
        <h1 className={styles.logoTitle}>
          My Menu
        </h1>
      </header>
      <main>
        <Image
          className={styles.image03}
          src="/static/seasoning.svg"
          alt="Seasoning"
          width={250}
          height={150}
        /> 
        <Image
          className={styles.image04}
          src="/static/mint.svg"
          alt="Mint"
          width={250}
          height={150}
        /> 
        <p>
          Upload Image!
        </p>
      </main>
      <footer>
        <Image
          className={styles.image05}
          src="/static/receipt.svg"
          alt="receipt"
          width={350}
          height={250}
        /> 
        <p>
          Powered by AI
        </p>
      </footer>
    </div>
  );
}