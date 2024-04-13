import { Button } from "../ui/button";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "./CustomButtom";

export const Header = () => {
    return (
        <div className="bg-[#4e5360] w-full flex justify-between items-center text-white pl-5 pr-5 pt-6 pb-6" style={{height: '100px'}} >
            <Link href="/" >
                <div className="flex items-center" >
                    <Image src={Logo} alt="logo" />
                    <p className="font-italic text-2xl ml-2 font-bold text-[#AEB4C1]" >NovelNest</p>
                </div>
            </Link>
            <div>
                <CustomButton>Книги</CustomButton>
                <CustomButton className="ml-4" >Дипломні та курсові роботи</CustomButton>
                <CustomButton className="ml-4" >Реферати</CustomButton>
            </div>
        </div>
    )
}