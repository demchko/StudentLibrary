import { Button, ButtonProps } from "../ui/button"

export const CustomButton = ({className, ...props}: ButtonProps) => {
    return (
        <Button className={`border-2 border-[#B59875] text-[#B59875] text-lg bg-transparent rounded-xl hover:bg-[#373C4C] transition-all duration-300 ease-in-out ${className}`} {...props} />
    )
}