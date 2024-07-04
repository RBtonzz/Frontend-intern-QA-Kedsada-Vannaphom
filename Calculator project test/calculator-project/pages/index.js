import Head from "next/head";
import Calculator from "./components/Calculator";
import styles from "@/styles/Main.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calculator Tester Project</title>
      </Head>
      <main className={styles.MainContainer}>
        <Calculator />
      </main>
    </div>
  );
}
