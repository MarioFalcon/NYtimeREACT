import { FC, useCallback, useEffect, useState } from "react"
import { getListBooks } from "../../services/nytime";
import { Book } from "../../models/Book";
import Card from "../../components/Card"


const Books: FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSetBooks = useCallback(async () => {
    const categoriesList = await getListBooks(
      "combined-print-and-e-book-fiction"
    );

    setBooks(categoriesList);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleSetBooks();
  }, [handleSetBooks]);

  if (isLoading) {
    return <div>CARGANDO...</div>;
  }

  return (
    <div className="booksContainer">
      <div className="books">
        {books.map((book ) => (
            <Card key={book.title} title={book.title} extraInfo={book.author}/>
        ))}
      </div>
    </div>
  )
}

export default Books;



