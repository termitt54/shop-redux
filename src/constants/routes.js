import { Basket } from "../components/Basket";
import { Brands } from "../components/Content/components/Brands";
import { Computers } from "../components/Content/components/Computers";
import { Item } from "../components/Content/components/Item";
import { Telephones } from "../components/Content/components/Telephones";

export const routes = [
    {
        id: 1,
        path: "/",
        element: null
    },
    {
        id: 2,
        path: "/telephones",
        element: <Telephones/>
    },
    {
        id: 3,
        path: "telephones/:name",
        element: <Brands/>
    },
    {
        id: 4,
        path: "telephones/:name/:id",
        element: <Item/>
    },
    {
        id: 5,
        path: "/computers",
        element: <Computers/>
    },
    {
        id: 6,
        path: "computers/:name",
        element: <Brands/>
    },
    {
        id: 7,
        path: "computers/:name/:id",
        element: <Item/>
    },
    {
        id: 8,
        path: "/basket",
        element: <Basket/>
    },
]