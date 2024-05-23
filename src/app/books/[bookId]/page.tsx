'use client'
import { Header } from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import BookService from "@/BookService";
import { useMediaQuery } from "react-responsive";

interface Book {
    title: string;
    author?: string;
    description: string;
    photo: string;
    file: string;
    genre: string;
}

export default function ItemPage() {
    const { bookId } = useParams();
  const [book, setBook] = useState({} as Book);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const bookService = BookService.getInstance();
        const fetchedBook = await bookService.getBook(bookId as string);
        setBook(fetchedBook);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [bookId]);

  console.log(book);

    const openFile = () => {
        const byteCharacters = atob(book.file);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    };

    const downloadFile = () => {
        const byteCharacters = atob(book.file);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
      
        // Створюємо штучну кнопку для завантаження файлу
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = `${book.title}.pdf`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };

    const isSmall = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div className="bg-[#121212]" style={{ minHeight: '100vh' }}>
            <Header />
            {
                loading 
                    ? <div className="w-full h-[100vh] flex justify-center items-center" >
                        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-white align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status" />
                    </div>
                    :  <div className={isSmall ? "flex flex-col" : "pl-7 pr-7 pt-7 flex w-full"}>
                            <div className={isSmall ? "w-[90vw] h-[600px] flex justify-end ml-[7%]" : "w-[400px] h-[600px] flex justify-end ml-[7%]"} style={{objectFit: 'cover'}}>
                                {book.photo && (
                                    <img  src={`data:image/jpeg;base64,${book.photo}`} alt="Photo" className="rounded-xl" />
                                )}
                            </div>
                            <div className="ml-5 text-white" style={isSmall ? {width: '100%'} : { width: '70%' }}>
                                <p className={isSmall ? "text-5xl font-bold text-center" : "text-5xl font-bold"}>{book.title} - {book.author}</p>
                                <p className="mt-8 text-lg pr-10 pl-10">Опис: {book.description}</p>
                                <p className="mt-8 text-lg pr-10 pl-10">Жанр: {book.genre}</p>
                                <div className="w-full" style={{ marginTop: '10%' }}>
                                    <Button size="lg" className="text-lg bg-white text-black" size="lg" onClick={openFile}>Відкрити</Button>
                                    <Button
                                        size="lg"
                                        className="ml-5 text-white bg-transparent border-2 border-white pl-8 pr-8 text-lg"
                                        onClick={downloadFile}
                                    >
                                        Завантажити
                                    </Button>
                            </div>
                    </div>
                </div>   
            }
        </div>
    )
}
