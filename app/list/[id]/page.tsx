import styles from "./Detail.module.css";
import DetailCard, { getBooksByCategory } from "../../../components/detailCard/DetailCard";

type IParams = {
  id: string;
};

export default async function Detail({ params }: { params: IParams }) {
  const { id } = params; 
  console.log(id); 

  const categoryData = await getBooksByCategory(id); 
  const books = categoryData.results?.books || [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{categoryData.results?.display_name} Books</h2>

      <div className={styles.listBox}>
        {books.map((book) => (
          <DetailCard key={book.primary_isbn13} book={book} />
        ))}
      </div>
    </div>
  );
}
