
import { CategoriesCarousel } from "../../components/CategoryCarousel";
import { OfferCarousel } from "../../components/OfferCarousel";
import { Banner, Container, Main, } from "./styles";

export function Home() {

    return (
        <Main>
            <Banner>
                <h1>Bem-vindo!</h1>

            </Banner>
            <Container>
                <CategoriesCarousel />
                <OfferCarousel />
            </Container>
        </Main>
    )

}