import { Footer } from "@/components/custom/Footer";
import { Header } from "@/components/custom/Header";
import Image from "next/image";
import OwlMain from "../../public/main.svg";
const height = "calc(100vh - 190px)";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-[#121212] flex justify-center items-center w-full" style={{ height }}>
        <div className="text-center w-1/2" >
          <p className="text-4xl text-[#6b1dae]" >Студентська бібліотека</p>
          <p className="text-white mt-4 text-lg" >"Тільки книжки перетворять подив у допитливість. Тільки читання відкриває перед людиною розкіш інтелектуального життя." (В. О. Сухомлинський)</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
