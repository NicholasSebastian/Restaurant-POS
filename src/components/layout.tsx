import { NavLink } from "react-router-dom";
import type { FC, PropsWithChildren } from "react";

// TODO: Use react-icons instead.

const Layout: FC<PropsWithChildren> = props => {
  return (
    <div className="">
      <nav className="">
        <NavLink 
          to="/dashboard" 
          className={props => props.isActive ? "" : ""}>
          Dashboard
        </NavLink>
        <NavLink 
          to="/" 
          className={props => props.isActive ? "" : ""}>
          Halaman Utama
        </NavLink>
        <NavLink 
          to="/history" 
          className={props => props.isActive ? "" : ""}>
          Riwayat
        </NavLink>
        <NavLink 
          to="/menu" 
          className={props => props.isActive ? "" : ""}>
          Menu
        </NavLink>
        <NavLink 
          to="/report" 
          className={props => props.isActive ? "" : ""}>
          Laporan
        </NavLink>
      </nav>
      {props.children}
    </div>
  );
}

export default Layout;
