'use client'
import { Header } from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import BookService from "@/BookService";

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

    return (
        <div className="bg-gradient-to-b from-[#9C8971] to-[#6B7181]" style={{ minHeight: '100vh' }}>
            <Header />
            {
                loading 
                    ? <div className="w-full h-[100vh] flex justify-center items-center" >
                        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status" />
                    </div>
                    :  <div className="pl-7 pr-7 pt-7 flex w-full">
                            <div className="w-1/3 flex justify-end">
                                {book.photo && (
                                    <img src={`data:image/jpeg;base64,${book.photo}`} alt="Photo" />
                                )}
                            </div>
                            <div className="ml-5" style={{ width: '70%' }}>
                                <p className="text-5xl font-bold">{book.title} - {book.author}</p>
                                <p className="mt-8 text-lg pr-10 pl-10">Опис: {book.description}</p>
                                <p className="mt-8 text-lg pr-10 pl-10">Жанр: {book.genre}</p>
                                <div className="w-full flex justify-end items-end" style={{ marginTop: '30%' }}>
                                    <Button variant="ghost" size="lg" className="text-black border-2 border-black bg-[#48647f] text-lg" onClick={openFile}>Відкрити</Button>
                                    <Button
                                        variant="ghost"
                                        size="lg"
                                        className="ml-5 text-black border-2 border-black pl-8 pr-8 bg-[#48647f] text-lg"
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
