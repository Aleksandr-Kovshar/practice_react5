import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Домашняя</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Коллекция</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
