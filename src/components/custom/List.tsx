import Image from "next/image";
import BookImg from "../../../public/shpak.svg";
import { Button } from "../ui/button";

export const List = () => {
    return (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10" style={{width: '70%'}} >
            {Array.from({length: 10}).map((_, index) => (
                <div className="bg-[#636875] rounded-xl text-center pt-5 pb-5" >
                    <div className="flex justify-center" >
                        <Image src={BookImg} alt={"Book Name"} />
                    </div>
                    <p className="mt-1 font-bold" >Програмування мовою С - Шпак З.Я.</p>
                    <Button className="bg-white" variant="ghost" >Перейти</Button>
                </div>
            ))}
        </div>
    )
}