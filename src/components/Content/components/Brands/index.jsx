import React from "react";
import './index.scss'
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export const Brands = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const back = () => {
    navigate(-1)
  }

  const toItem = (item) => {
    navigate(`/${state.brand.href}/${state.brand.name}/${item.id}`, {state:{item, brand: state.brand}})
    }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem href="/">Главная</BreadcrumbItem>
        <BreadcrumbItem onClick={back}>{state.brand.category}</BreadcrumbItem>
        <BreadcrumbItem active>{state.brand.name}</BreadcrumbItem>
      </Breadcrumb>

      <div className="brand__title">
        <h1 className="title">{state.brand.name}</h1>
        <span className="count">Всего товаров: {state.brand.items.length}</span>
      </div>

      <div className="items">
        {state.brand.items.map(item => {
            return (
                <div key={item.id} onClick={() => toItem(item)} className="item">
                    <img className="item__image" src={item.image} alt="" />
                    <div className="item__name">{item.name}</div>
                    <div className="item__price"> {item.price.toLocaleString('ru-RU')} руб.</div>
                </div>
            )
        })}
      </div>
    </>
  );
};
