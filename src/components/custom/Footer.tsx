import { Button } from "../ui/button";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "./CustomButtom";

export const Footer = () => {
    return (
        <div className="bg-[#4e5360] w-full flex justify-center items-center text-white pt-6 pb-6" style={{height: '90px'}} >
             <div className="flex" >
                <CustomButton>Увійти</CustomButton>
                <CustomButton className="ml-4" >Зареєструватися</CustomButton>
            </div>
        </div>
    )
}