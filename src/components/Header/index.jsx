
import { UserIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import logo from "../../assets/burger.png"
import {
    Container, Content, HeaderLink, Image, Navigation, Options, Profile,
    ProfileButton, CartLink,
} from "./styles";
import { ProfileContainer } from "../ProfileContainer";
import { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext.";
import { useCart } from "../../hooks/CartContext"


export function Header() {

    const { cartProducts } = useCart()

    const { pathname } = useResolvedPath()

    const { userInfo } = useUser()

    const [openSidebar, setOpenSidebar] = useState(false); // controla se a janela está aberta

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    function isAdmin(value) {
        if (userInfo.admin) {
            return value
        }
    }

    return (
        <Container >
            <Content>

                <Navigation>

                    <Image $Active={pathname === "/carrinho"}>
                        <img src={logo} />
                    </Image>

                    <div>
                        <HeaderLink to={"/home"} $Active={pathname === "/home"}>Home</HeaderLink>
                        <hr />
                        <HeaderLink to={"/cardapio"} $Active={pathname === "/cardapio"}>Cardápio</HeaderLink>
                        {isAdmin && (
                            <>
                                <hr />
                                <HeaderLink to={"/admin/pedidos"}>Admin</HeaderLink>
                            </>
                        )}

                    </div>


                </Navigation>


                <Options >

                    <Profile>
                        <UserIcon color="#ffff" size={25} />
                        <div>
                            <p>Olá, <span >{userInfo.name}</span></p>

                            <ProfileButton onClick={() => setOpenSidebar(true)}>Perfil</ProfileButton>

                        </div>

                        <ProfileContainer open={openSidebar} onClose={() => setOpenSidebar(false)} />

                    </Profile>


                    <CartLink
                        to="/carrinho"
                        state={{ from: pathname }}
                        $isProductInCart={cartProducts?.length}>

                        <ShoppingCartIcon color="#fff" size={23} />
                    </CartLink>

                </Options>
            </Content>
        </Container>
    )
}