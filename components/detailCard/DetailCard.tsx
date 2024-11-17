import styles from "./DetailCard.module.css";
import { DETAIL_URL } from "../../constants";

export async function getBooksByCategory(categoryId: string) {
  const response = await fetch(`${DETAIL_URL}${categoryId}`);
  const json = await response.json();
  return json;
}

export default async function DetailCard({ book }: { book: any }) {
  return (
    <div className={styles.card}>
      <img src={book.book_image} alt={book.title} className={styles.image} />
      <div className={styles.details}>
        <h1 className={styles.title}>{book.title}</h1>
        <h3 className={styles.author}>{book.author}</h3>
        <p className={styles.description}>{book.description}</p>
        {book.amazon_product_url && (
          <a
            href={book.amazon_product_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Amazon에서 보기 &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
