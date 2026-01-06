
import { useLocation, useNavigate } from "react-router-dom";

export function useBackNavigation() {
    const navigate = useNavigate();
    const { pathname, state } = useLocation();

    const goBack = () => {
        // carrinho: volta para a origem (home ou cardápio)
        if (pathname === "/carrinho") {
            navigate(state?.from ?? "/cardapio");
            return;
        }

        // cardápio: sempre volta para home
        if (pathname === "/cardapio") {
            navigate("/home");
            return;
        }

        // fallback seguro
        navigate("/home");
    };

    return { goBack };
}
