import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Computers = () => {
    const navigate = useNavigate()
    const brands = useSelector(state => state.data.computers)

    const toBrand = (brand) => {
        navigate(`/${brand.href}/${brand.name}`, {state:{brand}})
    }
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem href="/">Главная</BreadcrumbItem>
                <BreadcrumbItem active>Компьютеры</BreadcrumbItem>
            </Breadcrumb>

            <div className="catalog">
                <div className="catalog__title">
                    <h1 className="title">Компьютеры</h1>
                    {/* <span className="count">Товаров: 5</span> */}
                </div>

                <div className="catalog__brands">
                    {brands.map(item => {
                        return (
                            <div onClick={() => toBrand(item)} key={item.id} className="brand">
                                <img className="brand__logo" src={item.logo} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}