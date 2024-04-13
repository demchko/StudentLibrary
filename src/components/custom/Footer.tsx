import { Button } from "../ui/button";
import { CustomButton } from "./CustomButtom";
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";

export const Footer = () => {
    return (
        <div className="bg-[#4e5360] w-full flex justify-center items-center text-white pt-6 pb-6" style={{height: '90px'}} >
             <div className="flex" >
                <CustomButton>Увійти</CustomButton>
                <Dialog>
                    <DialogTrigger asChild>
                        <CustomButton className="ml-4" >Зареєструватися</CustomButton>
                    </DialogTrigger>
                    <DialogContent className="bg-gradient-to-b from-[#6B7181] to-[#A08C75] " >
                        <DialogHeader>
                            <DialogTitle className="text-3xl" >Реєстрація</DialogTitle>
                        </DialogHeader>
                        <div className="text-center" >
                            <Input placeholder="Ім'я" className="mb-3 border-2 border-black text-center"  />
                            <Input placeholder="Прізвище" className="mb-3 border-2 border-black text-center" />
                            <Input placeholder="Номер студентського" className="mb-3 border-2 border-black text-center"/>
                            <Input placeholder="Пароль" className="mb-3 border-2 border-black text-center" />
                            <Input placeholder="Підтвердіть пароль"  className="mb-3 border-2 border-black text-center"/>
                            <Button className="bg-black" >Зареєструватися</Button>
                            <div className="flex justify-center mt-5" >
                                <p>Ви вже маєте акаунт? </p>
                                <p className="ml-1 text-blue-600 font-bold" >Увійти</p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}