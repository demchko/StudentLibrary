'use client';
import BookService from "@/BookService"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useMediaQuery } from "react-responsive";
import { title } from "process";

const categories = [
    {id: 17, title: 'Усі'},
    {id: 1, title: 'Архітектура та будівництво'},
    {id: 2, title: 'Біологія'},
    {id: 3, title: 'Геодезія'},
    {id: 4, title: 'Економіка'},
    {id: 5, title: 'Екологія'},
    {id: 6, title: 'Історія'},
    {id: 7, title: 'Програмування'},
    {id: 8, title: 'Мистецтво'},
    {id: 9, title: 'Політологія'},
    {id: 10, title: 'Право'},    
    {id: 11, title: 'Педагогіка'},    
    {id: 12, title: 'Соціологія'},    
    {id: 13, title: 'Національна безпека'},    
    {id: 14, title: 'Філологія'},    
    {id: 15, title: 'Філософія'},    
    {id: 16, title: 'Хімія'},    
]

const years = [
    {id: 1, title: 'Усі'},
    {id: 2, title: '2000'},
    {id: 3, title: '2001'},
    {id: 4, title: '2002'},
    {id: 5, title: '2003'},
    {id: 6, title: '2004'},
    {id: 7, title: '2005'},
    {id: 8, title: '2006'},
    {id: 9, title: '2007'},
    {id: 10, title: '2008'},
    {id: 11, title: '2009'},
    {id: 12, title: '2010'},
    {id: 13, title: '2011'},
    {id: 14, title: '2012'},
    {id: 15, title: '2013'},
    {id: 16, title: '2014'},
    {id: 17, title: '2015'},
    {id: 18, title: '2016'},
    {id: 19, title: '2017'},
    {id: 20, title: '2018'},
    {id: 21, title: '2019'},
    {id: 22, title: '2020'},
    {id: 23, title: '2021'},
    {id: 24, title: '2022'},
    {id: 25, title: '2023'},
    {id: 26, title: '2024'},
]

export const Sidebar = ({input, setInput, books, setBooks}) => {

    const filterByGenre = (genre:string) => {
        const fetchData = async () => {
            try {
              if(genre === 'Усі'){
                const bookService = BookService.getInstance();
                const fetchedBooks = await bookService.getBooks('Book');
                setBooks(fetchedBooks);
              } else{
                const bookService = BookService.getInstance();
                const fetchedBooks = await bookService.getBooksByGenre(genre);
                setBooks(fetchedBooks);
              }
              console.log(fetchedBooks)
            } catch (error) {
              console.error('Error fetching books data:', error);
            }
        }
        fetchData();  
    }

    const filterByYear = (year:string) => {
        const fetchData = async () => {
            try {
              if(year === 'Усі'){
                const bookService = BookService.getInstance();
                const fetchedBooks = await bookService.getBooks('Book');
                setBooks(fetchedBooks);
              } else{
                const bookService = BookService.getInstance();
                const fetchedBooks = await bookService.getBooksByYear(year);
                setBooks(fetchedBooks);
              }
              console.log(fetchedBooks)
            } catch (error) {
              console.error('Error fetching books data:', error);
            }
        }
        fetchData();  
    }


    const isSmall = useMediaQuery({ query: '(max-width: 750px)' });

    return (
        <div className={isSmall ? "w-full" : "w-1/6 pr-7"} >
            {!isSmall && <p className="text-lg font-bold" >Назва</p>}
            <Input placeholder='Пошук' value={input} onChange={e => setInput(e.target.value)} className="rounded-xl bg-transparent" />
            {!isSmall && <p className="text-lg font-bold mt-5" >Рік випуску</p>}
            <Select onValueChange={(e) => filterByYear(e)} >
                <SelectTrigger className="w-full bg-transparent">
                     <SelectValue placeholder="Оберіть рік" className="mt-2" />
                </SelectTrigger>
                <SelectContent className="bg-[#1c1c1c] text-white" >
                    <SelectGroup>
                        {years.map(year => (
                            <SelectItem key={year.id} value={year.title}>{year.title}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            {!isSmall && <p className="text-lg font-bold mt-5" >Категорія</p>}
            <Select onValueChange={(e) => filterByGenre(e)} >
                <SelectTrigger className="w-full bg-transparent mt-2">
                     <SelectValue placeholder="Оберіть категорію" />
                </SelectTrigger>
                <SelectContent className="bg-[#1c1c1c] text-white" >
                    <SelectGroup>
                        {categories.map(category => (
                            <SelectItem key={category.id} value={category.title}>{category.title}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}