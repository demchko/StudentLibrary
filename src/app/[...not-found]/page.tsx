import Image from "next/image";
import ErrorSVG from "../../../public/error.svg";

export default function Error(){
    return (
        <div className="bg-[#4e5360] flex justify-center items-center" style={{height: "100vh"}} >
            <Image src={ErrorSVG} alt="Error page" />
        </div>
    )
}