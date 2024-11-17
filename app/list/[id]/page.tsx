import styles from "./Detail.module.css";
import DetailCard, { getBooksByCategory } from "../../../components/detailCard/DetailCard";

type IParams = Promise<{
  id: string;
}>;

export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  const categoryData = await getBooksByCategory(id); 
  
  const categoryName = categoryData.results?.display_name || 'Books';
  
  return {
    title: `${categoryName}`,
  };
}

export default async function Detail(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
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
