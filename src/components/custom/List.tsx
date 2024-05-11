'use client'
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export const List = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:1488/library');
                setBooks(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching photo data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(books);


    return (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10" style={{width: '70%'}} >
            {books.map((item, index) => (
                <Link href={`/books/${index+1}`} >
                    <div className="bg-[#7b746f] rounded-xl text-center pt-5 pb-5 h-[350px]" >
                        <div className="flex justify-center" >
                            {item.photo && (
                             <img src={`data:image/jpeg;base64,${item.photo}`} alt="Photo" className="h-[250px]" />
                            )}  
                        </div>
                        <p className="mt-1 font-bold" >{item.title}</p>
                        <Button className="bg-white pl-6 pr-6 font-semibold" variant="ghost" >Перейти</Button>
                    </div>
                </Link>
            ))}
        </div>
    )
}