import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useOrders from "./useOrders";
import Form from "./Form";
import CategoryButtons, { CATEGORIES } from "./CategoryButtons";
import type { FC } from "react";

// UI: https://dribbble.com/shots/21741454-Resto-Point-Of-Sales-system-dashboard

const Menu: FC = () => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const { orders, setOrders } = useOrders();

  useEffect(() => {
    // TODO: Fetch items here.
    // TODO: Get all the unique groups here.
    // NOTE: Maybe use SWR instead of useEffect.
  }, []);

  return (
    <div className="grid grid-cols-[2fr_1fr]">
      <div className="px-6 py-4">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-extralight">Antrian Order</h1>
          <div className="text-xs">
            Jumlah Pesanan
            <span className="ml-1.5 px-1.5 py-0.5 bg-black text-white rounded-full">
              {orders.length}
            </span>
          </div>
        </section>
        <section className="">
          {orders.map((order, i) => (
            <div 
              key={i}
              className="">
              {/* TODO */}
            </div>
          ))}
        </section>
        <section className="mt-4">
          <div className="mb-2 flex justify-between items-center">
            <h1 className="text-2xl font-extralight">Menu</h1>
            <div className="border border-gray-300 p-2 rounded-lg flex items-center">
              <input 
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Cari"
                className="bg-transparent mr-1 text-xs focus:outline-none" />
              <AiOutlineSearch className="text-gray-500" />
            </div>
          </div>
          <CategoryButtons 
            active={category}
            onChange={setCategory} />
        </section>
        {/* TODO */}
        {modal && (
          <section className="">
            <Form 
              group={category} 
              onSubmit={(name, price) => {
                // TODO
                console.log(name, price, category);
              }} />
          </section>
        )}
      </div>
      <section className="bg-white">
        {/* TODO */}
      </section>
    </div>
  );
}

export default Menu;
