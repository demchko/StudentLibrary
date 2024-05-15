'use client'
import BookService from "@/BookService";
import { Header } from "@/components/custom/Header";
import { List } from "@/components/custom/List";
import { Sidebar } from "@/components/custom/Sidebar";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function Books(){
    const [courseWorks, setCourseWorks] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const bookService = BookService.getInstance();
            const fetchedBooks = await bookService.getBooks('CourseWork');
            setCourseWorks(fetchedBooks);
          } catch (error) {
            console.error('Error fetching books data:', error);
          }
        };
    
        fetchData();
      }, []);

    const filteredBooks = courseWorks.filter(book => book.title.toLowerCase().includes(input.toLowerCase()));

    return (
        <div className="bg-gradient-to-b from-[#9C8971] to-[#6B7181]" style={{minHeight: '100vh'}} >
            <Header />
            <div className="pl-7 pr-7 pt-2 flex justify-between" >
                <Sidebar input={input} setInput={setInput} />
                <List data={filteredBooks} />
            </div>
        </div>
    )
}