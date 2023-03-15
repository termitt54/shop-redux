import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.scss";
import { routes } from "../../constants/routes";

export const Content = () => {
  return (
    <section className="content">
        <Routes>
            {routes.map(route => {
                return (
                    <Route key={route.id} path={route.path} element={route.element}/>
                )
            })}
        </Routes>
    </section>
  );
};
