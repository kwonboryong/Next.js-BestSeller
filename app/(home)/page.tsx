import Book from "../../components/book/Book";
import { API_URL } from "../../constants";
import styles from "./Home.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The New York Times",
};

async function getBestSeller() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const bestSeller = await getBestSeller();

  const books = Array.isArray(bestSeller.results) ? bestSeller.results : [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>The New York Times Best Seller Explorer</h2>

      <div className={styles.listBox}>
        {books.map((book) => (
          <Book key={book.list_name_encoded} id={book.list_name_encoded} display_name={book.display_name} />
        ))}
      </div>
    </div>
  );
}
