'use client';
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "./CustomButton";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export const Header = () => {
    const [user, setUser] = useState({});
    const router = useRouter();

    useEffect(() => {
        const loginData = localStorage.getItem('loginData');

        if (loginData) {
            setUser(JSON.parse(loginData));
        }
    }, []);

    const isSmall = useMediaQuery({ query: '(max-width: 767px)' })

    return (
        <div className="bg-[#121212] w-full flex justify-between items-center text-white pl-5 pr-5 pt-6 pb-6" style={{height: '100px'}} >
            <Link href="/" >
                <div className="flex items-center" >
                    <Image src={Logo} alt="logo" />
                    <p className="font-italic text-2xl ml-2 font-bold" >NovelNest</p>
                </div>
            </Link>
           {
            isSmall
                ? <DropdownMenu>
                <DropdownMenuTrigger className="mr-2" >Menu</DropdownMenuTrigger>
                <DropdownMenuContent>
                    {
                        user?.name && <div>
                            <DropdownMenuLabel className="w-full" >{user?.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                        </div>
                    }
                  <DropdownMenuItem>
                    <Link href="/books" ><CustomButton className="hover:shadow-white hover:shadow-sm transition-all duration-300 ease-in-out" >Книги</CustomButton></Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/courseworks" ><CustomButton className="hover:shadow-white hover:shadow-sm transition-all duration-300 ease-in-out" >Дипломні та курсові роботи</CustomButton></Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  {user?.name && <Button onClick={() => {
                        localStorage.removeItem('loginData');
                        setUser({});
                        router.push('/');
                    }} variant="outline" className="text-black w-full" >Logout</Button>}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
                :  <div className="flex items-center" >
                <Link href="/books" ><CustomButton className="hover:shadow-white hover:shadow-sm transition-all duration-300 ease-in-out" >Книги</CustomButton></Link>
                <Link href="/courseworks" ><CustomButton className="ml-4 hover:shadow-white hover:shadow-sm transition-all duration-300 ease-in-out" >Дипломні та курсові роботи</CustomButton></Link>
                <CustomButton className="ml-4" >Реферати</CustomButton>
                    {
                        user?.name && <div className="bg-white w-16 h-16 rounded-full text-black flex justify-center items-center text-[12px] text-center" >
                            {user?.name}
                        </div>
                    }
                    {user?.name && <Button onClick={() => {
                        localStorage.removeItem('loginData');
                        setUser({});
                        router.push('/');
                    }} variant="outline" className="text-black ml-3" >Logout</Button>}
            </div>
           }
        </div>
    )
}