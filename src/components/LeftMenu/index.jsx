import { menuOptions } from "./menuOptions";
import { Container, Option, OptionContainer, Footer, LogoutLink } from "./styles";
import logo from "../../assets/burger.png"
import { useUser } from "../../hooks/UserContext.";
import { SignOutIcon } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";

export function LeftMenu() {

    const { logout } = useUser()

    const { pathname } = useLocation()

    return (
        <Container>
            <img src={logo} alt="logo-dev" />
            <OptionContainer>
                {menuOptions.map(option => (
                    <Option
                        $optionActive={pathname === option.path}
                        key={option.id}
                        to={option.path}
                    >
                        {option.icon}
                        <span>{option.label}</span>
                    </Option>
                ))}
            </OptionContainer>

            <Footer>
                <LogoutLink
                    to={"/"}
                    onClick={logout}
                >
                    <SignOutIcon />
                    <span> Sair </span>
                </LogoutLink>
            </Footer>
        </Container>
    )
}