'use client'
import { Header } from "@/components/custom/Header";
import Image from "next/image";
import { useParams } from "next/navigation"
import BookImg from "../../../../public/shpak.svg";
import { Button } from "@/components/ui/button";

export default function ItemPage(){
    const {bookId} = useParams();
    return (
        <div className="bg-gradient-to-b from-[#9C8971] to-[#6B7181]" style={{minHeight: '100vh'}} >
            <Header />
            <div className="pl-7 pr-7 pt-7 flex w-full" >
                <div className="w-1/3 flex justify-end"  >
                    <Image src={BookImg} alt={"Book Name"} className="w-full" />
                </div>
                <div className="ml-5" style={{width: '70%'}} >
                    <p className="text-5xl font-bold" >Програмування мовою С - Шпак З.Я.</p>
                    <p className="mt-8 text-lg pr-10 pl-10" >Навчальний посібник достатньо ґрунтовно охоплює різні аспекти програмування мовою С. У початкових розділах розглянуто синтаксис та семантику всіх конструктивних компонентів мови: лексем, виразів, операторів, функцій. Значну увагу приділено різновидам стандартних і користувацьких типів даних. Другу половину посібника присвячено програмним реалізаціям практичних задач. У додатках подано повні описи функцій з основних бібліотек С.</p>
                    <div className="w-full flex justify-end items-end" style={{marginTop: '30%'}} >
                        <Button variant="ghost" size="lg" className="text-black border-2 border-black bg-[#48647f] text-lg" >Відкрити</Button>
                        <Button variant="ghost" size="lg" className="ml-5 text-black border-2 border-black pl-8 pr-8 bg-[#48647f] text-lg" >Завантажити</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}