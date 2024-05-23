'use client'
import BookService from "@/BookService";
import { Header } from "@/components/custom/Header";
import { List } from "@/components/custom/List";
import { Sidebar } from "@/components/custom/Sidebar";
import { useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { useMediaQuery } from "react-responsive";

export default function Books(){
    const [books, setBooks] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    let loginData;

    useEffect(() => {
      loginData = localStorage.getItem('loginData');
  
      if (loginData) {
        setLoading(false);
      }
      else{
        router.push('/');
        setLoading(true);
      }
    }, [router]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const bookService = BookService.getInstance();
            const fetchedBooks = await bookService.getBooks('Book');
            console.log(fetchedBooks);
            setBooks(fetchedBooks);
          } catch (error) {
            console.error('Error fetching books data:', error);
          }
        };
    
        fetchData();
      }, []);

    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(input.toLowerCase()));
    const isSmall = useMediaQuery({ query: '(max-width: 750px)' });

    console.log(books);

    return (
        <div className="bg-[#121212] text-white" style={{minHeight: '100vh'}} >
            {
              !loading
               ? <div>
                <Header />
            <div className={isSmall ? "pl-7 pr-7 pt-2" : "pl-7 pr-7 pt-2 flex justify-between"} >
                <Sidebar input={input} setInput={setInput} books={books} setBooks={setBooks} />
                <List data={filteredBooks} />
            </div>
               </div>
             : <div className="w-full h-[100vh] flex justify-center items-center" >
             <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-white align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
             role="status" />
         </div>  
            }
        </div>
    )
}