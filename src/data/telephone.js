import { IPhone } from "./telephones/IPhone"
import { Samsung } from "./telephones/Samsung"
import { Xiaomi } from "./telephones/Xiaomi"

export const telephone = [
    {
        id: 1,
        name: "Apple",
        logo: "https://cdn.salla.sa/jKgRa/phamtVTpfGdjoZHVNzjJlLdFE8eXXD4COP8uIxAu.png",
        category: "Телефоны",
        href: "telephones",
        items: IPhone
    },
    {
        id: 2,
        name: "Samsung",
        logo: "https://media.technik-profis.de/wysiwyg/markenshop/Samsung_TopMarken_2000x1125px.png",
        category: "Телефоны",
        href: "telephones",
        items: Samsung
    },
    {
        id: 3,
        name: "Xiaomi",
        logo: "https://sev-sianie.ru/images/feature_variant/1210/xiaomi.png",
        category: "Телефоны",
        href: "telephones",
        items: Xiaomi
    },
    {
        id: 4,
        name: "Nokia",
        logo: "https://channel-e.id/wp-content/uploads/2022/08/Nokia-Logo-1920x1080.png",
        category: "Телефоны",
        href: "telephones",
        items: []
    },
    {
        id: 5,
        name: "Sony",
        logo: "https://www.gizmochina.com/wp-content/uploads/2020/10/Sony-Logo-Featured-1920x1140.jpg",
        category: "Телефоны",
        href: "telephones",
        items: []
    },
    {
        id: 6,
        name: "Huawei",
        logo: "http://smart-test.pl/images/aktualnosci/szklo/Huawei-Logo.jpg",
        category: "Телефоны",
        href: "telephones",
        items: []
    },
]