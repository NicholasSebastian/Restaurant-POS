import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import getDatabase from "../../database";
import useOrders from "./useOrders";
import Form from "./Form";
import CategoryButtons, { CATEGORIES } from "./CategoryButtons";
import type { FC } from "react";

// UI: https://dribbble.com/shots/21741454-Resto-Point-Of-Sales-system-dashboard

function handleAddToMenu(name: string, price: number, category: string) {
  const database = getDatabase();
  const menu = database.sheetsByTitle["Menu"];
  menu.addRow([name, price, category]);
}

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
          {/* TODO */}
          <div className="grid grid-cols-4 mt-3">
            <button
              className="border border-gray-300 border-dashed rounded-md text-sm font-extralight h-24"
              onClick={() => setModal(true)}>
              Tambah ke Menu
            </button>
          </div>
        </section>
        {modal && (
          <section 
            className="fixed inset-0 bg-black/50 flex justify-center items-center"
            onClick={() => setModal(false)}>
            <Form 
              group={category} 
              onSubmit={(name, price) => handleAddToMenu(name, price, category)} />
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
