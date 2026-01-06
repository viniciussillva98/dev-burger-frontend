import { MyButton } from "./styles";

export function Button({ children, ...props }) {

    return (
        <MyButton {...props}>{children}</MyButton>
    )
}

