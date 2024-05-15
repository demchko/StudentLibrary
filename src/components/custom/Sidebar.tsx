import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"

const categories = [
    {id: 1, title: 'Архітектура та будівництво'},
    {id: 2, title: 'Біологія'},
    {id: 3, title: 'Геодезія'},
    {id: 4, title: 'Економіка'},
    {id: 5, title: 'Екологія'},
    {id: 6, title: 'Історія'},
    {id: 7, title: 'IT'},
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

export const Sidebar = ({input, setInput}) => {
    return (
        <div className="w-1/6" >
            <p className="text-lg font-bold" >Назва</p>
            <Input placeholder='Пошук' value={input} onChange={e => setInput(e.target.value)} className="rounded-xl bg-transparent border-2 border-black text-black placeholder:text-black" />
            <p className="text-lg font-bold mt-2" >Рік випуску</p>
            <div className="flex" >
                <Checkbox />
                 <p>до 2010</p>
            </div>
            <div className="flex" >
                <Checkbox />
                 <p>2010-2020</p>
            </div>
            <div className="flex" >
                <Checkbox />
                 <p>після 2020</p>
            </div>
            <p className="text-lg font-bold mt-2" >Категорія</p>
            {categories.map(category => (
                <div key={category.id} className="flex items-center" >
                    <Checkbox />
                    <p className="ml-1 font-bold" >{category.title}</p>
                </div>
            ))}
        </div>
    )
}