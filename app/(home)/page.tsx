import styles from "./Home.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The New York Times"
};

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>The New York Times Best Seller Explorer</h2>
      <div className={styles.listBox}>
        <p>베스트셀러 전체 리스트</p>
      </div>
    </div>
  );
}
