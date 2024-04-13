import { Footer } from "@/components/custom/Footer";
import { Header } from "@/components/custom/Header";
import Image from "next/image";
import OwlMain from "../../public/main.svg";
const height = "calc(100vh - 190px)";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-[#9C8971] to-[#6B7181] flex justify-center items-center" style={{ height }}>
        <Image src={OwlMain} alt="OwlMain" width={650}/>
      </div>
      <Footer />
    </div>
  );
}
