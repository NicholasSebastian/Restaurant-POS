import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useOrders } from "../pages/Menu";
import type { FC, PropsWithChildren } from "react";

const styles = "text-xs text-gray-700 px-3 py-2 rounded-lg transition-colors";

const Layout: FC<PropsWithChildren> = props => {
  const { setOrders } = useOrders();
  return (
    <div className="bg-gray-100 h-screen grid grid-cols-[240px_1fr]">
      <nav className="bg-white flex flex-col p-4">
        <div className="border border-gray-200 rounded-lg p-2">
          <h1 className="text-sm">Masakan Kita</h1>
          <div className="text-xs text-gray-500">Bikin program ga dibayar.</div>
        </div>
        <button
          onClick={() => setOrders(orders => [...orders, []])}
          className="flex justify-center items-center bg-blue-600 text-white my-4 py-2 rounded-lg">
          <AiOutlinePlus />
          <span className="text-xs ml-1">Order Baru</span>
        </button>
        <NavLink 
          to="/" 
          className={props => props.isActive ? `${styles} bg-gray-200` : styles}>
          Menu
        </NavLink>
        <NavLink 
          to="/dashboard" 
          className={props => props.isActive ? `${styles} bg-gray-200` : styles}>
          Dashboard
        </NavLink>
        <NavLink 
          to="/report" 
          className={props => props.isActive ? `${styles} bg-gray-200` : styles}>
          Accounting
        </NavLink>
      </nav>
      {props.children}
    </div>
  );
}

export default Layout;
