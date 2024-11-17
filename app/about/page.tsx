import styles from "./About.module.css";
import { Metadata } from "next";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About us</h2>
      <p className={styles.description}>
        Welcome th the official explorer for The New York Times Best Seller List
        explorer.
      </p>
    </div>
  );
}
