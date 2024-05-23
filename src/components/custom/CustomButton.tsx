import { Button, ButtonProps } from "../ui/button"

export const CustomButton = ({className, ...props}: ButtonProps) => {
    return (
        <Button variant="ghost" className={`text-lg bg-transparent rounded-xl ${className}`} {...props} />
    )
}