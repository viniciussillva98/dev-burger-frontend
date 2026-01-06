
import { Table } from "../Table";
import { useCart } from "../../hooks/CartContext"
import { ContainerQuantity, EmpityCart, Image, StyleTotal, StyleTrash } from "./styles";
import { formatPrice } from "../../utils/formatPrice.js"
import { TrashIcon } from "@phosphor-icons/react";

export function CartItems() {

    const { cartProducts, increaseProduct, decraseProduct, deleteProducts, clearCart } = useCart()

    return (
        <Table.TableContainer>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>


            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <Image src={product.url} />
                            </Table.Td>

                            <Table.Td>
                                {product.name}
                            </Table.Td>

                            <Table.Td>
                                {formatPrice(product.price)}
                            </Table.Td>

                            <Table.Td>
                                <ContainerQuantity>
                                    <button onClick={() => decraseProduct(product.id)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => increaseProduct(product.id)}>+</button>
                                </ContainerQuantity>
                            </Table.Td>

                            <Table.Td>
                                <StyleTotal>
                                    {formatPrice(product.quantity * product.price)}
                                </StyleTotal>
                            </Table.Td>

                            <Table.Td>
                                <StyleTrash>
                                    <TrashIcon onClick={() => deleteProducts(product.id)} />
                                </StyleTrash>
                            </Table.Td>
                        </Table.Tr>
                    ))

                ) : (
                    <Table.Tr>
                        <Table.Td colSpan={6}>
                            <EmpityCart>Carrinho vazio, adicione produtos ao carrinho e faça seu pedido.</EmpityCart>
                        </Table.Td>
                    </Table.Tr>
                )
                }
            </Table.Body>

        </Table.TableContainer>
    );
}