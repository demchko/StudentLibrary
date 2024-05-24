'use client'
import { useMediaQuery } from "react-responsive";
import { Button } from "../ui/button";
import Link from "next/link";

interface Book {
    photo: string;
    title: string;
    id: number;
}

export const List = ({data}) => {
    const isSmall = useMediaQuery({ query: '(max-width: 750px)' });
    return (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10" style={isSmall ? {width: '100%'} : {width: '70%'}} >
            {data.map((item: Book) => (
                <Link href={`/books/${item.id}`} >
                    <div className="bg-[#1c1c1c] rounded-xl text-center pt-5 pb-5 hover:shadow-sm hover:shadow-gray-600 hover:scale-105 transition-all duration-300 ease-in-out" >
                        <div className="flex justify-center" >
                            {item.photo && (
                             <img src={`data:image/jpeg;base64,${item.photo}`} alt="Photo" className="h-[250px] w-[200px]" style={{objectFit: 'cover'}} />
                            )} 
                        </div>
                        <p className="mt-3 font-bold text-lg border-b border-gray-500" >{item.title}</p>
                        <Button className="bg-white text-black pl-6 pr-6 font-semibold mt-2" variant="ghost" size="lg" >Перейти</Button>
                    </div>
                </Link>
            ))}
        </div>
    )
}