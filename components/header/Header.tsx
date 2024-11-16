import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <h2 className={styles.home}>Home</h2>
      </Link>

      <Link href={"/about"}>
        <h2 className={styles.about}>About</h2>
      </Link>
    </div>
  );
}
