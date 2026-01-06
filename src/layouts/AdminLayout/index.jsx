
import { Outlet, Navigate } from "react-router-dom"
import { LeftMenu } from "../../components"
import { Container } from "./styled"

export function AdminLayout() {

    const { admin: isAdmin } = JSON.parse(
        localStorage.getItem("devburger:userData")
    )

    return isAdmin ?
        (
            <Container>
                <LeftMenu />
                <main>
                    <section>
                        <Outlet />
                    </section>
                </main>
            </Container>
        ) : <Navigate to="/" />
}
