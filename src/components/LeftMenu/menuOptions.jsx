import { HouseIcon, ListPlusIcon, NotePencilIcon, PackageIcon, } from "@phosphor-icons/react";



export const menuOptions = [

    {
        id: 1,
        label: "Home",
        path: "/home",
        icon: < HouseIcon />
    },

    {
        id: 2,
        label: "Pedidos",
        path: "/admin/pedidos",
        icon: < NotePencilIcon />
    },

    {
        id: 3,
        label: "Produtos",
        path: "/admin/produtos",
        icon: <PackageIcon />
    },

    {
        id: 4,
        label: "Novo Produto",
        path: "/admin/novo-produto",
        icon: <ListPlusIcon />
    },

]