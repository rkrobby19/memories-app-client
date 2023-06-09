import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Memories App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.landing}>
          <h1 className={`${styles.hero} fw-bold`}>MEMORIES</h1>
          <p className="text-capitalize">
            keep your memories in touch and share with others
          </p>
        </div>
      </main>
    </>
  );
}
