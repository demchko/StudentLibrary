'use client'
import { Button } from "../ui/button";
import { CustomButton } from "./CustomButtom";
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { SelectGroup } from "@radix-ui/react-select";

export const Footer = () => {
    const router = useRouter();
    const [arr, setArr] = useState([]);
    const [selectedUniversityId, setSelectedUniversityId] = useState<number>();
    const [error, setError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [login, setLogin] = useState<boolean>(false);
    const [register, setRegister] = useState<boolean>(false);
    const [loginISIC, setLoginISIC] = useState<string>('');
    const [loginPassword, setLoginPassword] = useState<string>('');

    const [registerISIC, setRegisterISIC] = useState<string>('');
    const [registerPassword, setRegisterPassword] = useState<string>('');
    const [registerPasswordRepeat, setRegisterPasswordRepeat] = useState<string>('');
    const [registerFirstName, setRegisterFirstName] = useState<string>('');
    const [registerLastName, setRegisterLastName] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:1488/auth/sign-up');
            setArr(response.data);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:1488/auth/log-in', { isic: loginISIC, password: loginPassword }, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });

    
            if(response.status === 200){
                setRegister(false);
                router.push('/books');
                setError(false);
            }
        } catch (error) {
          console.error(error);
          setError(true);
        }
      };

    const handleRegister = async(e) => {
        e.preventDefault();
        if(registerPassword === registerPasswordRepeat){
            try {
                const response = await axios.post('http://localhost:1488/auth/sign-up',
                 {  isic: registerISIC, 
                    university_id: selectedUniversityId,
                    first_name: registerFirstName,
                    last_name: registerLastName,
                    password: registerPassword
                }, {
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
        
              if(response.status === 200){
                  setRegister(false);
                  router.push('/books');
                  setError(false);
                  setPasswordError(false);
              }
            } catch (error) {
              console.error(error);
              setError(true);
            }
        }else{
            setPasswordError(true);
        }
    }  

    return (
        <div className="bg-[#4e5360] w-full flex justify-center items-center text-white pt-6 pb-6" style={{height: '90px'}} >
             <div className="flex" >
             <Dialog open={login} onOpenChange={() => setLogin(!login)}>
                    <DialogTrigger asChild>
                        <CustomButton onClick={() => setLogin(true)} >Увійти</CustomButton>
                    </DialogTrigger>
                    <DialogContent className="bg-gradient-to-b from-[#6B7181] to-[#A08C75] " >
                        <DialogHeader>
                            <DialogTitle className="text-3xl" >Вхід в особистий кабінет</DialogTitle>
                        </DialogHeader>
                        <div className="text-center" >
                            <Input value={loginISIC} onChange={e => setLoginISIC(e.target.value)} placeholder="Номер студентського" className="mb-3 border-2 border-black text-center"/>
                            <Input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="Пароль" className="mb-3 border-2 border-black text-center" />
                            <p className="text-red-500 font-bold" >{error && "Неправильні дані"}</p>
                            <Button className="bg-black pl-7 pr-7" onClick={e => handleSubmit(e)} >Увійти</Button>
                            <div className="flex justify-center items-center mt-7" >
                                <Checkbox />
                                <p className="ml-1 font-bold" >Запам'ятати мене</p>
                            </div>
                            <div className="flex justify-center mt-5"  >
                                <p>Не маєте профілю? </p>
                                <p className="ml-1 text-blue-600 font-bold cursor-pointer" onClick={() => {
                                    setLogin(false);
                                    setRegister(true);
                                    setError(false);
                                }} >Зареєструватися</p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog open={register} onOpenChange={() => setRegister(!register)} >
                    <DialogTrigger asChild>
                        <CustomButton className="ml-4" onClick={() => setRegister(true)} >Зареєструватися</CustomButton>
                    </DialogTrigger>
                    <DialogContent className="bg-gradient-to-b from-[#6B7181] to-[#A08C75] " >
                        <DialogHeader>
                            <DialogTitle className="text-3xl" >Реєстрація</DialogTitle>
                        </DialogHeader>
                        <div className="text-center" >
                            <Input placeholder="Ім'я" value={registerFirstName} onChange={e => setRegisterFirstName(e.target.value)} className="mb-3 border-2 border-black text-center"  />
                            <Input placeholder="Прізвище"  value={registerLastName} onChange={e => setRegisterLastName(e.target.value)} className="mb-3 border-2 border-black text-center" />
                            <Select onValueChange={e => setSelectedUniversityId(e.id)}>
                                <SelectTrigger className="mb-3 border-2 border-black text-center" >
                                    <SelectValue placeholder="Оберіть ваш університет" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Університети</SelectLabel>
                                        {
                                            arr.map(item => (
                                                <SelectItem key={item.id} value={item}>{item.name}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Input value={registerISIC} onChange={e => setRegisterISIC(e.target.value)} placeholder="Номер студентського" className="mb-3 border-2 border-black text-center"/>
                            <Input type="password" placeholder="Пароль" className="mb-3 border-2 border-black text-center"  value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} />
                            <Input type="password" placeholder="Підтвердіть пароль"  className="mb-3 border-2 border-black text-center" value={registerPasswordRepeat} onChange={e => setRegisterPasswordRepeat(e.target.value)} />
                            <p className="text-red-500 font-bold" >{passwordError && "Паролі не збігаються"}</p>
                            <p className="text-red-500 font-bold" >{error && "Невірні дані"}</p>
                            <Button className="bg-black" onClick={e => handleRegister(e)} >Зареєструватися</Button>
                            <div className="flex justify-center mt-5" >
                                <p>Ви вже маєте акаунт? </p>
                                <p className="ml-1 text-blue-600 font-bold cursor-pointer" onClick={() => {
                                setRegister(false);
                                setLogin(true);
                                setError(false);
                            }} >Увійти</p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}