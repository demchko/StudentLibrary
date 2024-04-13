import { Header } from "@/components/custom/Header";
import { List } from "@/components/custom/List";
import { Sidebar } from "@/components/custom/Sidebar";

export default function Books(){
    return (
        <div className="bg-gradient-to-b from-[#9C8971] to-[#6B7181]" style={{minHeight: '100vh'}} >
            <Header />
            <div className="pl-7 pr-7 pt-2 flex justify-between" >
                <Sidebar />
                <List />
            </div>
        </div>
    )
}