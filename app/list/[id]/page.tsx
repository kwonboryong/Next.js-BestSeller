import styles from "../../../styles/Detail.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
}

export default function Home() {
  return (
    <div >
      <h2>$카테고리 Books</h2>
      <p>베스트셀러 각 카테고리 별 책의 리스트</p>
    </div>
  );
}
