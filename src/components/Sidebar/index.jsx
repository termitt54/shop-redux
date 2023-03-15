import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { categories } from "../../constants/categories";

export const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <section className={`sidebar ${sidebar && "sidebar_active"}`}>
      <button
        onClick={() => setSidebar(false)}
        className={sidebar ? "btn btn_close-sidebar" : "none"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>

      {categories.map(link => {
        return (
            <NavLink onClick={() => setSidebar(false)} to={link.href}>{link.title}</NavLink>
        )
      })}
    </section>
  );
};
